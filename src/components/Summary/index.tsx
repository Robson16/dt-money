import {
  PiArrowCircleDown,
  PiArrowCircleUp,
  PiCurrencyDollar,
} from 'react-icons/pi'
import { useTheme } from 'styled-components'
import { SummaryCard, SummaryContainer } from './styles'

export function Summary() {
  const theme = useTheme()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <PiArrowCircleUp size={32} color={theme['green-300']} />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saidas</span>
          <PiArrowCircleDown size={32} color={theme['red-300']} />
        </header>
        <strong>R$ 1.259,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <PiCurrencyDollar size={32} color={theme.white} />
        </header>
        <strong>R$ 16.141,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
