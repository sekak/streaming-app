import "../globals.css";
import Logo from "./_components/logo";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className='h-screen flex flex-col gap-4  items-center justify-center'
      >
        <Logo/>
        {children}
      </body>
    </html>

  );
}
