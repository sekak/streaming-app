import Image from "next/image";


export default function Logo() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-foreground dark:bg-white rounded-full max-content">
                <Image
                    src="/logo.png"
                    alt="ghot"
                    width={100}
                    height={100}
                />
            </div>
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-12">Gamehub</h1>
                <span>Let's play</span>
            </div>
        </div>
    )
}