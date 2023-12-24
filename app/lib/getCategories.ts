
export default async function getCategories() {
  const res = await fetch("http://localhost:8000/api/categories");
  if(!res.ok) return undefined;
  return res.json();
  
}
