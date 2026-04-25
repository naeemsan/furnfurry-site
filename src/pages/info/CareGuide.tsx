import { InfoPageLayout } from "./InfoPageLayout";

export default function CareGuide() {
  return (
    <InfoPageLayout
      badge="Care Guide"
      title="Fursuit Care Guide"
      subtitle="Simple care steps to help your fursuit stay clean, fresh, and photo-ready."
    >
      <h2>General Care</h2>
      <p>
        Brush your fursuit gently after wear to keep the fur smooth and prevent
        matting. Store pieces in a cool, dry, ventilated place.
      </p>

      <h2>After Wearing</h2>
      <ul>
        <li>Air out the suit after use.</li>
        <li>Use a fan if needed to help moisture dry faster.</li>
        <li>Avoid storing pieces while damp.</li>
        <li>Brush fur gently once dry.</li>
      </ul>

      <h2>Cleaning</h2>
      <p>
        Spot clean small areas with gentle methods. Avoid harsh chemicals,
        bleach, or high heat. Some pieces may require special cleaning depending
        on materials and construction.
      </p>

      <h2>Storage</h2>
      <p>
        Store heads, paws, tails, and full suits carefully to avoid crushing,
        bending, or damaging shaped parts. Keep away from heat, moisture, and
        direct sunlight.
      </p>

      <h2>Travel</h2>
      <p>
        When traveling, pack your fursuit securely with enough space to protect
        the shape. Avoid placing heavy items on top of fursuit parts.
      </p>
    </InfoPageLayout>
  );
}