import styled from 'styled-components';
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight';

type TArrow = {
    $isOpen: boolean;
    $visible: boolean;
}

type TFolder = {
    selected: boolean;
}
export const Content = styled.div<TFolder>`
    display: flex;
    align-items: center;
    padding: 5px 0px;
    width: 100%;
    background: ${({ selected }) => (selected ? '#eeeff8' : 'white')};
`;

export const Arrow = styled(ArrowRight)<TArrow>`
    transform: ${({ $isOpen }) => `rotate(${$isOpen ? 90 : 0}deg)`};
    visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
    transition: transform .2s ease;
    margin-right: 6px;
`;

export const FolderContainer = styled.div`
    cursor: pointer;
    margin-left: 15px;
`;
