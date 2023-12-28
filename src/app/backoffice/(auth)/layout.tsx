import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Masuk admin LPSK',
  description: 'Generated by create next app',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='absolute left-0 top-0 right-0 bottom-0 flex justify-center place-items-center z-50'>
        {children}
    </div>
  )
}