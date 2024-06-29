import React from "react";
import companyLogo from "../../images/Asset1.png";
import { FaTripadvisor } from "react-icons/fa";
import { AiFillYoutube, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { BiLogoTwitter, BiLogoFacebook } from "react-icons/bi";
import { HiChevronRight } from "react-icons/hi";
import "./footer.css";

function Footer() {
  const topbarLogoStyle = {
    width: "75px",
    marginBottom: "25px",
  };
  const footerText = {
    fontSize: "14px",
    lineheight: "24px",
    marginBottom: 0,
    fontFamily: '"Poppins", sans - serif',
  };

  return (
    <div style={{ background: "#000", color: "#fff" }} className="footer-top">
      <div className="container">
        <div className="row m-0">
          <div className="col-lg-4 col-md-6">
            <div className="text-center">
              <img src={companyLogo} alt="" style={topbarLogoStyle} />
            </div>
            <div className="d-flex flex-column">
              <i className="text-center" style={footerText}>
                Saywa
              </i>
              <i className="text-center" style={footerText}>
                3009 Bridgeport way west
              </i>
              <i className="text-center" style={footerText}>
                Tacoma, WA 98466
              </i>
            </div>
            <div style={{ fontSize: "14px" }}>
              <div className="d-flex justify-content-center mt-4">
                <strong>Phone:&nbsp;</strong>
                <div> 877-206-0780</div>
              </div>
              <div className="d-flex justify-content-center">
                <strong>Email:&nbsp;</strong>
                <div> reservations@saywalimo.com/</div>
              </div>
            </div>
            <div className="d-flex gap-2 mt-2 mb-4">
              {/* <div className="socialLinkContainer">
                <a
                  href="https://www.facebook.com/ALLBLACKLIMO"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BiLogoFacebook />
                </a>
              </div>
              <div className="socialLinkContainer">
                <a
                  href="https://twitter.com/allblacklimo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BiLogoTwitter />
                </a>
              </div>
              <div className="socialLinkContainer">
                <a
                  href="https://www.instagram.com/all_black_limo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </div>
              <div className="socialLinkContainer">
                <a
                  href="https://www.linkedin.com/in/all-black-limo-54a52b257"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </div>
              <div className="socialLinkContainer">
                <a
                  href="https://www.youtube.com/channel/UCeCBc9Yn5r75gZeyeIzDpRA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillYoutube />
                </a>
              </div>
              <div className="socialLinkContainer">
                <a
                  href="https://en.tripadvisor.com.hk/Attraction_Review-g60878-d23940386-Reviews-All_Black_Limo_LLC-Seattle_Washington.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTripadvisor />
                </a>
              </div> */}
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <strong>Useful Links</strong>
            <ul className="nostyleUl">
              <li className="d-flex pt-2 pb-2">
                <HiChevronRight style={{ color: "#c29c66" }} />
                <div>Home</div>
              </li>
              <li className="d-flex pt-2 pb-2">
                <HiChevronRight style={{ color: "#c29c66" }} />
                <div>About us</div>
              </li>
              <li className="d-flex pt-2 pb-2">
                <HiChevronRight style={{ color: "#c29c66" }} />
                <div>Services</div>
              </li>
              <li className="d-flex pt-2 pb-2">
                <HiChevronRight style={{ color: "#c29c66" }} />
                <div>Fleet & Packages</div>
              </li>
              <li className="d-flex pt-2 pb-2">
                <HiChevronRight style={{ color: "#c29c66" }} />
                <div>Terms of service</div>
              </li>
              <li className="d-flex pt-2 pb-2">
                <HiChevronRight style={{ color: "#c29c66" }} />
                <div>Privacy policy</div>
              </li>
              <li className="d-flex pt-2 pb-2">
                <HiChevronRight style={{ color: "#c29c66" }} />
                <div>Sitemap</div>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <ul className="nostyleUl">
              <li>
                <strong>Our Services</strong>
              </li>
              <li className="d-flex pt-2 pb-2">
                <HiChevronRight style={{ color: "#c29c66" }} />
                <div>Corporate Service</div>
              </li>
              <li className="d-flex pt-2 pb-2">
                <HiChevronRight style={{ color: "#c29c66" }} />
                <div>VIP Service</div>
              </li>
              <li className="d-flex pt-2 pb-2">
                <HiChevronRight style={{ color: "#c29c66" }} />
                <div>Airport Service</div>
              </li>
              <li className="d-flex pt-2 pb-2">
                <HiChevronRight style={{ color: "#c29c66" }} />
                <div>Party Service</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
