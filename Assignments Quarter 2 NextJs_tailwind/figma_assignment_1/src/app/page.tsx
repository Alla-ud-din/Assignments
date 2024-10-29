import tick from "@/assets/Group 172.svg"
import { FEATURES, PRICING } from "@/constants"
import Image from "next/image"
import group from "../assets/Group.svg"
import group1 from "../assets/Group (1).svg"
import group178 from "../assets/Group 178.svg"

export default function Home() {
  return (
    <section className='w-[428px] h-[1191px]'>
      {/* Header */}
      <section>
        <div className='w-[428px] h-96 bg-[#6B46C1] pt-14 pl-6 pr-10 pb-64 text-gray-50'>
          <h1 className='w-96 text-3xl font-extrabold leading-10 tracking-[-0.3px] opacity-85  mb-5'>Simple pricing for your business</h1>
          <p className='text-lg font-medium leading-7 tracking-[-0.18px] opacity-85'>Plans that are carefully crafted to suit your business.</p>
        </div>
      </section>
      {/* pricing */}
      <section>
        <div className='flex justify-center -m-36 '>
          <div className='w-96 h-[606px] border-4 rounded-xl shadow-lg'>
            <div className='w-full h-[283px] bg-[#F0EAFB] flex flex-col items-center justify-center'>
              <h1 className='text-gray-900  pb-4 text-2xl font-extrabold leading-8'>Premium PRO</h1>
              <h1 className='text-gray-900  pb-4 text-5xl font-extrabold leading-10 tracking-[-0.48px]'>$329</h1>
              <p className='w-72 text-gray-900  pb-4 text-lg font-medium leading-7 flex justify-center'>billed just once</p>
              <button className='w-72 h-12 rounded-lg bg-[#805AD5]'>Get Started</button>
            </div>
            <p className='text-gray-700 text-lg font-normal leading-7 pt-10 pr-4 pl-4 pb-6'>Access these features when you get this pricing package for your business.</p>
            <ul>
              {PRICING.map((feature) => (
                <li className="flex gap-x-2 pl-4 pb-4" key={feature.description}>
                  <Image src={tick} alt="bullet" />
                  <p>{feature.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* Features */}
      <section>
        <ul className="mt-52">
            <li className="flex gap-x-2 pl-4 pb-10" >
              <Image src={group178} alt="bullet" width={22} height={22}/>
              <p className="text-gray-900 text-lg font-bold leading-6">30 days money back Guarantree</p>
            </li>
            <li className="flex gap-x-2 pl-4 pb-10" >
              <Image src={group} alt="bullet" width={22} height={22}/>
              <p className="text-gray-900 text-lg font-bold leading-6">No setup fees 100% hassle-free</p>
            </li>
            <li className="flex gap-x-2 pl-4 pb-10">
              <Image src={group1} alt="bullet" width={22} height={22}/>
              <p className="text-gray-900 text-lg font-bold leading-6">No monthly subscription Pay once and for all</p>
            </li>
        </ul>
      </section>
    </section>
  )
}

