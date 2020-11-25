import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  background-color: #232129;
  border: 2px solid #232129;
  border-radius: 10px;
  padding: 18px;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  input {
    color: #f4ede8;
    background: transparent;
    flex: 1;

    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 12px;
  }
`;

export { Container };
