class Utils {
  stringToHTML(data) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(data, "text/html");
    return doc.body;
  }
}

export default Utils;
