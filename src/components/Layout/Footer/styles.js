import styled from 'styled-components'

export const Wrapper = styled.div`
  background-image: url('/images/footer-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  .language {
    position: absolute;
    top: 5rem;
    right: 5rem;
    @media (max-width: 750px) {
      position: relative;
      top: 0;
      right: 0;
      margin-top: 1rem;
      display: flex;
      justify-content: center;
    }
    .select-box {
      font-size: 18px;
      font-weight: 500;
      width: 15rem;
      @media (max-width: 750px) {
        font-size: 16px;
      }
      img {
        width: 26px !important;
        height: 18px !important;
        padding-right: 0.5rem !important;
      }
      .css-1s2u09g-control {
        background: #1c253c;
      }
      .css-1hb7zxy-IndicatorsContainer {
        display: none;
      }
    }
  }
`
export const Title = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5rem;
  @media (max-width: 600px) {
    padding-top: 3rem;
    img {
      width: 155px !important;
      height: 25px !important;
    }
  }
`
export const ListItem = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  @media (max-width: 950px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 85%;
    margin: auto;
    margin-top: 1rem;
    text-align: center;
  }
`
export const Item = styled.li`
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
  padding: 0 3rem;
  margin-top: 1rem;
  border-right: 2px solid #ffffff;
  &:last-child {
    border: none;
  }
  a {
    &:hover {
      color: #ffffff;
    }
  }
  @media (max-width: 952px) {
    border: none;
  }
  @media (max-width: 750px) {
    padding: 0;
    font-size: 15px;
    line-height: 24px;
  }
`
export const Bottom = styled.div`
  font-weight: 400;
  font-size: 21px;
  line-height: 20px;
  color: #ffffff;
  opacity: 0.8;
  text-align: center;
  padding: 1rem;
  border-top: 1px solid #ffffff;
  margin-top: 3rem;
  @media (max-width: 750px) {
    padding: 0.5rem;
    font-size: 14px;
    line-height: 24px;
    margin-top: 1rem;
  }
`
export const Logo = styled.div`
  position: absolute;
  top: -11rem;
  left: 1rem;
  @media (max-width: 600px) {
    top: -6rem;
    img {
      width: 160px !important;
      height: 90px !important;
    }
  }
`
