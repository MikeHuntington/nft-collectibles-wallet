import React, {FC} from 'react';
import {StackNavigationProp} from '@react-navigation/stack'
import styled from 'styled-components/native';

import { AuthStackParamList, AppScreens} from '../navigation/AuthNavigator'

import Text from '../components/Text';
import Button from '../components/Button';

type WelcomeNavigationProps = StackNavigationProp<AuthStackParamList, AppScreens.Welcome>;

interface WelcomeProps {
    navigation: WelcomeNavigationProps;
}

const Welcome : FC<WelcomeProps> = ({navigation}) => {
    return (
        <Container>
            <Logo>
                <Image source={require('../../assets/TokenLogo.png')}/>
                <Text large bold color="#ffffff" margin="20px 0">GamePower NFT Wallet</Text>
            </Logo>

            <GetStartedButton 
                medium
                color="#ffffff" 
                textColor="#8022d9"
                onPress={() => navigation.navigate(AppScreens.CreatePassword)}
                >
                    Get Started
            </GetStartedButton>

            <RestoreWallet>
                <Text 
                    medium 
                    center
                    color="#ffffff">
                        Restore Wallet
                </Text>
            </RestoreWallet>
        </Container>
    )
}

export default Welcome;


/* Styles */
const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: flex-end;
    background-color: #8022d9;
`;

const Logo = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

const GetStartedButton = styled(Button)`
    margin-bottom: 20px;
`

const Image = styled.Image`
    width: 150px;
    height: 170px;
`
const RestoreWallet = styled.TouchableOpacity`
    margin-top: 16px;
    margin-bottom: 20px;
`

const Main = styled.View`
    margin: 192px 32px 32px;
`;