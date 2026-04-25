import { InfoPageLayout } from "./InfoPageLayout";

export default function PrivacyPolicy() {
  return (
    <InfoPageLayout
      badge="Privacy"
      title="Privacy Policy"
      subtitle="How FurNFurry handles information submitted through our website and quote form."
    >
      <h2>Information We Collect</h2>
      <p>
        When you submit a quote request, we may collect your name, email address,
        fursona details, budget range, uploaded reference images, and any notes
        you provide.
      </p>

      <h2>How We Use Your Information</h2>
      <p>
        Your information is used to respond to quote requests, discuss commission
        details, prepare estimates, communicate about your project, and process
        your custom order.
      </p>

      <h2>Reference Images</h2>
      <p>
        Uploaded reference images are used only to understand your character and
        commission request. We do not sell your references or personal details.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Our website may use third-party services for form submissions, image
        uploads, hosting, analytics, or payment processing. These services may
        process data according to their own privacy policies.
      </p>

      <h2>Data Sharing</h2>
      <p>
        We do not sell personal information. Information is only shared when
        necessary to provide services, process requests, or comply with legal
        requirements.
      </p>

      <h2>Contact</h2>
      <p>
        If you want your submitted information removed or updated, contact
        FurNFurry through our official contact channels.
      </p>
    </InfoPageLayout>
  );
}