import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-poppins",
});

export default function Logo() {
    return (
        <div className="flex items-center justify-center h-20">
            <div className="h-10 w-10 rounded-full border-2 shadow-xl dark:bg-foreground mr-4">
                <Image
                    src="/logo.png"
                    alt="ghot"
                    width={35}
                    height={35}
                />
            </div>
            <div className={`flex-col hidden lg:flex ${cn(poppins.className)}`}>
                <h1 className="font-bold text-[18px]">Gamehub</h1>
                <span className="text-sm text-gray-400">Let&apos;s play</span>
            </div>
        </div>
    )
}