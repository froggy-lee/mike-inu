import React from 'react'
import TelegramIcon from '/public/svgs/telegram'
import TwitterIcon from '/public/svgs/twitter'
import IconDiscord from '/public/svgs/discord'
import Link from 'next/link'

import * as S from './styles'

const CommunitySection = () => {
  return (
    <S.CommunityWrapper>
      <S.Title>cOmMunity</S.Title>
      <S.SocialWrapper>
        <S.LogoContainer>
          <Link href="https://twitter.com/MikeInu22">
            <a target="_blank">
              <TwitterIcon />
            </a>
          </Link>
          <S.Name>Twitter</S.Name>
        </S.LogoContainer>
        <S.LogoContainer>
          <Link href="https://t.me/+ublu3Bb_xeQwMDM1">
            <a target="_blank">
              <TelegramIcon />
              <S.Name>Telegram</S.Name>
            </a>
          </Link>
        </S.LogoContainer>
        <S.LogoContainer>
          <Link href="https://discord.com/invite/u5CqYXSfDT">
            <a target="_blank">
              <IconDiscord />
              <S.Name>Discord</S.Name>
            </a>
          </Link>
        </S.LogoContainer>
      </S.SocialWrapper>
      <S.Desc>
        Our community grows stronger every day. Please follow our social
        platforms to get the most up to-date, accurate MIKE INU information.
      </S.Desc>
    </S.CommunityWrapper>
  )
}

export default CommunitySection
