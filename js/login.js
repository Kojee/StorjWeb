function Login(){
    var opts = {
        basicAuth: {
            email: document.getElementById("username").value,
            password: document.getElementById("password").value
        }
    };

    var storj = new Storj(opts);

    // Create a new keypair
    var keypair = storj.generateKeyPair();
    var privateKey = keypair.getPrivateKey();
    var publicKey = keypair.getPublicKey();
    document.getElementById("privateKeyLabel").innerHTML = privateKey;
    // Register the public key to your account
    storj.registerKey(publicKey, function (error) {
    if(error) {
        return console.log(error)
    }});

    // Authenticate with the keypair
    var opts = {
    key: privateKey
    }

    var storj = new Storj(opts);
    localStorage.setItem("storjPrv", JSON.stringify(privateKey));
    var retrievedObject = localStorage.getItem('storjPrv');
    console.log(retrievedObject);
    window.location.replace("logged.html");
}
