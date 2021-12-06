import cssClasses from "./Service.module.css";

const Service = (props) => {
  return (
    <div className={cssClasses.service} style={{backgroundColor: props.bgcolor}}>
      <div className={cssClasses.icon}>{props.children}</div>
      <h5 className={cssClasses.topic} style={{color: props.textcolor}} >{props.topic}</h5>
      <p className={cssClasses.description} style={{color: props.textcolor}}>{props.description}</p>
    </div>
  );
};

export default Service;
