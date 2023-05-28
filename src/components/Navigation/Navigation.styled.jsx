// Libs
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  gap: 12px;
  padding: 8px 0;
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  min-width: 120px;
  text-align: center;
  padding: 8px 20px;
  border: 2px solid #153341;
  border-radius: 8px;
  text-transform: uppercase;
  font-weight: 700;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    background-color: #0e222b;
  }

  &:hover,
  &:focus {
    color: #afe5e5;
  }
`;
