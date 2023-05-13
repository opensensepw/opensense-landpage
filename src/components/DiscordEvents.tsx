import config from "@/config"
import Image from "next/image"
import useSWR from 'swr'
import { Spinner } from "./Loading";

function SingleEvent({ event }: { event: ScheduledEvent }) {
    return (
        <div className="md:max-w-xs border dark:border-slate-700 rounded-lg shadow">
            {event.image && <Image className="rounded-t-lg w-full" src={event.image} alt="image" width={config.images.size} height={config.images.size} />}
            <div className=" p-3 flex flex-col justify-center">
                <p className="text-lightText dark:text-darkText">{new Date(event.start).toLocaleString(['en-US'], {
                    year: 'numeric',
                    month: 'long',
                    day: "numeric",
                    hour: 'numeric',
                    minute: 'numeric'
                })}</p>
                <div className="border-b my-1"></div>
                <p className="dark:text-darkText text-md font-semibold">{event.name}</p>

            </div>
        </div>
    )
}

const fetcher = async (url: string) => {
    const response = await fetch(url)
    const data = await response.json()
    return data;
}

export default function EventsBox() {
    const { data, error, isLoading } = useSWR('/api/discord', fetcher)

    if(error) console.log(error)


    return (
        <div className="mt-4">
            <p className="text-center text-2xl dark:text-darkText  text-lightText font-bold mb-4">Next events</p>
            {isLoading ?
                <div className="flex justify-center">
                    <Spinner />
                </div> :
                <div className="grid md:grid-cols-3 gap-4">
                    {data && data.events.map((event: ScheduledEvent) => <SingleEvent key={event.name} event={event} />)}
                </div>
            }
        </div>
    )
}