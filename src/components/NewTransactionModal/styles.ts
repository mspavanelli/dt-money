import styled from 'styled-components'

import CloseIcon from '../../assets/close.svg'

export const Container = styled.form`
  fieldset {
    border: 0;

    legend {
      color: var(--text-title);
      font-size: 1.5rem;
      font-weight: 600;

      margin-bottom: 2rem;
    }

    button,
    input {
      border-radius: 0.3rem;
      font-size: 1rem;
      height: 4rem;
      width: 100%;

      margin-bottom: 1rem;
      padding: 0 1.5rem;
    }

    input {
      background: #e7e9ee;
      border: 1px solid #d7d7d7;
      color: var(--text-body);

      &:focus {
        outline-color: var(--text-body);
      }

      &::placeholder {
        color: var(--text-body);
      }
    }

    button {
      background: var(--green);
      border: 0;

      color: #fff;
      font-weight: 600;

      transition: filter 200ms;

      &:focus {
        outline-color: var(--green);
      }

      &:focus,
      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`

export const Close = styled.button`
  height: 2rem;
  width: 2rem;

  background: url(${CloseIcon}) no-repeat center;
  border: 0;
  font-size: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 2rem;
  right: 2rem;

  transition: filter 200ms;

  &:hover,
  &:focus {
    filter: brightness(0.8);
  }
`
