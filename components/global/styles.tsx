import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
`;

export const Actions = styled.div`
  display: flex;
  gap: 20px;
`;

export const Logo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 20px;
  color: #439a32;
  font-style: oblique;
`;

export const BannerWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-bottom: 30px;
`;

export const Button = styled.button<{ link?: boolean | undefined; primary?: boolean | undefined }>`
  background: transparent;
  padding: 10px;
  margin: 0;
  border: none;

  &:hover {
    opacity: ${(props) => (props.disabled ? '0.7' : '0.8')};
  }

  opacity: ${(props) => (props.disabled ? '0.7' : '1.0')};

  ${({ link }) =>
    link &&
    css`
      border-radius: 2px;
      border: 1px solid grey;
    `}

  ${({ primary }) =>
    primary &&
    css`
      border-radius: 2px;
      background: #33a61c;
      color: white;
    `}
`;

export const MenuWrapper = styled.div`
  display: flex;
  background-color: black;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DrawerContent = styled.div`
  width: 50%;
  background: #30395f;
  padding: 20px 30px;
  color: white;
  @media (max-width: 640px) {
    width: 100%;
  }
`;
