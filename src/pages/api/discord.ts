import generalConfig from '@/config';
import { generateDiscordScheduledEventImageUrl } from '@/lib/discord';
import type { NextApiRequest, NextApiResponse } from 'next';


var chachedEvents:ScheduledEvent[] = []
var lastCache = Date.now()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const headers = {
        'Authorization': `Bot ${process.env.BOT_TOKEN}`,
        'Content-Type': 'application/json',
        'Cache-Control': 'public s-maxage=86400',
    }
    
    if( (Date.now() - lastCache) / 1000 <= 30 && chachedEvents.length >0){
        return res.status(200).json({events:chachedEvents})
    }
    const response = await fetch(`https://discord.com/api/v9/guilds/${process.env.GUILD_ID}/events`, { headers,next:{revalidate:120}})
    
    if(!response.ok){
        return res.status(400).json({error: 'some error ocurred'})
    }else{
        const data = await response.json()
        const events = data.map((event:any) => (
            {
                name: event.name,
                description: event.description,
                image: event.image && generateDiscordScheduledEventImageUrl(event.id, event.image, '.png', generalConfig.images.size),
                end: event.scheduled_end_time,
                start: event.scheduled_start_time,
            } 
        )) as ScheduledEvent[]
        const sortedEvents = events.sort((a,b) => new Date(a.start).getTime() - new Date(b.start).getTime())
        chachedEvents = sortedEvents
        res.setHeader('Cache-Control', 'public s-max-age=86400')        
        return res.status(200).json({ events:sortedEvents });
    }
    
    

    
}