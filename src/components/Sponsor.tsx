import Link from "next/link";

export default function Sponsor(sponsor: Sponsor) {
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