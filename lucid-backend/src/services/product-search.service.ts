import { providers } from "../providers/index.js";
import { normalizeProductResults } from "./normalization.service.js";
import { buildAnalysisInput } from "./product-analysis.service.js";
import { analyzeProduct } from "./gemini.service.js";

export async function searchProduct(query: string) {
  const results = await Promise.allSettled(
    providers.map((provider) =>
      provider.searchProduct(query),
    ),
  );

  const successfulResults = results
    .filter(
      (
        result,
      ): result is PromiseFulfilledResult<
        Awaited<ReturnType<(typeof providers)[number]["searchProduct"]>>
      > => result.status === "fulfilled",
    )
    .map((result) => result.value);

  const normalizedData =
    normalizeProductResults(successfulResults);

  const analysisInput =
    buildAnalysisInput(normalizedData);

  const analysis =
    await analyzeProduct(analysisInput);

  return {
    product: normalizedData,
    analysis,
  }
}