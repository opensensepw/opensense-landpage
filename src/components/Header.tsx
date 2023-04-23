import dynamic from 'next/dynamic'
const DarkModeButton = dynamic(() => import("../components/DarkModeButton"), {
    ssr: false,
    // loading: () =>       <div className='flex justify-end mx-4'><button> 🌞/🌙</button></div>
})

export default function Header() {
    return (
        <div className='mt-1 mx-4 flex justify-end gap-4 items-center dark:text-gray-200 text-gray-800'>
            <DarkModeButton />
        </div>
    )
}