import type {
  ProductProvider,
  ProductSourceResult,
} from "./types.js";

export class RedditProvider implements ProductProvider {
  async searchProduct(query: string): Promise<ProductSourceResult> {
    const url = `https://www.reddit.com/search.json?q=${encodeURIComponent(
      query,
    )}&limit=10&sort=relevance`;

    const response = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/131.0.0.0 Safari/537.36",
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const body = await response.text();

      throw new Error(
        `Reddit request failed: ${response.status} ${body.slice(0, 200)}`,
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
        publishedAt: post.created_utc
          ? new Date(post.created_utc * 1000).toISOString()
          : undefined,
      };
    });

    return {
      source: "reddit",
      productName: query,
      reviews,
    };
  }
}