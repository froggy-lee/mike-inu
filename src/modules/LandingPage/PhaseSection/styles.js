import styled from 'styled-components'

export const PhaseWrapper = styled.div`
  width: 100%;
  height: 1480px;
  position: relative;
  margin-top: 120px;
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    height: 1120px;
  }

  @media (max-width: 900px) {
    margin-top: 80px;
    margin-bottom: 80px;
    height: 740px;
  }

  @media (max-width: 650px) {
    margin-top: 40px;
    margin-bottom: 80px;
    height: 420px;
  }
`

export const LineCenter = styled.div`
  position: absolute;
  top: 0;
  left: calc(50% - 3px);
  width: 6px;
  height: 100%;
  background-color: #004f16;
  border-radius: 3px;

  @media (max-width: 900px) {
    width: 3px;
  }

  @media (max-width: 650px) {
    width: 1.3px;
  }
`

export const InuPhase = styled.div`
  position: absolute;
  top: 20%;
  left: -92px;
  svg {
    width: 226px;
    height: 376px;
  }

  @media (max-width: 1200px) {
    left: -72px;
    svg {
      width: 180px;
      height: 300px;
    }
  }

  @media (max-width: 900px) {
    left: -45px;
    svg {
      width: 113px;
      height: 188px;
    }
  }

  @media (max-width: 650px) {
    left: -25px;
    svg {
      width: 62px;
      height: 103px;
    }
  }
`

export const InuFooter = styled.div`
  position: absolute;
  top: 100%;
  left: -18px;
  svg {
    width: 40px;
    height: 45px;
  }

  @media (max-width: 1200px) {
    left: -12px;
    svg {
      width: 32px;
      height: 36px;
    }
  }

  @media (max-width: 900px) {
    left: -8px;
    svg {
      width: 20px;
      height: 22px;
    }
  }

  @media (max-width: 650px) {
    left: -4px;
    top: 99%;
    svg {
      width: 10px;
      height: 12px;
    }
  }
`

export const Container1 = styled.div`
  width: 100%;
  position: relative;
  height: 25%;
  @media (max-width: 1200px) {
    height: 280px;
  }

  @media (max-width: 900px) {
    height: 200px;
  }

  @media (max-width: 650px) {
    height: 145px;
  }
`

export const Phase1 = styled.div`
  position: absolute;
  top: -20px;
  right: calc(50% - 19px);
  display: flex;

  @media (max-width: 1200px) {
    right: calc(50% - 14px);
  }

  @media (max-width: 900px) {
    top: -15px;
    right: calc(50% - 7.5px);
  }

  @media (max-width: 650px) {
    top: -12px;
    right: calc(50% - 3px);
  }
`

export const PhaseContainer = styled.div`
  padding: 0px 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  @media (max-width: 1200px) {
    padding: 0 50px;
  }

  @media (max-width: 900px) {
    padding: 0 30px;
  }

  @media (max-width: 650px) {
    padding: 0 15px;
  }
`

export const Image = styled.div`
  width: 346px;
  height: 63px;
  position: relative;
  margin-bottom: 18px;

  @media (max-width: 1200px) {
    width: 276px;
    height: 50px;
    margin-bottom: 14px;
  }
  @media (max-width: 900px) {
    width: 173px;
    height: 32px;
    margin-bottom: 10px;
  }

  @media (max-width: 650px) {
    width: 95px;
    height: 17px;
    margin-bottom: 5px;
  }
`
export const DescWrapper = styled.div``

export const Line = styled.div`
  font-weight: 500;
  font-size: 25px;
  line-height: 1.8;
  text-align: right;
  color: #004f16;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #004f16;
    right: -20px;
    top: 20px;
  }
  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 1.6;
    &::after {
      width: 6px;
      height: 6px;
      top: 12px;
      right: -20px;
    }
  }

  @media (max-width: 900px) {
    font-size: 14px;
    line-height: 1.6;
    &::after {
      width: 4px;
      height: 4px;
      top: 4px;
      right: -5px;
    }
  }

  @media (max-width: 650px) {
    font-size: 8px;
    line-height: 1.6;
    &::after {
      width: 3px;
      height: 3px;
      top: 4px;
      right: -5px;
    }
  }
`

export const Dot = styled.div`
  svg {
    width: 38px;
    height: 38px;
  }
  @media (max-width: 1200px) {
    svg {
      width: 28px;
      height: 28px;
    }
  }
  @media (max-width: 900px) {
    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 650px) {
    svg {
      width: 10px;
      height: 10px;
    }
  }
`
export const Container2 = styled(Container1)``
export const Phase2 = styled(Phase1)`
  left: calc(50% + 60px);
  @media (max-width: 1200px) {
  }
  @media (max-width: 900px) {
  }
  @media (max-width: 650px) {
    left: calc(50% + 20px);
  }
`
export const Phase4 = styled(Phase1)`
  left: calc(50% - 19.5px);

  @media (max-width: 1200px) {
    left: calc(50% - 13.5px);
  }

  @media (max-width: 900px) {
    left: calc(50% - 10.2px);
  }

  @media (max-width: 650px) {
    left: calc(50% - 7.5px);
  }
`
export const Line2 = styled.div`
  font-weight: 500;
  font-size: 25px;
  line-height: 2.12;
  text-align: left;
  color: #004f16;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #004f16;
    left: -20px;
    top: 20px;
  }
  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 1.6;
    &::before {
      width: 6px;
      height: 6px;
      top: 12px;
      left: -20px;
    }
  }

  @media (max-width: 900px) {
    font-size: 14px;
    line-height: 1.6;
  }

  @media (max-width: 650px) {
    font-size: 8px;
    line-height: 1.6;
    &::before {
      width: 2px;
      height: 2px;
      top: 4px;
      left: -5px;
    }
  }
`
