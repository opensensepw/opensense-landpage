import Head from "next/head";
import { type ReactNode } from "react";
import { Roboto } from 'next/font/google'
import Header from "./Header";

const roboto = Roboto({
  weight:['400','500','700'],
  subsets:['latin']
})


export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Head>
                <title>OpenSense</title>
            </Head>
            
            <Header />
            <main className={roboto.className}>
                {children}
            </main>
        </div>
    )
}