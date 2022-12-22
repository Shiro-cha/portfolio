export default function HireMe(){

  return(
    <>
    <main className="page hire-me-page">
        <section className="portfolio-block hire-me">
            <div className="container">
                <div className="heading">
                    <h2>Hire Me</h2>
                </div>
                <form>
                    <div className="form-group"><label for="subject">Subject</label><input className="form-control" type="text" id="subject" /></div>
                    <div
                        className="form-group"><label for="email">Email</label><input className="form-control" type="email" id="email" /></div>
            <div className="form-group"><label for="message">Message</label><textarea className="form-control" id="message"></textarea></div>
            <div className="form-group">
                <div className="form-row">
                    <div className="col-md-6"><label for="hire-date">Date</label><input className="form-control" id="hire-date" type="date" /></div>
                    <div className="col-md-6 button"><button className="btn btn-outline-primary btn-block" type="submit">Hire Me</button></div>
                </div>
            </div>
            </form>
            </div>
        </section>
    </main>
    </>
  )
}
