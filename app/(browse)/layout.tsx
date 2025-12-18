import Navbar from "./_components/(browser)/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Navbar />
        <div className="pt-20 h-full flex">
            {children}
        </div>
    </>
  )
}