import styled from 'styled-components'

export const Wrapper = styled.div`
  background-image: url('/images/introduce-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 10rem 0;
  @media (max-width: 900px) {
    margin-top: 1rem;
  }
  @media (max-width: 650px) {
    padding: 5rem 0;
    background-size: cover;
  }
`

export const Title = styled.div`
  font-family: 'Monster';
  font-style: normal;
  font-weight: 400;
  font-size: 110.401px;
  line-height: 90%;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 3.39695px 8.49237px rgba(0, 0, 0, 0.69);
  @media (max-width: 900px) {
    font-size: 80px;
  }
  @media (max-width: 650px) {
    font-size: 42px;
  }
`
export const Des = styled.div`
  font-weight: 500;
  width: 70%;
  margin: auto;
  margin-top: 2rem;
  font-size: 27.1756px;
  line-height: 41px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 3.39695px 3.39695px rgba(0, 0, 0, 0.25);
  @media (max-width: 900px) {
    font-size: 20px;
    line-height: 35px;
  }
  @media (max-width: 650px) {
    width: 80%;
    font-size: 15px;
    line-height: 25px;
  }
`
