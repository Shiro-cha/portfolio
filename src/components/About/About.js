import "./About.css";
export default function About(){
  return(
    <>
    <section className="portfolio-block block-intro">
        <div className="container">
            <div className="avatar" style={{backgroundImage:`url(/Profile.png)`}}></div>
            <div className="about-me" id="about-me">
                <p>Hello! I am <strong>Nomena</strong>. I work as software engineer and fullstack developer. I have passion for computer science and software development.</p><a className="btn btn-outline-primary" role="button" href="hire-me.html">Hire me</a></div>
        </div>
    </section>
    </>
  )
}
