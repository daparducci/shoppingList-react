export function addToList(newItem) {
  return fetch("/api/new", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newItem)
  }).then(res => res.json());
}
