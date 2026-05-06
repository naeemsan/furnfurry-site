export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (
      request.method === "POST" &&
      url.pathname === "/api/generate-fursona-image"
    ) {
      try {
        const body = await request.json();

        const prompt = [
          "cute original furry fursona character design",
          `species ${body.species}`,
          `style ${body.style}`,
          `color palette ${body.colorMood}`,
          `environment vibe ${body.environment}`,
          `build type ${body.buildType}`,
          `personality ${body.personality}`,
          "full body furry mascot character",
          "expressive eyes",
          "clean digital art",
          "soft lighting",
          "high quality furry fandom style",
          "centered composition",
          "simple background",
          "no text",
          "no watermark"
        ].join(", ");

        const imageUrl =
          "https://image.pollinations.ai/prompt/" +
          encodeURIComponent(prompt) +
          "?width=1024&height=1024&nologo=true&seed=" +
          Date.now();

        return new Response(JSON.stringify({ imageUrl }), {
          headers: { "Content-Type": "application/json" },
        });
      } catch {
        return new Response(
          JSON.stringify({
            error: "Something went wrong while creating the image URL.",
          }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }

    return env.ASSETS.fetch(request);
  },
};