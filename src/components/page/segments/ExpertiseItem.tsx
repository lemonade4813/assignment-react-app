interface IExpertiseItem {
    deptname : string;
    content : string;
    img : string;
}



export default function ExpertiseItem({ deptname, content, img }: IExpertiseItem) {
  
  return (
      <>
        <div className="expertise-content">
          <span className="expertise-department">{deptname}</span>
          <p className="expertise-department-explanation">{content}</p>
        </div>
        <img src={img} alt={deptname} />
      </>
  );
}