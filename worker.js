export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "HEAD") {
      return new Response(null, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=UTF-8",
          "Cache-Control": "public, max-age=300",
        },
      });
    }

    if (request.method === "GET") {
      try {
        return await env.ASSETS.fetch(request);
      } catch {
        return await env.ASSETS.fetch(
          new Request(url.origin + "/", {
            method: "GET",
            headers: request.headers,
          })
        );
      }
    }

    return await env.ASSETS.fetch(request);
  },
};