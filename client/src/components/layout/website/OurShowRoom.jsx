/* eslint-disable react/jsx-no-target-blank */
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
import Button from "@/components/custom/buttons/Button";

export default function OurShowRoom() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="max-lg:px-4  max-lg:py-10 bg-[#141414] h-[100vh] px-10  flex justify-center items-center max-lg:h-max max-lg:w-full max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:text-center  ">
      <div className="container m-auto flex w-full items-center justify-center h-full max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:text-center max-lg:gap-8 max-lg:py-20 ">
        <div className="w-1/2 max-lg:w-full flex flex-col gap-4 ">
          <div>
            <h1 className="text-3xl font-extrabold sm:text-5xl text-[#fff]">
              OUR SHOWROOM
            </h1>

            <p className="mt-4 sm:text-xl/relaxed text-[#fff]">
              We are located in Gaza , Rafah come visit our showroom.
            </p>
          </div>
          <div>
            <a href="https://maps.app.goo.gl/PmykGarzB2FFJiM89" target="_blank">
              <Button
                text="view on google maps"
                className="bg-white text-black hover:bg-black hover:text-white hoverd hover:border-1 hover:border-white  max-w-52"
                icon={<HiLocationMarker />}
              />
            </a>
          </div>
        </div>

        <div className="w-1/2 max-lg:w-full flex items-center justify-center max-lg:px-10 px-20">
          <Carousel
            plugins={[plugin.current]}
            className="w-full "
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
