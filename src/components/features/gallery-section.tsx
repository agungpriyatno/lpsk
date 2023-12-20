import { AppContainer } from "../ui/container"
import { GalleryItem } from "../ui/gallery"

export const GallerySection = () => {
    return (
        <div className='w-full'>
            <AppContainer>
                <div className=' grid grid-cols-2 md:grid-cols-5 gap-[16px]'>
                    {
                        [0,0,0,0,0,0,0,0,0,0,0,0].map((item, i) => {
                            if (i == 0) {
                                return <div className='col-span-2 row-span-2 h-full'>
                                <GalleryItem url={`/images/galleries/${i + 1}.jpg`} />
                            </div>
                            }
                            return <div className='col-span-1'>
                            <GalleryItem url={`/images/galleries/${i + 1}.jpg`}/>
                        </div>
                        })
                    }
                </div>
            </AppContainer>
        </div>
    )
}