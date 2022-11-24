import styled from 'styled-components'

export const Wrapper = styled.div``
export const Drop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Select = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  background: #eeeeee;
  padding: 0 18px;
  width: 192px;
  height: 46px;

  .dropdown-none {
    display: none;
  }

  @media (max-width: 700px) {
    width: 158px;
    height: 30px;
  }
`
export const TitleAll = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;

  @media (max-width: 700px) {
    font-size: 14px;
    line-height: 21px;
  }
`
export const Arrow = styled.div`
  cursor: pointer;

  @media (max-width: 700px) {
    width: 9px;
    height: 16px;
  }
`

export const DropDown = styled.div`
  position: absolute;
  transform: translateY(1%);
  left: 13.3rem;
  z-index: 1;
  width: 192px;
  height: 312px;

  background: #ffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  transform-origin: top;

  transition: all 0.4s;
  text-decoration: none;
  transition: max-height 0.7s, opacity 3s, visibility 4s ease;

  @media (max-width: 700px) {
    width: 157px;
    left: 12rem;
  }

  @media (max-width: 500px) {
    left: 8.2rem;
  }
`
export const Title = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  height: 39px;
  display: flex;
  align-items: center;
  padding-left: 24px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  color: #000000;
  transform-origin: top;
  transition: all 0.2s;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 700px) {
    font-size: 14px;
    line-height: 20px;
  }

  :nth-child(8) {
    border-bottom: none;
  }

  :hover {
    border-left: 5px solid rgba(216, 0, 0, 1);
    background: #e7e7e7;
  }
`
