import "./menu.scss"
import MenuItem from "./MenuItem"

export default function Menu(props) {
  return (
    <div className={`menu-wrapper ${props.menuOpen && 'active'}`}>
        <ul>
            <MenuItem menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} title="Intro" id="#intro" />
            <MenuItem menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} title="Portfolio" id="#portfolio" />
            <MenuItem menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} title="Works" id="#works" />
            <MenuItem menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} title="Testimonials" id="#testimonials" />
            <MenuItem menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} title="Contact" id="#contact" />
        </ul>   
    </div>
  )
}
