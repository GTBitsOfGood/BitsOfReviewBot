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
                    "text": `Hi <@${message.user}>!`
                },
                "accessory": {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Click me"
                    },
                    "action_id": "button_click"
                }
            }
        ]
    });
});

app.event('app_mention', ({ event, say }) => {
    if (event.text.endsWith('begin')) {
        say({
            blocks: [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": `Ok, <@${event.user}>!`
                    },
                    "accessory": {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "Get Application"
                        },
                        "action_id": "button_click"
                    }
                }
            ]
        });
    }
    else {
        say(`I'm sorry, <@${event.user}>, but I don't understand. :(`);
    }
});


app.action('button_click', ({ body, ack, say }) => {
    // Acknowledge the action
    ack();
    say(`Ok, I will pretend to grab an application from the database for you, <@${body.user.id}>...`);

    // TODO: Present the form, populated with data from the database
});

(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    console.log('Bolt app is running!');
})();