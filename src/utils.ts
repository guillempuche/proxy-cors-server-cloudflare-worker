export function withCORS(headers: Headers, request: Request): Headers {
	headers.set('access-control-allow-origin', '*');
	var corsMaxAge = request.headers.get('Access-Control-Max-Age');

	if (request.method === 'OPTIONS' && corsMaxAge) {
		headers.set('access-control-max-age', corsMaxAge);
	}
	if (request.headers.has('access-control-request-method')) {
		headers.set('access-control-allow-methods', request.headers.get('access-control-request-method')!);
		request.headers.delete('access-control-request-method');
	}
	if (request.headers.has('access-control-request-headers')) {
		headers.set('access-control-allow-headers', request.headers.get('access-control-request-headers')!);
		request.headers.delete('access-control-request-headers');
	}

	headers.set('access-control-expose-headers', Object.keys(headers).join(','));

	return headers;
}
