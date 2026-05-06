export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/hello") {
      return new Response("HELLO WORKING!");
    }

    return env.ASSETS.fetch(request);
  },
};