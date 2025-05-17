import React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../Footer/footer.css"

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <br />
        <div className="footer_data">
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Privacy</li>
              <li>Contact Us</li>
              
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Legal Notes</li>
              <li>Do Not Sell or Share My Personal Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Netflix Shop</li>
              <li>Cookie Preferences</li>
              <li>Ad Choices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Terms of Use</li>
              <li>Corporate information</li>
            </ul>
          </div>
        </div>
        <br />
       
        <div className="sevice_code">
          <p>Service Code</p>
        </div>
        <div className="copy_write">&copy; 1997-2025 Netflix, Inc.</div>
      </div>
    </div>
  );
}

export default Footer
