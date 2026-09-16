export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request)

    if (response.status !== 404) {
      return response
    }

    const url = new URL(request.url)
    const acceptsHtml = request.headers.get('accept')?.includes('text/html')

    if (request.method === 'GET' && acceptsHtml && !url.pathname.includes('.')) {
      return env.ASSETS.fetch(new Request(new URL('/index.html', url), request))
    }

    return response
  },
}
