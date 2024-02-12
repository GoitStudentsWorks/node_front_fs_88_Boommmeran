import styled from 'styled-components';
// import 'react-perfect-scrollbar/dist/css/styles.css';

export const Container = styled.div`
  max-width: 347px;

  @media (min-width: 768px) {
    max-width: 718px;
  }

  @media (min-width: 1180px) {
    max-width: 1128px;
  }

  &.scrollbar-container {
    height: auto;
  }
  overflow: auto;
  padding: 0 0 8px;

  &::-webkit-scrollbar {
    width: 8px; /* ширина скролбару */
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: blue; /* колір фону всієї доріжки скролбару */
    border-radius: 12px; // заокруглення доріжки скролу
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(15, 15, 15); // колір самого скролу
    border-radius: 12px; /* заокруглення самого скролу */

    &:hover {
      background-color: red; // колір самого скролу при наведенні
    }
  }
`;

export const ColumnList = styled.ul`
  display: flex;
  gap: 18px;
`;

export const ColumnItem = styled.li`
  width: 347px;
  @media (min-width: 768px) {
    width: 350px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  gap: 18px;
  align-items: flex-start;
  padding: 0 0 8px;
`;
export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  min-width: 334px;
  width: 334px;

  padding: 14px 78px;

  border: none;
  border-radius: 8px;

  font-family: 'Poppins-Medium';
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: var(--secondaryTextColor);
  background-color: var(--extraBgColor);

  opacity: 1;
  transition: color background-color var(--transition);

  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--btnText);
    background-color: var(--btnBgColor);
  }

  @media (min-width: 768px) {
    width: 334px;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;
  border: 1px solid black;
  border-radius: 8px;
  stroke: var(--extraBgColor);

  background-color: var(--squareIconColor);
  transition: background-color stroke var(--transition);

  &:hover,
  &:focus {
    background-color: var(--btnText);
    stroke: var(--plusInBtn);
  }
  > svg {
    width: 14px;
    height: 14px;
    stroke: var(--extraBgColor);
  }
`;
