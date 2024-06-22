import React from 'react'

const Header = () => {
  return (
    <div>
       <div className='text-red-700'>
     
     <div className="container-full position-relative p-0">
         <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
             <a href="index.html" className="navbar-brand p-0">
                 <h1 ><img src="img/logo.png" alt="Logo"/> Shivsys </h1> 
                 
             </a>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                 <span className="fa fa-bars"></span>
             </button>
             <div className="collapse navbar-collapse" id="navbarCollapse">
                 <div className="navbar-nav mx-auto py-0">
                     <a href="index.html" className="nav-item nav-link active">Home</a>
                     <a href="about.html" className="nav-item nav-link">About</a>
                     <a href="service.html" className="nav-item nav-link">Service</a>
                     <a href="project.html" className="nav-item nav-link">Project</a>
                     <div className="nav-item dropdown">
                         <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Community</a>
                         <div className="dropdown-menu m-0">
                             <a href="team.html" className="dropdown-item">Our Team</a>
                             <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                             <a href="careerpage.html" className="dropdown-item">Career Page</a>
                         </div>
                     </div>
                     <a href="contact.html" className="nav-item nav-link">Contact</a>
                 </div>
                 <a href="https://www.linkedin.com/company/shivsys-incorporation/mycompany/" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Get Started</a>
             </div>
         </nav>

         
         </div>

 </div>
    </div>
  )
}

export default Header;
