import styled, { css } from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;

  max-width: 1120px;
  margin: -4rem auto;
`

type CardProps = {
  featured?: boolean
}

export const Card = styled.div`
  background: ${({ featured }: CardProps) =>
    featured ? `var(--green)` : `#fff`};
  border-radius: 5px;
  position: relative;

  color: ${({ featured }: CardProps) => (featured ? `#fff` : `inital`)};

  height: 8.5rem;
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  h3 {
    font-size: 1rem;
    font-weight: 400;
  }

  strong {
    font-size: 2rem;
    font-weight: 400;
  }

  img {
    position: absolute;
    right: 2rem;
  }
`
