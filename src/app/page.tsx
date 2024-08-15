"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(true);
  // await db.$connect()
  return (
    <div className="h-screen w-full">
      <div
        className="h-full w-full relative bg-slate-800"
        suppressHydrationWarning
      >
        {open && (
          <div
            className="fixed h-screen w-screen left-0 top-0 bg-slate-800/70 z-50 flex justify-center place-items-center"
            onClick={() => setOpen(false)}
          >
            <div className="bg-background rounded w-[350px] h-[600px] md:w-[600px] md:h-[400px] xl:w-[800px] xl:h-[600px] overflow-clip border-4 relative">
              <Image src={"/images/image.png"} alt="" fill/>
              <Button
                className="absolute right-5 top-5"
                onClick={() => setOpen(false)}
              >
                <XIcon size={25} />
              </Button>
            </div>
          </div>
        )}
        <motion.img
          src="/images/background.webp"
          className="w-full h-full object-cover blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        />
        <div className=" absolute left-0 top-0 right-0 bottom-0 ">
          <motion.div
            className="flex flex-col gap-5 justify-center place-items-center h-full"
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <div className="h-[200px] w-[200px] relative">
              <Image src={"/images/lpsk-lg.png"} alt="" fill></Image>
            </div>
            <h1 className="text-4xl font-bold text-slate-100 text-center">
              Lembaga Perlindungan Saksi dan Korban
            </h1>
            <Button
              variant={"default"}
              asChild
              className="text-slate-100 dark:text-slate-800"
            >
              <Link href={"/beranda"}>MASUK</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
