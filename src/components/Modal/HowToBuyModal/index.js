import React from 'react'
import Modal from '/src/components/Modal'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { showHowtoBuyModal } from '/src/store/slice/modal'
import * as S from './styles'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import Step from './Step'

const listHowToBuy = [
  {
    img: '/images/howtobuy.png',
    titleBottom: 'Mike Inu',
    des: 'Register on Fiat-to-Crypto Exchange'
  },
  {
    img: '/images/howtobuy.png',
    titleBottom: 'Mike Inu',
    des: 'Buy BNB with fiat money on Binance'
  },
  {
    img: '/images/howtobuy.png',
    titleBottom: 'Mike Inu',
    des: 'Swap BNB for MMI'
  }
]

function HowToBuy() {
  const dispatch = useDispatch()

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200,
    dots: true,
    fade: true
  }

  const onToggle = useCallback(() => {
    dispatch(showHowtoBuyModal(false))
  }, [dispatch])

  return (
    <Modal title="HOW TO BUY" isOpen onToggle={onToggle} width={60}>
      <S.Wrapper>
        <Slider {...settings}>
          {listHowToBuy?.map((item, index) => {
            return (
              <Step
                key={index}
                titleBottom={item.titleBottom}
                des={item.des}
                image={item.img}
              />
            )
          })}
        </Slider>
        <S.ButtonDone onClick={onToggle}>DONE</S.ButtonDone>
      </S.Wrapper>
    </Modal>
  )
}

export default HowToBuy
