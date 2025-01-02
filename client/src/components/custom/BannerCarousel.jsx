import AnimatedComponent from "@/components/custom/animation/AnimatedComponent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import BannerImageSkeleton from "../skeletons/BannerImageSkeleton";

export default function BannerCarousel() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="w-1/2 h-full  max-md:w-full  flex items-center justify-center  max-md:px-4 px-20">
      <AnimatedComponent>
        <Carousel>
          <CarouselContent>
            {loading && <BannerImageSkeleton />}

            {!loading && (
              <CarouselItem>
                <img
                  className="h-full min-h-50 w-full object-contain "
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="BannerImage"
                />
              </CarouselItem>
            )}
            <CarouselItem>
              {!loading && (
                <img
                  className="h-full w-full object-contain "
                  src="https://images.unsplash.com/photo-1523381140794-a1eef18a37c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjQ2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                  alt="BannerImage"
                />
              )}
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </AnimatedComponent>
    </div>
  );
}
