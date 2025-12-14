import SignOut from "@/components/sign-out";
import { ModeToggle } from "@/components/toggle-button";
import { SignedIn, SignedOut, SignInButton, UserAvatar, UserButton } from "@clerk/nextjs";

export default async function page() {

  return (
    <div>
      <h1>Home page - streaming app</h1>
      <ModeToggle />
      {/* <SignOut/> */}
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
      <h1>My App</h1>
       <SignedIn>
        <UserButton />
      </SignedIn>
      {/* <SignedOut>
        <SignInButton />
      </SignedOut> */}
    </header>
    </div>
  );
}
