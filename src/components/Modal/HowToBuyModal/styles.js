import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  .slick-slider {
    .slick-dots {
      max-width: 15rem !important;
      margin-left: 1.5rem;
      bottom: 15px;
      text-align: left;
      li {
        margin: 0;
        button:before {
          font-size: clamp(8px, 2vw, 10px);
          color: #2f9d00;
        }

        @media screen and (min-width: 675px) {
          margin: 0 5px;
        }
      }
    }
    .slick-arrow {
      background-color: white;
      border: none !important;
      color: red;

      position: absolute;
      top: 93%;
      z-index: 1;

      &.slick-prev {
        left: 0;
        &:before {
          display: flex;
          align-items: center;
          position: absolute;
          content: '';
          background: url('/images/icons/prev.png');
          background-repeat: no-repeat;
          background-size: 14px;
          width: 30px;
          height: 30px;
          top: 0;
          @media screen and (min-width: 675px) {
            top: 5px;
          }
        }
      }

      &.slick-next {
        left: 8rem;

        @media screen and (min-width: 675px) {
          left: 11rem;
        }
        &:before {
          display: flex;
          align-items: center;
          position: absolute;
          content: '';
          background: url('/images/icons/next.png');
          background-repeat: no-repeat;
          background-size: 14px;
          width: 30px;
          height: 30px;
          top: 0;
          @media screen and (min-width: 675px) {
            top: 5px;
          }
        }
      }
    }
  }
`
export const ButtonDone = styled.button`
  font-weight: 700;
  font-size: clamp(14px, 2vw, 16px);
  line-height: 27px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  text-transform: uppercase;
  color: #ffffff;
  background: #2f9d00;

  position: absolute;
  right: 0;
  bottom: 0rem;

  padding: 1.5rem 8rem;
  border: none;
  border-radius: 100px;

  max-width: 100px;
  width: 100%;
`
