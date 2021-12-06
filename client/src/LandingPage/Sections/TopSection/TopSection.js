import cssClasses from './TopSection.module.css';

export default function TopSection() {
  return (
    <div className={cssClasses.section}>
      <div className={cssClasses.background}></div>
      <div className={cssClasses.content}>
        <p className={cssClasses.welcome}>
          Welcome To Paisaat
        </p>
        <p className={cssClasses.description}>
          Join and be a part of worlds largest <br />
          and fastest growing community of<br /> 
          finnance
        </p>
      </div>
    </div>
  );
}