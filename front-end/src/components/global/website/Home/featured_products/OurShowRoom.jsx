import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { HiLocationMarker } from "react-icons/hi";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Button from "../../../../custom/buttons/Button";

export default function OurShowRoom() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="bg-[#141414] h-[100vh] flex justify-center items-center  ">
      <div className="max-w-screen-xl m-auto flex w-full items-center justify-center h-full ">
        <div className="w-1/2 flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-extrabold sm:text-5xl text-[#fff]">
              OUR SHOWROOM
            </h1>

            <p className="mt-4 sm:text-xl/relaxed text-[#fff]">
              We are located in Gaza , Rafah come visit our showroom.
            </p>
          </div>
          <div>
            <Button
              text="view on google maps"
              className="bg-white text-black  max-w-52"
              icon={<HiLocationMarker />}
            />
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <Carousel
            plugins={[plugin.current]}
            className="w-full  "
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              <CarouselItem>
                <div className="h-full w-full">
                  <Card>
                    <CardContent className="h-full w-full p-0 ">
                      <img
                        className="h-full w-full object-contain"
                        src="https://uploads-ssl.webflow.com/6230851dfbef4b4d05285e07/6230a0c8a5c2a53dfb4b0432_WhatsApp%20Image%202022-03-15%20at%2011.17.49%20(3).jpeg"
                        alt="img"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="h-full w-full">
                  <Card>
                    <CardContent className="h-full w-full p-0">
                      <img
                        className="h-full w-full object-contain"
                        src="https://uploads-ssl.webflow.com/6230851dfbef4b4d05285e07/62310eb6be32b80128155b74_WhatsApp%20Image%202022-03-15%20at%2011.17.48%20(1).jpeg"
                        alt="img"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="h-full w-full">
                  <Card>
                    <CardContent className="h-full w-full p-0">
                      <img
                        className="h-full w-full object-contain"
                        src="https://uploads-ssl.webflow.com/6230851dfbef4b4d05285e07/62310ec69fe8544e850bfb8e_WhatsApp%20Image%202022-03-15%20at%2011.17.49%20(1).jpeg"
                        alt="img"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
