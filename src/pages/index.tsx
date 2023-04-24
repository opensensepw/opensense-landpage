import AnimatedLogo from '@/components/AnimatedLogo'
import Feature from '@/components/Feature'
import Header from '@/components/Header'
import { DiscordIcon, KnowledgeIcon, TwitterIcon, YoutubeIcon } from '@/components/SVGIcons'
import config from '@/config'
import Head from 'next/head'
import Sponsor from '@/components/Sponsor'

export default function Home() {
  return (
    <>
      <Head>
        <title>OpenSense</title>
      </Head>

      <>
        <Header />

        <div className={`container mx-auto p-2 md:p-0 flex flex-col items-center justify-center mt-16 max-w-3xl `}>
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
              title={'Events & Resource library'}
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

          <div className='mt-8 '>
            <p className='text-center text-2xl dark:text-darkText  text-lightText font-bold'>Trusted by</p>
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6'>
              {config.sponsors.map(sponsor => (
                <Sponsor
                  key={sponsor.url}
                  icon={sponsor.icon}
                  name={sponsor.name}
                  url={sponsor.url}
                />
              ))}
            </div>
          </div>

        </div>

      </>
    </>
  )
}
