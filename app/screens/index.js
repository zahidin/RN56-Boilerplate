import Example from './example'
import {EXAMPLE} from './example/const'
import {HOME} from './home/const'
import {ABOUT} from './about/const'
import About from './about'
import Home from './home'
import {registerComponent} from '../hoc-provider'

// register screen and component
export function registerScreens(){
    // EXAMPLE
    registerComponent(HOME.screen, Home),
    registerComponent(EXAMPLE.screen, Example),
    registerComponent(ABOUT.screen, About)
    // END OF EXAMPLE
}