import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { AppContainer } from '@/components/ui/container';
import db from '@/lib/db';
import { DownloadCloudIcon, FileIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function Page() {

    const data = await db.draft.findMany({ where: { subCategoryId: "clrfsr1mu0007d7uycmjgxjrd" }, include: { media: {include: {media: true}} } })
    console.log(data[0].media);

    return (
        <div className='flex flex-col gap-10'>
            <div className=' h-[400px] w-full bg-background'>
                <div className=' flex w-full h-full justify-center place-items-center relative'>
                    <div className='h-full w-full absolute bg-slate-800'>
                        <Image src={'/images/fondasi.png'} fill alt='' sizes='100vh' className=' object-cover opacity-50' />
                    </div>
                    <div className=' absolute left-0 top-0 right-0 bottom-0 flex justify-center place-items-center'>
                        <h1 className=' text-3xl font-bold absolute text-slate-100'>Informasi Pelayanan Proaktif dan Darurat</h1>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <AppContainer>
                    <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                        {
                            data.map((item) => (
                                <Card key={item.id}>
                                    <CardHeader className='flex justify-center place-items-center'>
                                        <FileIcon size={50} />
                                    </CardHeader>
                                    <CardContent className='text-center'>
                                        <p>{item.title}</p>
                                    </CardContent>
                                    <CardFooter className='flex justify-center place-items-center'>
                                        <Button className='flex gap-2'>
                                            <a href={process.env.BUCKET_URL_ACCESS + "/publikasi/" + item.media[0]?.media.name} target={'_blank'} download className='flex gap-2'>
                                                <DownloadCloudIcon /> Unduh
                                            </a>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))
                        }
                
                    </div>
                </AppContainer>
            </div>


        </div>
    )
}
