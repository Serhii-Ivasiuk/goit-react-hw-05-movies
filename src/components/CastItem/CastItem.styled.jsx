// Libs
import styled from '@emotion/styled';

export const StyledCastItem = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 3px solid rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;

export const Photo = styled.img`
  width: 100%;
  height: auto;
`;

export const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 4px;
  justify-content: space-between;
  padding: 8px;
  border-top: 3px solid #f05d22;
`;

export const Character = styled.p`
  color: #f05d22;
`;
