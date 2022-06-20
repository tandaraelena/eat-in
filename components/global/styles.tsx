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
  /* position: relative; */
`;

export const Button = styled.button`
  background: transparent;
  padding: 10px;
  margin: 0;
  border: none;

  &:hover {
    opacity: ${(props) => (props.disabled ? '0.7' : '0.8')};
  }

  opacity: ${(props) => (props.disabled ? '0.7' : '1.0')};

  ${({ primary }: { primary?: boolean | undefined }) =>
    primary &&
    css`
      border-radius: 2px;
      background: #33a61c;
      color: white;
    `}
`;
