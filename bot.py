import discord
from discord.ext import commands
import openai

# Set your OpenAI API key here
key = "sk-proj-rPy72bWqhcZ7T8CPI543T3BlbkFJiS5tJrqVdZUt63o4P9qP"
openai.api_key = key

def ask_question(prompt):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful assistant, you mostly help with minecraft related questions especially with exploit fixing, command blocks and datapacks. Do not introduce yourself or add any questions."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
        max_tokens=100
    )
    return response.choices[0].message['content'].strip()

# Set your Discord bot token here
DISCORD_TOKEN = 'MTI0MDMyMjA5ODU2ODg5MjU2Nw.GbI98x.A-7tPT06RiZkK-xBdRm_owP3piQdnvFLPfCe8A'

# Create a new instance of the bot
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix='!', intents=intents)

@bot.event
async def on_ready():
    await bot.change_presence(activity=discord.Game(name="Made by the soft vortex team"))
    print(f'Logged in as {bot.user.name}')

@bot.command()
async def ask(ctx, *, question: str):
    try:
        response = ask_question(question)
        await ctx.send(f"VORTEX AI: {response}")
    except Exception as e:
        await ctx.send(f"Error: {e}")

bot.run(DISCORD_TOKEN)
