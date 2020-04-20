import footerIllustration from 'assets/illustrations/footer.svg';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 14rem;
  background-image: url(${footerIllustration});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;

  ${({ theme }) => theme.xl`
    padding-top: 28rem;
  `}
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  ${({ theme }) => theme.md`
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
  `}

  svg {
    color: ${({ theme }) => theme.quaternaryColor};
  }
`;
