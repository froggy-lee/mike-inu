import styled from 'styled-components'

export const Wrapper = styled.div`
  @media (max-width: 900px) {
  }
  .title {
    @media (max-width: 900px) {
      img {
        width: 400px !important;
        height: 61px !important;
      }
    }
    @media (max-width: 600px) {
      img {
        width: 250px !important;
        height: 35px !important;
      }
    }
  }
  .description {
    position: absolute;
    top: 30rem;
    left: 50%;
    @media (max-width: 1000px) {
      top: 27rem;
    }
    @media (max-width: 900px) {
      position: relative;
      top: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .list-btn-bottom {
    display: flex;
    justify-content: space-evenly;
    margin-top: 1rem;
    margin-bottom: 3rem;
    @media (max-width: 1110px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 6rem;
  background-image: url('/images/banner.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 92rem;
  @media (max-width: 1120px) {
    height: 80rem;
  }
  @media (max-width: 1000px) {
    height: 70rem;
  }
  @media (max-width: 900px) {
    height: 61rem;
  }
  @media (max-width: 850px) {
    height: 57rem;
  }
  @media (max-width: 700px) {
    height: 47rem;
  }
  @media (max-width: 600px) {
    height: 40.5rem;
    padding-top: 3rem;
  }
  @media (max-width: 500px) {
    height: 34rem;
    padding-top: 3rem;
  }
  @media (max-width: 415px) {
    height: 27rem;
  }
`
export const Des = styled.div`
  font-size: 23px;
  line-height: 149%;
  color: #004f16;
  width: 46rem;
  span {
    font-weight: 700;
  }
  @media (max-width: 1000px) {
    width: 30rem;
    font-size: 16px;
    line-height: 149%;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 149%;
    text-align: center;
  }
`
export const Button = styled.button`
  background: #2f9d00;
  border: 0.904059px solid #004f16;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 1px 3px 7px rgba(255, 255, 255, 0.44);
  border-radius: 100px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  padding: 1rem 5rem;
  margin-top: 2rem;
`
export const ButtonBottom = styled.button`
  font-weight: 600;
  font-size: 25px;
  line-height: 38px;
  text-align: center;
  letter-spacing: -1px;
  text-transform: uppercase;
  color: #2f9d00;
  width: 36rem;
  border: 3px solid #2f9d00;
  border-radius: 20px;
  @media (max-width: 1110px) {
    margin-top: 2rem;
  }
  &:hover {
    background: #2f9d00;
    color: #ffffff;
    border: 2px solid #000;
    a {
      color: #ffffff;
    }
  }
  img {
    padding-right: 1rem !important;
  }
  a {
    color: #2f9d00;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
`
