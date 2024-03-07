/* eslint-disable react/prop-types */

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="light">
  <div className="container-fluid">
      {/* Brand logo with clickable newsApp badge */}
    <a className="navbar-brand" href="#"><span className="badge bg-warning text-dark fs-4"  onClick={()=>setCategory("general")} >newsApp</span></a>
     {/* Navigation menu with category buttons */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <a className="btn btn-light" onClick={()=>setCategory("business")} >Business</a>
        </li>
        <li className="nav-item">
          <a className="btn btn-light" onClick={()=>setCategory("technology")} >Technology</a>
        </li>
        <li className="nav-item">
          <a className="btn btn-light" onClick={()=>setCategory("sports")} >Sports</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
