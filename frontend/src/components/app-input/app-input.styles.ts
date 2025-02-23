import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: #848484;
  }

  input {
    margin-top: 10px;
    width: 100%;
    height: 36px;
    border: 1px solid #E2E2E2;
    border-radius: 5px;
    color: #565656;
    padding: 0px 8px;

    ::placeholder {
      color: #e2e2e2;
    }
  }
`;
