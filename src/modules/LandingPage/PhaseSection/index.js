import React from 'react'
import Image from 'next/image'

import InuPhaseIcon from '/public/svgs/inu-phase'
import InuFooterIcon from '/public/svgs/inu'
import DotIcon from '/public/svgs/dot'
import * as S from './styles'

const PhaseSection = () => {
  return (
    <S.PhaseWrapper>
      <S.LineCenter>
        <S.InuPhase>
          <InuPhaseIcon />
        </S.InuPhase>
        <S.InuFooter>
          <InuFooterIcon />
        </S.InuFooter>
      </S.LineCenter>
      <S.Container1>
        <S.Phase1>
          <S.PhaseContainer>
            <S.Image>
              <Image src="/images/phase1.png" layout="fill" alt="Phase1" />
            </S.Image>
            <S.DescWrapper>
              <S.Line>Marketing push to spread awareness</S.Line>
              <S.Line>5000 telegram members</S.Line>
              <S.Line>Meme development</S.Line>
              <S.Line>Airdrop</S.Line>
              <S.Line>Whitepaper V1</S.Line>
            </S.DescWrapper>
          </S.PhaseContainer>
          <S.Dot>
            <DotIcon />
          </S.Dot>
        </S.Phase1>
      </S.Container1>
      <S.Container2>
        <S.Phase2>
          <S.PhaseContainer>
            <S.Image>
              <Image src="/images/phase2.png" layout="fill" alt="Phase2" />
            </S.Image>
            <S.DescWrapper>
              <S.Line2>Third party audit</S.Line2>
              <S.Line2>Influencer marketing push</S.Line2>
              <S.Line2>Listing on Coingecko – Coinmarketcap</S.Line2>
              <S.Line2>10,000 telegram members</S.Line2>
              <S.Line2>10,000 holders</S.Line2>
            </S.DescWrapper>
          </S.PhaseContainer>
        </S.Phase2>
      </S.Container2>
      <S.Container1>
        <S.Phase1>
          <S.PhaseContainer>
            <S.Image>
              <Image src="/images/phase3.png" layout="fill" alt="Phase1" />
            </S.Image>
            <S.DescWrapper>
              <S.Line>V2 Website deployment</S.Line>
              <S.Line>Initial Twitter Calls</S.Line>
              <S.Line>Youtube influencers</S.Line>
              <S.Line>More memes from community</S.Line>
              <S.Line>List cex exchanges</S.Line>
            </S.DescWrapper>
          </S.PhaseContainer>
          <S.Dot>
            <DotIcon />
          </S.Dot>
        </S.Phase1>
      </S.Container1>
      <S.Container2>
        <S.Phase4>
          <S.Dot>
            <DotIcon />
          </S.Dot>
          <S.PhaseContainer>
            <S.Image>
              <Image src="/images/phase4.png" layout="fill" alt="Phase2" />
            </S.Image>
            <S.DescWrapper>
              <S.Line2>100,000 holders</S.Line2>
              <S.Line2>Increase marketing</S.Line2>
              <S.Line2>Look for a partner to donate idol stream</S.Line2>
              <S.Line2>Add way more memes</S.Line2>
              <S.Line2>More Coming</S.Line2>
            </S.DescWrapper>
          </S.PhaseContainer>
        </S.Phase4>
      </S.Container2>
    </S.PhaseWrapper>
  )
}

export default PhaseSection
