//constructor functional for all API Urls
// an instance is an item created by a constructor function in this
function getVos() {
    return 'https://api.weirdgloop.org/runescape/vos';
}
function getTms() {
    return 'https://runescape.wiki/api.php?format=json&action=parse&prop=text&disablelimitreport=1&text={{Travelling%20Merchant/api%7Coffset=0%7Cformat=simple}}';
}
function getThalmund(){
    return 'https://runescape.wiki/api.php?format=json&action=parse&prop=text&disablelimitreport=1&text={{Thalmund%27s%20Wares%20current%20stock}}'
}

export {getVos, getTms, getThalmund};