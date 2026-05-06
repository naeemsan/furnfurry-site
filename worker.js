export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (
      url.pathname === "/api/generate-fursona-image" &&
      request.method === "POST"
    ) {
      try {
        const body = await request.json();

        const prompt = [
          "Cute furry fursona character design.",
          "",
          `Species: ${body.species}`,
          `Style: ${body.style}`,
          `Color palette: ${body.colorMood}`,
          `Environment vibe: ${body.environment}`,
          `Personality: ${body.personality}`,
          "",
          "Create a full body furry mascot character with expressive eyes, clean digital art, soft lighting, highly appealing furry fandom style, original character design, centered composition, no text, no watermark."
        ].join("\n");

        const response = await fetch(
          "https://api.openai.com/v1/images/generations",
          {
            method: "POST",
            headers: {
              Authorization: "Bearer " + env.OPENAI_API_KEY,
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              model: "gpt-image-1",
              prompt: prompt,
              size: "1024x1024"
            })
          }
        );

        const data = await response.json();

        if (!response.ok) {
          return Response.json(
            { error: data?.error?.message || "Failed to generate image" },
            { status: 500 }
          );
        }

        return Response.json({
          image: data.data?.[0]?.b64_json
        });
      } catch (err) {
        return Response.json(
          { error: "Something went wrong." },
          { status: 500 }
        );
      }
    }

    return env.ASSETS.fetch(request);
  }
};