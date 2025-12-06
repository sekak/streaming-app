import "../globals.css";
import Logo from "./_components/logo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col gap-4  items-center justify-center">
      <Logo />
      {children}
    </div>
  );
}
