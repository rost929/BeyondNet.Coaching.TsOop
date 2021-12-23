import NotificationService from './src/service/notification';
import INotification from './src/providers/notificationInterface';
import FacebookNotification from './src/providers/facebookNotification';
import twitterNotification from './src/providers/twitterNotification';
import twitterAdapterNotification from './src/providers/twitterAdapterNotification';

const providers: INotification[] = [
  new FacebookNotification(),
  new twitterAdapterNotification(new twitterNotification())
];

const notificationService = new NotificationService(providers);
notificationService.post(
  'Challenge CohenTeam',
  'This challenge content is about  adapter design patternr'
);
