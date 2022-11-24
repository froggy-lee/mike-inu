import React from 'react'
import Image from 'next/image'
import * as S from './styles'

const TokenomicSection = () => {
  return (
    <S.TokenomicWrapper>
      <S.Title>tOkenOmic</S.Title>
      <S.Container>
        <S.ImageWrapper>
          <S.Image>
            <Image src="/images/tokenomic.png" alt="tokenomic" layout="fill" />
          </S.Image>
        </S.ImageWrapper>
        <S.TableWrapper>
          <S.Content>
            <S.TitleTable>Specification</S.TitleTable>
            <S.Des>
              Name: MIKE INU<br></br>Symbol: MKI<br></br>TOTAL Supply:
              1.000.000.000.000.000 MKI<br></br>TOKEN Decimals: 9
            </S.Des>
            <S.Table>
              <tbody>
                <tr>
                  <th>Presale</th>
                  <th>Liquidity</th>
                  <th>Unlock</th>
                </tr>
                <tr>
                  <td>62,5 %</td>
                  <td>33,81 %</td>
                  <td>3,69 %</td>
                </tr>
              </tbody>
            </S.Table>
          </S.Content>
        </S.TableWrapper>
      </S.Container>
    </S.TokenomicWrapper>
  )
}

export default TokenomicSection
