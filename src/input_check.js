export function input_check(one, two, three, four, five, good, bad, dictionary) {
    var temp = []
    for (var i = 0; i < dictionary.length; i++) {
        const word = dictionary[i]
        if (!boxCheck(one, two, three, four, five, word)) {
            continue
        }
        if (bad != "") {
            if (!checkBad(bad, word)) {
                continue
            }
        }
        if (good != "") {
            if (!checkGood(good, word)) {
                continue
            }
        }
        temp.push(word)
    }
    return temp
}

function checkBad(bad, word) {
    for (var i = 0; i < bad.length; i++) {
        console.log("checking " + bad.charAt(i))
        if (word.includes(bad.charAt(i))) {
            return false
        }
    }
    return true
}

function checkGood(good, word) {
    for (var i = 0; i < good.length; i++) {
        if (!word.includes(good.charAt(i))) {
            return false
        }
    }
    return true;
}

function boxCheck(one, two, three, four, five, word) {
    if (one !== "" && word.charAt(0) !== one) {
        return false;
    } else if (two !== "" && word.charAt(1) !== two) {
        return false;
    } else if (three !== "" && word.charAt(2) !== three) {
        return false;
    } else if (four !== "" && word.charAt(3) !== four) {
        return false;
    } else if (five !== "" && word.charAt(4) !== five) {
        return false;
    }
    return true;
}