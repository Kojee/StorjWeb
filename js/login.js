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
    storj.getKeyList(function cb(e, keys) {
        console.log(keys);
        var index;
    })
    
    localStorage.setItem("email", opts.basicAuth.email);
    localStorage.setItem("password", opts.basicAuth.password);
    //window.location.replace("logged.html");
}
