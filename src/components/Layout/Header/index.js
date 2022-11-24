import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { showHowtoBuyModal } from '/src/store/slice/modal'

function Header() {
  const dispatch = useDispatch()
  const [active, setActive] = useState(false)

  const handleSetActive = () => setActive(!active)

  const handleBackTopTop = () => {
    window.scrollTo(0, 0)
  }

  const handleShowHowToBuyModal = useCallback(() => {
    dispatch(showHowtoBuyModal(true))
  }, [dispatch])

  return (
    <>
      <S.BackToTop onClick={handleBackTopTop}>
        <Image
          src="/images/icons/backtotop.png"
          width={22}
          height={25}
          alt="top"
        />
      </S.BackToTop>
      <S.Wrapper>
        <div className="logo">
          <Image
            src="/images/icons/logo.png"
            width={236}
            height={38}
            alt="logo"
          />
        </div>
        <S.ListMenu active={active}>
          <div className="backdrop" onClick={handleSetActive}></div>
          {active && (
            <S.BtnClose onClick={handleSetActive}>
              <Image
                src="/images/icons/btn-close.png"
                width={25}
                height={25}
                alt="close"
              />
            </S.BtnClose>
          )}
          <S.ItemMenu>
            <Link href="/">Home</Link>
          </S.ItemMenu>
          <S.ItemMenu onClick={handleShowHowToBuyModal}>How to buy</S.ItemMenu>
          <S.ItemMenu>kyc</S.ItemMenu>
          <S.ItemMenu>
            <button>CONNECT WALLET</button>
          </S.ItemMenu>
        </S.ListMenu>
        <S.HambugerButton
          whileHover={1.05}
          whileTap={0.95}
          onClick={handleSetActive}
        >
          <Image
            src="/images/icons/hambuger-icon.png"
            width={32}
            height={21}
            alt=""
          />
        </S.HambugerButton>
      </S.Wrapper>
    </>
  )
}

export default Header
