import About from "../../components/About/About";

export default function CV(){

  return(
    <>
    <main className="page cv-page">
    {
      //about section
    }
    <About/>
        <section className="portfolio-block cv">
            <div className="container">
                <div className="work-experience group">
                    <div className="heading">
                        <h2 className="text-center">Experience and realisation</h2>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Fullstack Developer</h3>
                                <h4 className="organization">MEDDoC</h4>
                            </div>
                            <div className="col-md-6"><span className="period">06/2022 - Present</span></div>
                        </div>
                        <p className="text-muted">
                          <p>Conception of an "healthcare" plat-form to send resultat analyses from laboratory to patient.</p>
                          <p><strong>Task:</strong> Analyse and conception - development - configuration of the development and deployment environment - deployment - SEO and optimization</p>
                          <p><strong>Technology:</strong> Reactjs - Laravel - git and github - AWS</p>
                        </p>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className="col-6">
                                <h3>Conception of VoGit</h3>
                                <h4 className="organization">Personnal project and final degree project</h4>
                            </div>
                            <div className="col-md-6"><span className="period">04/2022 - Present</span></div>
                        </div>
                        <p className="text-muted">
                          <p>VoGit is a file transfert application with controling system version (git) and a cryptography secure transfert.</p>
                          <p><strong>Task:</strong> Development - configuration and deployment -optimization</p>
                          <p><strong>Technology:</strong> Reactjs - Nodejs - git - openssh - AWS</p>
                        </p>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Development of shiro bot</h3>
                                <h4 className="organization">Personnal project</h4>
                            </div>
                            <div className="col-md-6"><span className="period">05/2021 - Present</span></div>
                        </div>
                        <p className="text-muted">
                          <p>Shiro bot is a messenger bot to download audio and video from youtube on messenger</p>
                          <p><strong>Task:</strong> Development - configuration and deployment -optimization</p>
                          <p><strong>Technology:</strong> Nodejs - facebook graph api</p>
                        </p>
                    </div>
                </div>
                <div className="education group">
                    <div className="heading">
                        <h2 className="text-center">Education</h2>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Telecommunication service</h3>
                                <p><small>Telecommunication</small></p>
                                <h4 className="organization">ESPA Vontovorona - Madagascar</h4>
                            </div>
                            <div className="col-6"><span className="period">12/2022 - Present</span></div>
                        </div>
                        <p className="text-muted">
                          <p><strong>Level:</strong> Master 1</p>
                          <p>In telecommunication service, we learn to use nowadays technics and technology to telecommunication like Artifical Intelligence.</p>
                        </p>
                    </div>
                    <div className="item">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>Information system</h3>
                                <p><small>Telecommunication</small></p>
                                <h4 className="organization">ESPA Vontovorona - Madagascar</h4>
                                <p>Information system is a branch of telecommunication where we learn software development and networking for professionnal </p>
                            </div>
                            <div className="col-md-6"><span className="period">2019 - 2022</span></div>
                        </div>
                        <p className="text-muted">
                          <p><strong>Degree:</strong> License</p>

                        </p>
                    </div>
                </div>
                <div className="group">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="skills portfolio-info-card">
                                <h2>Skills</h2>
                                <h3>JavaScript</h3>
                                <div className="progress">
                                    <div className="progress-bar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{"width": "90%"}}><span className="sr-only">90%</span></div>
                                </div>
                                <p><small>NodeJS - React - AngularJS</small></p>
                                <h3>HTML & CSS</h3>
                                <div className="progress">
                                    <div className="progress-bar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{"width": "95%"}}><span className="sr-only">95%</span></div>
                                </div>
                                <p><small>Bootstrap - W3CSS - Material ui</small></p>
                                <h3>PHP</h3>
                                <div className="progress">
                                    <div className="progress-bar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{"width": "70%"}}><span className="sr-only">70%</span></div>
                                </div>
                                <p><small>Laravel</small></p>
                                <h3>Java</h3>
                                <div className="progress">
                                    <div className="progress-bar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{"width": "70%"}}><span className="sr-only">70%</span></div>
                                </div>
                                <p><small>Server socket - swing - OOP</small></p>
                                <h3>AWS</h3>
                                <div className="progress">
                                    <div className="progress-bar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{"width": "70%"}}><span className="sr-only">70%</span></div>
                                </div>
                                <p><small>Amplify - RDS - S3 - EC2 - Code deploy -
codepipeline</small></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-info portfolio-info-card">
                                <h2>Contact Info</h2>
                                <div className="row">
                                    <div className="col-1"><i className="icon ion-android-calendar icon"></i></div>
                                    <div className="col-9"><span>18/05/2001</span></div>
                                </div>
                                <div className="row">
                                    <div className="col-1"><i className="icon ion-person icon"></i></div>
                                    <div className="col-9"><span>Nomena Razafimahandry</span></div>
                                </div>
                                <div className="row">
                                    <div className="col-1"><i className="icon ion-ios-telephone icon"></i></div>
                                    <div className="col-9"><span>+261 32 72 047 66</span></div>
                                </div>
                                <div className="row">
                                    <div className="col-1"><i className="icon ion-at icon"></i></div>
                                    <div className="col-9"><span>noum.rzdr@gmail.com</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hobbies group">
                    <div className="heading">
                        <h2 className="text-center">Hobbies</h2>
                    </div>
                    <p className="text-center text-muted">
                      Outside my IT's life, I pratice some sport like volley-ball and basket-ball.
                      I also passionned on japaneese culture
                    </p>
                </div>
            </div>
        </section>
    </main>
    </>
  )
}
