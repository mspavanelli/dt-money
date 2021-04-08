import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border: 0;
    background: var(--blue-light);
    border-radius: 0.25rem;
    color: #fff;

    font-size: 1rem;
    padding: 0 2rem;
    height: 3rem;

    transition: filter 200ms;

    &:hover {
      filter: brightness(0.9);
    }
  }
`
