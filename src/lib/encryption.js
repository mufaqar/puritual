const CryptoJS = require('crypto-js');

const KEY1 = 'AbjYYVRgqe7Cxep2';
const KEY2 = '6029068825205865';

const encryptRequest = (dataString) => {
  try {
    const encrypted = CryptoJS.AES.encrypt(
      CryptoJS.enc.Utf8.parse(dataString),
      CryptoJS.enc.Utf8.parse(KEY1),
      {
        keySize: 128 / 8,
        iv: CryptoJS.enc.Utf8.parse(KEY2),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }
    );
    
    return encrypted.toString();
  } catch (error) {
    console.error('Encryption error:', error);
    throw new Error('Failed to encrypt request');
  }
};

const generateRequestString = (formData) => {
  return Object.entries(formData)
    .filter(([key]) => !key.includes('RequestHash'))
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
};

module.exports = {
  encryptRequest,
  generateRequestString
};