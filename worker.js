export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    try {
      if (request.method === "HEAD") {
        const getRequest = new Request(request.url, {
          method: "GET",
          headers: request.headers,
        });

        const response = await env.ASSETS.fetch(getRequest);

        return new Response(null, {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
        });
      }

      return await env.ASSETS.fetch(request);
    } catch (error) {
      const fallbackRequest = new Request(url.origin + "/", {
        method: request.method === "HEAD" ? "GET" : request.method,
        headers: request.headers,
      });

      const response = await env.ASSETS.fetch(fallbackRequest);

      if (request.method === "HEAD") {
        return new Response(null, {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
        });
      }

      return response;
    }
  },
};