import styled from 'styled-components';

export const CardWrapper = styled.div`
  position: relative;
  width: 200px;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

export const CardText = styled.div`
  background: white;
  padding: 5px 10px;
  position: absolute;
  bottom: 20px;
  left: 30px;
  font-size: 24px;
  display: flex;
  align-content: center;
  border-radius: 3px;
  cursor: pointer;
`;

export const Text = styled.div`
  margin-right: 10px;
  transition: margin-right 0.6s ease-out;

  &:hover {
    margin-right: 20px;
  }
`;
