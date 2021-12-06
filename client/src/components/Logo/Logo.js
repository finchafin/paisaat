
import classes from "./Logo.module.css";


const Logo = (props) => {

  const classList = `${classes.Logo} ${props.className}`;

  return (
    <span className={classList}>
      Paisaat
    </span>
  );
};

export default Logo;
