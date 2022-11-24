import styled from 'styled-components'

export const SlideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  @media (max-width: 650px) {
    margin-bottom: 40px;
  }

  .slick-slider {
    button {
      display: none !important;
    }
  }
`
export const Container = styled.div`
  width: 100%;
  max-width: 1360px;

  @media (max-width: 1200px) {
    max-width: 1100px;
  }
  @media (max-width: 900px) {
    max-width: 740px;
  }
  @media (max-width: 650px) {
    max-width: 540px;
  }
`

export const Wrapper = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Image1 = styled.div`
  position: relative;
  width: 240px;
  height: 200px;
  @media (max-width: 1200px) {
    width: 192px;
    height: 160px;
  }
  @media (max-width: 900px) {
    width: 120px;
    height: 100px;
  }
  @media (max-width: 650px) {
    width: 72px;
    height: 60px;
  }
`

export const Name = styled.div`
  font-family: 'Monster';
  font-size: 35px;
  text-align: center;
  color: #2f9d00;
  @media (max-width: 1200px) {
    font-size: 28px;
  }
  @media (max-width: 900px) {
    font-size: 17px;
  }
  @media (max-width: 650px) {
    font-size: 11px;
  }
`

export const Image2 = styled(Image1)`
  width: 203px;
  @media (max-width: 1200px) {
    width: 162px;
  }
  @media (max-width: 900px) {
    width: 102px;
  }
  @media (max-width: 650px) {
    width: 61px;
  }
`

export const Image3 = styled(Image1)`
  width: 364px;
  @media (max-width: 1200px) {
    width: 291px;
  }
  @media (max-width: 900px) {
    width: 182px;
  }
  @media (max-width: 650px) {
    width: 110px;
  }
`

export const Image4 = styled(Image1)`
  width: 166px;
  @media (max-width: 1200px) {
    width: 133px;
  }
  @media (max-width: 900px) {
    width: 83px;
  }
  @media (max-width: 650px) {
    width: 50px;
  }
`

export const Image5 = styled(Image1)`
  width: 203px;
  @media (max-width: 1200px) {
    width: 163px;
  }
  @media (max-width: 900px) {
    width: 102px;
  }
  @media (max-width: 650px) {
    width: 61px;
  }
`

export const Image6 = styled(Image1)`
  width: 202px;
  @media (max-width: 1200px) {
    width: 162px;
  }
  @media (max-width: 900px) {
    width: 101px;
  }
  @media (max-width: 650px) {
    width: 61px;
  }
`

export const Image7 = styled(Image1)`
  width: 200px;
  @media (max-width: 1200px) {
    width: 160px;
  }
  @media (max-width: 900px) {
    width: 100px;
  }
  @media (max-width: 650px) {
    width: 60px;
  }
`

export const Image8 = styled(Image1)`
  width: 135px;
  @media (max-width: 1200px) {
    width: 108px;
  }
  @media (max-width: 900px) {
    width: 68px;
  }
  @media (max-width: 650px) {
    width: 40px;
  }
`

export const Image9 = styled(Image1)`
  width: 174px;
  @media (max-width: 1200px) {
    width: 140px;
  }
  @media (max-width: 900px) {
    width: 87px;
  }
  @media (max-width: 650px) {
    width: 52px;
  }
`
