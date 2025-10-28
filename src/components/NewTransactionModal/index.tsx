import * as Dialog from '@radix-ui/react-dialog'
import { PiArrowCircleDown, PiArrowCircleUp, PiX } from 'react-icons/pi'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <PiX size={24} />
        </CloseButton>
        <Dialog.Title>Nova Transação</Dialog.Title>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Valor" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton $variant="income" value="income">
              <PiArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton $variant="outcome" value="outcome">
              <PiArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
