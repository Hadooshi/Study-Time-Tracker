
import { LocalNotifications, ScheduleOptions } from '@capacitor/local-notifications';

export async function requestNotificationPermission() {
  const result = await LocalNotifications.requestPermissions();
  return result;
}

export async function sendLocalNotification(title: string, body: string) {
  await LocalNotifications.schedule({
    notifications: [
      {
        title,
        body,
        id: Date.now(),
        schedule: { at: new Date(Date.now() + 1000) },
        sound: undefined,
        attachments: undefined,
        actionTypeId: "",
        extra: null,
      },
    ],
  });
}
