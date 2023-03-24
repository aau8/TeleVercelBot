import {start} from "telebot-vercel"
import bot from "../bot.mjs"

// export default start({bot})

export default async ({ body }, { json }) => {
	let response = {status: false};
	response = await bot?.receiveUpdates([body]);
	// console.log('ok')
	console.log(response)
	// json(response)
}