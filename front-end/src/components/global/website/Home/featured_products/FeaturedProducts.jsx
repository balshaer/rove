import Button from "@/components/custom/buttons/Button";

const productData = [
  {
    title: "Digital campaigns",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  },

  {
    title: "Digital campaigns",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  },

  {
    title: "Digital campaigns",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  },

  {
    title: "Digital campaigns",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  },

  {
    title: "Digital campaigns",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  },

  {
    title: "Digital campaigns",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-[#eeeeee] py-20">
      <div className="max-w-screen-xl m-auto">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-2xl font-bold sm:text-4xl text-[#2b2e4a]">
            Kickstart your marketing
          </h2>
          <h2 className="text-3xl font-bold sm:text-4xl text-[#040320]">
            Kickstart your
          </h2>
          <p className="mt-4 text-[#666a7b]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {productData.map((product, index) => (
            <a
              key={index}
              className="block rounded-xl border border-gray-800 p-8  transition  hover:shadow-[#040320]/10"
              href="#"
            >
              <h2 className="mt-4 text-xl font-bold text-[#2b2e4a]">
                {product.title}
              </h2>
              <p className="mt-1 text-sm text-[#666a7b]">
                {product.description}
              </p>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button width="300px" text=" Get Started Today" />
        </div>
      </div>
    </section>
  );
}
