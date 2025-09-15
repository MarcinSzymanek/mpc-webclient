import type { ProductData } from "../models/Product";

const serverUrl = import.meta.env.VITE_API_URL;

export default async function fetchData() : Promise<ProductData[]>
{
  console.log("Fetch data");
  console.log(serverUrl);

  const results = await fetch(serverUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      },
  }).then((response) => response.json());
  console.log(results);
  return results;
}