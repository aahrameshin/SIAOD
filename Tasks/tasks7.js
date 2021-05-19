const isConcat = (string, subString) => {
    if (subString.length === 0) {
        return false
    }
    for (let i = 0; i < string.length; i += subString.length)
        if (string.slice(i, i + subString.length) !== subString)
            return false
    return true
}

const largestConcat = (string) => {
    let largest = ''
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            const subString = string.slice(i, j)
            console.log(subString)
            if (isConcat(string, subString)) {
                if (largest.length < subString.length) {
                    largest = subString
                }
            }
        }
    }
    return largest
}
largestConcat('abcabcabc')