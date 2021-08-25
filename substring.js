var findSubstring = function(s, words) {
    let wordsLength = words[0].length
    let solution = []

    for (i = 0; i < s.length - wordsLength*words.length + 1; i++) {
        let tempArr = [...words]
        let count = 0
        let index = 0 + i

        while (count < words.length) {
            if (tempArr.includes(s.slice(index, index + wordsLength))) {
                tempArr.splice(tempArr.indexOf(s.slice(index, index + wordsLength)), 1)
            } else {
                break
            }
            index = index + wordsLength
            count++
        }

        if (tempArr.length === 0) {
            solution.push(i)
        }
    }
    return solution
};

console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","good"]))
