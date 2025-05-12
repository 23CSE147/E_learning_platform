// // import React from 'react';
// // import "./header.css"
// // import { Link } from 'react-router-dom';

// // const Header = ({ isAuth }) => {
// //   return (
// //     <header>
// //       <div className='logo'>LEARNICO</div>
// //       <div className='link'>
// //         <Link to={'/'}>Home</Link>
// //         <Link to={'/courses'}>Courses</Link>
// //         <Link to={'/about'}>About</Link>
// //         {isAuth ? (
// //           <Link to={'/account'}>Account</Link>
// //         ) : (
// //           <Link to={'/login'}>Login</Link>
// //         )
// //         }
// //       </div>
// //     </header>
// //   )
// // }


// // export default Header;




// import React from 'react';
// import "./header.css";
// import { Link } from 'react-router-dom';
// import { FaHome, FaBookOpen, FaInfoCircle, FaUser, FaSignInAlt } from 'react-icons/fa';
// import { FaGraduationCap } from "react-icons/fa6";

// const Header = ({ isAuth }) => {
//   return (
//     <header>
//       {/* <div className='logo'>
//         <FaGraduationCap className="logo-icon" />
//         LEARNICO
//       </div> */}
//       <div className='logo'>
//       <FaGraduationCap className="logo-icon" />
//         LEARNICO
//       </div>
     
//       <div className='link'>
//         <Link to='/'><FaHome /> Home</Link>
//         <Link to='/courses'><FaBookOpen /> Courses</Link>
//         <Link to='/about'><FaInfoCircle /> About</Link>
//         {isAuth ? (
//           <Link to='/account'><FaUser /> Account</Link>
//         ) : (
//           <Link to='/login'><FaSignInAlt /> Login</Link>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;







import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { FaHome, FaBookOpen, FaInfoCircle, FaUser, FaSignInAlt } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa6';

const Header = ({ isAuth }) => {
  return (
    <header>
      <div className='logo'>
        <FaGraduationCap className='logo-icon' />
        <span className='logo-text'>LEARNICO</span>
      </div>

      <nav className='link'>
        <Link to='/'>
          <FaHome />
          <span className='link-text'>Home</span>
        </Link>
        <Link to='/courses'>
          <FaBookOpen />
          <span className='link-text'>Courses</span>
        </Link>
        <Link to='/about'>
          <FaInfoCircle />
          <span className='link-text'>About</span>
        </Link>
        {isAuth ? (
          <Link to='/account'>
            <FaUser />
            <span className='link-text'>Account</span>
          </Link>
        ) : (
          <Link to='/login'>
            <FaSignInAlt />
            <span className='link-text'>Login</span>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
