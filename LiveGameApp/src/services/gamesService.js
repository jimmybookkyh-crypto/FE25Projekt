const BASE_URL = "/api";

export async function fetchGameList() {
  const res = await fetch(`${BASE_URL}/api1/games`);
  if (!res.ok) throw new Error(res.status);
  return res.json();
}