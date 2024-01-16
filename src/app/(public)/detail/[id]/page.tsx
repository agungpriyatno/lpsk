import DetailPost from "@/components/features/detail-post"



const Page = async ({ params: { id } }: { params: { id: string } }) => {
    return <DetailPost id={id} />
}


export default Page