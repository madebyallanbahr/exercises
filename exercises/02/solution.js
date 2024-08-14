/**
    @description Write a function to get
    a extension of a filename.
    @function getExtensionFilename(path)
*/

const getExtensionFilename = (filename) => {
    return filename.slice(filename.lastIndexOf("."));
  };
  