const API_URL = process.env.NODE_ENV === "production" ? "/data/local.json" : "/api";

// Fetch the menu
export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) throw new Error("Failed getting menu");

  const { data } = await res.json();  // or adjust depending on your local JSON structure
  return data;
}

// Fetch order by id
export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw new Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

// Create a new order
export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Failed creating order");
    const { data } = await res.json();
    return data;
  } catch (err) {
    throw new Error("Failed creating your order");
  }
}

// Update order by id
export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Failed updating order");
  } catch (err) {
    throw new Error("Failed updating your order");
  }
}
