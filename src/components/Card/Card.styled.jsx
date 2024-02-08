import styled from 'styled-components';

export const CardBody = styled.div`
  border-radius: 8px;
  width: 100%; // змінити на /* width: 100%; */ коли стане у колонкуи
  height: 154px;
  background: var(--primaryBgColor);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  padding: 14px 20px 14px 24px;
/* 
  margin: 20px;//видалити
  border: 1px solid black;//видалити */

`;
export const CardColor = styled.div`
  position: absolute;
  border-radius: 4px 0 0 4px;
  width: 4px;
  height: 154px;
  top: 0px;
  left: 0px;
  background: rgba(22, 22, 22, 0.3);//змінюється в залежности від приорітету
  /* background: #8fa1d0;
  background: #e09cb5;
  background: #bedbb0; */

`;
export const CardTitle = styled.h4`
  text-align: left;
  font-family: 'Poppins-SemiBold';
  font-size: 14px;
  letter-spacing: -0.02em;
  color:var(--primaryTextColor);
  margin-bottom: 8px;
`;
export const CardDescription = styled.p`
  text-align: left;
  font-size: 12px;
  line-height: 1.33333;
  letter-spacing: -0.02em;
  color: var(--secondaryTextColor);
  width: 290;
  height: 38;
  margin-bottom: 14px;
`;

export const CardSolid = styled.div`
  border: 1px solid;
  border-color: rgba(22, 22, 22, 0.1);//не змінюється в темах
  margin-bottom: 14px;
`;

export const CardDetals = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardInformation = styled.div`
  display: flex;
`;

export const Priority = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 14px;
`;

export const PriorityDetals = styled.div`
  display: flex;
`;

export const PriorityTitle = styled.p`
  text-align: left;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: rgba(22, 22, 22, 0.5);//не змінюється в темах
  margin-bottom: 4px;
`;
export const PriorityColor = styled.div`
  border-radius: 100%;
  width: 14px;
  height: 14px;
  margin-right: 4px;
  background-color: rgba(22, 22, 22, 0.3);//змінюється в залежности від приорітету
  /* background: #8fa1d0;
  background: #e09cb5;
  background: #bedbb0; */
`;

export const PriorityTipe = styled.p`
  font-size: 10px;
  letter-spacing: -0.02em;
  color:var(--primaryTextColor);
`;

export const Deadline = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 14px;
`;

export const DeadlineTitle = styled.p`
  text-align: left;
  font-size: 8px;
  letter-spacing: -0.02em;
  color: rgba(22, 22, 22, 0.5);//не змінюється в темах
  margin-bottom: 4px;
`;

export const DeadlineDate = styled.p`
  text-align: left;
  font-size: 10px;
  letter-spacing: -0.02em;
  color:var(--primaryTextColor);
`;
export const CardButtons = styled.div`
  display: flex;
  gap: 8px;
  stroke: rgba(22, 22, 22, 0.5);//не змінюється в темах
  button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
  }
`;
export const Bell = styled.button`
  stroke:var(--accent);//не змінюється в темах
`
