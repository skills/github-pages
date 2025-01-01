from telethon import TelegramClient, events
from telethon.tl.types import PeerChannel
import re

api_id = '29005061'
api_hash = '6817c67bc2e8c02a3852d77e1015da5a'
bot_token = '7779760620:AAGJ-WEzS2bLpy0LAvjqDV-JbEt1QvxNAv0'


client = TelegramClient('bot_session', api_id, api_hash).start(bot_token=bot_token)

advertisements = [
    "https://example.com",
    "http://example.org",
    "https://ad-link.com"
]

ad_pattern = re.compile(r'https?://[^\s]+')
@client.on(events.NewMessage())
async def handler(event):
    message = event.message
    chat = await event.get_chat()

    if isinstance(chat, PeerChannel):

        if ad_pattern.search(message.text):

            try:
                await client.kick_participant(chat, message.sender_id)
                print(f"User {message.sender_id} has been kicked for sending an advertisement link.")
            except Exception as e:
                print(f"Error: {e}")


            for link in advertisements:
                await client.send_message(chat, f"Check out this link: {link}")
            print("Advertisement links sent!")
        else:
            print(f"Message from {message.sender_id} did not contain a valid advertisement.")


client.start()
client.run_until_disconnected()
