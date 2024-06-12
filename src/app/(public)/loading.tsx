"use client";

import { Button } from "@/components/ui/button";
import { Loader2Icon, Settings2Icon, SettingsIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  return (
    <div className="h-screen w-full">
      <div className="h-full w-full relative ">
        <div className=" absolute left-0 top-0 right-0 bottom-0 flex flex-col gap-2 justify-center place-items-center">
          <Loader2Icon size={50} className=" animate-spin" />
          <h1 className="text-sm font-bold">Memuat...</h1>
        </div>
      </div>
    </div>
  );
}
