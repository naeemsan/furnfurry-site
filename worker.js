export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);

      // API ROUTE
      if (
        request.method === "POST" &&
        url.pathname === "/api/generate-fursona-image"
      ) {
        try {
          const body = await request.json();

          const prompt = [
            "cute furry fursona character",
            body.species,
            body.style,
            body.colorMood,
            body.environment,
            body.personality,
            "high quality furry art",
            "full body",
            "clean digital art",
            "soft lighting",
            "no text",
            "no watermark"
          ].join(", ");

          const imageUrl =
            "https://image.pollinations.ai/prompt/" +
            encodeURIComponent(prompt);

          return new Response(
            JSON.stringify({
              imageUrl
            }),
            {
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
              }
            }
          );
        } catch (error) {
          return new Response(
            JSON.stringify({
              error: "API generation failed"
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json"
              }
            }
          );
        }
      }

      // NORMAL WEBSITE
      return env.ASSETS.fetch(request);

    } catch (err) {
      return new Response("Worker crashed", {
        status: 500
      });
    }
  }
};