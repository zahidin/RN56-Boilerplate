import accounting from 'accounting'

export function format(number){
    // if(!number || number == null || number == "")
    //     return ""
    
    return !number && number != 0? null : accounting.formatNumber(number,0,".",",")
}

export function unformat(value){
    return accounting.unformat(value,',')
}

export function formatWithComma(number){
    return number.toString().replace(/\./g,',')
}
export function formatWithDot(number,digits){
    if(digits){
        return Number(number.toString().replace(/\,/g,'.')).toFixed(digits)    
    }
    return number.toString().replace(/\,/g,'.')
}

export function formatCurrency(number, digits){
    return accounting.formatNumber(number, digits, ".", ",").toString(); 
}
export function formatCoin(number, digits=3){
    if(number % 1 != 0){
        number = number.toFixed(digits)
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").replace(/[,.]/g, function (m) {
        // m is the match found in the string
        // If , is matched return ., if . matched return ,
        return m === ',' ? '.' : ',';
    });
    

}
export function idrToNumber(idr)
{
    if(idr != undefined){
        return accounting.unformat(idr,",")
    }
    return idr
	
}