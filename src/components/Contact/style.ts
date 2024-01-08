import styled from 'styled-components'

export const Contact = styled.li`
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--white-default);
  padding: 8px 0;
  border-bottom: 1px solid var(--gray-soft);

  &&:hover,
  &&:active {
    filter: brightness(0.92);
  }
`

export const Details = styled.div`
  display: flex;
  align-items: center;
`

export const Avatar = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  //* Fonte sans padrão para centralizar melhor
  font-family: sans-serif;
  font-size: 1.8rem;
  color: var(--white-default);
  text-shadow: 0 0 12px var(--white-default);

  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin-left: 8px;

  //* Cor definida pelo contato
  background-color: ${(props) => props.color};
`

export const Name = styled.h2`
  font-weight: normal;
  padding-left: 8px;
  color: var(--black-default);
`

export const BtnView = styled.button`
  margin-right: 8px;
  border: none;
  background-color: transparent;
`
