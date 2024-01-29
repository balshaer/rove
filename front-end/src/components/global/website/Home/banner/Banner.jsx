import { Link } from "react-router-dom";
import ButtonOutline from "@/components/custom/buttons/ButtonOutline";
import Button from "@/components/custom/buttons/Button";

export default function Banner() {
  return (
    <section className="bg-[#fafafa]">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-[#2b2e4a]">
            Understand User Flow.
            <strong className="font-extrabold text-[#05c46b] sm:block">
              Increase Conversion.
            </strong>
          </h1>
          <p className="mt-4 sm:text-xl/relaxed text-[#666a7b]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/Register">
              <Button text="Get Started" />
            </Link>

            <Link to="/About">
              <ButtonOutline text="Learn More" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
