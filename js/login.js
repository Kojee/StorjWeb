function Login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var basicAuth = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }
    var options = {
        basicAuth: basicAuth
    }

    var storj = new Storj(options);
    storj.on('error', function (e) {
        console.log("error");
    });
    storj.on('ready', function () {
        console.log("ready");
    });
}