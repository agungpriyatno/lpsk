import Link from "next/link";
import { AppContainer } from "../ui/container";
import { MailIcon, PhoneCallIcon, PinIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { LineChart, analyticData } from "../ui/chart";
import Image from "next/image";


export const FooterFE = () => {

    return (
        <footer className='w-full bg-background pb-20'>
            <div className="relative w-full h-[450px] xl:h-[300px] grid grid-cols-1 xl:grid-cols-2">
                <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1126.2326896294305!2d106.86336931595699!3d-6.314908720809776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f60a99f7eef3%3A0xbffc2b06bee2dd58!2sLembaga%20Perlindungan%20Saksi%20dan%20Korban%20(LPSK)!5e0!3m2!1sid!2sid!4v1703058028950!5m2!1sid!2sid" loading="lazy" ></iframe>
                <form className="p-5 space-y-3">
                    <h1 className="font-bold">KRITIK & SARAN</h1>
                    <Input placeholder="Nama" />
                    <Input placeholder="Email" />
                    <Textarea placeholder="Kritik dan Saran" />
                    <Button>KIRIM</Button>
                </form>
            </div>
            <AppContainer className="py-5">
                <div className=" grid grid-cols-2 h-full gap-3">
                    <div className=" grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-2">
                            <h6 className="font-bold">Aplikasi</h6>
                            <Link  href={'/'} className="text-sm">Simpusako</Link>
                            <Link  href={'/'} className="text-sm">Simpelkan</Link>
                            <Link  href={'/'} className="text-sm">Fondasi</Link>
                            <Link  href={'/'} className="text-sm">Lemon</Link>
                            <Link  href={'/'} className="text-sm">L4por</Link>
                            <Link  href={'/'} className="text-sm">SSK</Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h6 className="font-bold">Sosial Media</h6>
                            <Link  href={'/'} className="text-sm">Facebook</Link>
                            <Link  href={'/'} className="text-sm">Instagram</Link>
                            <Link  href={'/'} className="text-sm">Twitter (X)</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-full gap-2">
                        <h3 className="font-bold text-xl">Lembaga Perlindungan Saksi dan Korban (LPSK)</h3>
                        <div className="h-[100px] w-[100px] relative">
                            <Image src="/images/lpsk-lg.png" alt="" fill sizes="100vh" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <small className="flex gap-2 place-items-center"><PhoneCallIcon size={14} /> 021-111-222-333</small>
                            <small className="flex gap-2 place-items-center"><MailIcon size={14} /> lpsk@email.go.id</small>
                            <small className="flex gap-2 place-items-center"><PinIcon size={14} /> Jl. Raya Bogor KM 24 No. 47-49 Ciracas Jakarta Timur 13750</small>
                        </div>
                    </div>
                </div>
            </AppContainer>

        </footer>
    )
}