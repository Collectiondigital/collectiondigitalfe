import "./CSS/Footer.css";

export default function Footer() {
  return (
    <>
      <div className="centering">
        <div className="sb__footer">
          <div className="sb__footer-padding">
            <div className="sb__footer-links">
              <div className="sb__footer-links_div">
                <h4>About</h4>
                <a href="/employer">
                  <p>Pricing</p>
                </a>
                <a href="/Career">
                  <p>Contact</p>
                </a>
                <a href="/Locations">
                  <p>Reviews</p>
                </a>
              </div>
              <div className="sb__footer-links_div">
                <h4>Our Service</h4>
                <a href="/Resources">
                  <p>For Collectors</p>
                </a>
                <a href="/PokéAPI">
                  <p>For Museums</p>
                </a>
              </div>

              <div className="socialmedia">
                <div className="social1">
                  <a href="/Facebook">
                    <img
                      className="social-containerf"
                      src="../src/assets/Facebook.svg"
                    />
                  </a>
                </div>
                <div className="social1">
                  <a href="/Twitter">
                    <img
                      className="social-containert"
                      src="../src/assets/Twitter.svg"
                    />
                  </a>
                </div>
                <div className="social1">
                  <a href="/Instagram">
                    <img
                      className="social-containeri"
                      src="../src/assets/Instagram.svg"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                marginBottom: "1rem",
                color: "rgb(175, 175, 179)",
              }}
            >
              <p className="disclaim">
                The Data used on this Website is provided by V&A Collection
                Click{" "}
                <a
                  href="https://www.vam.ac.uk/collections"
                  style={{ textDecoration: "underline" }}
                >
                  {" "}
                  here
                </a>{" "}
                to access the Data
              </p>
            </div>
          </div>
          <div className="sb__footer-below">
            <div className="sb__footer-copyright">
              <p>
                @{new Date().getFullYear()} WBS Group Four. All rights are
                reserved.
              </p>
              <p style={{ marginTop: "4px" }}>
                Rights to all collection images & data belong to the V&A Museum
                London.
              </p>
              <p style={{ marginTop: "3px" }}>
                This website was designed and built by Sona Chaboud, Jennifer
                Rothrock and Kevin Kalus
              </p>
            </div>

            <div className="botline" style={{ marginLeft: "1em" }}>
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
      </div>
    </>
  );
}
