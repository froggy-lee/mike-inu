import React from 'react'
import Image from 'next/image'
import * as S from './styles'
import Country from '/src/components/Form/SelectOptions/Country'
import Link from 'next/link'

function Footer() {
  return (
    <S.Wrapper>
      <S.Title>
        <Image
          src="/images/icons/logo.png"
          width={236}
          height={38}
          alt="logo"
        />
      </S.Title>
      <S.ListItem>
        <S.Item>
          <Link href="/content-prize/terms-conditions">
            <a target="_blank">Terms &amp; Conditions</a>
          </Link>
        </S.Item>
        <S.Item>
          <Link href="/content-prize/privacy-policy">
            <a target="_blank">Privacy Policy</a>
          </Link>
        </S.Item>
        <S.Item>
          <Link href="/content-prize/about">
            <a target="_blank">About Mike Inu</a>
          </Link>
        </S.Item>
        <S.Item>
          <Link href="/content-prize/faqs">
            <a target="_blank">FAQs</a>
          </Link>
        </S.Item>
      </S.ListItem>
      <div className="language">
        <Country />
      </div>
      <S.Bottom>© 2022 MikeInu Inc. All rights reserved.</S.Bottom>
      <S.Logo>
        <Image
          src="/images/icons/demon-footer.png"
          width={300}
          height={170}
          alt="demon"
        />
      </S.Logo>
    </S.Wrapper>
  )
}

export default Footer
