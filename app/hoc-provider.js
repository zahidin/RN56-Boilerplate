import React , {Component} from 'react'
import {Navigation} from 'react-native-navigation'
import store from './redux/store'
import {Provider} from 'react-redux'

const HocProvider = (WrappedComponent,store) => {
    class Enhance extends Component{
        constructor(props){
            super(props)
        }
        render(){
            return(
                <Provider store={store}>
                    <WrappedComponent {...this.props} />
                </Provider>
            )
        }
    }
    return Enhance
}

export const registerComponent = (name,component) => {
    Navigation.registerComponent(
        name,
        () => HocProvider(component,store)
    )
}