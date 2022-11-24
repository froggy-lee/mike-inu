import styled from 'styled-components'

export const Wrapper = styled.div`
  background-image: url('/images/background.png') !important;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 1200px) {
    background-size: contain;
  }
  @media (max-width: 650px) {
    background-size: contain;
    background-repeat: repeat-y;
  }
`
