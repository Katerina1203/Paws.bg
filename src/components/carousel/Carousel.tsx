"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"

type Props = {}

const filteredItems = [
    {
        id: 1,
        img: "https://www.aspca.org/sites/default/files/how-you-can-help_adoptions-tips_main-image-dog.jpg",
        description: "Adopt a furry friend today!",
    },
    {
        id: 2,
        img: "https://rspca.sfo2.cdn.digitaloceanspaces.com/public/Uploads/adopt-a-pet-adopting-a-dog-selecting-your-dog__FocusFillWzE0NzIsNjI0LCJ5IiwxMDFd.jpg",
        description: "Find your perfect pet!",
    },
    {
        id: 3,
        img: "https://www.unioncountysheriffsoffice.com/home/showpublishedimage/1952/637728311968300000",
        description: "Beautiful animals looking for a home.",
    },
    {
        id: 4,
        img: "https://cdn.britannica.com/34/235834-050-C5843610/two-different-breeds-of-cats-side-by-side-outdoors-in-the-garden.jpg",
        description: "Cats of all kinds available.",
    },
];

export default function CarouselMain({ }: Props) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className="mx-auto max-w-xl">
            <Carousel setApi={setApi} className="w-full max-w-xl">
                <CarouselContent>
                    {filteredItems.map((item, index) => (
                        <CarouselItem key={index}>
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center">
                                    <Image
                                        src={item.img}
                                        alt={item.description}
                                        width={500}
                                        height={500}
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} of {count}
            </div>
        </div>
    )
}