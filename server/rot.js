const CryptoJS = require("crypto-js");


class crypto {
    static encrypt(string){
        return CryptoJS.AES.encrypt(string, 'kourouma26').toString();
    }

    static decrypt(string){
        let bytes = CryptoJS.AES.decrypt(string, 'kourouma26');
        return bytes.toString(CryptoJS.enc.Utf8);
    }
}
// Encrypt
// var ciphertext = CryptoJS.AES.encrypt('Karim', 'kourouma26').toString();
 
// Decrypt
// var bytes  = CryptoJS.AES.decrypt(ciphertext, 'kourouma26');
// var originalText = bytes.toString(CryptoJS.enc.Utf8);
 


console.log(`chiffré => ${crypto.decrypt(crypto.encrypt('Karim'))}`); // 'my message'
// console.log(`dechiffré => ${crypto.decrypt()}`); // 'my message'
// console.log(originalText); // 'my message'