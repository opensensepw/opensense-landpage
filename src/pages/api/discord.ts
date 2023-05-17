import config from '@/config';
import { generateDiscordScheduledEventImageUrl } from '@/lib/discord';
import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

const cors = Cors({
    methods:['GET','HEAD']
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    fn: Function
  ) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result: any) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await runMiddleware(req, res, cors)

    const headers = {
        'Authorization': `Bot ${process.env.BOT_TOKEN}`,
        'Content-Type': 'application/json',
        'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
    }
    
    const response = await fetch(`https://discord.com/api/v9/guilds/${process.env.GUILD_ID}/events`, { headers })
    if(!response.ok){
        res.status(400).json({error: 'some error ocurred'})
    }else{
        const data = await response.json()
        const events = data.map((event:any) => (
            {
                name: event.name,
                description: event.description,
                image: event.image && generateDiscordScheduledEventImageUrl(event.id, event.image, '.png', config.images.size),
                end: event.scheduled_end_time,
                start: event.scheduled_start_time,
            } 
        )) as ScheduledEvent[]
        const sortedEvents = events.sort((a,b) => new Date(a.start).getTime() - new Date(b.start).getTime())
        res.setHeader('Cache-Control', 'max-age=120')
        res.status(200).json({ events:sortedEvents });
    }
    
    

    
}