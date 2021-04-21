import React, {useState, useEffect} from 'react'
import { FlatList, ImageBackground } from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components/native'
import globalStyles from '../../../extra/styles/global'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons'

import * as constants from '../../../extra/constants'
import { fetchCollectibles } from '../../../redux/actions'

import BaseContainer from '../../../components/BaseContainer'
import CollectibleThumbnail from '../../../components/CollectibleThumbnail'
import Text from '../../../components/Text'
import SeriesThumbnail from '../../../components/SeriesThumbnail'


const NUMBER_OF_COLUMNS = 2

const formatListData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns)

    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns)
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        data.push({ id: `blank-${numberOfElementsLastRow}`, empty: true})
        numberOfElementsLastRow = numberOfElementsLastRow + 1
    }

    return data
}

const HeaderView = () => {
    
    return (
        <SeriesInfoView>
            <SeriesThumbnail item={{name:"Test", image:"https://images.unsplash.com/photo-1618510050510-d0903984e131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"}} onPress={() => { navigation.navigate(CollectiblesScreens.Series) }} />
            <DetailsView></DetailsView>
        </SeriesInfoView>
    )
}

const Collectibles = ({navigation, route}) => {
    const dispatch = useDispatch()
    const { collectibles } = useSelector((state) => state.collectibleReducer)

    useEffect(() => {
        dispatch(fetchCollectibles())
    }, [dispatch])

    return (
        <Container bounces={false}>
            <BackgroundImage source={{uri: route.params.item.image}}>
                <GradientBackground>
                    <Gradient colors={['transparent', 'rgba(0,0,0,0.8)']}>
                    <MaterialIcons  
                        onPress={() => {navigation.pop()}}
                        name={constants.BACK_ICON} 
                        size={24} 
                        style={{flex: 1, marginTop: 30, marginLeft: 15}}
                        color="white" />
                        <HeaderText header heavy color="#ffffff">{route.params.item.name}</HeaderText>
                    </Gradient>
                </GradientBackground>
                
            </BackgroundImage>
        </Container>
    )
}

export default Collectibles;


/* Styles */
const CollectiblesList = styled(FlatList)`
    flex: 1;
    background-color: ${constants.BACKGROUND_COLOR};
    border-radius: 30px;
`

const SeriesInfoView = styled.View`
    flex: 1;
    flex-direction: row;
    height: 200;
    background-color: ${constants.PRIMARY_COLOR};
`

const DetailsView = styled.View`
    flex: 1;
`
const Container = styled.ScrollView`
    flex: 1;
    background-color: ${constants.BACKGROUND_COLOR};
`
const BackgroundImage = styled(ImageBackground).attrs({
    imageStyle: {
        borderBottomRightRadius: 80,
        resizeMode: 'cover'
    }
})`
    justify-content: flex-end;
    height: 400px;
`
const GradientBackground = styled.View`
    flex: 1;
    overflow: hidden;
    border-bottom-right-radius: 80px;
`

const Gradient = styled(LinearGradient)`
    flex: 1;
    padding: 20px;
    flex-direction: column;
`

const HeaderText = styled(Text)`
    align-self: flex-start;
    margin-left: 15px;
`