import { SignIn, useUser } from '@clerk/nextjs'

export default function Sign(){
  const { user } = useUser()

  if (!user) {
    return <SignIn />
  }


}