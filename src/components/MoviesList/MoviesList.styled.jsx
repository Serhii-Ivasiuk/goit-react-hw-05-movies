// Libs
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 8px 20px;
  font-size: 20px;
  letter-spacing: 2px;
  border-radius: 8px;
  border-left: 8px solid #f05d22;
  outline: 3px solid rgba(0, 0, 0, 0.15);
  transition: 0.2s color cubic-bezier(0.4, 0, 0.2, 1),
    0.2s border-color cubic-bezier(0.4, 0, 0.2, 1),
    0.2s color cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border-color: #afe5e5;
    color: #afe5e5;
    box-shadow: 0 0 8px rgba(94, 188, 214, 0.451);
  }
`;
