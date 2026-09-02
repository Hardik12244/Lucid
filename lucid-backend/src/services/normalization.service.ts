import type {
    NormalizedProductData,
    NormalizedReview,
    ProductSourceResult,
} from "../providers/types.js";

function normalizeReview(
    review: ProductSourceResult["reviews"][number],
): NormalizedReview {
    return {
        source: review.source,
        author: review.author ?? null,
        rating: review.rating ?? null,
        title: review.title ?? null,
        content: review.content.trim(),
        url: review.url ?? null,
        publishedAt: review.publishedAt ?? null,
    };
}

function deduplicateReviews(
    reviews: NormalizedReview[],
): NormalizedReview[] {
    const seen = new Set<string>();

    return reviews.filter((review) => {
        const key = `${review.source}:${review.url ?? review.content}`;

        if (seen.has(key)) {
            return false;
        }

        seen.add(key);
        return true;
    });
}

export function normalizeProductResults(
    results: ProductSourceResult[],
): NormalizedProductData {

    const reviews = deduplicateReviews(
        results.flatMap((result) =>
            result.reviews.map(normalizeReview),
        ),
    );

    return {
        productName: results[0]?.productName ?? "",
        sources: [...new Set(results.map((result) => result.source))],
        reviews,
    };
}