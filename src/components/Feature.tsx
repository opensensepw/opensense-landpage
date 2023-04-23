import Link from "next/link";

type FeatureProps = {
    title: string;
    description: string;
    links: {
        url: string;
        text: string;
        icon: JSX.Element;
    }[]
}

export default function Feature(props: FeatureProps) {
    return (
        <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-lightText dark:text-darkText">
                {props.title}
            </h5>
            <p className="mb-3 font-normal text-lightText dark:text-darkText">
                {props.description}
            </p>
            <div className='grid grid-cols-1'>
                {props.links.map(link => (
                    <Link
                        key={link.url}
                        href={link.url}
                        target='_blank'
                        className='justify-center gap-2 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2'
                    >
                        {link.icon} {link.text}
                    </Link>
                ))}
            </div>
        </div>
    )
}