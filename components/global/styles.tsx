import styled, { css } from "styled-components";

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

export const Button = styled.button<{
  link?: boolean | undefined;
  primary?: boolean | undefined;
}>`
  background: transparent;
  padding: 10px;
  margin: 0;
  border: none;

  &:hover {
    opacity: ${(props) => (props.disabled ? "0.7" : "0.8")};
  }

  opacity: ${(props) => (props.disabled ? "0.7" : "1.0")};

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

// Drawer
export const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
`;

export const DrawerWrapper = styled.div`
  background: rgba(114, 116, 121, 0.5);
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  z-index: 1000;
`;

export const DrawerContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 100%;
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

export const DrawerContentContainer = styled.div`
  position: relative;
  height: 100%;
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

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const ImageContainer = styled.div`
  maxwidth: 300px;
`;

export const RecipeTitle = styled.div`
  font-size: 24px;
  margin-top: 20px;
  font-weight: bold;
`;

export const RecipeDescription = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;

export const HeaderTabs = styled.div`
  font-size: 20px;
  margin-top: 30px;
  display: flex;
`;

export const HR = styled.hr`
  width: 100%;
  opacity: 0.6;
`;

export const Tab = styled.div`
  margin-top: 10px;
  font-size: 18px;
`;

export const LargeBottom = styled.div`
  margin-bottom: 65px;
`;

export const SmallBottom = styled.div`
  margin-bottom: 8px;
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  background: #30395f;
`;

export const DrawerButton = styled.button<{
  backgroundC?: string | undefined;
}>`
  font-size: 18px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  color: white;
  background: ${({ backgroundC }) => (backgroundC ? backgroundC : "red")};
`;
