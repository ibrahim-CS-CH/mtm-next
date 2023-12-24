import { Metadata } from "next";
import getCategories from "./lib/getCategories";
import CategoryCard from "./Components/CategoryCard";
export const metadata: Metadata = {
  title: "mtm",
  description: "electrnics shop",
};
export default async function Home() {
  const categoryData: Promise<Category[]> = getCategories();
  const catgeries = await categoryData;
  const content = (
    <section className="flex flex-wrap justify-center gap-24 my-16 ">
      {catgeries.map((category) => (
        <div
          key={category.id}
          className="hover:scale-110 duration-500 ease-in-out">
          <CategoryCard
            name={category.name}
            image={category.image}
            id={category.id}
          />
        </div>
      ))}
    </section>
  );
  // const s = getCategories();
  // console.log(s.then(data=> console.log(data)

  return content;
}
