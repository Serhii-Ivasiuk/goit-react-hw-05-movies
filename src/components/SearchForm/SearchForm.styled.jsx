// Libs
import styled from '@emotion/styled';

export const SaerchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: #0e222b;
  border-radius: 8px;
`;

export const SaerchFormLabel = styled.label`
  height: 48px;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  font-size: 20px;
  border: none;
  padding: 0 16px;
  background-color: transparent;
  color: inherit;
  outline: none;

  &::placeholder {
    font-size: 18px;
  }
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  padding: 0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-image: url('https://cdn-icons-png.flaticon.com/512/109/109164.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const SearchFormBtnLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
