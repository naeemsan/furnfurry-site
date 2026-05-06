export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (
      request.method === "POST" &&
      url.pathname === "/api/generate-fursona-image"
    ) {
      try {
        const body = await request.json();

        const prompt = [
          "cute original furry fursona character design",
          body.species || "wolf",
          body.style || "toony",
          body.colorMood || "soft colors",
          body.environment || "fantasy background",
          body.personality || "friendly expressive character",
          "full body",
          "clean digital art",
          "soft lighting",
          "no text",
          "no watermark",
        ].join(", ");

        const imageUrl =
          "https://image.pollinations.ai/prompt/" +
          encodeURIComponent(prompt) +
          "?width=1024&height=1024&seed=" +
          Date.now();

        return Response.json({ imageUrl });
      } catch {
        return Response.json(
          { error: "Image generation failed." },
          { status: 500 }
        );
      }
    }

    try {
      return await env.ASSETS.fetch(request);
    } catch {
      const homepageRequest = new Request(url.origin + "/", request);
      return env.ASSETS.fetch(homepageRequest);
    }
  },
};