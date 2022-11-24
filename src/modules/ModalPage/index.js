import React from 'react'
import HowToBuyModal from '/src/components/Modal/HowToBuyModal'
import { useSelector } from 'react-redux'
import { selectShowHowToBuy } from '/src/store/slice/modal'

function ModalPage() {
  const showHowToBuy = useSelector(selectShowHowToBuy)

  return <>{!!showHowToBuy && <HowToBuyModal />}</>
}

export default ModalPage
