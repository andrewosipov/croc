export function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

export function getBool(value) {
    let _value=value;
    if( _value!==true && _value!==false ) _value=false;
    return _value;
}