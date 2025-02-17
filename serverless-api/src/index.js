/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npx wrangler dev src/index.js` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npx wrangler publish src/index.js --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

/*
addEventListener("fetch", event => {
	event.respondWith(handleRequest(event.request))
  })
  
  // No request context available here
  
  async function handleRequest(request){
	const body = await request.json()
	return new Response(JSON.stringify(body))
  }
  */


export default {
	async fetch(request, env, ctx) {
		const body = await request.json();
		return new Response(JSON.stringify(body))
		//return new Response("Hello World!");
	},
};
