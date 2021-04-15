import React from 'react'
//import {FlatList} from 'react-native'
import styled from 'styled-components/native'
import globalStyles from '../../extra/styles/global'
import Text from '../../components/Text'
import { ScrollView } from 'react-native-gesture-handler'

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
            <Navigation>
                <Text onPress={() => navigation.openDrawer()}>Back</Text>
            </Navigation>

            <Title header>Explore</Title>

            <ScrollView>
                <Container>
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
        </SafeArea>
    )
}

export default Home;


/* Styles */
const SafeArea = styled.SafeAreaView`
    flex: 1;
`;

const FlatList = styled.FlatList`
    
`

const Navigation = styled.View`
    padding: 0 32px 32px 32px;
`

const Container = styled.View`
    margin-top: 20px;
`;

const FeaturedItem = styled.View`
    border-radius: 30px;
    background-color: #2F254F;
    height: 360px;
    width: 320px;
    margin-horizontal: 10px;

`

const Title = styled(Text)`
    padding: 0 32px 10px 32px;
`

const ListHeading = styled(Text)`
    padding: 0 0 10px 32px;
`