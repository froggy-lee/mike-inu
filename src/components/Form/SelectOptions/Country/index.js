import React from 'react'
import Image from 'next/image'
import * as S from './styles'
import Select from 'react-select'

const options = [
  {
    value: 'unitedstates',
    label: (
      <S.Option>
        <Image src="/images/icons/usa.png" width={14} height={14} alt="USA" />
        <div>English</div>
      </S.Option>
    )
  },
  {
    value: 'vietnam',
    label: (
      <S.Option>
        <Image
          src="/images/icons/vietnam.png"
          width={14}
          height={14}
          alt="VietNam"
        />
        <div>Việt Nam</div>
      </S.Option>
    )
  }
]

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'red' : '#030d28',
    fontSize: '18px'
  }),
  control: () => ({
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: '8px'
  }),
  singleValue: provided => ({
    ...provided,
    color: 'white'
  })
}

function Country() {
  return (
    <>
      <Select
        options={options}
        className="select-box"
        defaultValue={options[0]}
        styles={customStyles}
        instanceId="postType"
        isSearchable={false}
      />
    </>
  )
}

export default Country
