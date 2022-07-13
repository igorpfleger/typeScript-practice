const checkPalindrome = (input: any): boolean => {
    const string = input.toString();
    for (let i = 0, k = string.length - 1; i < k; ++i, --k) {
        if (string[i] !== string[k]) {
            return false;
        }
    }
    return true;
};

console.log(checkPalindrome('abbaabba')); // True
console.log(checkPalindrome('abbactie')); // False
console.log(checkPalindrome(3556)); // False
console.log(checkPalindrome(246642)); // True
