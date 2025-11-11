import Image from "next/image";


export default function Logo() {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <div className="bg-foreground dark:bg-white rounded-full max-content">
                <Image
                    src="/logo.png"
                    alt="ghot"
                    width={100}
                    height={100}
                />
            </div>
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-[18px]">Gamehub</h1>
                <span className="text-sm text-gray-400">Let's play</span>
            </div>
        </div>
    )
}