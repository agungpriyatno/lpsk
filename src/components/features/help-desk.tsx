import { MessageCircleIcon } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

export const HelpdeskIcon = () => {
    return (
        <Button size={"icon"} className="fixed right-5 bottom-20 rounded-full" asChild>
            <Link href={"https://api.whatsapp.com/send/?phone=6285770010048&text=Hallo+LPSK+saya+mau+bertanya&type=phone_number&app_absent=0"} target="blank">
                <MessageCircleIcon />
            </Link>
        </Button>
    )
}