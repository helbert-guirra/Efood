import styled from 'styled-components'

export const ListContainer = styled.div``

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  margin-top: 80px;
  margin-bottom: 120px;

  @media (max-width: 1030px) {
    grid-template-columns: 1fr;
  }
`
