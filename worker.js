export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // AI IMAGE API ONLY
    if (
      request.method === "POST" &&
      url.pathname === "/api/generate-fursona-image"
    ) {
      try {
        const body = await request.json();

        if (!env.AI) {
          return Response.json(
            { error: "AI binding is not connected." },
            { status: 500 }
          );
        }

        const prompt = [
          "original furry fursona character concept art",
          `species: ${body.species || "wolf"}`,
          `style: ${body.style || "toony furry art"}`,
          `color palette: ${body.colorMood || "appealing balanced colors"}`,
          `environment vibe: ${body.environment || "fantasy themed"}`,
          `build type: ${body.buildType || "full body character"}`,
          `personality: ${body.personality || "friendly expressive"}`,
          "full body",
          "expressive eyes",
          "clean high quality digital illustration",
          "soft lighting",
          "centered composition",
          "no text",
          "no watermark",
        ].join(", ");

        const image = await env.AI.run("@cf/lykon/dreamshaper-8-lcm", {
          prompt,
          width: 768,
          height: 768,
          num_steps: 6,
          guidance: 2,
        });

        return new Response(image, {
          headers: {
            "Content-Type": "image/jpeg",
            "Cache-Control": "no-store",
          },
        });
      } catch {
        return Response.json(
          { error: "Image generation failed." },
          { status: 500 }
        );
      }
    }

    // NORMAL WEBSITE
    try {
      return await env.ASSETS.fetch(request);
    } catch {
      const fallbackRequest = new Request(url.origin + "/", {
        method: "GET",
        headers: request.headers,
      });

      return await env.ASSETS.fetch(fallbackRequest);
    }
  },
};