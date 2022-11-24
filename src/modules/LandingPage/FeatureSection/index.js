import Image from 'next/image'
import React from 'react'
import * as S from './styles'

const FeatureSection = () => {
  return (
    <S.FeatureWrapper>
      <S.Title>featUred</S.Title>
      <S.Container>
        <S.Row1>
          <S.ImageContainer>
            <S.ImageWrapper className="image-1">
              <Image
                src="/images/coinmarketcap.png"
                alt="coin-market-cap"
                layout="fill"
              />
            </S.ImageWrapper>
          </S.ImageContainer>
          <S.ImageContainer>
            <S.ImageWrapper className="image-2">
              <Image
                src="/images/coingecko.png"
                alt="coingecko"
                layout="fill"
              />
            </S.ImageWrapper>
          </S.ImageContainer>
          <S.ImageContainer>
            <S.ImageWrapper className="image-3">
              <Image src="/images/consbit.png" alt="consbit" layout="fill" />
            </S.ImageWrapper>
          </S.ImageContainer>
        </S.Row1>

        <S.Row2>
          <S.ImageContainer>
            <S.ImageWrapper className="image-4">
              <Image src="/images/pinksale.png" alt="pinksale" layout="fill" />
            </S.ImageWrapper>
          </S.ImageContainer>
          <S.ImageContainer>
            <S.ImageWrapper className="image-5">
              <Image src="/images/bscscan.png" alt="bscscan" layout="fill" />
            </S.ImageWrapper>
          </S.ImageContainer>
          <S.ImageContainer>
            <S.ImageWrapper className="image-6">
              <Image src="/images/poocoin.png" alt="poocoin" layout="fill" />
            </S.ImageWrapper>
          </S.ImageContainer>
        </S.Row2>

        <S.Row3>
          <S.ImageContainer>
            <S.ImageWrapper className="image-7">
              <Image src="/images/avadex.png" alt="avadex" layout="fill" />
            </S.ImageWrapper>
          </S.ImageContainer>
          <S.ImageContainer>
            <S.ImageWrapper className="image-8">
              <Image src="/images/bscdaily.png" alt="bscdaily" layout="fill" />
            </S.ImageWrapper>
          </S.ImageContainer>
          <S.ImageContainer>
            <S.ImageWrapper className="image-9">
              <Image src="/images/bscnew.png" alt="bscnew" layout="fill" />
            </S.ImageWrapper>
          </S.ImageContainer>
        </S.Row3>
      </S.Container>
    </S.FeatureWrapper>
  )
}

export default FeatureSection
