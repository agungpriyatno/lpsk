'use client'

import { useFormStatus } from 'react-dom'
import { Button, ButtonProps } from './button'
import { cn } from '@/lib/utils'

export function SubmitButton({ children, className, type ,...props }: ButtonProps) {
    const { pending } = useFormStatus()

    return (
        <Button type='submit' {...props} className={cn(className, { "bg-muted": pending })}>
            {pending ? "Mengupload..." : children}
        </Button>
    )
}