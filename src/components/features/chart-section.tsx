import { BarChart, PieChart, anak, hamBerat, membahayakanJiwa, pelayananPublik, pencucianUang, penganiayaanBerat, penyiksaan, perlindunganSaksiKorban, seksual, terorisme, tindakPidanaKorupsi } from "../ui/chart"
import { AppContainer } from "../ui/container"
import { HeaderSection } from "../ui/typography"

export const ChartSection = () => {
    return (
        <section className="w-full">
            <AppContainer className="space-y-5 bg-background py-5">
                <HeaderSection>STATISTIK PERLINDUNGAN SAKSI DAN KORBAN</HeaderSection>
                <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-around gap-3 xl:gap-5">
                    <div className='flex flex-col gap-3 text-center'>
                        <h4 className='text-lg font-bold'>Perlindungan Pelanggaran HAM BERAT</h4>
                        <PieChart data={hamBerat}/>
                    </div>
                    <div className='flex flex-col gap-3 text-center'>
                        <h4 className='text-lg font-bold'>Tindak Pidana Korupsi</h4>
                        <PieChart data={tindakPidanaKorupsi} />
                    </div>
                    <div className='flex flex-col gap-3 text-center'>
                        <h4 className='text-lg font-bold'>Tindak Pidana Penyiksaan</h4>
                        <PieChart data={penyiksaan} />
                    </div>
                    <div className='flex flex-col gap-3 text-center'>
                        <h4 className='text-lg font-bold'>Kekerasan Terhadap Anak</h4>
                        <PieChart data={anak}/>
                    </div>
                    <div className='flex flex-col gap-3 text-center'>
                        <h4 className='text-lg font-bold'>Pencucian Uang</h4>
                        <PieChart data={pencucianUang}/>
                    </div>
                    <div className='flex flex-col gap-3 text-center'>
                        <h4 className='text-lg font-bold'>Penganiayaan Berat</h4>
                        <PieChart data={penganiayaanBerat}/>
                    </div>
                    <div className='flex flex-col gap-3 text-center'>
                        <h4 className='text-lg font-bold'>Membahayakan Jiwa</h4>
                        <PieChart data={membahayakanJiwa}/>
                    </div>
                    <div className='flex flex-col gap-3 text-center'>
                        <h4 className='text-lg font-bold'>Pelayan Publik</h4>
                        <PieChart data={pelayananPublik}/>
                    </div>
                    <div className='flex flex-col gap-3 text-center col-span-1 md:col-span-2'>
                        <h4 className='text-lg font-bold'>Kekerasan Seksual</h4>
                        <BarChart data={seksual}/>
                    </div>
                    <div className='flex flex-col gap-3 text-center col-span-1 md:col-span-2'>
                        <h4 className='text-lg font-bold'>Perdagangan Manusia</h4>
                        <BarChart data={seksual}/>
                    </div>
                    <div className='flex flex-col gap-3 text-center col-span-1 md:col-span-2'>
                        <h4 className='text-lg font-bold'>Terorisme</h4>
                        <BarChart data={terorisme}/>
                    </div>
                    <div className='flex flex-col gap-3 text-center col-span-1 md:col-span-2'>
                        <h4 className='text-lg font-bold'>Perlindungan Saksi dan Korban Kejahatan</h4>
                        <BarChart data={perlindunganSaksiKorban}/>
                    </div>
                </div>
            </AppContainer>
        </section>
    )
}
