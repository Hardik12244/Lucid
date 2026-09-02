import { GoogleGenAI } from "@google/genai";
import { z } from "zod";

import env from "../config/env.js";
import type { AnalysisInput } from "./product-analysis.service.js";

const ai = new GoogleGenAI({
    apiKey: env.GEMINI_API_KEY,
});
const productAnalysisSchema = z.object({
    summary: z.string(),

    verdict: z.string(),

    pros: z.array(z.string()),

    cons: z.array(z.string()),

    sentiment: z.object({
        positive: z.number(),
        neutral: z.number(),
        negative: z.number(),
    }),
});

export async function analyzeProduct(
    input: AnalysisInput,
) {
    const prompt = `
You are Lucid, an AI product research assistant.

Analyze the product using ONLY the provided review data.

Product:
${input.productName}

Sources:
${input.sources.join(", ")}

Statistics:
Total reviews: ${input.stats.totalReviews}
Rated reviews: ${input.stats.ratedReviews}
Average rating: ${input.stats.averageRating ?? "N/A"}

Reviews:
${input.reviews
            .map(
                (review, index) => `
Review ${index + 1}
Source: ${review.source}
Rating: ${review.rating ?? "N/A"}
Title: ${review.title ?? "N/A"}
Content: ${review.content}
`,
            )
            .join("\n")}

Provide:
1. A concise summary of what users think about the product.
2. A balanced buying verdict.
3. The most important pros.
4. The most important cons.
5. An estimated sentiment breakdown.

Do not invent information that is not supported by the reviews.
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",

        contents: prompt,

        config: {
            responseMimeType: "application/json",

            responseSchema: {
                type: "object",

                properties: {
                    summary: {
                        type: "string",
                    },

                    verdict: {
                        type: "string",
                    },

                    pros: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },

                    cons: {
                        type: "array",
                        items: {
                            type: "string",
                        },
                    },

                    sentiment: {
                        type: "object",

                        properties: {
                            positive: {
                                type: "number",
                            },

                            neutral: {
                                type: "number",
                            },

                            negative: {
                                type: "number",
                            },
                        },

                        required: [
                            "positive",
                            "neutral",
                            "negative",
                        ],
                    },
                },

                required: [
                    "summary",
                    "verdict",
                    "pros",
                    "cons",
                    "sentiment",
                ],
            },
        },
    });

    const text = response.text;

    if (!text) {
        throw new Error("Gemini returned an empty response");
    }

    const result = productAnalysisSchema.parse(
        JSON.parse(text),
    );


    return result;
}