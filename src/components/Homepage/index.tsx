import EventsBox from "@/components/DiscordEvents";
import Features from "@/components/Homepage/Features";
import Sponsors from "@/components/Homepage/Sponsor";
import HomeHero from "./HomeHero";


export default function Homepage() {
    return (
        <div
            className={`container mx-auto p-2 md:p-0 flex flex-col items-center justify-center mt-16 max-w-3xl`}
        >
            <HomeHero />
            <Features />
            <Sponsors />
            {/* <EventsBox /> */}
        </div>
    )
}