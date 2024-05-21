import { withCORS } from "./utils";

// Export a default object containing event handlers
export default {
	// The fetch handler is invoked when this worker receives a HTTP(S) request
	// and should return a Response (optionally wrapped in a Promise)
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext,
	): Promise<Response> {
		// You'll find it helpful to parse the request.url string into a URL object. Learn more at https://developer.mozilla.org/en-US/docs/Web/API/URL
		const url = new URL(request.url);

		// Get a query param value (?proxyUrl=...)
		const proxyUrl = url.searchParams.get("proxyUrl");

		if (!proxyUrl) {
			return new Response("Bad request: Missing `proxyUrl` query param", {
				status: 400,
			});
		}

		const response = await fetch(proxyUrl, request);

		return new Response(response.body, {
			headers: withCORS(new Headers(), request),
		});
	},
};
