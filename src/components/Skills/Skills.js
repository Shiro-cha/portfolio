
export default function Skills({title,text,icon}){
  return(
    <>
    <div className="card special-skill-item border-0">
        <div className="card-header bg-transparent border-0"><i className={icon}></i></div>
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">
              {text}
            </p>
        </div>
    </div>
    </>
  )
}
