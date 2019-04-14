const customTopBar = {
    visible:true,
    title:{
        text:'About Me'
    },
}
const customBottomTabs = {
    visible: false, 
    drawBehind: true, 
    animate: true
}
export const ABOUT = {
    screen: 'About',
    component:{
        name:'About',
        options:{
            topBar:customTopBar,
            bottomTabs:customBottomTabs
        }
    },
    
}
