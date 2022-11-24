import React from 'react'
import Image from 'next/image'

import * as S from './styles'

const MikemapSection = () => {
  return (
    <S.MikemapWrapper>
      <S.Title>Mike map</S.Title>
      <S.ImageWrapper>
        <S.ImageInuContainer>
          <S.ImageInu>
            <Image
              src="/images/inu-launch.png"
              alt="inu-launch"
              layout="fill"
            />
          </S.ImageInu>
        </S.ImageInuContainer>
        <S.ImageTitle>
          <S.ImageContainer>
            <S.MapTitle1>
              <Image
                src="/images/maptitle1.png"
                alt="website-launch"
                layout="fill"
              />
            </S.MapTitle1>
          </S.ImageContainer>
          <S.ImageContainer>
            <S.MapTitle2>
              <Image
                src="/images/maptitle2.png"
                alt="contract-creation"
                layout="fill"
              />
            </S.MapTitle2>
          </S.ImageContainer>
          <S.ImageContainer>
            <S.MapTitle3>
              <Image
                src="/images/maptitle3.png"
                alt="launch-pinksale"
                layout="fill"
              />
            </S.MapTitle3>
          </S.ImageContainer>
          <S.ImageContainer>
            <S.MapTitle4>
              <Image
                src="/images/maptitle4.png"
                alt="community-building"
                layout="fill"
              />
            </S.MapTitle4>
          </S.ImageContainer>
          <S.ImageContainer>
            <S.MapTitle5>
              <Image
                src="/images/maptitle5.png"
                alt="success-launch"
                layout="fill"
              />
            </S.MapTitle5>
          </S.ImageContainer>
        </S.ImageTitle>
      </S.ImageWrapper>
    </S.MikemapWrapper>
  )
}

export default MikemapSection
