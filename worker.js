export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    const isStaticAsset =
      url.pathname.includes(".") ||
      url.pathname.startsWith("/assets/") ||
      url.pathname.startsWith("/images/") ||
      url.pathname.startsWith("/gallery/");

    const isPageRoute =
      request.method === "GET" || request.method === "HEAD";

    try {
      if (isPageRoute && !isStaticAsset) {
        const pageRequest = new Request(url.origin + "/", {
          method: "GET",
          headers: request.headers,
        });

        const response = await env.ASSETS.fetch(pageRequest);

        if (request.method === "HEAD") {
          return new Response(null, {
            status: 200,
            headers: response.headers,
          });
        }

        return response;
      }

      return await env.ASSETS.fetch(request);
    } catch (error) {
      return new Response("Site route error", {
        status: 500,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }
  },
};