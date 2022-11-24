import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background: #ffffff;
  border-bottom: 1px solid #2f9d00;
  .logo {
    &:hover {
      cursor: pointer;
    }
  }
  @media screen and (min-width: 1280px) {
    padding: 0 9rem;
  }
`
export const ListMenu = styled.ul`
  .backdrop {
    content: '';
    top: 0;
    right: 279px;
    bottom: 0;
    left: 0;

    position: fixed;
    z-index: -1;
    background: rgba(0, 0, 0, 0.5);

    @media screen and (min-width: 1280px) {
      display: none;
    }
  }
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  bottom: 0;

  width: 279px;
  height: 100%;
  margin: 0 auto;
  background: #2f9d00;
  padding: 8rem 0rem;

  display: ${props => (props.active ? 'flex' : 'none')};
  flex-direction: column;

  @media screen and (min-width: 1280px) {
    position: relative;
    padding: 0;
    margin: 0;
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #ffffff;
    color: #2f9d00;
  }
`
export const ItemMenu = styled.li`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: left;
  text-transform: uppercase;
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
  padding: 3rem;
  position: relative;
  @media screen and (min-width: 1280px) {
    border: none;
    background: #ffffff;
    color: #2f9d00;
    justify-content: center;
    align-items: center;
    width: 18rem;
    padding: 0;
    &:hover {
      background: #2f9d00;
      color: #ffffff;
      a {
        background: #2f9d00;
        color: #ffffff;
      }
      &:last-child {
        background: #ffffff;
        color: #2f9d00;
      }
    }
  }
  a {
    color: #ffffff;
    @media screen and (min-width: 1280px) {
      border: none;
      background: #ffffff;
      color: #2f9d00;
    }
  }
  &:last-child {
    border-bottom: none;
    &:before {
      display: none;
    }
  }
  &:hover {
    cursor: pointer;
  }
  button {
    color: #2f9d00;
    background: #ffffff;
    border-radius: 100px;
    border: none;
    padding: 1.5rem;
    width: 100%;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    @media screen and (min-width: 1280px) {
      border: none;
      background: #2f9d00;
      color: #ffffff;
    }
  }
  &:before {
    content: '';
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);

    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme }) => theme.whiteColor};

    @media screen and (min-width: 1280px) {
      display: none;
    }
  }
`
export const HambugerButton = styled(motion.span)`
  cursor: pointer;
  display: block;
  z-index: 1;
  @media screen and (min-width: 1280px) {
    display: none;
  }
`
export const BtnClose = styled.button`
  width: 35px;
  height: 35px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  position: absolute;
  right: 2rem;
  top: 2rem;
`
export const BackToTop = styled.button`
  position: fixed;
  width: 6rem;
  height: 6rem;
  background-color: #00cb45;
  border-radius: 100px;
  border: none;
  bottom: 2rem;
  right: 2rem;
  z-index: 1;
`
