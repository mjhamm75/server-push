import { ExpoPushMessage, ExpoPushToken } from "expo-server-sdk";

export const createGameNotification = (
  pushToken: ExpoPushToken
): ExpoPushMessage => {
  return {
    to: pushToken,
    sound: "default",
    body: "New notification",
    data: { gameCount: "8" },
  };
};
