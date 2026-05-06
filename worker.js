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
          "?width=1024&height=1024&nologo=true&private=true&seed=" +
          Date.now();

        const imageResponse = await fetch(imageUrl);

        if (!imageResponse.ok) {
          return new Response(
            JSON.stringify({ error: "Image provider failed. Please try again." }),
            {
              status: 500,
              headers: { "Content-Type": "application/json" },
            }
          );
        }

        const imageBuffer = await imageResponse.arrayBuffer();

        let binary = "";
        const bytes = new Uint8Array(imageBuffer);
        for (let i = 0; i < bytes.length; i++) {
          binary += String.fromCharCode(bytes[i]);
        }

        const base64Image = btoa(binary);

        return new Response(
          JSON.stringify({
            image: base64Image,
          }),
          {
            headers: { "Content-Type": "application/json" },
          }
        );
      } catch (error) {
        return new Response(
          JSON.stringify({
            error: "Something went wrong while generating the image.",
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