import React from 'react'
//import {FlatList} from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { View } from 'react-native'
import styled from 'styled-components/native'
import globalStyles from '../../extra/styles/global'
import Text from '../../components/Text'
//import { ScrollView } from 'react-native-gesture-handler'

const items = [
    { name: 'test', key: "1"},
    { name: 'test', key: "2"},
    { name: 'test', key: "3"},
    { name: 'test', key: "4"},
    { name: 'test', key: "5"},
    { name: 'test', key: "6"},
]

const Home = ({navigation}) => {
    return (
        <SafeArea>
            <BackgroundView />

            <ScrollView style={{paddingTop: 50}}>
                <ScrollHeader>
                    <ListHeading large color="white">News</ListHeading>
                    <FlatList 
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{paddingRight: 20, paddingLeft: 20}}
                        horizontal 
                        data={items}
                        renderItem={({ item }) => (<NewsItem />)}
                    />
                </ScrollHeader>
                <Container>
                    <Title header>Explore</Title>
                    <ListHeading large heavy>Loot Drops</ListHeading>
                    <FlatList 
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{paddingRight: 20, paddingLeft: 20}}
                        horizontal 
                        data={items}
                        renderItem={({ item }) => (<FeaturedItem />)}
                    />
                </Container>
            </ScrollView>

            <Navigation>
                <Entypo 
                    onPress={() => navigation.openDrawer()}
                    name="menu" 
                    size={24} 
                    style={{flex: 1}}
                    color="white" />

                <NavigationTitle large center color="white">Home</NavigationTitle>
                <View style={{flex: 1}}></View>
            </Navigation>
        </SafeArea>
    )
}

export default Home;


/* Styles */
const SafeArea = styled.SafeAreaView`
    flex: 1;
`

const ScrollView = styled.ScrollView`

`

const FlatList = styled.FlatList`
    
`

const BackgroundView = styled.View`
    background-color: #2F254F;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 40%;
`

const ScrollHeader = styled.View`
    padding: 30px 0 20px 0;
    background-color: #2F254F;
    height: 190px;
`

const Navigation = styled.View`
    position: absolute;
    padding: 50px 32px 12px 32px;
    background-color: #2F254F;
    left: 0;
    right: 0;
    flex: 1;
    flex-direction: row;
    height: 100px;
`

const NavigationTitle = styled(Text)`
    flex: 1;
`

const Container = styled.View`
    margin-top: 10px;
    padding-top: 30px;
    min-height: 1000px;
    background-color: white;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;

const FeaturedItem = styled.View`
    border-radius: 30px;
    background-color: lightgrey;
    height: 360px;
    width: 320px;
    margin-horizontal: 10px;
`

const NewsItem = styled.View`
    border-radius: 40px;
    background-color: royalblue;
    height: 80px;
    width: 200px;
    margin-horizontal: 10px;
`

const Title = styled(Text)`
    padding: 0 32px 10px 32px;
`

const ListHeading = styled(Text)`
    padding: 0 0 10px 32px;
`