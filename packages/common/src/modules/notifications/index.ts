import { Notifications, Permissions } from 'expo';

export async function registerForPushNotificationsAsync() {
    try {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
        console.log('PUSH NOTIFICATIONS CURRENT STATUS: ', existingStatus)
        let finalStatus = existingStatus
        if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
            finalStatus = status
        }
        console.log('NOTIF FINAL STATUS: ', finalStatus )
        if (finalStatus !== 'granted') { return null }
      } catch(err) { console.log('ERROR WHILE REGISTERING FOR PUSH NOTIFICATIONS: ', err) }
  let token = await Notifications.getExpoPushTokenAsync();
  return token
}

export function handleNotifications(notification:any) {
    console.log('NOTIFICATION RECEIVED: ', JSON.stringify(notification))
}