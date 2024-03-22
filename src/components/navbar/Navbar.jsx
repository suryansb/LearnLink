import "./Navbar.css";

import img1 from '../../assets/img/logo.png'
function Navigations() {


  return (
    <>
    <nav className="navbar navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand" href="#">
      <img src={img1} alt="Logo"/>
    </a>
    

    <div className="ml-auto">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <button className="btn btn-primary">Login</button>
        </li>
        <li className="nav-item q">
          <button className="btn">Signup</button>
        </li>
      </ul>
    </div>

  </div>
 </nav>
 </>
  );
}



export default Navigations;