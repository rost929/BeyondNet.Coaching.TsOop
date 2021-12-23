import INotification from './notificationInterface';

class FacebookNotification implements INotification {
  public post(title: string, message: string): void {
    console.log(`Sending ${title} - ${message} - facebook`);
  }
}

export default FacebookNotification;
