import Image from "next/image"
import { AppContainer } from "./container"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
import { Skeleton } from "./skeleton"
import { AspectRatio } from "./aspect-ratio"



export const GalleryItem = () => {
    return (
        <Dialog modal>
            <DialogTrigger asChild>
                <div className='w-full h-full bg-background rounded relative group overflow-hidden'>
                    <AspectRatio ratio={1/1}>
                        <Image src={'/images/lpsk-carousel.png'} alt="" fill sizes="100vh" className="object-cover group-hover:scale-125 transition-all duration-300" />
                    </AspectRatio>
                </div>
            </DialogTrigger>
            <DialogContent forceMount className="h-[400px] overflow-hidden sm:max-w-[425px] w-full">
                <DialogHeader>
                    <DialogTitle>Detail gambar</DialogTitle>
                </DialogHeader>
                <Image src={'/images/lpsk-carousel.png'} alt="" fill sizes="100vh" className="object-cover group-hover:scale-125 transition-all duration-300" />
            </DialogContent>
        </Dialog>
    )
}

export const GalleryLoading = () => {
    return (
        <div className='w-full'>
            <AppContainer>
                <div className=' grid grid-cols-5 gap-[16px] h-[600px]'>
                    <Skeleton className='col-span-2 row-span-2 h-full bg-background rounded'>
                    </Skeleton>
                    <Skeleton className='col-span-1  h-full bg-background rounded'>
                    </Skeleton>
                    <Skeleton className='col-span-1  h-full bg-background rounded'>
                    </Skeleton>
                    <Skeleton className='col-span-1  h-full bg-background rounded'>
                    </Skeleton>
                    <Skeleton className='col-span-1  h-full bg-background rounded'>
                    </Skeleton>
                    <Skeleton className='col-span-1  h-full bg-background rounded'>
                    </Skeleton>
                    <Skeleton className='col-span-1  h-full bg-background rounded'>
                    </Skeleton>
                </div>
            </AppContainer>
        </div>
    )
}