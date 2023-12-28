"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EyeIcon, MinusIcon, PlusIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.js',
//     import.meta.url,
// ).toString();
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


export function ShowPDF({ url }: { url: string }) {

    const [size, setSize] = useState(0)

    const [numPages, setNumPage] = useState(0)
    const [open, setOpen] = useState(false)

    const onLoadSucces = ({ numPages }: { numPages: number }) => {
        setNumPage(numPages)
    }

    return (
        <div>
            <Button size={'icon'} onClick={() => setOpen(!open)}><EyeIcon /></Button>
            {open && (
                <div className="fixed left-0 top-0 w-screen h-screen bg-slate-800 bg-opacity-80 z-50 flex flex-col justify-center place-items-center">
                    <Button variant={'outline'} onClick={() =>setOpen(!open)} className=" top-5 right-5 absolute z-[100]">
                        <XIcon size={25}/>
                    </Button>
                    <Document onLoadSuccess={(file) => onLoadSucces({ numPages: file.numPages })} file={{url}} className={cn(
                        " flex flex-col h-screen w-full justify-center place-items-center gap-3 relative ")}>
                        {/* 
                        @ts-ignore */}
                        <HTMLFlipBook width={300} height={500} showCover={false} className="relative overflow-visible w-full h-screen" startPage={0}>
                            <div className="relative overflow-hidden" onClick={(event) => event.stopPropagation()}></div>
                            {Array.from(Array(numPages).keys()).map((a, i) => (
                                <div key={i} className="relative overflow-hidden" onClick={(event) => event.stopPropagation()}>
                                    <Page pageNumber={i + 1} width={300} height={500} scale={1} />
                                </div>
                            ))}
                        </HTMLFlipBook>
                    </Document>
                </div>
            )}
        </div>

    );
}

