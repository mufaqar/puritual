import CryptoJS from "crypto-js";

export function generateRequestHash(payload: Record<string, string>) {
  const merchantHash = process.env.HS_MERCHANT_HASH!;
  const payloadString = Object.entries(payload)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const encrypted = CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(payloadString),
    CryptoJS.enc.Utf8.parse(merchantHash.substring(0, 16)), // 128-bit key
    {
      iv: CryptoJS.enc.Utf8.parse(merchantHash.substring(0, 16)), // same IV
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  );

  return encrypted.toString();
}
