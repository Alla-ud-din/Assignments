import Image from "next/image"

export default function Toolbar() {
  return (
    <section>
      
      <div className='w-auto h-24 text-white bg-black flex-shrink-0 pl-5 pr-5 rounded-t-3xl md:hidden'>
        {/* statusbar */}
        <div className='h-1/2  flex justify-between items-center'>
          <h1 className='font-bold leading-5'>
            9:41
          </h1>
          <div className='flex gap-2'>
            <Image src='/Cellular Connection.svg' alt={"Conn"} width={19} height={13} />
            <Image src='/Wifi.svg' alt={"Wifi"} width={17} height={13} />
            <Image src='/Battery.svg' alt={"Battery"} width={28} height={14} />
          </div>
        </div>
        {/* toolbar */}
        <div className="h-1/2 flex justify-between items-center">
          <div>
            <Image src='/Home.svg' alt={"Home"} width={28} height={28} />
          </div>
            <div className="w-full m-4 h-10 bg-gray-100 bg-opacity-30 rounded-full flex p-2 gap-4 items-center">
              <Image src='/Lock.svg' alt={"Lock"} width={22} height={22} />
              <p className="">https://wordlegame.org/...</p>
            </div>
          <div className="flex items-center justify-between">
            <div className="border-4 w-8 h-6 border-white rounded-md flex justify-center items-center">1</div>
            <Image src='/More.svg' alt={"More"} width={22} height={22} />
          </div>
        </div>
      </div>
    </section>
  )
}
