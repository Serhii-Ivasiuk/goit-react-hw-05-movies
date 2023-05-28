// Libs
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 140px;
  padding: 8px 20px;
  background-color: #0e222b;
  border: 2px solid #153341;
  border-radius: 8px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #afe5e5;
  }
`;

export const MovieCard = styled.div`
  display: flex;
  border-radius: 8px;
  border: 3px solid rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px 20px;
  border-left: 4px solid #f05d22;
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
