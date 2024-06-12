import Image from "next/image";
import { Hero } from "../_components/Hero";
import { AppContainer } from "@/components/ui/container";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { DownloadCloudIcon, FileIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const AppPage = () => {
  return (
    <div className="space-y-10">
      <Hero title="Standar Pelayanan Publik di Lingkungan LPSK" />
      <div className="w-full">
        <AppContainer>
          <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <Card>
              <CardHeader className="flex justify-center place-items-center">
                <FileIcon size={50} />
              </CardHeader>
              <CardContent className="text-center">
                <p>
                  Peraturan LPSK No. 1 Tahun 2024 tentang Standar Pelayanan di
                  Lingkungan LPSK
                </p>
              </CardContent>
              <CardFooter className="flex justify-center place-items-center">
                <Button asChild>
                  <a
                    download
                    href="/informasi-pelayanan/pelayanan-publik/Peraturan LPSK No. 1 Tahun 2024 tentang Standar Pelayanan di Lingkungan LPSK.pdf"
                    className="flex gap-2"
                  >
                    <DownloadCloudIcon /> Unduh
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </AppContainer>
      </div>
    </div>
  );
};

export default AppPage;
