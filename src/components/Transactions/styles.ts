import styled from 'styled-components'

export const Container = styled.section`
  margin: 6rem auto;
  max-width: 1120px;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    thead {
      th {
        color: var(--text-body);
        font-weight: 400;
        line-height: 1.5rem;
        padding: 1rem 2rem;
        text-align: left;
      }
    }

    tbody {
      tr {
        border-radius: 0.25rem;
        td {
          background: var(--shape);
          color: var(--text-body);
          padding: 1rem 2rem;

          &:first-child {
            color: var(--text-title);
          }

          &.income {
            color: var(--green);
          }

          &.outcome {
            color: var(--red);
            &:before {
              content: '-';
            }
          }
        }
      }
    }
  }
`
