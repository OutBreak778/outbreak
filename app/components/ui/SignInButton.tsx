'use client'

import { FC, useState } from "react";
import Button from "./Button";
import { signIn } from "next-auth/react";
import { toast } from "./Toast";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const SignInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn('google')
    } catch (error) {
      toast({
          title: "Error Signing in",
          message: "Please try later",
          type: "error"
      })
    }
  };

  return (
    <Button className="mr-5" onClick={SignInWithGoogle} isLoading={isLoading}>
      Sign In
    </Button>
  );
};

export default SignInButton;
