import { Toaster } from '@/components/ui/toaster'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Admin LPSK',
    description: 'Generated by create next app',
}

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='w-full'>
            {children}
            <Toaster />
        </div>
    )
}