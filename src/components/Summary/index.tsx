import { useContext } from 'react'
import {
  PiArrowCircleDown,
  PiArrowCircleUp,
  PiCurrencyDollar,
} from 'react-icons/pi'
import { useTheme } from 'styled-components'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { SummaryCard, SummaryContainer } from './styles'
import { priceFormatter } from '../../utils/formatter'

export function Summary() {
  const theme = useTheme()
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.outcome += transaction.amount
        acc.total -= transaction.amount
      }

      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    },
  )

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <PiArrowCircleUp size={32} color={theme['green-300']} />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saidas</span>
          <PiArrowCircleDown size={32} color={theme['red-300']} />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      <SummaryCard $variant="green">
        <header>
          <span>Total</span>
          <PiCurrencyDollar size={32} color={theme.white} />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
