import cssClasses from "./Aboutus.module.css";

export default function AboutUs() {
  return (
    <div id="aboutus" className={cssClasses.section}>
      <div className={cssClasses.background}></div>
      <div className={cssClasses.content}>
        <p className={cssClasses.top}>About Us</p>
        <p className={cssClasses.description}>
          We are Paisaat- a Social media for finance. Our aim is to create a
          global online community of finance where people can talk, learn and
          share about finance. They can connect with like-minded people and
          build relationship which serves value. We are focus based platform,
          cutting the unnecessary clutter of politics, sports and celebrities
          and going straight into value based finance. We are also aiming to
          deliver top quality financial services in collaboration with financial
          service provider to provide you the best of best. So Come join us and
          be a part of this journey of making this world a financially wise
          planet.
        </p>
      </div>
    </div>
  );
}
