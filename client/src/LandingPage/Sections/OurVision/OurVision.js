
import img from '../../assets/img4.jpg';
import cssClasses from './OurVision.module.css';

const ourVision = () => {
  return (
    <div className={cssClasses.vision}>
      <div className={cssClasses.left}>
        <h4 className={cssClasses.header}>Our Vision</h4>
        <p className={cssClasses.content}>
          Our vision is to financially empower people and spread financial
          wisdom among the general masses for the empowerment of individuals
          while at the same time creating a global community of finance.{" "}
        </p>
      </div>
      <div className={cssClasses.right}>
        <img src={img} alt="A man searching best stocks to invest in" className={cssClasses.image} />
      </div>
    </div>
  );
};

export default ourVision;
