import { PieChart } from "../ui/chart"
import { AppContainer } from "../ui/container"
import { HeaderSection } from "../ui/typography"

export const ChartSection = () => {
    return (
        <section className="w-full">
            <AppContainer className="space-y-5 bg-background py-5">
                <HeaderSection>APLIKASI LPSK</HeaderSection>
                <div className="flex justify-around gap-3 xl:gap-5">
                    <div className='flex flex-col gap-3 text-center'>
                        <h4 className='text-lg font-bold'>Perlindungan Pelanggaran HAM BERAT</h4>
                        <PieChart />
                    </div>
                    <div className='flex flex-col gap-3 text-center'>
                        <h4 className='text-lg font-bold'>Tindak Pidana Korupsi</h4>
                        <PieChart type='KORUPSI' />
                    </div>
                    <div className='flex flex-col gap-3 text-center'>
                        <h4 className='text-lg font-bold'>Tindak Pidana Penyiksaan</h4>
                        <PieChart type='PENYIKSAAN' />
                    </div>
                    <div className='flex flex-col gap-3 text-center'>
                        <h4 className='text-lg font-bold'>Kekerasan Terhadap Anak</h4>
                        <PieChart type='ANAK' />
                    </div>
                </div>
            </AppContainer>
        </section>
    )
}
