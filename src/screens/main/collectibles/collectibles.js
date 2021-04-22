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

const Collectibles = ({navigation, route}) => {
    const dispatch = useDispatch()
    const { collectibles } = useSelector((state) => state.collectibleReducer)

    useEffect(() => {
        dispatch(fetchCollectibles())
    }, [dispatch])

    const HeaderView = (nav, item) => {
    
        return (
            <Header>
                <BackgroundAccent />
                <BackgroundImage source={{uri: item.image}}>
                    <GradientBackground>
                        <Gradient colors={['transparent', 'rgba(0,0,0,0.8)']}>
                            <HeaderText header heavy color="#ffffff">{item.name}</HeaderText>
                        </Gradient>
                    </GradientBackground>
                </BackgroundImage>
            </Header>
        )
    }

    return (
        <BaseContainer 
            navigationMenuHandler={() => navigation.pop()} 
            navigationTitle={`My Items (${collectibles.length})`}
            navigationLeftIconType="back"
            navigationIcon={require('../../../../assets/LootBoxLogo-BoxWhite.png')}>
                <CollectiblesList 
                    ListHeaderComponent={HeaderView(navigation, route.params.item)}
                    showsHorizontalScrollIndicator={false}
                    bounces={true}
                    numColumns={NUMBER_OF_COLUMNS}
                    keyExtractor={item => item.id}
                    data={formatListData([...collectibles], NUMBER_OF_COLUMNS)}
                    renderItem={({ item }) => (
                        <CollectibleThumbnail item={item} onPress={() => { navigation.navigate(constants.CollectiblesScreens.Collectibles, {item}) }} />
                    )}
                    onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
                />

        </BaseContainer>
    )
}

export default Collectibles;


/* Styles */

const CollectiblesList = styled(FlatList)`
    flex: 1;
    background-color: ${constants.BACKGROUND_COLOR};
`

const BackgroundAccent = styled.View`
    height: 430px;
    background-color: ${constants.PRIMARY_COLOR};
    border-bottom-right-radius: 80px;
`

const BackgroundImage = styled(ImageBackground).attrs({
    imageStyle: {
        borderBottomRightRadius: 80,
        resizeMode: 'cover'
    }
})`
    position: absolute;
    right: 0;
    left: 0;
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
    flex-direction: row;
`
const Header = styled.View`
    height: 460px;
`

const HeaderText = styled(Text)`
    align-self: flex-end;
    margin-left: 0px;
`