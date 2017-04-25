function Login(){
    var opts = {
        basicAuth: {
            email: document.getElementById("username").value,
            password: document.getElementById("password").value
        },
        encryptionKey : document.getElementById("mnemonic").value
    };

    var storj = new Storj(opts);

    // Create a new keypair
    var keypair = storj.generateKeyPair();
    var publicKey = keypair.getPublicKey();
    // Register the public key to your account
    storj.getKeyList(function cb(e, keys) {
        console.log(keys);
        var index;
        for(index = 0; index < keys.length; index++){
            storj.removeKey(kyes[index], function cb(e) {});
        }
    })
    storj.registerKey(publicKey, function (error) {
    if(error) {
        return console.log(error)
    }});
    
    
    localStorage.setItem("email", opts.basicAuth.email);
    localStorage.setItem("password", opts.basicAuth.password);
    localStorage.setItem("mnemonic", opts.encryptionKey);
    window.location.replace("logged.html");
}
