// pages/signup.tsx
;
// import SignUpForm from '@/components/signUp';

// const SignUpPage = () => {
//   return (
//     <>

//       <div className="p-4">
//         <SignUpForm />
//       </div>

//     </>
//   );
// };

// export default SignUpPage;

import { SignUp, useUser } from '@clerk/nextjs'

export default function Home() {
  const { user } = useUser()

  if (!user) {
    return <SignUp />
  }


}
