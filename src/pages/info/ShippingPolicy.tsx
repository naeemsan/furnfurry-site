import { InfoPageLayout } from "./InfoPageLayout";

export default function ShippingPolicy() {
  return (
    <InfoPageLayout
      badge="Shipping"
      title="Production & Shipping Policy"
      subtitle="How FurNFurry handles production timelines, secure packing, and delivery."
    >
      <h2>Production Time</h2>
      <p>
        Production time depends on the type of commission, complexity, materials,
        and current queue. Smaller pieces may take less time, while partials and
        full suits may require several months.
      </p>

      <h2>Shipping Method</h2>
      <p>
        FurNFurry ships using tracked delivery whenever available. Shipping may
        be handled through trusted fulfillment partners to support safer and more
        reliable delivery.
      </p>

      <h2>Shipping Cost</h2>
      <p>
        Shipping costs are calculated based on package size, weight, destination,
        and delivery method. Bulky fursuit pieces may be charged by volumetric
        weight rather than actual weight.
      </p>

      <h2>Estimated Delivery</h2>
      <p>
        Delivery time varies by destination and carrier. Most shipments are
        estimated after completion and final packing. Tracking details will be
        shared when available.
      </p>

      <h2>Customs, Duties & Delays</h2>
      <p>
        International shipments may be subject to customs processing, import
        fees, taxes, or courier delays. These are outside FurNFurry’s control and
        may vary by country.
      </p>

      <h2>Lost or Damaged Packages</h2>
      <p>
        If a package arrives damaged, contact us as soon as possible with photos
        of the package and item condition. We will help review the issue and
        discuss the next steps.
      </p>
    </InfoPageLayout>
  );
}