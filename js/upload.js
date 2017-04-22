function getStorj(){
    var opts = {
        basicAuth: {
            email: localStorage.getItem("email"),
            password: localStorage.getItem("password")
        },
        encryptionKey : Storj.generateEncryptionKey()
    };
    
    var storj = new Storj(opts);
    var bucketId;
    return storj;
}
