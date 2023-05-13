import EventsBox from "@/components/DiscordEvents";
import Features from "@/components/Feature";
import Sponsors from "@/components/Sponsor";
import AnimatedLogo from "./AnimatedLogo";

function HomeHero() {
    return (
        <>
            <AnimatedLogo />
            <div className="mt-4">
                <div className="dark:text-darkText text-lightText font-thin text-xl text-center">
                    a community to promote open blockchain science, security and
                    education
                </div>
            </div>
        </>
    )
}

export default function Homepage() {
    return (
        <div
            className={`container mx-auto p-2 md:p-0 flex flex-col items-center justify-center mt-16 max-w-3xl`}
        >
            <HomeHero />
            <Features />
            <Sponsors />
            <EventsBox />
        </div>
    )
}