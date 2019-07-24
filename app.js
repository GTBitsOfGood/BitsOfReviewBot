const { App } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
    token: process.env.SLACK_BOT_TOKEN_BORB,
    signingSecret: process.env.SLACK_SIGNING_SECRET_BORB
});

// Listens to incoming messages that contain "hello"
app.message('hello', ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    say({
        blocks: [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `Hey there <@${message.user}>!`
                },
                "accessory": {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Click Me"
                    },
                    "action_id": "button_click"
                }
            }
        ]
    });
});

app.action('button_click', ({ body, ack, say }) => {
    // Acknowledge the action
    ack();
    say(`<@${body.user.id}> clicked the button`);
});

(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    console.log('Bolt app is running!');
})();