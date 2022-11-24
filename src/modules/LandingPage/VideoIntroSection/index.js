import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import Image from 'next/image'
import * as S from './styles'

function VideoIntroSection() {
  const [playing, setPlaying] = useState(true)

  const HandlePlayVideo = () => {
    setPlaying(!playing)
  }

  return (
    <S.Wrapper>
      <S.VideoWrapper>
        <ReactPlayer
          url="/videos/video.mp4"
          width="100%"
          height="100%"
          playing={playing}
          controls={false}
          loop={true}
        />
      </S.VideoWrapper>
      <S.Border>
        <Image
          src="/images/icons/border-video.png"
          width={765}
          height={495}
          alt="icon"
          onClick={HandlePlayVideo}
        />
      </S.Border>
      {!playing && (
        <S.ButtonPlay onClick={HandlePlayVideo}>
          <Image
            src="/images/icons/play.png"
            width={90}
            height={90}
            alt="icon"
          />
        </S.ButtonPlay>
      )}
    </S.Wrapper>
  )
}

export default VideoIntroSection
