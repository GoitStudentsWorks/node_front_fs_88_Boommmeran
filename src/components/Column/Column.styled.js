import styled from 'styled-components';

export const HeadWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 335px;
  height: 56px;

  margin-bottom: 14px;
  padding: 17px 20px;

  border-radius: 8px;

  background-color: var(--extraBgColor);

  @media (min-width: 768px) {
    width: 334px;
  }
`;

export const Title = styled.h3`
  font-family: 'Poppins-Medium';
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
`;

export const CardList = styled.ul`
  > li:not(:last-of-type) {
    margin-bottom: 10px;
  }
  border-radius: 12px;
  max-height: 478px;

  @media (min-width: 768px) {
    max-height: 640px;
  }

  @media (min-width: 1180px) {
    max-height: 478px;
  }

  overflow: auto;
  padding: 0;
  margin-bottom: 14px;

  &::-webkit-scrollbar {
    width: 8px; /* ширина скролбару */
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

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconedBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;

  opacity: 0.8;
  background-color: inherit;

  stroke: var(--secondaryTextColor);
  stroke-opacity: 0.5;
  transition: opacity var(--transition);

  > svg {
    width: 16px;
    height: 16px;
  }

  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 335px;
  height: 56px;

  padding: 10px 0 11px 0;

  border: none;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: var(--btnText);
  background-color: var(--btnBgColor);
  transition: background-color var(--transition);

  cursor: pointer;

  @media (min-width: 768px) {
    width: 334px;
  }

  &:hover,
  &:focus {
    background-color: var(--btnBgColorHover);
  }
`;
export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 28px;
  height: 28px;

  border-radius: 8px;

  background-color: var(--btnText);

  > svg {
    width: 14px;
    height: 14px;
    stroke: var(--plusInBtn);
  }
`;
