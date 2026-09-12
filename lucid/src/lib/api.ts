const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5001";

export async function searchProduct(query: string, page = 1) {
  const response = await fetch(
    `${API_URL}/api/search?page=${page}`,
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

export async function getProducts() {
  const response = await fetch(`${API_URL}/api/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export async function getProductById(id: string) {
  const response = await fetch(`${API_URL}/api/products/${id}`);
  if (!response.ok) {
    if (response.status === 404) return null;
    throw new Error("Failed to fetch product");
  }
  return response.json();
}

export async function getProductReviews(productId: string) {
  const response = await fetch(`${API_URL}/api/reviews/product/${productId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch reviews");
  }
  return response.json();
}

export async function getSavedProducts() {
  const response = await fetch(`${API_URL}/api/saved-products`, {
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) throw new Error("Failed to fetch saved products");
  return response.json();
}

export async function saveProduct(productId: string) {
  const response = await fetch(`${API_URL}/api/saved-products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId }),
  });
  if (!response.ok) throw new Error("Failed to save product");
  return response.json();
}

export async function unsaveProduct(productId: string) {
  const response = await fetch(`${API_URL}/api/saved-products/${productId}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to unsave product");
  return response.json();
}
export async function getSearchHistory() {
  const response = await fetch(`${API_URL}/api/search-history`, {
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) throw new Error("Failed to fetch search history");
  return response.json();
}

export async function deleteSearchHistory(id: string) {
  const response = await fetch(`${API_URL}/api/search-history/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete search history");
  return response.json();
}
