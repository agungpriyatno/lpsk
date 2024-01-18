"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Report } from "@prisma/client"

export const DetailReport = ({ data }: { data: Report }) => {
    return (
        <Dialog>
            <DialogTrigger>Detail</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Detail Pengaduan</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <div className=" grid grid-cols-6 w-full place-content-start">
                    <div className=" col-span-2">Nama</div>
                    <div className=" col-span-4 font-bold">: {data.name}</div>
                </div>
                <div className=" grid grid-cols-6 w-full place-content-start">
                    <div className=" col-span-2">No Identitas</div>
                    <div className=" col-span-4 font-bold">: {data.identity}</div>
                </div>
                <div className=" grid grid-cols-6 w-full place-content-start">
                    <div className=" col-span-2">Nama</div>
                    <div className=" col-span-4 font-bold">: {data.gender}</div>
                </div>
                <div className=" grid grid-cols-6 w-full place-content-start">
                    <div className=" col-span-2">Email</div>
                    <div className=" col-span-4 font-bold">: {data.email}</div>
                </div>
                <div className=" grid grid-cols-6 w-full place-content-start">
                    <div className=" col-span-2">No HP</div>
                    <div className=" col-span-4 font-bold">: {data.phone}</div>
                </div>
                <div className=" grid grid-cols-6 w-full place-content-start">
                    <div className=" col-span-2">No Telp</div>
                    <div className=" col-span-4 font-bold">: {data.fax}</div>
                </div>
                <div className=" grid grid-cols-6 w-full place-content-start">
                    <div className=" col-span-2">Alamat</div>
                    <div className=" col-span-4 font-bold">: {data.address}</div>
                </div>
                <div>Deskripsi Pengaduan</div>
                <p className=" font-semibold">{data.descriptions}</p>

            </DialogContent>
        </Dialog>
    )
}