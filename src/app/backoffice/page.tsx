import { cookies } from "next/headers"
import Background from "./bg"

const AdminPage = () => {
    const token = cookies().get("session")

    return (
        <div className='h-screen w-full'>
            <Background token={token} />
        </div>
    )
}

export default AdminPage