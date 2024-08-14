/**
    @description Write a function to get
    a extension of a filename.
    @function getExtensionFilename(path)
    @import fs
*/

const getExtensionFilename = (filename) => {
    return filename.slice(filename.lastIndexOf("."));
  };
  