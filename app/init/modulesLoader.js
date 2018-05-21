var modulesRoot = '/app/modules';
var routesFolder = 'routes';
var pathPackage = require('path');
var Cobuild = require('cobuild2');


module.exports = function modulesLoader(app) {


    Cobuild.Utils.Files.listFoldersInFolder(modulesRoot)
    .forEach(function (moduleFolder) {
        
        
        Cobuild.Utils.Files.requireFilesInFolderWithLimiter(pathPackage.join(modulesRoot, moduleFolder, routesFolder), app);

    });

};
