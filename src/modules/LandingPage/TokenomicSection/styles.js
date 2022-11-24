import styled from 'styled-components'

export const TokenomicWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 170px;
  @media (max-width: 1200px) {
    margin-bottom: 120px;
  }

  @media (max-width: 900px) {
    margin-bottom: 80px;
  }

  @media (max-width: 650px) {
    margin-bottom: 60px;
  }
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

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 900px) {
  }

  @media (max-width: 650px) {
    flex-direction: column-reverse;
  }
`

export const ImageWrapper = styled.div`
  flex: 1 1 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 650px) {
    justify-content: center;
  }
`

export const Image = styled.div`
  width: 560px;
  height: 351px;
  position: relative;

  @media (max-width: 1200px) {
    width: 392px;
    height: 245px;
  }

  @media (max-width: 900px) {
    width: 292px;
    height: 184px;
  }
`

export const TableWrapper = styled.div`
  flex: 1 1 50%;
  margin: 0 0 0 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 900px) {
    margin: 0 0 0 35px;
  }

  @media (max-width: 650px) {
    margin: 18px 0 25px 0px;
    justify-content: center;
  }
`
export const Content = styled.div``

export const TitleTable = styled.div`
  font-size: 25px;
  font-weight: 800;
  line-height: 1.75;
  color: #004f16;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 650px) {
    font-size: 12px;
  }
`

export const Des = styled(TitleTable)`
  font-weight: 510;
`

export const Table = styled.table`
  margin-top: 10px !important;
  max-width: 448px !important;
  border-radius: 0px !important;
  border-collapse: collapse;

  &,
  td,
  th {
    border: 2.5px solid #004f16 !important;
  }

  tr th {
    padding: 10px 20px;
    text-align: center;
    font-size: 18px;
    line-height: 1.75;
    font-weight: 500;
    color: #004f16;
  }

  tr td {
    text-align: center;
    padding: 15px 20px;
    font-size: 18px;
    line-height: 1.75;
    font-weight: 500;
    color: #004f16;
  }

  tr td:last-child {
    cursor: auto !important;
  }

  @media (max-width: 900px) {
    max-width: 300px !important;
    &,
    td,
    th {
      border: 1.5px solid #004f16 !important;
    }
    tr th {
      padding: 8px 15px;
      font-size: 10px;
    }
    tr td {
      padding: 10px 15px;
      font-size: 10px;
    }
  }

  @media (max-width: 650px) {
    max-width: 250px !important;
    &,
    td,
    th {
      border: 1.5px solid #004f16 !important;
    }
    tr th {
      padding: 5px 10px;
      font-size: 10px;
    }
    tr td {
      padding: 8px 10px;
      font-size: 10px;
    }
  }
`
