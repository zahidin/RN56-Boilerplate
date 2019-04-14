import { Navigation } from "react-native-navigation";
import {registerScreens} from './app/screens'
import {EXAMPLE} from './app/screens/example/const'
import {HOME} from './app/screens/home/const'
import {THEME} from './app/config'

registerScreens()

const starTapBaseApp = () => {
    Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setDefaultOptions({
            topBar: {
                animate: true,
            },
            bottomTabs: {
                animate: true
            },
            statusBar:{
                backgroundColor: '#f0f0f0',
                style: 'dark'
            },
        })
        Navigation.setRoot({
            root:{
                bottomTabs:{
                    options:{
                        bottomTab:{
                            bottomTabs: {
                                titleDisplayMode: 'alwaysShow',
                            },
                            bottomTab: {
                                iconColor: '#DEE6F0',
                                textColor: '#DEE6F0',
                                selectedIconColor: THEME.primary,
                                selectedTextColor: '#fff',
                            }
                        }
                    },
                    children:[
                        {
                            stack:{
                                options: {
                                    bottomTab: {
                                        iconColor: '#DEE6F0',
                                        textColor: '#DEE6F0',
                                        selectedIconColor: THEME.primary,
                                        selectedTextColor: THEME.primary,
                                    }
                                },
                                children:[
                                    {
                                        component:{
                                            ...HOME.component
                                        }
                                    }
                                ]
                            },
                        },{
                            stack:{
                                options: {
                                    bottomTab: {
                                        iconColor: '#DEE6F0',
                                        textColor: '#DEE6F0',
                                        selectedIconColor: THEME.primary,
                                        selectedTextColor: THEME.primary,
                                    }
                                },
                                children:[
                                    {
                                        component:{
                                            ...EXAMPLE.component
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        })
    })
}

starTapBaseApp()