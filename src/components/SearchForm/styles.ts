import { styled } from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }

    &:focus {
      outline: none;
      border-color: ${(props) => props.theme['green-300']};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    min-width: 10.8rem;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['green-300']};
    background: transparent;
    color: ${(props) => props.theme['green-300']};
    font-weight: bold;
    cursor: pointer;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      border-color: ${(props) => props.theme['green-500']};
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      transition:
        border-color 0.2s,
        background-color 0.2s,
        color 0.2s;
    }
  }
`
