import Database from '../../assets/database.png'

// top bar and bottom bar 
const customTopBar = {
    background:{
        color:'#2b70c9'
    },
    title:{
        text:'Example Screen',
        color:'#fff',
        alignment:'center'
    },
}

export const EXAMPLE = {
    screen: 'Example',
    component: {
        name: 'Example',
        options: {
            topBar: customTopBar,
            bottomTab: {
                text: 'Example',
                icon: Database,
            },
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