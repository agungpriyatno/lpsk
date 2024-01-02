"use client"
import { TCarouselItem } from "@/types/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./button";
import { Skeleton } from "./skeleton";
import { AppContainer } from "./container";
import { TextToSpeech } from "../features/text-to-speech";

export const CarouselLoading = () => {
    return (
        <Skeleton className="w-full h-screen relative bg-slate-800  text-slate-100  group overflow-hidden">
        </Skeleton>
    )
}

export const Carousel = ({ images }: { images: TCarouselItem[] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('left');

    const handleNext = () => {
        setDirection("right");
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setDirection("left");
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };


    return (
        <div className="w-full h-screen relative bg-slate-800  text-slate-100  group overflow-hidden">
            <AnimatePresence>
                <div className="w-full h-full relative group-hover:scale-125 transition-all duration-500">
                    <motion.img
                        className="w-full h-full opacity-40 object-cover"
                        key={currentIndex}
                        src={images[currentIndex].image}
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 0.4, transition: { duration: 0.3 } }}
                        exit={{ x: -300, opacity: 0, transition: { duration: 0.3 } }}
                    />
                </div>
                <motion.div
                    className="absolute left-0 top-0 h-full w-full flex flex-col justify-end"
                    key={currentIndex}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
                    exit={{ x: -300, opacity: 0, transition: { duration: 0.3 } }}>
                    <AppContainer>
                        <div className="flex flex-col py-20 justify-end h-full">
                            <TextToSpeech><h1 className='text-4xl font-bold'>{images[currentIndex].title}</h1></TextToSpeech>
                            <TextToSpeech><p className='text-base'>{images[currentIndex].descriptions}</p></TextToSpeech>
                        </div>
                    </AppContainer>
                </motion.div>
            </AnimatePresence>
            <Button size={'icon'} variant={'ghost'} className="absolute left-5 top-1/2 translate-y-1/2" onClick={handlePrevious}>
                <ChevronLeft />
            </Button>
            <Button size={'icon'} variant={'ghost'} className="absolute right-5 top-1/2 translate-y-1/2" onClick={handleNext}>
                <ChevronRight />
            </Button>
            <div className="absolute left-0 bottom-14 flex">
                <AppContainer className="flex gap-2">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`h-3 w-3 rounded-full ${currentIndex === index ? "bg-orange-500" : "bg-slate-100"} transition-colors duration-300`}
                            onClick={() => handleDotClick(index)}
                        ></div>
                    ))}
                </AppContainer>
            </div>
        </div>
    );
};
