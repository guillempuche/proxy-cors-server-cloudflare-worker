# Proxy Server To Avoid Browser CORS

Read more about the CORS topic in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

This project is a Cloudflare Worker or Function as a Services (Faas) deployed on Cloudflare.

The function is used in the mobile app and web app [App Curriculum](https://github.com/guillempuche/app_curriculum).

## Run the worker locally

1. Open the project in your terminal, and install the packages running this command `npm i`.
2. Run locally the worker `npx wrangler dev` or `npm start`.
3. Open a browser tab at http://localhost:8787/ to see your worker in action
4. Run `npx wrangler deploy` or `npm run deploy` to publish your worker

## Resources

- Cloudflare Workers https://developers.cloudflare.com/workers/
- Cloudflare Wrangler or CLI https://developers.cloudflare.com/workers/wrangler
- Workers configuration file `wrangler.toml` in https://developers.cloudflare.com/workers/wrangler/configuration/ and https://developers.cloudflare.com/workers/configuration/sites/configuration/
- Code examples https://github.com/cloudflare?q=worker&type=all&language=javascript