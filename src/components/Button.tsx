import React, {FC} from 'react'
import styled from 'styled-components/native'
import Text from './Text'

interface ButtonStyleProps {
    children?: any;
    color?: string;
    textColor?: string;
    margin?: string;
    padding?: number;
    height?: string;
    title?: boolean;
    large?: boolean;
    medium?: boolean;
    small?: boolean;
    tiny?: boolean;
    light?: boolean;
    semi?: boolean;
    bold?: boolean;
    heavy?: boolean;
    center?: boolean;
    right?: boolean;
    [key: string]: any;
}

const StyledButton:FC<ButtonStyleProps> = ({...props}) => {
    return (
        <Button {...props}>
            <Text bold center color={props.textColor ?? "#ffffff"}>{props.children}</Text>
        </Button>
    )
}

export default StyledButton;

const Button = styled.TouchableOpacity<ButtonStyleProps>`
    background-color: ${props => props.color ?? "#8022d9"};
    margin: ${props => props.margin ?? `0 32px`};
    height: ${props => props.height ?? `48px`};
    align-items: center;
    justify-content: center;
    border-radius: 6px;
`;