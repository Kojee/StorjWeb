function upload(){
    var opts = {
        basicAuth: {
            email: localStorage.getItem("email"),
            password: localStorage.getItem("password")
        },
        encryptionKey : Storj.generateEncryptionKey()
    };
    
    var storj = new Storj(opts);
    var bucketId;
    storj.getBucketList(function cb(e, buckets) {
        console.log(buckets);
        bucketId = buckets[0].id;
        var data = document.getElementById('input').files[0]
        var name = document.getElementById('input').innerHTML
        var file = storj.createFile(bucketId, name, data)
        file.on('error', console.log)
        file.on('done', function() {
            console.log('Created file with id: ' + file.id)
        })
    })

    
}