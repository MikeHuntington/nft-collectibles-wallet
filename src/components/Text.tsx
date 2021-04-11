import React, {FC} from 'react'
import styled from 'styled-components/native'

import { useFonts, Nunito_400Regular, Nunito_700Bold, Nunito_800ExtraBold} from "@expo-google-fonts/nunito"

interface TextStyleProps {
    children?: any;
    color?: string;
    margin?: string;
    padding?: number;
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
}

const StyledText:FC<TextStyleProps> = ({...props}) => {
    let [fontsLoaded, error] = useFonts({Nunito_800ExtraBold})
    return <Text {...props}>{props.children}</Text>
}

export default StyledText;

const Text = styled.Text<TextStyleProps>`
    color: ${props => props.color ?? "#414959"};
    margin: ${props => props.margin ?? 0};
    padding: ${props => props.padding ?? 0};

    ${({title, large, medium, small, tiny}) => {
        switch (true) {
            case title:
                return `font-size: 32px;`

            case large:
                return `font-size: 24px;`

            case medium:
                return `font-size: 16px;`

            case small:
                return `font-size: 13px;`

            case tiny:
                return `font-size: 11px;`

            default:
                return `font-size: 14px;`
        }
    }}

    ${({light, semi, bold, heavy}) => {
        switch (true) {
            case light:
                return `font-weight: 200;`

            case semi:
                return `font-weight: 300;`

            case bold:
                return `font-weight: 600;`

            case heavy:
                return `font-weight: 700;`

            default:
                return `font-weight: 400;`
        }
    }}

    ${({center, right}) => {
        switch (true) {
            case center:
                return `text-align: center;`

            case right:
                return `text-align: right;`

            default:
                return `text-align: left;`
        }
    }}
`;