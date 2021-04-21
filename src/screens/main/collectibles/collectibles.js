import React, {useState, useEffect} from 'react'
import { FlatList } from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components/native'
import globalStyles from '../../../extra/styles/global'

import * as constants from '../../../extra/constants'
import { fetchCollectibles } from '../../../redux/actions'

import BaseContainer from '../../../components/BaseContainer'
import CollectibleThumbnail from '../../../components/CollectibleThumbnail'
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

const Collectibles = ({navigation}) => {
    const dispatch = useDispatch()
    const { collectibles } = useSelector((state) => state.collectibleReducer)

    useEffect(() => {
        dispatch(fetchCollectibles())
    }, [dispatch])

    return (
        <BaseContainer 
            navigationMenuHandler={() => navigation.pop()} 
            navigationTitle="Collectibles"
            navigationLeftIconType="back"
            navigationIcon={require('../../../../assets/LootBoxLogo-BoxWhite.png')}>

                <CollectiblesList 
                    ListHeaderComponent={HeaderView}
                    contentContainerStyle={{paddingBottom: 40}}
                    showsHorizontalScrollIndicator={false}
                    numColumns={NUMBER_OF_COLUMNS}
                    keyExtractor={item => item.id}
                    data={formatListData(collectibles, NUMBER_OF_COLUMNS)}
                    bounces={false}
                    renderItem={({ item }) => (
                        <CollectibleThumbnail item={item} onPress={() => { navigation.navigate(constants.CollectiblesScreens.Series) }} />
                    )}
                />

        </BaseContainer>
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