'use client' // Error components must be Client Components

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';



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

  const router = useRouter()


  return (
    <div className="h-screen w-full">
      <div className='h-full w-full relative '>
        <motion.img
          className="w-full h-full object-cover"
          src={'/images/background.webp'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        />
        <div className=' absolute left-0 top-0 right-0 bottom-0 flex flex-col gap-5 justify-center place-items-center'>
          <h1 className='text-2xl font-bold'>SORRY, YOUR PAGE IS NOT FOUND</h1>
          <Button onClick={() => router.back()}>Kembali</Button>
        </div>
      </div>
    </div>
  )
}