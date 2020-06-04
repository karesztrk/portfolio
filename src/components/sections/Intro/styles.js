import styled from 'styled-components';
import heroBackground from 'assets/pictures/background.jpg';
import separator from 'assets/illustrations/separator.inline.svg';

export const Wrapper = styled.div`
  padding-bottom: 8rem;
  position: relative;
  max-height: 100vh;

  ${({ theme }) => theme.md`
    padding-bottom: 4rem;
  `}

  &:after {
    content: '';
    position: absolute;
    z-index: -2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${heroBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: saturate(50%) brightness(75%);
  }

}
`;

export const Separator = styled(separator)`
  position: absolute;
  bottom: -1px;
  left: 0;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.tertiaryColor};
  z-index: -1;
`;

export const IntroWrapper = styled.div`
  padding: 10vw 0 20vw 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  ${({ theme }) => theme.md`
    flex-direction: row;
  `}

  ${({ theme }) => theme.lg`
    padding: 10vw 0 30vw 0;
  `}
`;

export const Details = styled.div`
  flex-grow: 0;
  flex-basis: 100%;
  width: 100%;
  margin-bottom: 2rem;

  ${({ theme }) => theme.md`
    flex: 1;
  `}

  h1 {
    font-size: 2rem;
    line-height: 3rem;
    max-width: initial;
    font-weight: bold;
    color: #ffffff;
    text-transform: uppercase;
    margin: 0;

    ${({ theme }) => theme.md`
      font-size: 4rem;
      line-height: 5rem;
      max-width: 520px;
    `}
  }

  h4 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.primaryColor};
    margin: 0;

    ${({ theme }) => theme.md`
      font-size: 1.75rem;
    `}
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 2rem;
    color: #ffffff;

    ${({ theme }) => theme.md`
      font-size: 1.5rem;
    `}
  }

  svg {
    padding-right: 20px;
    width: 24px;
    color: ${({ theme }) => theme.primaryColor};
  }
`;

export const Divider = styled.div`
  height: 5px;
  background: #ffffff;
  width: 111px;

  ${({ theme }) => theme.md`
    width: 111px;
    height: 10px;
  `}
`;

export const HeroBoxWrapper = styled.div`
  position: relative;
`;

const HeroBox = styled.div`
  position: absolute;
  top: 0;
  will-change: transform;
`;

const HeroBoxDark = styled(HeroBox)`
  background-color: #242830;
  box-shadow: -20px 32px 64px rgba(0, 0, 0, 0.25);
`;

const HeroBoxLight = styled(HeroBox)`
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform-origin: 100% 100%;
  }
`;

export const HeroBoxOne = styled(HeroBoxLight)`
  left: 103.2%;
  top: 41.9%;
  width: 28.03%;
  height: 37.37%;
  background: linear-gradient(to left top, ${({ theme }) => theme.primaryColor}, rgba(0, 0, 0, 0));
  transform: rotateZ(45deg);

  &::before {
    background: linear-gradient(to left, #15181d 0%, rgba(0, 0, 0, 0) 60%);
    transform: rotateZ(45deg) scale(1.5);
  }
`;

export const HeroBoxTwo = styled(HeroBoxLight)`
  left: 61.3%;
  top: 64.1%;
  width: 37.87%;
  height: 50.5%;
  background: linear-gradient(to left top, ${({ theme }) => theme.secondaryColor}, rgba(0, 0, 0, 0));
  transform: rotateZ(-45deg);

  &::before {
    background: linear-gradient(to top, ${({ theme }) => theme.quaternaryColor} 0%, rgba(0, 0, 0, 0) 60%);
    transform: rotateZ(-45deg) scale(1.5);
  }
`;

export const HeroBoxThree = styled(HeroBoxLight)`
  left: 87.7%;
  top: -56.8%;
  width: 56.81%;
  height: 75.75%;
  background: linear-gradient(to left top, ${({ theme }) => theme.primaryColor}, rgba(0, 0, 0, 0));

  &::before {
    background: linear-gradient(to left, #15181d 0%, rgba(0, 0, 0, 0) 60%);
    transform: rotateZ(45deg) scale(1.5);
  }
`;

export const HeroBoxFour = styled(HeroBoxLight)`
  left: 54.9%;
  top: -8%;
  width: 45.45%;
  height: 60.6%;
  background: linear-gradient(to left top, ${({ theme }) => theme.secondaryColor}, rgba(0, 0, 0, 0));
  transform: rotateZ(-135deg);

  &::before {
    background: linear-gradient(to top, rgba(255, 255, 255, 0.24) 0%, rgba(0, 0, 0, 0) 60%);
    transform: rotateZ(-45deg) scale(1.5);
  }
`;

export const HeroBoxFive = styled(HeroBoxDark)`
  left: 17.4%;
  top: 13.3%;
  width: 64%;
  height: 73.7%;
  transform: perspective(500px) rotateY(-15deg) rotateX(8deg) rotateZ(-1deg);
`;

export const HeroBoxSix = styled(HeroBoxDark)`
  left: 65.5%;
  top: 6.3%;
  width: 30.3%;
  height: 40.4%;
  transform: rotateZ(20deg);
`;

export const HeroBoxSeven = styled(HeroBoxDark)`
  left: 1.9%;
  top: 42.4%;
  width: 12.12%;
  height: 16.16%;
  transform: rotateZ(20deg);
`;

export const HeroBoxEight = styled(HeroBoxLight)`
  left: 27.1%;
  top: 81.6%;
  width: 19.51%;
  height: 26.01%;
  background: ${({ theme }) => theme.secondaryColor};
  transform: rotateZ(-22deg);

  &::before {
    background: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.48) 100%);
    transform: rotateZ(45deg) scale(1.5);
  }
`;

export const HeroBoxNine = styled(HeroBoxLight)`
  left: 42.6%;
  top: -17.9%;
  width: 6.63%;
  height: 8.83%;
  background: ${({ theme }) => theme.primaryColor};
  transform: rotateZ(-52deg);

  &::before {
    background: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.64) 100%);
    transform: rotateZ(45deg) scale(1.5);
  }
`;

export const HeroBoxTen = styled(HeroBoxLight)`
  left: -3.8%;
  top: 4.3%;
  width: 3.03%;
  height: 4.04%;
  background: rgba(0, 191, 251, 0.32);
  transform: rotateZ(-50deg);
`;
