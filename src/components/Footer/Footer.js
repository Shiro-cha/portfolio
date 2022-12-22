import "./Footer.css";
const date = new Date();
export default function Footer(){

  return(
    <>
    <footer className="page-footer">
        <div className="container">
            <div className="links"><a href="/about-me">About me</a><a href="/hire-me">Contact me</a><a href="/projects">Projects</a></div>
            <div className="social-icons"><a ><i className="icon ion-social-facebook"></i></a><a ><i className="icon ion-social-linkedin"></i></a><a><i className="icon ion-social-github"></i></a></div>
            <hr/>
            <div className="text-center">
            <p>@copyright {date.getFullYear()} - Nomena Razafimahandry</p>
            </div>
        </div>
    </footer>
    </>
  )
}
