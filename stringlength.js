const stringLength = (string) => {
  for (let i = 0; i < string.trim().length; i++) {
    if (string.trim().length > 1 && string.trim().length <= 10)
      return string.trim().length;
  }
};

module.exports = stringLength;
