import { PiMagnifyingGlass } from 'react-icons/pi'
import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por transações" />
      <button type="submit">
        <PiMagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
