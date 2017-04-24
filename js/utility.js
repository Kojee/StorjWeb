function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
    .substr(1)
        .split("&")
        .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
}

function getStorj(){
    var opts = {
        basicAuth: {
            email: localStorage.getItem("email"),
            password: localStorage.getItem("password")
        },
        encryptionKey : localStorage.getItem("mnemonic")
    };
    
    var storj = new Storj(opts);
    var bucketId;
    return storj;
}