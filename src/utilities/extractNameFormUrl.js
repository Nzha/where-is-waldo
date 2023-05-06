const extractNameFromUrl = (url, capitalized = false) => {
  const startIndex = url.indexOf('%2F') + 3;
  const endIndex = url.indexOf('.png');
  const name = url.substring(startIndex, endIndex);
  if (capitalized) {
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
    return nameCapitalized;
  } else {
    return name;
  }
};

export default extractNameFromUrl;
