import styled from 'styled-components'

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #f1f1f1;
  padding: 8px 0;
  border-top: 1px solid #ccc;
`

export const Details = styled.div`
  display: flex;
  align-items: center;
`

export const Avatar = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  color: var(--color-white-default);
  text-shadow:
    0 0 12px var(--color-white-default),
    0 0 8px var(--color-white-default);

  width: 50px;
  height: 50px;
  border-radius: 50%;

  margin-left: 8px;
  background-color: ${(props) => props.color};
`

export const Name = styled.h2`
  font-weight: normal;
  padding-left: 8px;
`

export const BtnView = styled.button`
  margin-right: 8px;
  cursor: pointer;
  border: none;
`
