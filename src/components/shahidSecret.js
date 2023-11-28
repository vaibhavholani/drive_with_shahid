const mapping = {
    '0': 'A', '1': 'B', '2': 'C', '3': 'D', '4': 'E',
    '5': 'F', '6': 'G', '7': 'H', '8': 'I', '9': 'J'
};

const reverseMapping = Object.entries(mapping).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

// Encryption function
export const encryptNumber = (number) => {
    return number.split('').map(char => mapping[char] || char).join('');
};

// Decryption function
export const decryptNumber = (encrypted) => {
    return `+${encrypted.split('').map(char => reverseMapping[char] || char).join('')}`;
};

