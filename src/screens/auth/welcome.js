import React from 'react'
import styled from 'styled-components/native'

import globalStyles from '../../extra/styles/global'
import {AuthScreens} from '../../extra/constants'

import Text from '../../components/Text'

import { Button } from 'react-native-elements'
import { View } from 'react-native'


const Welcome = ({navigation}) => {
    return (
        <SafeArea>
            <BackgroundImage source={require('../../../assets/Background.png')}/>
            <Footer>
                <FooterContainer>
                    <AdvancedUserButton
                        title="Advanced Users" 
                        type="clear"
                        onPress={() => navigation.navigate(AuthScreens.CreatePassword)}
                    />
                </FooterContainer>
            </Footer>
            <Container>
                <Logo>
                    <Image source={require('../../../assets/LootBoxLogo-SwordTagLine.png')}/>
                </Logo>

                <SocialContainer>
                    <SocialIcon></SocialIcon>
                    <SocialIcon></SocialIcon>
                    <SocialIcon></SocialIcon>
                    <SocialIcon></SocialIcon>
                    <SocialIcon></SocialIcon>
                    <SocialIcon></SocialIcon>
                    <SocialIcon></SocialIcon>
                    <SocialIcon></SocialIcon>
                </SocialContainer>
            </Container>
        </SafeArea>
    )
}

export default Welcome;


/* Styles */
const SafeArea = styled.SafeAreaView`
    flex: 1;
    background-color: silver;
`;

const Container = styled.View`
    flex: 1;
    justify-content: flex-end;
    padding: 0 32px 32px 32px;
    background-color: white;
    border-radius: 60px;
    margin: 100px 0 100px 0;
`;

const Logo = styled.View`
    flex: 2;
    align-items: center;
    justify-content: center;
`

const CreateWalletButton = styled(Button).attrs({
    titleStyle: {
        color: "#ffffff",
        fontWeight: "600",
        fontSize: 16
    },
    buttonStyle: {
        backgroundColor: "#2c2c5c",
        height: 50,
        borderRadius: 6
    }
})``

const RestoreWalletButton = styled(Button).attrs({
    titleStyle: {
        color: "#2c2c5c",
        fontWeight: "600",
        fontSize: 16
    },
    buttonStyle: {
        height: 60
    },
})`
    margin-top: 16px;
`

const AdvancedUserButton = styled(Button).attrs({
    titleStyle: {
        color: "#ffffff",
        fontWeight: "600",
        fontSize: 16
    },
    buttonStyle: {
        
    },
})`
    margin-top: 16px;
`

const Image = styled.Image.attrs({
    resizeMode: 'contain'
})`
    width: 200px;
    height: 350px;
`

const BackgroundImage = styled.Image.attrs({
    resizeMode: 'stretch'
})`
    position: absolute;
    width: 100%;
    height: 120%;
    top: 0;
`

const Footer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    background-color: #2c2c5c;
    position: absolute;
    padding: 0 70px 65px 70px;
    height: 250px;
    width: 100%;
    bottom: 0;
`

const FooterContainer = styled.View`
    flex: 1;
    align-items: center;
`

const SocialContainer = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin: 20px 0;
`

const SocialIcon = styled.View`
    width: 60px;
    height: 60px;
    margin: 10px;
    border-radius: 30px;
    background-color: lightblue;
`