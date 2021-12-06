import cssClasses from "./CourseTitle.module.css";

const CourseTitle = (props) => {
  return (
    <div className={cssClasses.course}>
      <p className={cssClasses.title}>{props.name}</p>
      <div className={cssClasses.footer} onClick={props.clicked}>Go to course</div>
    </div>
  );
};

export default CourseTitle;
