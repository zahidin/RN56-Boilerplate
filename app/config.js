export const THEME = {
  black: '#333',
  primary: '#2b70c9',
  primaryLight: '#98ee99',
  primaryDark: '#338a3e',
  textOnPrimary: '#FFFFFF',
}


export const censorPhone =  (value, index=4, options) =>{
    let prefixIndex = 2
    let censored = value.substring(0, value.length - index).replace(/[0-9]/g, "x")
    if(options){
      if(!options.spaces){
        return censored.substring(0, 2)+censored.substring(2, censored.length) + value.substring(value.length - index, value.length);
      }
    }
    return censored.substring(0, 2) +" "+censored.substring(2, censored.length) + value.substring(value.length - index, value.length);
}
  