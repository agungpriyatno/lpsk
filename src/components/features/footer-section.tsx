import Image from "next/image"
import Link from "next/link"
import { AppContainer } from "../ui/container"

export const FooterFE = () => {
    return (
        <footer className='w-full bg-background pb-20'>
            <div className="relative w-full h-[300px]">
                <Image src={'/images/map.png'} alt="" fill className="object-cover" />
            </div>
            <AppContainer className="py-5">
                <div className=" grid grid-cols-2 h-full">
                    <div className=" grid grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <h6 className="font-bold">Aplikasi</h6>
                            <Link href={'/'} className="text-sm">Simpusako</Link>
                            <Link href={'/'} className="text-sm">Simpelkan</Link>
                            <Link href={'/'} className="text-sm">Fondasi</Link>
                            <Link href={'/'} className="text-sm">Lemon</Link>
                            <Link href={'/'} className="text-sm">L4por</Link>
                            <Link href={'/'} className="text-sm">SSK</Link>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h6 className="font-bold">Sosial Media</h6>
                            <Link href={'/'} className="text-sm">Facebook</Link>
                            <Link href={'/'} className="text-sm">Instagram</Link>
                            <Link href={'/'} className="text-sm">Twitter (X)</Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between h-full">
                        <h3 className="font-bold text-xl">Lembaga Perlindungan Saksi dan Korban (LPSK)</h3>
                        <div className="flex flex-col gap-5">
                            <small>021-111-222-333</small>
                            <small>lpsk@email.go.id</small>
                            <small>Jl. Raya Bogor KM 24 No. 47-49 Ciracas Jakarta Timur 13750</small>
                        </div>
                    </div>
                </div>
            </AppContainer>

        </footer>
    )
}