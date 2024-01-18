"use client"


import { FooterFE } from '@/components/features/footer-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { AppContainer } from '@/components/ui/container';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { HeaderSection } from '@/components/ui/typography';
import { DownloadCloudIcon, FileIcon } from 'lucide-react';
import Image from 'next/image';

const listA = [
    {
        name: "Brigadir Jenderal Polisi (Purn) Dr. Achmadi, S.H., M.A.P.",
        position: "Wakil Ketua",
        data: [
            { year: "2020", file: "018fbb9edbfa43effbca17a297ab467f.pdf" }
        ],
    },
    {
        name: "Edwin Partogi, S.H.",
        position: "Wakil Ketua",
        data: [
            { year: "2020", file: "c15341011c8b0c39915919602f122fae.pdf" }
        ],
    },
    {
        name: "Dr. Maneger Nasution, M.H., M.A.",
        position: "Wakil Ketua",
        data: [
            { year: "2020", file: "e1a9d97a096c100c3e7d2cc89536defc.pdf" }
        ],
    }
]

export default function Page() {
    return (
        <div className='flex flex-col gap-10'>
            <div className=' h-[400px] w-full bg-background'>
                <div className=' flex w-full h-full justify-center place-items-center relative'>
                    <div className='h-full w-full absolute bg-slate-800'>
                        <Image src={'/images/fondasi.png'} fill alt='' sizes='100vh' className=' object-cover opacity-50' />
                    </div>
                    <div className=' absolute left-0 top-0 right-0 bottom-0 flex justify-center place-items-center'>
                        <h1 className=' text-3xl font-bold absolute text-slate-100'>Informasi LHKPN</h1>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <AppContainer>
                    <div className=' bg-background p-5 rounded space-y-3'>
                        {/* <CreateFeature /> */}
                        <HeaderSection>
                            LHKPN Ketua dan Wakil Ketua LPSK
                        </HeaderSection>
                        <Table>
                            <TableCaption> List LHKPN Ketua dan Wakil Ketua LPSK.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">No</TableHead>
                                    <TableHead>Nama</TableHead>
                                    <TableHead>Jabatan</TableHead>
                                    <TableHead className="text-left">Pelaporan LHKP</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    listA.map((item, i) => (
                                        <TableRow key={item.name}>
                                            <TableCell className="font-medium">{i + 1}</TableCell>
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>{item.position}</TableCell>
                                            <TableCell className="text-left">
                                                <Select>
                                                    <SelectTrigger className="w-[100px]">
                                                        <SelectValue placeholder="Tahun" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {
                                                            item.data.map((sub) => (
                                                                <SelectItem key={sub.year} value="light">{sub.year}</SelectItem>
                                                            ))
                                                        }
                                                    </SelectContent>
                                                </Select>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </div>
                </AppContainer>
            </div>


        </div>
    )
}
