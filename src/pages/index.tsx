

import dynamic from 'next/dynamic'
import localFont from 'next/font/local'
import Link from 'next/link'
const DarkModeButton = dynamic(() => import("../components/DarkModeButton"), {
  ssr: false,
  // loading: () =>       <div className='flex justify-end mx-4'><button> 🌞/🌙</button></div>
})

const graffityCiti = localFont({ src: '../../public/fonts/Graffiti City.otf' })

export default function Home() {
  return (
    <div>
      <div className='mt-2 mx-4'>
        <DarkModeButton />
      </div>

      <div className={`container mx-auto flex flex-col items-center justify-center mt-16 `}>
        {/* logo */}
        <div className='relative w-full flex justify-center sm:flex-none sm:w-auto'>
          <svg id="Layer_1"
            className='text-slate-100 fill-slate-800 dark:fill-slate-100'
            width={'20rem'}
            //fill={} 
            data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1678.36 285.44">
            <path d="M164.8,24.92a83,83,0,0,0-30.2-18.6A111.93,111.93,0,0,0,96.8.12a104.59,104.59,0,0,0-38,6.8A90.77,90.77,0,0,0,28,26.52,88.16,88.16,0,0,0,7.4,58.32q-7.41,19-7.4,43,0,23.21,7.2,41.2a84.16,84.16,0,0,0,20,30.2,86.25,86.25,0,0,0,30.2,18.6,108.84,108.84,0,0,0,37.8,6.4,104.63,104.63,0,0,0,38-6.8,90.57,90.57,0,0,0,30.8-19.6,88.42,88.42,0,0,0,20.6-31.6q7.4-18.8,7.4-42.4,0-24-7.2-42A86.37,86.37,0,0,0,164.8,24.92Zm-25.6,104.6q-4,12.21-10.4,19.4a37.26,37.26,0,0,1-15,10.4,49.46,49.46,0,0,1-17.4,3.2,45.63,45.63,0,0,1-17.8-3.6,40.08,40.08,0,0,1-15.2-11.4,59.47,59.47,0,0,1-10.6-19.6q-4-11.79-4-28.6,0-18.39,4-30.8t10.4-19.8A35,35,0,0,1,78,38.32a51.9,51.9,0,0,1,17.6-3,45.7,45.7,0,0,1,17.8,3.6,41.08,41.08,0,0,1,15.2,11.2q6.6,7.6,10.6,19.8t4,29.4Q143.2,117.32,139.2,129.52Z" /><path d="M311.61.08q-18.41,0-32.8,7a99,99,0,0,0-25.6,17.8l-5.55-22.2L211.21,20.54v264.9l46.8-19.8V187.28a59,59,0,0,0,17.8,7.6,86.91,86.91,0,0,0,22.2,2.8,102.57,102.57,0,0,0,36-6.4,83.19,83.19,0,0,0,30.2-19.4q13-13,20.8-32.2t7.8-44.8q0-44.79-21.8-69.8T311.61.08Zm27.8,127q-4.61,12.6-12,20.4a45.79,45.79,0,0,1-16.6,11.4,51.17,51.17,0,0,1-18.8,3.6,64.38,64.38,0,0,1-18.4-2.6,43.54,43.54,0,0,1-15.6-8.2V57.28q5.6-6.8,16.4-13.8t25.2-7q22.39,0,33.4,16.6t11,43Q344,114.48,339.41,127.08Z" /><path d="M506.79.08A101.58,101.58,0,0,0,468,7.28a84.49,84.49,0,0,0-30,20.4,92.48,92.48,0,0,0-19.2,31.6q-6.8,18.41-6.8,40.8,0,25.61,8.21,44a84.59,84.59,0,0,0,22.2,30.4A88.63,88.63,0,0,0,475,192.08a137.57,137.57,0,0,0,39.8,5.6A193.06,193.06,0,0,0,541,196l29.59-43.35-.16-.6a136.58,136.58,0,0,1-23.41,7.6,124.6,124.6,0,0,1-27.79,2.8q-26.42,0-42.61-12.8t-16.19-38.8v-1.6H589.59V87.68q0-41.19-22.39-64.4T506.79.08ZM461.2,77.28q2.39-19.59,14-31.6t29.59-12a37.75,37.75,0,0,1,16.61,3.4,30.3,30.3,0,0,1,11.39,9.4,39.79,39.79,0,0,1,6.41,13.8,65.12,65.12,0,0,1,2,16.2Z" /><path d="M780,193.68V65.28q0-31.2-16.8-48.2t-47.6-17a78.49,78.49,0,0,0-34.8,7.6,108.91,108.91,0,0,0-29.2,21.2L645.75,4.35l-37,21.16V193.68H656v-134a84.15,84.15,0,0,1,22-16.6q12-6.19,23.6-6.2,15.6,0,23.4,9.4t7.8,24.6v122.8Z" /><path d="M889.55,82.08l-12-3.6q-19.2-5.6-25.6-11t-6.4-13a16.4,16.4,0,0,1,7.8-14.4q7.8-5.19,22.6-5.2A97.38,97.38,0,0,1,903.54,39l28.4-26.89v0a128.12,128.12,0,0,0-28.6-9,166,166,0,0,0-31.8-3,99.3,99.3,0,0,0-29.8,4.2A68.33,68.33,0,0,0,819,16.08a53.44,53.44,0,0,0-14.6,18.2,51.5,51.5,0,0,0-5.2,23q0,21.21,11.8,34.2t36.6,21l12.4,4q18.79,5.61,26.6,10.4t7.8,14.4q0,21.21-33.2,21.2a100.63,100.63,0,0,1-27-3.6c-2.08-.58-4.13-1.19-6.16-1.85l-28.75,27.89q25.57,12.77,64.31,12.76,36,0,56.8-16.2t20.8-43.8q0-21.6-13-34.8T889.55,82.08Z" /><path d="M1051.38.08a101.5,101.5,0,0,0-38.8,7.2,84.31,84.31,0,0,0-30,20.4,92.17,92.17,0,0,0-19.2,31.6q-6.81,18.41-6.8,40.8,0,25.61,8.2,44a84.59,84.59,0,0,0,22.2,30.4,88.6,88.6,0,0,0,32.6,17.6,137.47,137.47,0,0,0,39.8,5.6,193,193,0,0,0,26.17-1.65l29.59-43.35-.16-.6a136.76,136.76,0,0,1-23.4,7.6,124.76,124.76,0,0,1-27.8,2.8q-26.41,0-42.61-12.8T1005,110.88v-1.6h129.19V87.68q0-41.19-22.39-64.4T1051.38.08Zm-45.6,77.2q2.4-19.59,14-31.6t29.6-12a37.74,37.74,0,0,1,16.6,3.4,30.41,30.41,0,0,1,11.4,9.4,40,40,0,0,1,6.4,13.8,65.12,65.12,0,0,1,2,16.2Z" /><path d="M1324.57,193.65V65.25q0-31.2-16.8-48.2t-47.6-17a78.36,78.36,0,0,0-34.8,7.6,108.32,108.32,0,0,0-29.2,21.2l-5.84-24.54-37,21.16V193.65h47.2v-134a83.55,83.55,0,0,1,22-16.6,51.06,51.06,0,0,1,23.6-6.2q15.6,0,23.4,9.4t7.8,24.6v122.8Z" /><path d="M1434.11,82.08l-12-3.6q-19.2-5.6-25.6-11t-6.4-13a16.4,16.4,0,0,1,7.8-14.4q7.8-5.19,22.6-5.2A97.38,97.38,0,0,1,1448.1,39l28.4-26.89v0a128.12,128.12,0,0,0-28.6-9,166,166,0,0,0-31.8-3,99.3,99.3,0,0,0-29.8,4.2,68.33,68.33,0,0,0-22.8,11.8,53.44,53.44,0,0,0-14.6,18.2,51.5,51.5,0,0,0-5.2,23q0,21.21,11.8,34.2t36.6,21l12.4,4q18.79,5.61,26.6,10.4t7.8,14.4q0,21.21-33.2,21.2a100.63,100.63,0,0,1-27-3.6c-2.08-.58-4.13-1.19-6.16-1.85l-28.75,27.89q25.58,12.77,64.31,12.76,36,0,56.8-16.2t20.8-43.8q0-21.6-13-34.8T1434.11,82.08Z" /><path d="M1595.56,0a101.5,101.5,0,0,0-38.8,7.2,84.31,84.31,0,0,0-30,20.4,92.17,92.17,0,0,0-19.2,31.6q-6.81,18.4-6.8,40.8,0,25.6,8.2,44a84.59,84.59,0,0,0,22.2,30.4,88.68,88.68,0,0,0,32.6,17.6,137.47,137.47,0,0,0,39.8,5.6,193.17,193.17,0,0,0,26.18-1.65l29.58-43.35-.16-.6a136.76,136.76,0,0,1-23.4,7.6,124.7,124.7,0,0,1-27.8,2.8q-26.4,0-42.6-12.8t-16.2-38.8v-1.6h129.2V87.6q0-41.19-22.4-64.4T1595.56,0ZM1550,77.2q2.4-19.59,14-31.6t29.6-12a37.74,37.74,0,0,1,16.6,3.4,30.41,30.41,0,0,1,11.4,9.4,40,40,0,0,1,6.4,13.8,65.12,65.12,0,0,1,2,16.2Z" />
          </svg>
          <div className='absolute top-9 left-56'>
            <div className={`${graffityCiti.className} text-red-600 dark:text-red-400 drop-shadow text-4xl overflow-hidden whitespace-nowrap animate-typewriter w-[8ch]`}>
              NOT A <span className='line-through'>DAO </span>
            </div>
          </div>
        </div>
        {/* subtitle */}
        <div className='mt-4'>
          <div className='dark:text-gray-300 text-gray-800 font-thin text-xl text-center'>
            a community to promote open blockchain science, security and education
          </div>
        </div>
        {/* buttons */}
        <div className='grid md:grid-cols-2 mt-4 gap-2'>
          <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">A strong community</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A community of blockchain researchers, developers and enthusiasts all together to unmask the secrets of blockchain technology</p>
            <div className='grid grid-cols-1'>
              <Link href={''} className='justify-center gap-2 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2'>
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd">
                  <path
                    d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                </svg>
                Join our discord
              </Link>
              <Link href={'https://twitter.com/opensensepw'} className='justify-center gap-2 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
                Join our Twitter
              </Link>
            </div>
          </div>

          <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Interviews & Podcasts</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Interviews with people across all the web3 space and podcasts about blockchain technology</p>
            <div className='grid grid-cols-1'>
              <Link href={''} className='justify-center gap-2 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2'>
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd">
                  <path
                    d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                </svg>
                Join our discord
              </Link>
              <Link href={'https://www.youtube.com/@opensensepw'} className='justify-center gap-2 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
                Listen on Youtube
              </Link>
            </div>
          </div>

          <div className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Resource library</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Time is gold so we collect almost all the info we gather into a database where we can filter out by categories</p>
            <Link href={''} className='w-full justify-center gap-2 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2'>
              <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg>

              Get the knowledge
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
