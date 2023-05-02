type Sponsor = {
    name: string;
    url: string;
    icon: () => JSX.Element;
}

interface Config {
    urls: {
        [key: string]: string;
    };
    sponsors: Sponsor[];
    images: {
        size: number;
    };
}