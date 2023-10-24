import { Message, Whatsapp, create } from 'venom-bot'
import { openai } from './lib/openai';

async function completion() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

create({
    session: 'food-gpt',
    disableWelcome: true,
}).then(async (client: Whatsapp) => await start(client))
    .catch((err) => {
    console.log(err)
})

async function start (client: Whatsapp){
    client.onMessage(async (message: Message) => {
        if(!message.body || message.isGroupMsg){
            return
        }

        console.log('message', message)

        const content = "Olá"

        await client.sendText(message.from, content)
    })
}