import landing from "../cssmodules/landing.module.css";

function LandingSection() {
  return (
    <div className={landing.landingSection}>
      <div className={landing.landingTitles}>
        <h1 className={landing.landingTitle1}>GAMING EVOLUTION</h1>
        <h1 className={landing.landingTitle2}>THROUGH TIME</h1>
      </div>
      <div className={landing.landingDescription}>
        <p>
          Step back into the golden age of gaming, where quarters clinked,
          screens glowed, and every pixel told a story. Relive the arcade magic,
          from the thrill of Pac-Man chases to the buzz of Street Fighter
          battles, and see how these roots still power today’s gaming world.
        </p>
      </div>

      <div className={landing.landingButtons}>
        <button className={landing.exploreBtn}>Explore Timeline</button>
        <button className={landing.watchJourneyBtn}>Watch Journey</button>
      </div>
    </div>
  );
}

export default LandingSection;
