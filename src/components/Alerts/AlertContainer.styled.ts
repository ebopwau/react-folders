import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0);
  }

  to {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const AlertContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
    background-color: rgba(0, 0, 0, 0.5);
    animation: ${fadeIn} 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

export const AlertModal = styled.div`
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    color: rgba(0, 0, 0, 0.87);
    background: white;
    width: 100%;
    max-width: 600px;
    height: 260px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    opacity: 1;

    & header {
      font-size: 27px;
      font-weight: 500;
      line-height: 1.6;
      margin: 0;
      padding: 16px;
      flex: 1;
    }

    & div {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      flex: 1;
      border-top: 1px solid rgba(0, 0, 0, 0.12);
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }

    & footer {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 8px;
      flex: 1;

      & button {
        height: 40px;
        min-width: 90px;
        margin-right: 10px;
        color: #fff;
        background-color: #3f51b5;
        border: 1px solid rgba(63, 81, 181, 0.5);
        box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
        padding: 6px 16px;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-weight: 500;
        line-height: 1.75;
        border-radius: 4px;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
`;
