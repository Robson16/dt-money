import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import {
  PriceHighlight,
  TableContainer,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TableContainer>
          <TransactionsTable>
            <tbody>
              {Array.isArray(transactions) &&
                transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHighlight $variant={transaction.type}>
                        {transaction.type === 'outcome' && '- '}
                        {priceFormatter.format(transaction.amount)}
                      </PriceHighlight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                  </tr>
                ))}
            </tbody>
          </TransactionsTable>
        </TableContainer>
      </TransactionsContainer>
    </>
  )
}
