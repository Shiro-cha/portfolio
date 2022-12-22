import "./Header.css";

export default function Header({setTextRooter}){
  return(
    <>
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
        <div className="container"><a className="navbar-brand logo" href="/">Nomena Razafimahandry</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navbarNav"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div
                className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item active" role="presentation" onClick={()=>{setTextRooter("home")}}><a className="nav-link" >Home</a></li>
                    <li className="nav-item" role="presentation" onClick={()=>{setTextRooter("cv")}}><a className="nav-link" >CV</a></li>
                    <li className="nav-item" role="presentation" onClick={()=>{setTextRooter("hire-me")}}><a className="nav-link">Hire me</a></li>
                </ul>
        </div>
        </div>
    </nav>
    </>
  )
}
