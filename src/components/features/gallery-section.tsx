import { AppContainer } from "../ui/container"
import { GalleryItem } from "../ui/gallery"

export const GallerySection = () => {
    return (
        <div className='w-full'>
            <AppContainer>
                <div className=' grid grid-cols-2 md:grid-cols-5 gap-[16px]'>
                    <div className='col-span-2 row-span-2 h-full'>
                        <GalleryItem />
                    </div>
                    <div className='col-span-1'>
                        <GalleryItem />
                    </div>
                    <div className='col-span-1'>
                        <GalleryItem />
                    </div>
                    <div className='col-span-1'>
                        <GalleryItem />
                    </div>
                    <div className='col-span-1'>
                        <GalleryItem />
                    </div>
                    <div className='col-span-1'>
                        <GalleryItem />
                    </div>
                    <div className='col-span-1'>
                        <GalleryItem />
                    </div>
                </div>
            </AppContainer>
        </div>
    )
}