export default function checkApiResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}
