import AnimatedLogo from '@/components/AnimatedLogo'
import Feature from '@/components/Feature'
import Header from '@/components/Header'
import { DiscordIcon, KnowledgeIcon, TwitterIcon, YoutubeIcon } from '@/components/SVGIcons'
import config from '@/config'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>OpenSense</title>
      </Head>

      <div>
        <Header />

        <div className={`container mx-auto flex flex-col items-center justify-center mt-16 max-w-3xl`}>
          <AnimatedLogo />
          <div className='mt-4'>
            <div className='dark:text-darkText text-lightText font-thin text-xl text-center'>
              a community to promote open blockchain science, security and education
            </div>
          </div>

          <div className='grid md:grid-cols-2 mt-4 gap-2'>
            <Feature
              title={'A strong community'}
              description={'A community of blockchain researchers, developers and enthusiasts all together to unmask the secrets of blockchain technology'}
              links={[
                {
                  icon: <DiscordIcon />,
                  text: "Join our discord",
                  url: config.urls.discord
                },
                {
                  icon: <TwitterIcon />,
                  text: "Follow us on twitter",
                  url: config.urls.twitter
                }
              ]}
            />
            <Feature
              title={'Interviews & Podcasts'}
              description={'Interviews with people across all the web3 space and podcasts about blockchain technology'}
              links={[
                {
                  icon: <DiscordIcon />,
                  text: "Join our discord",
                  url: config.urls.discord
                },
                {
                  icon: <YoutubeIcon />,
                  text: "Listen on Youtube",
                  url: config.urls.youtube
                }
              ]}
            />
            <Feature
              title={'Resource library'}
              description={'Time is gold so we collect almost all the info we gather into a database where we can filter out by categories'}
              links={[
                {
                  icon: <KnowledgeIcon />,
                  text: "Get the knowledge",
                  url: config.urls.database
                },
              ]}
            />
          </div>

          {/* <div className='mt-8'>
            <div className=' grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6'>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img src="./images/clients/microsoft.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
              </div>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img src="./images/clients/airbnb.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
              </div>
              <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                <img src="./images/clients/google.svg" className="h-9 w-auto m-auto" loading="lazy" alt="client logo" width="" height="" />
              </div>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img src="./images/clients/ge.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
              </div>
              <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                <img src="./images/clients/netflix.svg" className="h-8 w-auto m-auto" loading="lazy" alt="client logo" width="" height="" />
              </div>
              <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                <img src="./images/clients/google-cloud.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
              </div>
            </div>
          </div> */}

        </div>

      </div>
    </>
  )
}
