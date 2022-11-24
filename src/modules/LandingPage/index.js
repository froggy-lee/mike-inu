import React from 'react'
import BannerSection from '/src/modules/LandingPage/BannerSection'
import MikemapSection from '/src/modules/LandingPage/MikemapSection'
import IntroduceSection from '/src/modules/LandingPage/IntroduceSection'
import TokenomicSection from '/src/modules/LandingPage/TokenomicSection'
import FeatureSection from '/src/modules/LandingPage/FeatureSection'
import CommunitySection from '/src/modules/LandingPage/CommunitySection'
import PhaseSection from '/src/modules/LandingPage/PhaseSection'
import VideoIntroSection from '/src/modules/LandingPage/VideoIntroSection'
import SlideSection from '/src/modules/LandingPage/SlideSection'

import * as S from './styles'

function LandingPage() {
  return (
    <S.Wrapper>
      <BannerSection />
      <IntroduceSection />
      <VideoIntroSection />
      <MikemapSection />
      <PhaseSection />
      <FeatureSection />
      <TokenomicSection />
      <SlideSection />
      <CommunitySection />
    </S.Wrapper>
  )
}

export default LandingPage
