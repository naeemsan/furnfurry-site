import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function FirstCustomFursuitGuide() {
  useEffect(() => {
    document.title =
      "How to Commission Your First Custom Fursuit Without Getting Overwhelmed";

    const meta = document.querySelector(
      'meta[name="description"]'
    );

    if (meta) {
      meta.setAttribute(
        "content",
        "Learn how to commission your first custom fursuit with confidence, from budget and references to measurements, shipping, and refunds."
      );
    }
  }, []);

  return (
    <main className="bg-[#0b1220] text-white min-h-screen">

      <section className="max-w-4xl mx-auto px-6 py-24">

        <Link
          to="/blog"
          className="text-purple-400 text-sm"
        >
          ← Back to Blogs
        </Link>

        <h1 className="text-5xl font-bold mt-6 leading-tight">
          How to Commission Your First
          Custom Fursuit Without
          Getting Overwhelmed
        </h1>

        <p className="text-zinc-300 mt-6 text-lg">
          Your first custom fursuit is an exciting milestone —
          and it doesn't have to feel chaotic.
          This guide walks you through every step with clarity
          and confidence.
        </p>




{/* ----------- SECTION 1 ----------- */}

        <h2 className="text-4xl font-bold mt-20">
          Breaking Down the Process
        </h2>

        <img
          src="/breaking-process.png"
          className="rounded-3xl mt-8"
        />

        <p className="mt-10 text-zinc-300 leading-8">

Commissioning your first custom fursuit is exciting, but it can also feel like a lot at once. Most first-time buyers are trying to figure out build type, budget, measurements, policies, and reference sheets all at the same time.

The good news is that the process gets much easier when you stop treating it like one big mystery and break it into steps.

FurnFurry already has the right public pages to support that step-by-step approach:

        </p>

<ul className="list-disc ml-6 mt-6 text-zinc-300 space-y-3">

<li>
<Link to="/gallery" className="text-purple-400">
Gallery
</Link>
</li>

<li>
<Link to="/blog/custom-fursuit-price-guide"
className="text-purple-400">

Price Guide
</Link>
</li>

<li>
<Link
to="/measure"
className="text-purple-400">

Measurements
</Link>
</li>

<li>
<Link
to="/shipping"
className="text-purple-400">

Policies
</Link>
</li>

</ul>



{/* ----------- SECTION 2 ----------- */}

<h2 className="text-4xl font-bold mt-24">

Start with the Build You Actually Need

</h2>


<img
src="/choose-scope.png"
className="rounded-3xl mt-8"
/>


<h3 className="text-2xl font-bold mt-12">

Choose Your Scope First

</h3>

<p className="leading-8 text-zinc-300 mt-4">

The first question is not
“How do I order?”

it's

“What am I actually ordering?”

Some buyers know immediately that they want a full suit.

Others are much better off starting with a head, paws, and tail.

Budget, comfort, climate, event plans, and how often you expect to wear the suit all matter.

</p>


<p className="leading-8 text-zinc-300 mt-8">

The best place to start is the

<Link
to="/gallery"
className="text-purple-400 mx-2">

gallery

</Link>

because it gives a quick visual sense of what styles and build types you are drawn to.

</p>



<h3 className="font-bold text-2xl mt-16">

Be Realistic About Budget From Day One

</h3>

<p className="text-zinc-300 leading-8 mt-4">

A lot of first commissions become stressful because buyers start talking before having a realistic budget.

Reading the

<Link
to="/blog/custom-fursuit-price-guide"
className="text-purple-400 mx-2">

Custom Fursuit Price Guide 2026

</Link>

keeps expectations realistic.

</p>



<h3 className="font-bold text-2xl mt-16">

Starting Smaller Is Often Smarter

</h3>

<p className="leading-8 text-zinc-300 mt-4">

If you are unsure whether you can commit to a full build, that is fine.

A first commission does not need to be the biggest thing you will ever own.

It just needs to fit where you are now.

</p>




{/* ---------- SECTION 3 ---------- */}

<h2 className="font-bold text-4xl mt-24">

Prepare Your Reference Sheet Before You Reach Out

</h2>


<p className="mt-6 text-zinc-300 leading-8">

A maker cannot build your character accurately if they cannot clearly see what the character is supposed to look like.

The clearer your references are,
the smoother your quote becomes.

</p>


<p className="mt-10 text-zinc-300 leading-8">

Before sending an inquiry ask:

</p>

<ul className="list-disc ml-6 mt-6 text-zinc-300 space-y-4">

<li>What species is the character?</li>

<li>Which colors are non negotiable?</li>

<li>Which markings must stay exact?</li>

<li>Any special fit requirements?</li>

</ul>



<h3 className="font-bold text-2xl mt-16">

Measurements Are Not a Formality

</h3>


<p className="text-zinc-300 leading-8 mt-6">

Many beginners underestimate measurements.

FurnFurry’s

<Link
to="/measure"
className="text-purple-400 mx-2">

measurement guide

</Link>

exists so buyers can submit accurate sizing.

</p>



<h3 className="font-bold text-2xl mt-16">

Read Policies Before Paying

</h3>


<p className="leading-8 text-zinc-300 mt-6">

Always read

<Link to="/refund"
className="text-purple-400 mx-2">

refund policy

</Link>

and

<Link
to="/shipping"
className="text-purple-400 mx-2">

shipping policy

</Link>

before placing orders.

</p>



{/* -------- SECTION 4 ---------- */}

<h2 className="font-bold text-4xl mt-28">

Your First Commission Should Feel
Informed, Not Intimidating

</h2>


<img
src="/final-checklist.png"
className="rounded-3xl mt-10"
/>


<h3 className="text-2xl font-bold mt-16">

Ask Clear Questions

</h3>


<ul className="list-disc ml-6 mt-6 text-zinc-300 space-y-4">

<li>Is this design workable?</li>

<li>Would markings change quote?</li>

<li>Need more reference angles?</li>

<li>Expected timeline?</li>

</ul>



<h3 className="font-bold text-2xl mt-16">

Plan For Ownership Too

</h3>

<p className="text-zinc-300 leading-8 mt-6">

Think about:

cleaning

storage

travel

wearability

long term maintenance

Read the

<Link
to="/care"
className="text-purple-400 mx-2">

care guide

</Link>

before ordering.

</p>



<div className="bg-purple-500/10 border border-purple-500 rounded-3xl p-8 mt-20">

<p className="leading-8">

Trust preparation more than impulse.

Excitement is a good reason to begin —

not a good reason to skip preparation.

</p>

</div>


      </section>

    </main>
  );
}