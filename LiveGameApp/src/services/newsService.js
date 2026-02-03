const BASE_URL = "/api";

export async function fetchNews() {
  const res = await fetch(`${BASE_URL}/api1/latestnews`);
  if (!res.ok) throw new Error(res.status);
  return res.json();
}