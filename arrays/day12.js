const trans = [2, 23, -21, 54]

trans.forEach((a, b) => {
    if (a > 0)
        console.log(`Credit ${a} at index ${b}`)
    else
        console.log(`Debit ${a} at index ${b}`)
})