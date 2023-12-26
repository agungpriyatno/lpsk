"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio";
import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs, } from "react-pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const width = 500;
const height = 750;

export function Test() {

    const [numPages, setNumPage] = useState(0)

    const onLoadSucces = ({ numPages }: { numPages: number }) => {
        setNumPage(numPages)
    }

    return (
        <Document onLoadSuccess={(file) => onLoadSucces({ numPages: file.numPages })} file={"/documents/sample.pdf"} className="flex h-screen w-full justify-center place-items-center">
            {/* 
        @ts-ignore */}
            <HTMLFlipBook width={width} height={height} showCover={true} className="relative" startPage={0} autoSize>
                <div className="relative overflow-hidden">
                    <Page pageNumber={1} width={500} scale={1} />
                </div>
                <div className="relative overflow-hidden">
                    <Page pageNumber={2} width={500} />
                </div>
                <div className="relative overflow-hidden">
                    <Page pageNumber={3} width={500} />
                </div>
                <div className="relative overflow-hidden">
                    <Page pageNumber={4} width={500} />
                </div>
            </HTMLFlipBook>
        </Document>

    );
}

// ReactDOM.render(<Test />, document.getElementById("app"));

// export default Test
