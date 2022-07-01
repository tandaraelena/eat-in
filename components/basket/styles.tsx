import styled from 'styled-components';

export const BasketContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const BasketHeader = styled.div`
  padding: 20px 30px;
  background-color: white;
  display: flex;
  align-items: center;
`;

export const BasketText = styled.span`
  margin-left: 20px;
  font-size: 24px;
`;

export const ItemsWrapper = styled.div`
  background-color: white;
  margin: 40px 20px 20px;
  border-radius: 2px;
  padding: 20px;
  width: 800px;
`;

export const BasketItemWrapper = styled.div`
  padding: 20px 0;
`;

export const BasketItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemInfo = styled.div`
  display: flex;
`;

export const ItemTitle = styled.div`
  margin-left: 20px;
  font-size: 20px;
`;

export const ItemActions = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const ItemHr = styled.hr`
  border-top: 1px solid #c4c6ca;
  margin-top: 20px;
`;

export const BasketFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;
