import styled from 'styled-components'

export const CommunityWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 18rem;
  @media (max-width: 1200px) {
    margin-bottom: 180px;
  }
  @media (max-width: 900px) {
    margin-bottom: 150px;
  }
  @media (max-width: 650px) {
    margin-bottom: 8rem;
  }
`

export const Title = styled.div`
  text-align: center;
  font-size: 130px;
  font-family: 'Monster';
  color: #004f16;

  @media (max-width: 900px) {
    font-size: 80px;
  }

  @media (max-width: 650px) {
    font-size: 30px;
  }
`

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  width: 400px;
  margin-top: 0px;

  @media (max-width: 900px) {
    width: 300px;
  }

  @media (max-width: 650px) {
    width: 200px;
    margin-top: 15px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a {
    color: #ffffff;
    &:hover {
      svg path {
        stroke: transparent;
      }
    }
  }
  svg {
    width: 62px;
    height: 62px;
  }

  @media (max-width: 900px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 650px) {
    svg {
      width: 28px;
      height: 28px;
    }
  }
`

export const Name = styled.div`
  font-weight: 600;
  font-size: 15px;
  line-height: 1.6;
  text-align: center;
  color: #004f16;

  @media (max-width: 900px) {
    font-size: 12px;
  }

  @media (max-width: 650px) {
    font-size: 7px;
  }
`

export const Desc = styled.div`
  max-width: 1024px;
  font-weight: 500;
  font-size: 25px;
  line-height: 2.12;
  text-align: center;
  color: #004f16;

  @media (max-width: 1200px) {
    max-width: 850px;
  }

  @media (max-width: 900px) {
    max-width: 600px;
    font-size: 18px;
    line-height: 30px;
  }

  @media (max-width: 650px) {
    max-width: 300px;
    font-size: 12px;
    line-height: 24px;
  }
`
