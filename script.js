
var cookie = document.getElementById('cookie')
var cookie = 0
var cpc = 1
var cenaup = 20
// add cookie score
function add() {
    cookie = cookie +cpc
    document.getElementById('cookie').textContent = cookie
}
//upgrades setup
function up1() {
    if(cookie >= 20) {
        cpc += 1
        cookie -= cenaup
        cpc += 0
        document.getElementById('cookie').textContent = cookie
    }else {
        alert('HAHAHA seš chudej')
    }
}
