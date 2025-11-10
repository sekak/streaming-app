import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
            <h1>My App</h1>
            {/* <SignedIn>
                <UserButton />
            </SignedIn> */}
                <SignOutButton>
                    <button>Custom sign out button</button>
                </SignOutButton>
            {/* <SignedOut>
            </SignedOut> */}
        </header>
    )
}