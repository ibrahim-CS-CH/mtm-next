import Image from "next/image";

function CategoryCard(props: Category) {
  const { id, name, image } = props;
  return (
    <section
      className="drop-shadow-2xl flex-col scale-110 shadow-xl capitalize cursor-pointer "
      key={id}>
      <h2 className="font-bold">{name}</h2>
      <Image
        placeholder="blur"
        blurDataURL={image}
        src={image}
        alt={name}
        width={300}
        height={300}
        priority={true}
        className="w-80 h-auto contrast-125 bg-transparent"
      />
      <h4>show more</h4>
    </section>
  );
}

export default CategoryCard;
