// import { useSession, signIn, signOut } from "next-auth/react";

// export default function AuthTesting({ title, users, ...props }) {
//   const { data: session } = useSession();
//   if (session) {
//     console.log(session);
//     return (
//       <div>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </div>
//     );
//   }
//   return (
//     <div>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </div>
//   );
// }

export default function AuthTesting({ ...props }) {
  return <div></div>;
}
