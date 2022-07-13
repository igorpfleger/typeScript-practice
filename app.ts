const checkPalindrome = (input: any): boolean => {
    const string = input.toString();
    for (let i = 0, k = string.length - 1; i < k; ++i, --k) {
        if (string[i] !== string[k]) {
            return false;
        }
    }
    return true;
};

console.log(checkPalindrome('abbaabba'));
console.log(checkPalindrome('abbactie'));
console.log(checkPalindrome(3556));
console.log(checkPalindrome(246642));
