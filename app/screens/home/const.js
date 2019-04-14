import Home from '../../assets/home.png'
// top bar and bottom bar 
const customTopBar = {
    visible: false,
    drawBehind: true,
    hideOnScroll: false,
    elevation: 0,
    background: {
        color: 'transparent'
    }
}

export const HOME = {
    screen: 'Home',
    component: {
        name: 'Home',
        options: {
            topBar: customTopBar,
            bottomTab: {
                text: 'Home',
                icon: Home,
            }
        }
    }
}

// bottom tab only
// export const EXAMPLE = {
//     screen: 'Example',
//     component:{
//         name:'Example',
//         options:{
//             bottomTab:{
//                 text:'Home',
//                 icon:Homes
//             },
//         }
//     }
// }

// top bar only
// export const EXAMPLE = {
//     screen: 'Example',
//     component:{
//         name:'Example',
//         options:{
//             topBar:{
//                 title:{
//                     text:'Example Screen',
//                 }
//             },
//         }
//     }
// }