import footerIllustration from 'assets/illustrations/footer.svg';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 28rem;
  background-image: url(${footerIllustration});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  @media (max-width: 1960px) {
    padding-top: 14rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }
  }
`;
