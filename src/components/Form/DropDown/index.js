import * as S from './styles'
import Image from 'next/image'
import { useState } from 'react'

const DropDown = () => {
  const fakeApi = [
    {
      id: 1,
      title: 'All'
    },
    {
      id: 2,
      title: 'Last 30 Days'
    },
    {
      id: 3,
      title: 'Last 60 Days'
    },
    {
      id: 4,
      title: 'Last 120 Days'
    },
    {
      id: 5,
      title: 'Last 180 Days'
    },
    {
      id: 6,
      title: 'Last Year'
    },
    {
      id: 7,
      title: 'Last Two Year'
    },
    {
      id: 8,
      title: 'Last Five Year'
    }
  ]

  const [dropDown, setDropDown] = useState(false)
  const handleDropDown = () => {
    setDropDown(!dropDown)
  }

  return (
    <S.Wrapper>
      <S.Drop
        onClick={() => {
          setDropDown(false)
        }}
      ></S.Drop>
      <S.Select
        onClick={handleDropDown}
        className={setDropDown === true ? 'DropDown' : 'dropdown-none'}
      >
        <S.TitleAll>All</S.TitleAll>
        <S.Arrow>
          <Image
            src={'/images/ArrowDown.png'}
            width={12}
            height={10}
            alt="arrow"
          />
        </S.Arrow>
      </S.Select>
      {dropDown && (
        <S.DropDown>
          {fakeApi.map(item => (
            <S.Title key={item.id} id={item.id} onClick={handleDropDown}>
              {item?.title}
            </S.Title>
          ))}
        </S.DropDown>
      )}
    </S.Wrapper>
  )
}

export default DropDown
