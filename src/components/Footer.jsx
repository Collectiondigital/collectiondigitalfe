import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import "./CSS/Footer.css";

export default function Footer() {
  return (
    <>
      <div className="sb__footer">
        <div className="sb__footer-padding">
          <div className="sb__footer-links">
            <div className="sb__footer-links_div">
              <h4>For Business</h4>
              <a href="/employer">
                <p>Employer</p>
              </a>
              <a href="/Career">
                <p>Career</p>
              </a>
              <a href="/Locations">
                <p>Location</p>
              </a>
            </div>
            <div className="sb__footer-links_div">
              <h4>Resources</h4>
              <a href="/Resources">
                <p>Resource Center</p>
              </a>
              <a href="/PokéAPI">
                <p>V&A Collection</p>
              </a>
              <a href="/Contact">
                <p>Contact</p>
              </a>
              <a href="/About">
                <p>About us</p>
              </a>
            </div>

            <div className="socialmedia">
              <div className="social1">
                <a href="/Facebook">
                  <div className="social-containerf"></div>
                </a>
              </div>
              <div className="social1">
                <a href="/Twitter">
                  <div className="social-containert"></div>
                </a>
              </div>
              <div className="social1">
                <a href="/Instagram">
                  <div className="social-containeri"></div>
                </a>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: "1rem", color: "rgb(175, 175, 179)" }}>
            <p className="disclaim">
              The Data used on this Website is provided by V&A Collection Click{" "}
              <a href="" style={{ textDecoration: "underline" }}>
                {" "}
                here
              </a>{" "}
              to access the Data
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              @{new Date().getFullYear()} WBS Group Four. All rights are
              reserved.
            </p>
            <p style={{ marginTop: "4px" }}>
              Built and designed by Sona Chaboud, Jennifer Rothrock and Kevin
              Kalus
            </p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/Terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/Privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/Security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/Cookies">
              <div>
                <p>Cookie declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
