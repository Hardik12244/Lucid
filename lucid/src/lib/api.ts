const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5001";

export async function searchProduct(query: string) {
  const response = await fetch(
    `${API_URL}/products/search`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        query,
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to search product");
  }

  return response.json();
}