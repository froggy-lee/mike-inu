import styled from 'styled-components'

export const MikemapWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  text-align: center;
  font-size: 130px;
  font-family: 'Monster';
  color: #004f16;

  @media (max-width: 900px) {
    font-size: 80px;
  }

  @media (max-width: 650px) {
    font-size: 30px;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 78px;

  @media (max-width: 900px) {
    margin-top: 32px;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    margin-top: 11px;
  }
`
export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 650px) {
    justify-content: center;
  }
`
export const ImageInuContainer = styled(ImageContainer)`
  flex: 1 1 50%;
  justify-content: flex-end;
  margin-bottom: 0px;

  @media (max-width: 650px) {
    justify-content: center;
    margin-bottom: 21px;
  }
`

export const ImageInu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 555px;
  height: 385px;
  @media (max-width: 1200px) {
    width: 388px;
    height: 269px;
  }

  @media (max-width: 900px) {
    width: 278px;
    height: 192px;
  }

  @media (max-width: 650px) {
    margin-right: 0px;
    justify-content: center;
    width: 225px;
    height: 152px;
  }
`

export const ImageTitle = styled.div`
  flex: 1 1 50%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`

export const MapTitle1 = styled.div`
  margin-bottom: 45px;
  width: 347px;
  height: 37px;
  position: relative;

  @media (max-width: 1200px) {
    margin-bottom: 32px;
    width: 242px;
    height: 26px;
  }

  @media (max-width: 900px) {
    margin-bottom: 24px;
    width: 174px;
    height: 19px;
  }

  @media (max-width: 650px) {
    margin-bottom: 18px;
    width: 142px;
    height: 15px;
  }
`

export const MapTitle2 = styled(MapTitle1)`
  width: 430px;

  @media (max-width: 1200px) {
    width: 300px;
  }
  @media (max-width: 900px) {
    width: 215px;
  }

  @media (max-width: 650px) {
    width: 176px;
  }
`
export const MapTitle3 = styled(MapTitle1)`
  width: 365px;

  @media (max-width: 1200px) {
    width: 256px;
  }
  @media (max-width: 900px) {
    width: 182px;
  }
  @media (max-width: 650px) {
    width: 150px;
  }
`
export const MapTitle4 = styled(MapTitle1)`
  width: 450px;

  @media (max-width: 1200px) {
    width: 315px;
  }
  @media (max-width: 900px) {
    width: 225px;
  }
  @media (max-width: 650px) {
    width: 185px;
  }
`
export const MapTitle5 = styled(MapTitle1)`
  width: 637px;
  margin-bottom: 0px;
  @media (max-width: 1200px) {
    width: 446px;
  }
  @media (max-width: 900px) {
    width: 318px;
  }
  @media (max-width: 650px) {
    width: 261px;
  }
`
