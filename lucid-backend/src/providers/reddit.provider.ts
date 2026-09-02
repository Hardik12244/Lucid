import type {
  ProductProvider,
  ProductSourceResult,
} from "./types.js";

export class RedditProvider implements ProductProvider {
  async searchProduct(query: string): Promise<ProductSourceResult> {
    const url = `https://www.reddit.com/search.json?q=${encodeURIComponent(
      query,
    )}&limit=10`;

    const response = await fetch(url, {
      headers: {
        "User-Agent": "Lucid/1.0",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Reddit request failed: ${response.status}`,
      );
    }

    const data = await response.json();

    const reviews = data.data.children.map((item: any) => {
      const post = item.data;

      return {
        source: "reddit",
        author: post.author ?? undefined,
        title: post.title,
        content: post.selftext ?? "",
        url: `https://www.reddit.com${post.permalink}`,
        publishedAt: new Date(
          post.created_utc * 1000,
        ).toISOString(),
      };
    });

    return {
      source: "reddit",
      productName: query,
      reviews,
    };
  }
}