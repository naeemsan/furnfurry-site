import { Helmet } from "react-helmet-async";
import { ContactFooter } from "./sections/ContactFooter";

export default function QuotePage() {
  return (
    <>
      <Helmet>
        <title>Request a Custom Fursuit Quote | FurNFurry</title>

        <meta
          name="description"
          content="Submit your fursona details and request a custom fursuit quote from FurNFurry. Discuss styles, species, suit type, colors, and commission ideas."
        />
      </Helmet>

      <main className="min-h-screen bg-background pt-32 text-foreground">
        <ContactFooter />
      </main>
    </>
  );
}
    