class TwitterNotification {
    public send(hashtagId: string, title: string, message: string): void{
        console.log(`Sending ${title} - ${message} with ${hashtagId} - Twitter`);
    }
}

export default TwitterNotification;