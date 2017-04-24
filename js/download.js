function download(bucketId, fileId){
    storj.download(bucketId, fileId);
    
    /*var download = storj.getFile(bucketId, fileId);
    download.on('error', function(error){
        console.log('The file has encountered some sort of error.');
        console.log(error);
    });
    download.on('done', function() {
        console.log("size in bytes:", download.length);
        console.log("upload/download progress:", download.progress);
        console.log("uploaded/downloaded bytes:", download.progress * download.length);
        var downStream = download.createReadStream();
        console.log(downStream);
    })

    download.on('ready', function () {
        console.log('The file object is now ready to upload/download data.');
    });*/
}