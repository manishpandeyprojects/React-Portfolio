import "./header.scss";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";

const Header = (props) => {
  const {menuOpen, setMenuOpen} = props;
  return (
    <header className={`header ${menuOpen && 'active'}`}>
      <div className="container">
        <div className="topbar-wrapper">
          <div className="left">
            <div className="logo">
              <a href="#intro">manish.</a>
            </div>
            <div className="itemcontainer">
              <PersonIcon />
              <span>+91 993 010 1939 </span>
            </div>
            <div className="itemcontainer">
              <EmailIcon />
              <span>manish@gmail.com </span>
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
