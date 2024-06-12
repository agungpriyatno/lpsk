import Image from "next/image";
import { Hero } from "../_components/Hero";
import { AppContainer } from "@/components/ui/container";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { DownloadCloudIcon, FileIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const AppPage = () => {
  return (
    <div className="space-y-10">
      <Hero title="Maklumat Pelayanan" />
      <div className="w-full">
        <AppContainer>
          <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            <Card>
              <CardHeader className="flex justify-center place-items-center">
                <FileIcon size={50} />
              </CardHeader>
              <CardContent className="text-center">
                <p>Struktur PPID di Lingkungan LPSK Tahun 2021</p>
              </CardContent>
              <CardFooter className="flex justify-center place-items-center">
                <Button className="flex gap-2">
                  <DownloadCloudIcon /> Unduh
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="flex justify-center place-items-center">
                <FileIcon size={50} />
              </CardHeader>
              <CardContent className="text-center">
                <p>PStandar Pelayanan Perlindungan Darurat</p>
              </CardContent>
              <CardFooter className="flex justify-center place-items-center">
                <Button className="flex gap-2">
                  <DownloadCloudIcon /> Unduh
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
