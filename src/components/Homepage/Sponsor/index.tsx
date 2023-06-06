import config from "@/config";
import Image from "next/image";
import Link from "next/link";

function Sponsor(sponsor: Sponsor) {
    return (
        <Link
            href={sponsor.url}
            target="_blank"
            referrerPolicy="no-referrer"
            className="p-4 grayscale dark:grayscale-0 transition duration-200 hover:grayscale-0 dark:hover:grayscale">
            {<sponsor.icon />}
        </Link>
    )
}

export default function Sponsors() {
    return (
        <div className="mt-8 ">
            <p className="text-center text-2xl dark:text-darkText  text-lightText font-bold">
                Trusted by
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
                {config.sponsors.map((sponsor) => (
                    <Sponsor
                        key={sponsor.url}
                        icon={sponsor.icon}
                        name={sponsor.name}
                        url={sponsor.url}
                    />
                ))}

            </div>
        </div>
    )
}