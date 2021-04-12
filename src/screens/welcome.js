import React from 'react';
import styled from 'styled-components/native';

import {AppScreens} from '../navigation/AuthNavigator'

import { Button } from 'react-native-elements'
import Text from '../components/Text'


const Welcome = ({navigation}) => {
    return (
        <SafeArea>
            <Container>
                <Logo>
                    <Image source={require('../../assets/TokenLogo.png')}/>
                    <Text large bold color="#ffffff" margin="20px 0">NFT Wallet</Text>
                </Logo>

                <CreateWalletButton 
                    title="Create a new wallet"
                    onPress={() => navigation.navigate(AppScreens.CreatePassword)}
                />

                <RestoreWalletButton
                    title="I already have a wallet" 
                    type="clear"
                    onPress={() => navigation.navigate(AppScreens.CreatePassword)}
                />
            </Container>
        </SafeArea>
    )
}

export default Welcome;


/* Styles */
const SafeArea = styled.SafeAreaView`
    flex: 1;
    background-color: #2F254F;
`;

const Container = styled.View`
    flex: 1;
    justify-content: flex-end;
    padding: 0 32px 32px 32px;
`;

const Logo = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

const CreateWalletButton = styled(Button).attrs({
    titleStyle: {
        color: "#8022d9",
        fontWeight: "600",
        fontSize: 16
    },
    buttonStyle: {
        backgroundColor: "#ffffff",
        height: 50,
        borderRadius: 6
    }
})``

const RestoreWalletButton = styled(Button).attrs({
    titleStyle: {
        color: "#ffffff",
        fontWeight: "600",
        fontSize: 16
    },
    buttonStyle: {
        height: 60
    }
})`
    margin-top: 16px;
`

const Image = styled.Image`
    width: 150px;
    height: 170px;
`

const Main = styled.View`
    margin: 192px 0 32px;
`;