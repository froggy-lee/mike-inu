import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import * as S from './styles'

const SlideSection = () => {
  const settings = {
    infinity: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200
  }

  return (
    <S.SlideWrapper>
      <S.Container>
        <Slider {...settings}>
          <S.Wrapper>
            <S.Image1>
              <Image src="/images/inu1.png" layout="fill" alt="inu-icon" />
            </S.Image1>
            <S.Name>fair teacher</S.Name>
          </S.Wrapper>
          <S.Wrapper>
            <S.Image2>
              <Image src="/images/inu2.png" layout="fill" alt="inu-icon" />
            </S.Image2>
            <S.Name>friendly</S.Name>
          </S.Wrapper>
          <S.Wrapper>
            <S.Image3>
              <Image src="/images/inu3.png" layout="fill" alt="inu-icon" />
            </S.Image3>
            <S.Name>Mike inu</S.Name>
          </S.Wrapper>
          <S.Wrapper>
            <S.Image4>
              <Image src="/images/inu4.png" layout="fill" alt="inu-icon" />
            </S.Image4>
            <S.Name>greedy</S.Name>
          </S.Wrapper>
          <S.Wrapper>
            <S.Image5>
              <Image src="/images/inu5.png" layout="fill" alt="inu-icon" />
            </S.Image5>
            <S.Name>hardworking</S.Name>
          </S.Wrapper>
          <S.Wrapper>
            <S.Image6>
              <Image src="/images/inu6.png" layout="fill" alt="inu-icon" />
            </S.Image6>
            <S.Name>gentle</S.Name>
          </S.Wrapper>
          <S.Wrapper>
            <S.Image7>
              <Image src="/images/inu7.png" layout="fill" alt="inu-icon" />
            </S.Image7>
            <S.Name>Loyal</S.Name>
          </S.Wrapper>
          <S.Wrapper>
            <S.Image8>
              <Image src="/images/inu8.png" layout="fill" alt="inu-icon" />
            </S.Image8>
            <S.Name>reserved</S.Name>
          </S.Wrapper>
          <S.Wrapper>
            <S.Image9>
              <Image src="/images/inu9.png" layout="fill" alt="inu-icon" />
            </S.Image9>
            <S.Name>coldly</S.Name>
          </S.Wrapper>
        </Slider>
      </S.Container>
    </S.SlideWrapper>
  )
}

export default SlideSection
