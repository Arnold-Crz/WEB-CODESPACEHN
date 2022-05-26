export async function getItems() {
  const url = 'http://localhost:3000/api/items';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getUltimeItems() {
  const items = await getItems();
  return items.slice(0, 3);
}
