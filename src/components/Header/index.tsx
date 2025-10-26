import * as Dialog from '@radix-ui/react-dialog'
import logo from '../../assets/logo.svg'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="Logo" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Close />
              <Dialog.Title>Nova Transação</Dialog.Title>
              <Dialog.Description>
                Insira os dados da transação
              </Dialog.Description>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
