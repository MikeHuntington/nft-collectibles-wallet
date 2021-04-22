import React, {useState, useEffect} from 'react'
import { FlatList, StyleSheet } from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components/native'
import globalStyles from '../../extra/styles/global'

import * as constants from '../../extra/constants'

import {Text, Button, BaseContainer} from '../../components'
import { BarCodeScanner } from 'expo-barcode-scanner'



const Scan = ({navigation}) => {
    const dispatch = useDispatch()
    const [hasPermission, setHasPermission] = useState(null)
    const [scanned, setScanned] = useState(false)

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === 'granted')
        })()
    }, [dispatch])

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true)
        alert(`Bar code with type ${type} and data ${data} has been scanned!`)
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
            navigationIcon={require('../../../assets/LootBoxLogo-BoxWhite.png')}>

            {(hasPermission === null) && RequestView() }

            {(hasPermission === false) && NoAccessView() }

            {(hasPermission === true) && ScannerView() }

            {scanned && <Button onPress={() => setScanned(false)}>Tap to Scan Again</Button>}

            <InstructionView>
                <Text center color="white">Point your camera towards a LootBox QR Code</Text>
            </InstructionView>

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