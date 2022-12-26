let weirdArray = ['Inception', 'Spiderman', 'Tuesday']
let weirderArray = ['Green', 'Saturday', 'Friday', 'Wednesday']


// 1)
weirdArray.reverse()

// 2)
let combined_arr = weirdArray.concat(weirderArray)

// 3)
let movies = weirdArray.splice(0,2)

// 4)
weirdArray.unshift('Monday')

// 5)
weirdArray.concat('Thursday')

// 6)
let colors = weirderArray.slice(0,1)

// 7)
weirdArray.concat('Sunday')

// 8)
let weekend = weirderArray.splice(1,2)
console.log(weekend);