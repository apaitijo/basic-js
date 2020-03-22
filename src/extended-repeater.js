module.exports = function repeater(str, options) {
    const additionalString = typeof options.addition !== 'undefined' ?
        new Array(options.additionRepeatTimes || 1).fill(String(options.addition)).join(options.additionSeparator || '|') :
        '';
    const resultString = `${String(str)}${additionalString}`;
    return new Array(options.repeatTimes || 1).fill(resultString).join(options.separator || '+');
};
  