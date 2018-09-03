export function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

export function getBool(value) {
    let _value=value;
    if( _value!==true && _value!==false ) _value=false;
    return _value;
}

export function filteredSnapshots(snapshots = [], search = '') {
    if( search === '' ) return snapshots;
    return snapshots.filter(item => (
        item.name.match(new RegExp(search, 'i')) || item.id.match(new RegExp(search, 'i'))
    ))
}