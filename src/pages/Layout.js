import { Outlet, Link } from "react-router-dom";
import '../App.css'

const Layout = () => {
  return (
    <>
      <nav>
        <div class="nav-container">
            <ul class="nav-ul">
                <li class="nav-li-itom"><Link to="/"><i class="fa-solid fa-house"></i> Home</Link></li>
                <li class="nav-li-itom"><Link to="/about"><i class="fa-solid fa-user"></i> About</Link></li>
                <li class="nav-li-itom"><Link to="/contact"><i class="fa-solid fa-address-card"></i> Contact</Link></li>
                <li class="nav-li-itom"><Link to="/projects"><i class="fa-solid fa-briefcase"></i> Projects</Link></li>
            </ul>
        </div>
    </nav>

      <Outlet />
    </>
  )
};

export default Layout;