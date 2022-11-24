import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 14rem;
  @media (max-width: 600px) {
    margin-bottom: 0rem;
  }
`
export const VideoWrapper = styled.div`
  width: 640px;
  height: 360px;
  margin: auto;
  margin-top: 15rem;
  @media (max-width: 788px) {
    width: 81%;
    margin-top: 5rem;
  }
  @media (max-width: 600px) {
    margin-top: 4rem;
  }
`
export const ButtonPlay = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  z-index: 1;
  margin-top: 15rem;
  @media (max-width: 788px) {
    margin-top: 2rem;
  }
`
export const Border = styled.div`
  position: absolute;
  margin-left: 1.8rem;
  margin-top: 10rem;
  @media (max-width: 788px) {
    margin-top: 2rem;
  }
  @media (max-width: 600px) {
    margin-left: 1rem;
  }
`
