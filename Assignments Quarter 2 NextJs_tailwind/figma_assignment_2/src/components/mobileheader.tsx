import Image from "next/image"
import Link from "next/link"
import Dropdownmenu from "@/components/dropdownmenu"

export default function Mobileheader() {
    return (
        <div className='w-full h-16  pl-5 pr-5 flex items-center'>
            <div className='flex flex-grow '>
                <button className='md:hidden'>
                    <Image src="/donut 1.svg" alt="Donut" width={34} height={34} />
                </button>
                <Dropdownmenu />
            </div>
            <div className='flex gap-5'>
            <Link href='/'><Image src="/setting-2.svg" alt={"setting"} width={34} height={34} /></Link>
            <Link href='/'><Image src="/chart.svg" alt={"chart"} width={34} height={34} /></Link>
            <Link href='/'><Image src="/ri_menu-2-line.svg" alt="menu" width={34} height={34} className="md:hidden"/></Link>
            <div className="hidden md:flex md:justify-center md:items-center md:gap-2 md:bg-[#50C878] md:rounded-full md:py-2 md:px-4 md:text-white md:font-bold">
                <h1>New Game</h1>
            </div>
            <div className="hidden md:flex md:justify-center md:items-center md:gap-2 md:bg-[#50C878] md:rounded-full md:py-2 md:px-4 md:text-white md:font-bold">
                <h1>Login</h1>
            </div>
            </div>
        </div>
    )
}
