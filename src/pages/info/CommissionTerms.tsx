import { InfoPageLayout } from "./InfoPageLayout";

export default function CommissionTerms() {
  return (
    <InfoPageLayout
      badge="Commission Terms"
      title="Commission Terms of Service"
      subtitle="Please read these terms before starting a custom fursuit commission with FurNFurry."
    >
      <h2>Custom Work</h2>
      <p>
        All FurNFurry commissions are made-to-order and created specifically for
        the client’s character, measurements, style preferences, and requested
        features.
      </p>

      <h2>Quote & Deposit</h2>
      <p>
        A personalized quote is provided before production begins. A deposit is
        required to reserve a commission slot. Work does not begin until the
        agreed deposit has been received.
      </p>

      <h2>Payment Plans</h2>
      <p>
        Payment plans may be available for larger builds. The payment schedule
        must be agreed before production begins. Final payment is required before
        shipping or delivery.
      </p>

      <h2>Client Responsibilities</h2>
      <p>
        Clients are responsible for providing accurate references, measurements,
        design details, contact information, and timely responses. Incorrect
        measurements or unclear references may affect the final fit or result.
      </p>

      <h2>Timeline</h2>
      <p>
        Estimated timelines are provided based on the build type and complexity.
        Because each fursuit is handmade, timelines may shift due to material
        availability, revisions, queue position, or production needs.
      </p>

      <h2>Changes During Production</h2>
      <p>
        Small adjustments may be possible depending on the stage of production.
        Major design changes after work has started may require extra charges or
        may not be possible.
      </p>

      <h2>Final Approval</h2>
      <p>
        Progress updates may be shared during production. Once the final build is
        approved and the remaining balance is paid, the item will be prepared for
        shipping.
      </p>
    </InfoPageLayout>
  );
}