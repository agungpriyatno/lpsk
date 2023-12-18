import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { cookies } from "next/headers"
import Link from "next/link"

const AdminPage = () => {
    const token = cookies().get("session")
    
    return (
        <div className='absolute left-0 top-0 right-0 bottom-0 flex flex-col gap-5 justify-center place-items-center'>
            <Card className="max-w-[500px]">
                <CardHeader className="space-y-5">
                    <h1 className="text-3xl font-bold">Selamat Datang di Admin LPSK</h1>
                    <CardDescription>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nam explicabo nihil quia numquam nobis necessitatibus ratione eius itaque maxime, doloremque dolores aliquid eveniet veritatis harum reprehenderit totam unde fugiat!</CardDescription>
                </CardHeader>
                <CardContent className="">
                    <Button asChild>
                        <Link href={token ? "/admin/dashboard" : "/admin/signin"}>MASUK</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default AdminPage