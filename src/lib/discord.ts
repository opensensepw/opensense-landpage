//https://discord.com/developers/docs/reference#image-formatting
export function generateDiscordScheduledEventImageUrl(scheduledEventId: string, coverImageHash: string, fileExtension: string, imageSize:number) {
    const root = "https://cdn.discordapp.com/";
    const endpoint = "guild-events"
    return `${root}${endpoint}/${scheduledEventId}/${coverImageHash}${fileExtension}?size=${imageSize}`
}