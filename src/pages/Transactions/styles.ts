import { styled } from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 4rem 1.5rem 1.5rem;
`

export const TableContainer = styled.div`
  overflow-x: auto;
  margin-bottom: 1.5rem;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme['gray-600']};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['green-500']};
    border-radius: 6px;
  }
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`
export const PriceHighlight = styled.span<{ $variant: 'income' | 'outcome' }>`
  color: ${(props) =>
    props.$variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
