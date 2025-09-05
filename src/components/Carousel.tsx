import Image from "next/image";
import { carousels } from "@/data/carousel";
import {
  Carousel as CarouselParent,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Carousel() {
  return (
    <section className="z-10 py-12 max-w-6xl mx-auto">
      <CarouselParent className="space-y-12">
        <div className="flex items-center justify-between">
          <p className="text-white">Testimoni</p>
          <div className="flex gap-3">
            <CarouselPrevious className="static translate-y-0 sm:size-10 xl:size-12" />
            <CarouselNext className="static translate-y-0 sm:size-10 xl:size-12" />
          </div>
        </div>
        <CarouselContent className="-ml-5">
          {carousels.map((carousel, index) => (
            <CarouselItem key={index} className="min-w-96 pl-5 shrink">
              <div className="bg-[#d7ebfb] p-8 rounded-2xl w-full space-y-5">
                <p className="text-black text-xl">{carousel.review}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </CarouselParent>
    </section>
  );
}
