import React, {Component} from 'react'
import {View,FlatList} from 'react-native'
import {connect} from 'react-redux'
import {Text, Container,Spinner, List, ListItem, Thumbnail, Content,Left,Body} from 'native-base'
import {GET_ALL_EXAMPLE} from '../../redux/actions/example'
import Loader from '../../commons/loader'

class index extends Component {

    componentDidMount(){
        this.props.dispatch(GET_ALL_EXAMPLE())
    }

    renderUser = (data) => (
        <Content>
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{uri:item.avatar}}/>
                            </Left>
                            <Body>
                                <Text>{item.first_name} {item.last_name}</Text>
                            </Body>
                        </ListItem>
                    </List>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </Content>
    )

    render() {
        console.log(JSON.stringify(this.props.example))
        return (
            <Container>
                {this.props.example.isLoading ? (
                    <Loader/>
                ):this.renderUser(this.props.example.results)}
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    example:state.exampleReducer
})

export default connect(mapStateToProps)(index)