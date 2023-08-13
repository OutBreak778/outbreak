'use client'

import { FC, useState } from "react"
import Button from "./Button"
import { signOut } from "next-auth/react"
import { toast } from "./Toast"

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const SignUserOut = async ()=> {
        setIsLoading(true)
        try {
            await signOut()
        } catch (error) {
            toast({
                title: "Error Signing Out",
                message: "Please try later",
                type: "error"
            })
        }
    }

    return <Button onClick={SignUserOut} isLoading={isLoading}>
        Sign In
    </Button>
}

export default SignOutButton
