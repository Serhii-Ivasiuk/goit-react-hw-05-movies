// Styled components
import { NavList, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
};

export default Navigation;
