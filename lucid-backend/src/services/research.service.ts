import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import env from "../config/env.js";

const ai = new GoogleGenAI({
  apiKey: env.GEMINI_API_KEY,
});

const researchSchema = z.object({
  productName: z.string(),
  summary: z.string(),
  evidence: z.array(
    z.object({
      source: z.string(),
      title: z.string(),
      content: z.string(),
      url: z.string(),
    }),
  ),
});

export async function researchProduct(query: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: `
Research the product below using Google Search.

Product:
${query}

Find useful, current information about:
- Product identity and specifications
- User experiences
- Common positive opinions
- Common complaints
- Reliability
- Comfort or usability
- Battery or performance where relevant
- Important buying considerations

Use multiple independent sources.

Do not invent information.
Only include information supported by the web research.

Return structured JSON.
`,
      config: {
        tools: [
          {
            googleSearch: {},
          },
        ],
        responseMimeType: "application/json",
        responseSchema: {
          type: "object",
          properties: {
            productName: {
              type: "string",
            },
            summary: {
              type: "string",
            },
            evidence: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  source: {
                    type: "string",
                  },
                  title: {
                    type: "string",
                  },
                  content: {
                    type: "string",
                  },
                  url: {
                    type: "string",
                  },
                },
                required: [
                  "source",
                  "title",
                  "content",
                  "url",
                ],
              },
            },
          },
          required: [
            "productName",
            "summary",
            "evidence",
          ],
        },
      },
    });

    console.log("Gemini response:", response);

    if (!response.text) {
      throw new Error(
        "Gemini research returned an empty response",
      );
    }

    return researchSchema.parse(
      JSON.parse(response.text),
    );
  } catch (error) {
    console.error(
      "Gemini research error:",
      error,
    );
    throw error;
  }
}
