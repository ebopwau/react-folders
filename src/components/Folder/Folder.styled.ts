import styled from 'styled-components';
import { ArrowRight } from '@styled-icons/bootstrap/ArrowRight';

type TArrow = {
    isOpen: boolean;
}

type TFolder = {
    selected: boolean;
}

export const Arrow = styled(ArrowRight)<TArrow>`
    transform: ${({ isOpen }) => `rotate(${isOpen ? 90 : 0}deg)`};
    transition: transform .2s ease;
`;

export const FolderContainer = styled.div<TFolder>`
    cursor: pointer;
    background: ${({ selected }) => (selected ? '#eeeff8' : 'white')};
`;
