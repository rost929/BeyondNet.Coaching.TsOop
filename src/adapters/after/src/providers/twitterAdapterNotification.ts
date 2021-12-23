import INotification from "./notificationInterface";
import twitterNotification from './twitterNotification';

class TWitterAdapterNotification implements INotification{
    constructor(private twitterNotification: twitterNotification){ }

    public post(title: string, mesagge: string): void{
        this.twitterNotification.send("#GlobantTeam", title, mesagge);
    }
}

export default TWitterAdapterNotification;