import GoogleAnalytics from '@/components/features/analytic'
import { FooterFE } from '@/components/features/footer-section'
import { AppHeader } from '@/components/features/header'
import { HelpdeskIcon } from '@/components/features/help-desk'
import ServerRunningText from '@/components/features/server-running-text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Lembaga Perlindungan Saksi dan Korban',
    description: '',
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='w-full'>
            <AppHeader />
            {children}
            <FooterFE />
            {/* <ServerRunningText /> */}
            <GoogleAnalytics />
            <HelpdeskIcon />
        </div>
    )
}
