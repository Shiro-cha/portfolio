import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";

export default function Home({setTextRooter}){
  return(
    <>
    <main className="page lanidng-page">
    {
      //about section
    }
    <About/>

    {
      //See more section
    }

    <section className="portfolio-block call-to-action border-bottom gradient">
        <div className="container">
            <div className="d-flex justify-content-center align-items-center content">
                <h3>Want to you see more?</h3><a className="btn btn-outline-light btn-lg" type="button" onClick={()=>{setTextRooter("project")}} >My recent work here</a></div>
        </div>
    </section>

    {
      //skils sections
    }

    <section className="portfolio-block skills">
        <div className="container">
            <div className="heading">
                <h2>Special Skills</h2>
            </div>
            <div className="row">
                <div className="col-md-4">
                <Skills
                title="Software development"
                text="Being an IT student, I have passion and skills on technology.
                I can make a website as static or dynamic, desktop, mobile application or command line application.
                So I can do all step for sofware development like the conception, the development, the optimisation or/and the deployment."
                icon="icon ion-ios-star-outline"
                 />
                </div>
                <div className="col-md-4">
                <Skills
                title="Cloud computing and network administration"
                text="  In spite of cloud and network seem complicate, I have some knowledge and experiencies in these worlds,
                  I used to simulate, configure network equipement before deployment and can use GNU/Linux, Microsoft windows or other operating system for administration.
                  In public cloud computing, I have some experiencies on Amazon Web service. I have already some all type of service before like IaSS, PaSS, and SaSS types."
                icon="icon ion-ios-lightbulb-outline"
                 />
                </div>
                <div className="col-md-4">
                <Skills
                title="Self thought and problem solving"
                text="It's important to learn and get new experiencies. So having more than one knowledge source is the key for knowledge,
                that's why I use all way to learn new skills and improve my experiencie and knowledge.
                But if something is out of my skills, it's not a problem for me because I will learn it and find the better way to do it."
                icon="icon ion-ios-gear-outline"
                 />
                </div>
            </div>
        </div>
    </section>

    {
      //next project
    }
    <section className="portfolio-block website gradient">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-12 col-lg-12 text-align">
                    <h3 className="text-center">Next project </h3>
                    <p>
                      To contribute to technology development,
                      I'm working now on some open source tools and library to make co-working easely for developer and other peopole.
                      My goal and my phylosophy is to make more chip things with the best results as expensive things.
                    </p>
                </div>
            </div>
        </div>
    </section>

    </main>
    </>
  )
}
