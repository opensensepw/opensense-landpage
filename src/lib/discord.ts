import { REST } from "@discordjs/rest"
import { API } from "@discordjs/core"
import config from "@/config";


//https://discord.com/developers/docs/reference#image-formatting
export function generateDiscordScheduledEventImageUrl(scheduledEventId: string, coverImageHash: string, fileExtension: string, imageSize:number) {
    const root = "https://cdn.discordapp.com/";
    const endpoint = "guild-events"
    return `${root}${endpoint}/${scheduledEventId}/${coverImageHash}${fileExtension}?size=${imageSize}`
}

export async function getDiscordScheduledEvents(botToken: string, guildId: string): Promise<ScheduledEvent[]> {
    const discordAPI = new API(
        new REST().setToken(botToken)
    )
    const discordEvents = await discordAPI.guilds.getScheduledEvents(guildId);
    return discordEvents.map(event => (
        {
            name: event.name,
            description: event.description,
            image: event.image && generateDiscordScheduledEventImageUrl(event.id, event.image, '.png', config.images.size),
            end: event.scheduled_end_time,
            start: event.scheduled_start_time,
        } as ScheduledEvent
    )).sort((a,b) => new Date(a.start).getTime() - new Date(b.start).getTime())
}