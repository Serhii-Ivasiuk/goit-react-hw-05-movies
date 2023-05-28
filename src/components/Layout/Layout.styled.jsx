import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #060f13;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 0 8px rgba(94, 188, 214, 0.451);
  z-index: 100;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
`;

export const Main = styled.main`
  padding-top: 80px;
  padding-bottom: 20px;
`;
