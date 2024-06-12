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
      <Hero title="Laporan Survey Kepuasan Masyarakat" />
      <AppContainer>
          <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <Card>
              <CardHeader className="flex justify-center place-items-center">
                <FileIcon size={50} />
              </CardHeader>
              <CardContent className="text-center">
                <p>
                  Laporan SKM 2020
                </p>
              </CardContent>
              <CardFooter className="flex justify-center place-items-center">
                <Button asChild>
                  <a
                    download
                    href="/informasi-pelayanan/pelayanan-publik/Laporan SKM 2020.pdf"
                    className="flex gap-2"
                  >
                    <DownloadCloudIcon /> Unduh
                  </a>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex justify-center place-items-center">
                <FileIcon size={50} />
              </CardHeader>
              <CardContent className="text-center">
                <p>
                  Laporan SKM 2021
                </p>
              </CardContent>
              <CardFooter className="flex justify-center place-items-center">
                <Button asChild>
                  <a
                    download
                    href="/informasi-pelayanan/pelayanan-publik/Laporan SKM 2021.pdf"
                    className="flex gap-2"
                  >
                    <DownloadCloudIcon /> Unduh
                  </a>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex justify-center place-items-center">
                <FileIcon size={50} />
              </CardHeader>
              <CardContent className="text-center">
                <p>
                  Laporan SKM 2022
                </p>
              </CardContent>
              <CardFooter className="flex justify-center place-items-center">
                <Button asChild>
                  <a
                    download
                    href="/informasi-pelayanan/pelayanan-publik/Laporan SKM 2022.pdf"
                    className="flex gap-2"
                  >
                    <DownloadCloudIcon /> Unduh
                  </a>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex justify-center place-items-center">
                <FileIcon size={50} />
              </CardHeader>
              <CardContent className="text-center">
                <p>
                  Laporan SKM 2023
                </p>
              </CardContent>
              <CardFooter className="flex justify-center place-items-center">
                <Button asChild>
                  <a
                    download
                    href="/informasi-pelayanan/pelayanan-publik/Laporan SKM 2023.pdf"
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
  );
};

export default AppPage;
