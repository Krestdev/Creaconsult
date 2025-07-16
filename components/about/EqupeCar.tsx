"use client"

import * as React from "react"
import Member from "./Member"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"

interface Personel {
    name: string;
    post: string;
    img: string;
    links: {
        linkedin: string;
        facebook: string;
        email: string;
    };
}
interface Props {
    personel: Personel[],
    direction: "gauche" | "droite"
}

export function EquipeCar({ personel, direction }: Props) {
    const [emblaRef, setEmblaRef] = React.useState<any>(null)



    React.useEffect(() => {
        if (!emblaRef) return

        const interval = setInterval(() => {
            if (emblaRef.canScrollNext()) {
                direction === "gauche" ?
                 emblaRef.scrollNext() :
                 emblaRef.scrollPrev()
            } else {
                direction === "gauche" ?
                emblaRef.scrollTo(personel.length - 1) :
                emblaRef.scrollTo(0)
            }
        }, 5000)

        return () => clearInterval(interval)
    }, [emblaRef])

    return (
        <div className="w-full overflow-hidden">
            <Carousel
                opts={{
                    align: "center",
                    loop: true,
                    startIndex: 0, 
                    inViewThreshold: 0.5, 
                }}
                setApi={setEmblaRef}
                className="w-full relative"
            >
                <CarouselContent className="flex">
                    {personel.map((membre, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-[80%] md:basis-[40%] lg:basis-[25%] flex-shrink-0"
                        >
                            <Member personel={membre} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}