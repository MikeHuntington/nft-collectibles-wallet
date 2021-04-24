import React, {useState, useEffect} from 'react'
import { StyleSheet } from 'react-native'
import {useDispatch} from 'react-redux'

import styled from 'styled-components/native'
import globalStyles from '../../../extra/styles/global'
import { Ionicons } from '@expo/vector-icons';

import * as constants from '../../../extra/constants'

import {Text, BaseContainer} from '../../../components'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { claimNFT } from '../../../redux/actions/nft.actions'



const Scan = ({navigation}) => {
    const dispatch = useDispatch()
    const [hasPermission, setHasPermission] = useState(null)
    const [scanned, setScanned] = useState(false)

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === 'granted')
        })()

        const unsubscribe = navigation.addListener('focus', () => {
            // The screen is focused
            setScanned(false)
        });
    
        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe
    }, [dispatch])

    const handleBarCodeScanned = ({ data }) => {
        setScanned(true)
        dispatch(claimNFT(data))
        navigation.navigate(constants.ScannerScreens.Review)
    };

    const RequestView = () => {
        return (
            <Container>
                <Text>Requesting for camera permission</Text>
            </Container>
        )
    }

    const NoAccessView = () => {
        return (
            <Container>
                <Text>No access to camera</Text>
            </Container>
        )
    }

    const ScannerView = () => {
        return (
            <BarCodeScanner
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
        )
    }


    return (
        <BaseContainer 
            navigationMenuHandler={() => navigation.openDrawer()} 
            navigationTitle="QR Scanner"
            navigationLeftIconType="menu"
            navigationIcon={require('../../../../assets/LootBoxLogo-BoxWhite.png')}>

            {(hasPermission === null) && RequestView() }

            {(hasPermission === false) && NoAccessView() }

            {(hasPermission === true) && ScannerView() }

            {(hasPermission === true) && 
                <ScanHelperView>
                  <Ionicons name="ios-scan-outline" size={400} color={constants.BACKGROUND_LIGHT} />
                </ScanHelperView>
            }

            {(hasPermission === true) && 
                <InstructionView>
                    <Text center color="white">Point your camera towards a LootBox QR Code</Text>
                </InstructionView>
            }

        </BaseContainer>
    )
}

export default Scan


/* Styles */
const InstructionView = styled.View`
    position: absolute;
    border-radius: 30px;
    height: 70px;
    bottom: 30px;
    left: 10px;
    right: 10px;
    background-color: ${constants.PRIMARY_COLOR};
    justify-content: center;
    align-items: center;
`

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${constants.BACKGROUND_LIGHT};
`

const ScanHelperView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    padding-left: 20px;
`