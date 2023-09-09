import styled from '@emotion/styled';

export const GridList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  grid-gap: ${({ theme }) => theme.spacing(5)};
`;

export const GridItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
