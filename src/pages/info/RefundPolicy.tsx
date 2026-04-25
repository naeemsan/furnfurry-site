import { InfoPageLayout } from "./InfoPageLayout";

export default function RefundPolicy() {
  return (
    <InfoPageLayout
      badge="Refunds"
      title="Refund & Cancellation Policy"
      subtitle="Custom fursuits are personalized items, so refund rules must be clear before production starts."
    >
      <h2>Custom Orders</h2>
      <p>
        Every FurNFurry commission is custom-made for one specific character and
        client. Because of this, custom orders cannot usually be returned or
        resold.
      </p>

      <h2>Deposits</h2>
      <p>
        Deposits reserve your commission slot and may be used for planning,
        materials, design preparation, and production scheduling. Deposit terms
        are confirmed before payment.
      </p>

      <h2>Cancellation Before Production</h2>
      <p>
        If you need to cancel before production begins, contact us as soon as
        possible. Any available refund depends on the stage of planning,
        materials ordered, and the agreed commission terms.
      </p>

      <h2>Cancellation After Production Starts</h2>
      <p>
        Once production has started, refunds are generally not available due to
        the custom nature of the work and materials used for your specific
        character.
      </p>

      <h2>Fit & Measurement Issues</h2>
      <p>
        Clients are responsible for providing accurate measurements. Fit issues
        caused by incorrect measurements may require paid adjustments.
      </p>

      <h2>Damage or Defects</h2>
      <p>
        If your item arrives with damage or a production issue, contact us within
        48 hours of delivery with clear photos so we can review the situation.
      </p>
    </InfoPageLayout>
  );
}