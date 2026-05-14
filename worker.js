const meta = {
  "/custom-fursuit": {
    title: "Custom Fursuit Commissions | Kemono and Full Suits | FurNFurry",
    description:
      "Commission a handmade custom fursuit designed around your character. Explore kemono heads, partials, and full body suits crafted with comfort, personality, and clean finishing.",
  },

  "/contact": {
    title: "Contact FurNFurry | Start Your Custom Fursuit Project",
    description:
      "Get in touch with FurNFurry to discuss your fursona, request a quote, ask questions, or start planning your custom fursuit commission.",
  },

  "/gallery": {
    title: "Fursuit Gallery | Handmade Fursona Builds | FurNFurry",
    description:
      "Browse handmade fursuit heads, kemono builds, partials, and full suits created for unique fursonas. Explore different species, styles, colors, and character ideas.",
  },

  "/blog": {
    title: "Fursuit Guides and Fursona Articles | FurNFurry Blog",
    description:
      "Read beginner friendly furry fandom guides, custom fursuit tips, pricing advice, character inspiration, and helpful articles for fursona creators.",
  },

  "/blog/custom-fursuit-price-guide": {
    title: "Custom Fursuit Price Guide 2026 | FurNFurry",
    description:
      "Learn what affects custom fursuit pricing, from materials and complexity to suit type and detailing. A simple beginner friendly guide for planning your budget.",
  },

  "/shipping": {
    title: "Production and Shipping Policy | FurNFurry",
    description:
      "Learn about FurNFurry production timelines, international shipping, tracking updates, delivery expectations, and custom fursuit processing details.",
  },

  "/measure": {
    title: "Fursuit Measurement Guide | FurNFurry",
    description:
      "Follow the FurNFurry measurement guide to submit accurate sizing for your custom fursuit, partial, paws, head, or full body build.",
  },

  "/fursona-finder": {
    title: "Fursona Finder Quiz | Discover Your Perfect Fursuit Style",
    description:
      "Answer furry inspired questions and discover a fursona style, color direction, personality vibe, and custom fursuit build that matches you best.",
  },

  "/refund": {
    title: "Refund and Cancellation Policy | FurNFurry",
    description:
      "Read FurNFurry refund, cancellation, and commission policies for custom fursuit projects, deposits, production stages, and order changes.",
  },

  "/blog/what-is-the-furry-fandom": {
    title: "What Is the Furry Fandom? A Beginner Friendly Guide | FurNFurry",
    description:
      "Discover what the furry fandom is, what fursonas and fursuits are, and why the community has become such a creative and expressive space worldwide.",
  },
};

class TitleHandler {
  constructor(title) {
    this.title = title;
  }

  element(element) {
    element.setInnerContent(this.title);
  }
}

class DescriptionHandler {
  constructor(description) {
    this.description = description;
  }

  element(element) {
    element.setAttribute("content", this.description);
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "HEAD") {
      return new Response(null, {
        status: 200,
        headers: {
          "Content-Type": "text/html; charset=UTF-8",
        },
      });
    }

    const response = await env.ASSETS.fetch(request);

    const pageMeta = meta[url.pathname];

    if (!pageMeta) {
      return response;
    }

    return new HTMLRewriter()
      .on("title", new TitleHandler(pageMeta.title))
      .on('meta[name="description"]', new DescriptionHandler(pageMeta.description))
      .transform(response);
  },
};