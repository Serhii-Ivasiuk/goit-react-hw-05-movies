// Libs
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
  width: 140px;
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

export const MovieCard = styled.div`
  overflow: hidden;
  border: 3px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const MoviePoster = styled.img`
  object-fit: cover;

  @media screen and (max-width: 767.98px) {
    width: 100%;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px;
  border-top: 4px solid #f05d22;

  @media screen and (min-width: 768px) {
    border-top: 0;
    border-left: 4px solid #f05d22;
  }
`;

export const InfoTitle = styled.div`
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #f05d22;
`;

export const SubpagesLinkList = styled.ul`
  display: flex;
  gap: 12px;
  padding: 8px 0;
`;
