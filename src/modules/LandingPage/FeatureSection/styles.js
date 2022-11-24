import styled from 'styled-components'

export const FeatureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 100px;

  @media (max-width: 1200px) {
    margin-bottom: 80px;
  }

  @media (max-width: 900px) {
    margin-bottom: 40px;
  }

  @media (max-width: 650px) {
    margin-bottom: 60px;
  }
`
export const Title = styled.div`
  font-family: 'Monster';
  font-size: 130px;
  color: #004f16;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 900px) {
    font-size: 80px;
  }
  @media (max-width: 650px) {
    font-size: 30px;
    margin-bottom: 18px;
  }
`

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  @media (max-width: 1200px) {
    max-width: 945px;
  }
  @media (max-width: 900px) {
    max-width: 720px;
  }
  @media (max-width: 650px) {
    max-width: 320px;
  }
`
export const Row1 = styled.div`
  display: flex;
  margin-bottom: 50px;
  @media (max-width: 1200px) {
    margin-bottom: 30px;
  }
  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
  @media (max-width: 650px) {
    margin-bottom: 15px;
  }
`

export const Row2 = styled(Row1)``
export const Row3 = styled(Row1)``

export const ImageContainer = styled.div`
  flex: 1 1 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImageWrapper = styled.div`
  position: relative;
  &.image-1 {
    width: 272px;
    height: 49px;
    @media (max-width: 900px) {
      width: 136px;
      height: 25px;
    }
    @media (max-width: 650px) {
      width: 85px;
      height: 15px;
    }
  }
  &.image-2 {
    width: 250px;
    height: 67px;
    @media (max-width: 900px) {
      width: 125px;
      height: 34px;
    }
    @media (max-width: 650px) {
      width: 78px;
      height: 21px;
    }
  }
  &.image-3 {
    width: 274px;
    height: 51px;
    @media (max-width: 900px) {
      width: 137px;
      height: 26px;
    }
    @media (max-width: 650px) {
      width: 86px;
      height: 16px;
    }
  }
  &.image-4 {
    width: 221px;
    height: 74px;
    @media (max-width: 900px) {
      width: 110px;
      height: 37px;
    }
    @media (max-width: 650px) {
      width: 70px;
      height: 23px;
    }
  }
  &.image-5 {
    width: 285px;
    height: 76px;
    @media (max-width: 900px) {
      width: 143px;
      height: 38px;
    }
    @media (max-width: 650px) {
      width: 90px;
      height: 24px;
    }
  }
  &.image-6 {
    width: 250px;
    height: 47px;
    @media (max-width: 900px) {
      width: 125px;
      height: 24px;
    }
    @media (max-width: 650px) {
      width: 78px;
      height: 14px;
    }
  }
  &.image-7 {
    width: 257px;
    height: 52px;
    @media (max-width: 900px) {
      width: 128px;
      height: 26px;
    }
    @media (max-width: 650px) {
      width: 80px;
      height: 16px;
    }
  }
  &.image-8 {
    width: 267px;
    height: 60px;
    @media (max-width: 900px) {
      width: 134px;
      height: 30px;
    }
    @media (max-width: 650px) {
      width: 84px;
      height: 19px;
    }
  }
  &.image-9 {
    width: 155px;
    height: 83px;
    @media (max-width: 900px) {
      width: 78px;
      height: 42px;
    }
    @media (max-width: 650px) {
      width: 48px;
      height: 26px;
    }
  }
`
