import config from "@/config"
import Image from "next/image"

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

export default function EventsBox({ events }: { events: ScheduledEvent[] }) {
    if (!events) {
        return (
            <div>
                <p>no events</p>
            </div>
        )
    }

    return (
        <div className="grid md:grid-cols-3 gap-4">
            {events.map(event => <SingleEvent key={event.name} event={event} />)}
        </div>
    )
}