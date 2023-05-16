import Caver from 'caver-js';
const caver = new Caver('https://public-en-baobab.klaytn.net/');
export const verifyMessage =
  caver.validator.validateSignedMessage;

export const hashMessage =
  caver.utils.hashMessage;

