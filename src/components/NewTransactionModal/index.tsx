import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay } from './styles'
import { PiX } from 'react-icons/pi'

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
          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
