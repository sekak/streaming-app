import { auth } from "@clerk/nextjs/server";

 
export default async function page() {

  const isProtected = await auth.protect()
  console.log("is", isProtected)
  return (
    <>
    home
    </>
  );
}
