import { InfoPageLayout } from "./InfoPageLayout";

export default function MeasureGuide() {
  return (
    <InfoPageLayout
      badge="Fit Guide"
      title="How to Measure for a Fursuit"
      subtitle="Accurate measurements help us plan a better fit, especially for partials and full suits."
    >
      <h2>Before You Start</h2>
      <p>
        Use a flexible measuring tape and measure over light clothing. It helps
        to have another person assist you so the numbers are more accurate.
      </p>

      <h2>Common Measurements</h2>
      <ul>
        <li>Height</li>
        <li>Head circumference</li>
        <li>Chest circumference</li>
        <li>Waist circumference</li>
        <li>Hip circumference</li>
        <li>Arm length</li>
        <li>Leg inseam</li>
        <li>Foot size</li>
        <li>Hand size</li>
      </ul>

      <h2>For Full Suits</h2>
      <p>
        Full suits may require more detailed measurements or a duct tape dummy
        depending on the build type. We will guide you based on your commission.
      </p>

      <h2>Important Note</h2>
      <p>
        Incorrect measurements can affect fit and comfort. Always double-check
        your numbers before sending them.
      </p>
    </InfoPageLayout>
  );
}