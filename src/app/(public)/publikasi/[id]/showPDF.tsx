"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EyeIcon, MinusIcon, PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();


export function ShowPDF({url}: {url: string}) {

    const [size, setSize] = useState(0)

    const [numPages, setNumPage] = useState(0)
    const [open, setOpen] = useState(false)

    const onLoadSucces = ({ numPages }: { numPages: number }) => {
        setNumPage(numPages)
    }

    const generatePage = () => {
        const pages = [
            <div className="relative overflow-hidden" onClick={(event) => event.stopPropagation()}></div>
        ]

        for (let i = 0; i < numPages; i++) {
            pages.push(<div className="relative overflow-hidden" onClick={(event) => event.stopPropagation()}>
                <Page pageNumber={i + 1} width={500} height={700} scale={1} />
            </div>)
        }

        return pages
    }

    return (
        <div>
            <Button size={'icon'} onClick={() => setOpen(!open)}><EyeIcon /></Button>
            {open && (
                <div className="fixed left-0 top-0 w-screen h-screen bg-slate-800 bg-opacity-80 z-50 flex flex-col justify-center place-items-center" onClick={() => setOpen(!open)}>
                    <Document onLoadSuccess={(file) => onLoadSucces({ numPages: file.numPages })} file={url} className={cn(
                        " flex flex-col h-screen w-full justify-center place-items-center gap-3 relative ")}>
                        {/* 
                        @ts-ignore */}
                        <HTMLFlipBook width={500} height={700} showCover={false} className="relative overflow-visible w-full h-screen" startPage={0}>
                            {generatePage()}
                        </HTMLFlipBook>
                    </Document>
                </div>
            )}
        </div>

    );
}

