"use client"

import { EXTERNAL_APLICATION, INTERNAL_APLICATION } from "@/data/aplication"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Suspense, useState } from "react"
import { Button } from "../ui/button"
import { AppContainer } from "../ui/container"
import { Input } from "../ui/input"
import { LinkCard, LinkCardLoading } from "../ui/link-card"
import { ScheduleCard, ScheduleCardLoading } from "../ui/schedule-card"
import { Skeleton } from "../ui/skeleton"
import { HeaderSection } from "../ui/typography"
import { TextToSpeech } from "./text-to-speech"

const slideVariants = {
    hiddenRight: {
        x: "100%",
        opacity: 0,
    },
    hiddenLeft: {
        x: "-100%",
        opacity: 0,
    },
    visible: {
        x: "0",
        opacity: 0.4,
        transition: {
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
            duration: 0.5,
        },
    },
};

const titleSlideVariant = {
    hiddenRight: {
        x: "100%",
        opacity: 0,
    },
    hiddenLeft: {
        x: "-100%",
        opacity: 0,
    },
    visible: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: {
            duration: 0.5,
        },
    },
};

export const AplicationExternalSection = () => {
    const data = EXTERNAL_APLICATION
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('left');

    const handleNext = () => {
        setDirection("right");
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 === data.length ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setDirection("left");
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? data.length - 1 : prevIndex - 1
        );
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };
    return (
        <section className="w-full">
            <AppContainer className="space-y-5">
                <HeaderSection>APLIKASI EKSTERNAL LPSK</HeaderSection>
                <div className="grid grid-cols-3 md:grid-cols-8 xl:grid-cols-12 gap-3 xl:gap-5">
                    <div className=" col-span-3 md:col-span-5  xl:col-span-9">
                        <AplicationExternalContent />
                    </div>
                    <div className="col-span-3 bg-background max-h-full overflow-hidden rounded">
                        <div className="w-full h-full relative bg-slate-800  text-slate-100  group overflow-hidden">
                            <AnimatePresence>
                                <div className="w-full h-full relative group-hover:scale-125 transition-all duration-500">
                                    <motion.img
                                        className="w-full h-full opacity-40 object-cover"
                                        key={currentIndex}
                                        src={data[currentIndex].images ?? ""}
                                        variants={slideVariants}
                                        initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                                        animate="visible"
                                        exit="exit"

                                    />
                                </div>
                                <motion.div
                                    className="absolute left-0 top-0 h-full w-full flex flex-col justify-end"
                                    key={currentIndex}
                                    variants={titleSlideVariant}
                                    initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                                    animate="visible"
                                    exit="exit">
                                    <div className="flex flex-col py-20 justify-end h-full p-3">
                                        <TextToSpeech><h1 className='text-xl font-bold'>{data[currentIndex].name}</h1></TextToSpeech>
                                        <TextToSpeech><p className='text-base'>{data[currentIndex].description}</p></TextToSpeech>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                            <Button size={'icon'} variant={'ghost'} className="absolute left-5 top-1/2 translate-y-1/2" onClick={handlePrevious}>
                                <ChevronLeft />
                            </Button>
                            <Button size={'icon'} variant={'ghost'} className="absolute right-5 top-1/2 translate-y-1/2" onClick={handleNext}>
                                <ChevronRight />
                            </Button>
                            <div className="absolute left-0 bottom-14 flex gap-2 justify-center place-items-center w-full">
                                {data.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`h-2 w-2 rounded-full ${currentIndex === index ? "bg-orange-500" : "bg-slate-100"} transition-colors duration-300`}
                                        onClick={() => handleDotClick(index)}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </AppContainer>
        </section>
    )
}

export const AplicationSection = () => {
    return (
        <section className="w-full">
            <AppContainer className="space-y-5">
                <HeaderSection>APLIKASI LPSK</HeaderSection>
                <div className="grid grid-cols-3 md:grid-cols-8 xl:grid-cols-12 gap-3 xl:gap-5">
                    <div className="col-span-3 md:col-span-5 xl:col-span-9">
                        <AplicationContent />
                    </div>
                    <div className="col-span-3 bg-background max-h-full overflow-hidden rounded p-5 space-y-3">
                        <h2 className=" font-bold text-lg">TRACKING CEPAT</h2>
                        <div className=" flex gap-2">
                            <Input placeholder="No Dokumen" />
                            <Button>Cari</Button>
                        </div>
                    </div>
                </div>
            </AppContainer>
        </section>
    )
}

export const AplicationContent = () => {
    const data = INTERNAL_APLICATION
    return (
        <Suspense fallback={<AplicationContentLoading />}>
            <div className="grid grid-cols-3 md:grid-cols-6 xl:grid-cols-9 gap-3 xl:gap-5">
                {data.map((item) => <LinkCard key={item.name} className="col-span-3" href={item.link} target="blank" title={item.name} description={item.description ?? ""} image={item.images ?? ""} />)}
            </div>
        </Suspense>
    )
}


export const AplicationExternalContent = () => {
    const data = EXTERNAL_APLICATION
    return (
        <Suspense fallback={<AplicationContentLoading />}>
            <div className="grid grid-cols-3 md:grid-cols-6 xl:grid-cols-9 gap-3 xl:gap-5">
                {data.map((item) => <LinkCard key={item.name} className="col-span-3" href={item.link} target="blank" title={item.name} description={item.description ?? ""} image={item.images ?? ""} />)}
            </div>
        </Suspense>
    )
}
export const AplicationContentLoading = () => {
    return (
        <div className="grid grid-cols-9 gap-3 xl:gap-5">
            <LinkCardLoading className="col-span-3" />
            <LinkCardLoading className="col-span-3" />
            <LinkCardLoading className="col-span-3" />
            <LinkCardLoading className="col-span-3" />
            <LinkCardLoading className="col-span-3" />
            <LinkCardLoading className="col-span-3" />
        </div>
    )
}


export const ScheduleContent = () => {
    return (
        <Suspense>
            <div className="space-y-3 flex flex-col max-h-full">
                <h3 className="text-xl font-bold">KEGIATAN LPSK</h3>
                <ScheduleCard title="Lorem ipsum dolor sit amet" date="29 Agustus 2023" />
                <ScheduleCard title="Lorem ipsum dolor sit amet" date="29 Agustus 2023" />
                <ScheduleCard title="Lorem ipsum dolor sit amet" date="29 Agustus 2023" />
                <ScheduleCard title="Lorem ipsum dolor sit amet" date="29 Agustus 2023" />
                <ScheduleCard title="Lorem ipsum dolor sit amet" date="29 Agustus 2023" />
            </div>
        </Suspense>
        // <ScheduleContentLoading/>
    )
}

export const ScheduleContentLoading = () => {
    return (
        <Suspense>
            <div className="space-y-3">
                <Skeleton className="h-10 w-full bg-background"></Skeleton>
                <ScheduleCardLoading />
                <ScheduleCardLoading />
                <ScheduleCardLoading />
                <ScheduleCardLoading />
                <ScheduleCardLoading />
            </div>
        </Suspense>
    )
}
