import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink to={'/'}>
      <img src='/image/logo.png' alt='logo' style={{ width: '200px' }} />
    </NavLink>
  );
};

export default Logo;
