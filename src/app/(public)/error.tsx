'use client' // Error components must be Client Components
 
import { Button } from '@/components/ui/button'
import { AlertTriangleIcon, SettingsIcon } from 'lucide-react'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='h-screen w-full'>
      <div className='h-full w-full relative '>
        <div className=' absolute left-0 top-0 right-0 bottom-0 flex flex-col gap-5 justify-center place-items-center'>
          <AlertTriangleIcon size={50} className='' />
          <h1 className='text-xl font-bold'>Mohon Maaf, terjadi Kesalahan</h1>
          <Button onClick={() => reset()}>Ulangi</Button>
        </div>
      </div>
    </div>
  )
}