export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // AI IMAGE GENERATION API
    if (
      request.method === "POST" &&
      url.pathname === "/api/generate-fursona-image"
    ) {
      try {
        const body = await request.json();

        const prompt = `
Cute furry fursona character design.

Species: ${body.species}
Style: ${body.style}
Color palette: ${body.colorMood}
Environment vibe: ${body.environment}
Build type: ${body.buildType}
Personality: ${body.personality}

Create a full body furry mascot character with expressive eyes, clean digital art, soft lighting, highly appealing furry fandom style, original character design, centered composition, no text, no watermark, detailed fur, professional furry reference aesthetic.
`;

        const response = await fetch(
          "https://api.openai.com/v1/images/generations",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
              model: "gpt-image-1",
              prompt,
              size: "1024x1024",
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          return new Response(
            JSON.stringify({
              error: data?.error?.message || "OpenAI request failed",
            }),
            {
              status: 500,
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        }

        return new Response(
          JSON.stringify({
            image: data.data[0].b64_json,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {
        return new Response(
          JSON.stringify({
            error: error.message || "Something went wrong",
          }),
          {
            status: 500,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
    }

    // NORMAL WEBSITE
    return env.ASSETS.fetch(request);
  },
};