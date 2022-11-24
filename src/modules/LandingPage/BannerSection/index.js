import React from 'react'
import Image from 'next/image'
import * as S from './styles'
import Link from 'next/link'

function BannerSection() {
  return (
    <S.Wrapper>
      <S.Banner>
        <div className="title">
          <Image
            src="/images/logo-banner.png"
            width={650}
            height={100}
            alt="logo"
          />
        </div>
      </S.Banner>
      <div className="description">
        <S.Des>
          <span>Mike Wazowski</span> is the funniest little monster! Mike Inu a
          decentralized, community focused cryptocurrency with instant rewards
          for holders.
        </S.Des>
        <div>
          <S.Button>Whitepaper</S.Button>
        </div>
      </div>
      <div className="list-btn-bottom">
        <S.ButtonBottom>
          <Link href="#">
            <a target="_blank">
              <Image
                src="/images/icons/rabbit.png"
                width={37}
                height={37}
                alt="icon"
              />
              buy on Pancakeswap
            </a>
          </Link>
        </S.ButtonBottom>
        <S.ButtonBottom>
          <Link href="#">
            <a target="_blank">
              <Image
                src="/images/icons/shit.png"
                width={37}
                height={37}
                alt="icon"
              />
              chart on poocoin
            </a>
          </Link>
        </S.ButtonBottom>
        <S.ButtonBottom>
          <Link href="#">
            <a target="_blank">
              <Image
                src="/images/icons/telegram.png"
                width={37}
                height={37}
                alt="icon"
              />
              join the mommunity
            </a>
          </Link>
        </S.ButtonBottom>
      </div>
    </S.Wrapper>
  )
}

export default BannerSection
