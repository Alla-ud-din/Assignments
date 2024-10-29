'use client'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Image from 'next/image';

export default () => {
    const items = [];

    for (let i = 0; i < 10; i++) {
        items.push(
            <DropdownMenu.Item key={i}>
                <div className='flex w-96 pt-2 pb-2 items-center border-b border-solid border-opacity-5'>
                    <div className='flex items-center p-4 flex-grow'>
                        <div className='bg-white rounded-full w-6 h-6 absolute left-1 flex justify-center items-center'>{i + 1}</div>
                        <div className='bg-[#6495ED] rounded-full w-12 h-12 flex justify-center items-center font-bold text-gray-700'>TH</div>
                        <div className='pl-2 font-semibold text-[#545454]'>Teresa Harper</div>
                    </div>
                    <div className='pr-2'>def</div>
                </div>
            </DropdownMenu.Item>
        );
    }

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <button className='hidden md:flex'>
                    <Image src="/donut 1.svg" alt="Donut" width={34} height={34} />
                </button>
            </DropdownMenu.Trigger>

                <DropdownMenu.Portal >
                    <DropdownMenu.Content>
                        <DropdownMenu.Label className='text-black text-xl font-semibold pt-2'>Leaderboard</DropdownMenu.Label>
                        <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />
                        {items}
                        <DropdownMenu.Group>
                            <DropdownMenu.Item />
                        </DropdownMenu.Group>
                        <DropdownMenu.CheckboxItem>
                            <DropdownMenu.ItemIndicator />
                        </DropdownMenu.CheckboxItem>
                        <DropdownMenu.Separator />
                        <DropdownMenu.Arrow />
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
        </DropdownMenu.Root>
  );
}
