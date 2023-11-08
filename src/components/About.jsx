import "./CSS/About.css";

export default function About() {
  return (
    <>
      <div className="about_container">
        <h1 id="developer_team">Developer Team</h1>
        <div className="about_card">
          <div className="about_image">
            <img
              className="about_image"
              src="./Sonia.jpg"
              alt="image sonia"
            />
          </div>

          <div className="about_text">
            <h2>Sonia</h2>
            <p>
              Empathy and team spirit, honed through years in theatre, fuel my drive to develop user-centric
              software solutions. Since I entered the tech world, my learning curve is rising, and I
              have no plans to change that.
              Resilience, cultivated in response to rejection and criticism on the stage, is the driving
              force propelling my pursuit of excellence in programming.
              I firmly believe that my passion for coding, combined with the soft skills nurtured in the
              theatre, make me a natural fit for a fulfilling career as a programmer.
            </p>

            <div className="socialmedia">
              <div className="social1">
                <a href="url">
                  <img className="social-containerL" src="/linkedin.svg" />
                </a>
              </div>
              <div className="social1">
                <a href="url">
                  <img className="social-containerg" src="/github.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="about_card">
          <div className="about_text">
            <h2>Kevin</h2>
            <p>
              Hello, I'm Kevin! I'm a flexible and easy-going person. I love to work
              in a group and make progress as a team! Seeing people bonding
              and progressing further in their work makes me proud and
              happy, personally and professionally. I started coding in July 2023
              and from the start I loved it, creating something from scratch and
              seeing my work and knowledge grow. In the Full-Stack Web Development
              course at WBS Coding School I learned Javascript, React.js, Node.js, PostgreSQL,
              and other programs for frontend & backend. I also had group projects; with changing
              team members, to simulate different work environments, where we created web
              applications such as cookbooks and blogs.
            </p>

            <div className="socialmedia">
              <div className="social1">
                <a href="https://www.linkedin.com/in/kevinkalus/">
                  <img className="social-containerl" src="/linkedin.svg" />
                </a>
              </div>
              <div className="social1">
                <a href="https://github.com/MrKevinka">
                  <img className="social-containerg" src="/github.svg" />
                </a>
              </div>
            </div>
          </div>

          <div className="about_image">
            <img src="./Kevin.jpeg" alt="image Kevin" />
          </div>
        </div>

        <div className="about_card">
          <div>
            <img
              className="about_image"
              src="./Jen.jpg"
              alt="image jennifer"
            />
          </div>

          <div className="about_text">
            <h2>Jennifer</h2>
            <p>
              I'm a Jr. Full-Stack Developer who bridges the gap between design
              and development. With a background in UI design, I understand the
              importance of aesthetics and user-centered design principles. My
              proficiency in HTML, CSS, JavaScript & React allows me to bring
              these designs to life, creating engaging and responsive web
              applications. My career goals revolve around combining my design &
              UI skills with coding for organisations dedicated to causes close
              to my heart, including those that support animals, the
              environment, people, businesses or heritage.
            </p>

            <div className="socialmedia">
              <div className="social1">
                <a href="http://www.linkedin.com/in/jennifer-rothrock/">
                  <img className="social-containerL" src="/linkedin.svg" />
                </a>
              </div>
              <div className="social1">
                <a href="https://github.com/jeniverede">
                  <img className="social-containerg" src="/github.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <h1 id="our_project">Our Project</h1>
        <div className="project_container">
          <p>
            The concept for Collection Digital came out of my time living in
            London, working as a collection assistant for small museums and
            individual collectors. Most used Excel or Word to document their
            collections with separate files for images, some used a hand written
            notebook, some nothing at all.
            <br />
            <br />
            Most digital collection software is made for large museums with
            complex features and an equally large price tag. What individuals
            and small museums need is collection software that is easy to use
            with social media features included to make sharing collections with
            the public simple. I completed the design for the app in 2022, but
            had no plans to have it built or take the project any further.
            <br />
            <br />
            In July 2023, I began a training course in Full-Stack Web & App
            Development at WBS Coding School in Berlin. During the course we
            learned how to build basic web applications, making it possible for
            the Collection Digital project to go forward. For our final project
            Sonia & Kevin joined me to build the web application. I'm thankful
            for the time, effort and fun they contributed to the project and for
            the chance to see Collection Digital come to life. - Jennifer
          </p>
        </div>
      </div>
    </>
  );
}
