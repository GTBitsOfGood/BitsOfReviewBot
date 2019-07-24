const { App } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
    token: process.env.SLACK_BOT_TOKEN_BORB,
    signingSecret: process.env.SLACK_SIGNING_SECRET_BORB
});

// Listens to incoming messages that contain "hello"
app.message('next', ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    say({
        blocks: [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `Ok, <@${message.user}>! Click the button when you're ready to get the next application...`
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
});

app.event('app_mention', ({ event, say }) => {
    if (event.text.includes('begin')) {
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

    // TODO: Instead of static questions & answers, we need to pull this data from the db.
    // TODO: Maybe turn this into a dialog?
    say(`Ok, I will pretend to grab an application from the database for you, <@${body.user.id}>...`);
    say({
        blocks: [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*QUESTION #1:* \nI am text from the database."
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*ANSWER #1:* ```I am also text from the database. I'm more important though!```"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "Evaluation Score"
                },
                "accessory": {
                    "type": "static_select",
                    "placeholder": {
                        "type": "plain_text",
                        "text": "Select an item",
                        "emoji": true
                    },
                    "options": [
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "1 - Poor",
                                "emoji": true
                            },
                            "value": "value-0"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "2 - Fair",
                                "emoji": true
                            },
                            "value": "value-1"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "3 - Average",
                                "emoji": true
                            },
                            "value": "value-2"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "4 - Great",
                                "emoji": true
                            },
                            "value": "value-3"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "5 - Excellent",
                                "emoji": true
                            },
                            "value": "value-4"
                        }
                    ]
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*QUESTION #2:* \nI am text from the database."
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*ANSWER #2:* ```I am also text from the database. I'm more important though!```"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "Evaluation Score"
                },
                "accessory": {
                    "type": "static_select",
                    "placeholder": {
                        "type": "plain_text",
                        "text": "Select an item",
                        "emoji": true
                    },
                    "options": [
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "1 - Poor",
                                "emoji": true
                            },
                            "value": "value-0"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "2 - Fair",
                                "emoji": true
                            },
                            "value": "value-1"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "3 - Average",
                                "emoji": true
                            },
                            "value": "value-2"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "4 - Great",
                                "emoji": true
                            },
                            "value": "value-3"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "5 - Excellent",
                                "emoji": true
                            },
                            "value": "value-4"
                        }
                    ]
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*QUESTION #3:* \nI am text from the database."
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*ANSWER #3:* ```I am also text from the database. I'm more important though!```"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "Evaluation Score"
                },
                "accessory": {
                    "type": "static_select",
                    "placeholder": {
                        "type": "plain_text",
                        "text": "Select an item",
                        "emoji": true
                    },
                    "options": [
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "1 - Poor",
                                "emoji": true
                            },
                            "value": "value-0"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "2 - Fair",
                                "emoji": true
                            },
                            "value": "value-1"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "3 - Average",
                                "emoji": true
                            },
                            "value": "value-2"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "4 - Great",
                                "emoji": true
                            },
                            "value": "value-3"
                        },
                        {
                            "text": {
                                "type": "plain_text",
                                "text": "5 - Excellent",
                                "emoji": true
                            },
                            "value": "value-4"
                        }
                    ]
                }
            }
        ]
    });
});

(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    console.log('Bolt app is running!');
})();