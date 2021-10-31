import { Expo, ExpoPushMessage } from "expo-server-sdk";
import { getPlayerExpoPushTokenByGameId } from "./services/players";
import { sendMessages } from "./utils/expo";
import { createGameNotification } from "./utils/message";

const playerPushTokens: string[] = getPlayerExpoPushTokenByGameId(
  "not a real game uuid"
);

let messages: ExpoPushMessage[] = [];
for (let pushToken of playerPushTokens) {
  if (!Expo.isExpoPushToken(pushToken)) {
    console.error(`Push token ${pushToken} is not a valid Expo push token`);
    continue;
  }

  messages.push(createGameNotification(pushToken));
}
sendMessages(messages);
