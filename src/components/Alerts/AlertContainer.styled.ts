import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0);
  }

  to {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

function buttonTypeHelper(type: string) {
  switch (type) {
    case 'primary':
      return css({
        border: '1px solid rgba(63, 81, 181, 0.5)',
        'background-color': '#3f51b5',
        color: '#fff',
      });
    case 'secondary':
      return css({
        color: '#3f51b5',
        border: '1px solid rgba(63, 81, 181, 0.5)',
        'background-color': '#fff',
        'box-shadow': 'none',
      });
    case 'delete':
      return css({
        color: '#f50057',
        border: '1px solid rgba(245, 0, 87, 0.5)',
        'background-color': '#fff',
        'box-shadow': 'none',
      });
    default:
      return '';
  }
}

export const AlertContainer = styled.div`
    z-index: 10;
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

export const Label = styled.label<{ isOnTop: boolean }>`
    position: absolute;
    z-index: 1;
    background-color: white;
    font-size: ${({ isOnTop }) => (isOnTop ? '13px' : '17px')};
    color: ${({ isOnTop }) => (isOnTop ? '#3f51b5' : 'rgba(0, 0, 0, 0.4)')};
    font-weight: 400;
    line-height: 1;
    padding: 0px 5px;
    transition: transform .2s ease, font-size .2s ease;
    transform: translate(${({ isOnTop }) => (isOnTop ? '10px, -6px' : '10px, 20px')});
`;

export const InputContainer = styled.div`
    position: relative;
    display: flex;
    flex: 1;

    & input {
      flex: 1;
      padding: 18.5px 14px;
      width: 100%;
      border: 1px solid rgba(0, 0, 0, 0.12);
      border-radius: 4px;
    }
`;

export const Button = styled.button<{ buttonType: string }>`
    cursor: pointer;
    height: 40px;
    min-width: 90px;
    margin-right: 10px;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    padding: 6px 16px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    text-transform: uppercase;
    ${({ buttonType }) => buttonTypeHelper(buttonType)}
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
    box-shadow: 0px 11px 15px -7px rgb(0 0 0 / 20%), 0px 24px 38px 3px rgb(0 0 0 / 14%), 0px 9px 46px 8px rgb(0 0 0 / 12%);

    & header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 27px;
      font-weight: 500;
      line-height: 1.6;
      margin: 0;
      padding: 16px;
      flex: 1;
    }

    & > div {
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
    }
`;
