// helper function that builds the
// object to store the data
const buildCharObject = str => {
    const charObj = {}
    str1 =  str.replace(/[^\w]/g).toLowerCase()
    for(let char of str1) {
    // the second arg of replace method missing means to elimninate that matches the reges
      // if the object has already a key value pair
      // equal to the value being looped over,
      // increase the value by 1, otherwise add
      // the letter being looped over as key and 1 as its value
      charObj[char] = charObj[char] + 1 || 1
    }
    return charObj
  }
  
  // main function
  const anagram = (strA, strB) => {
    // build the object that holds strA data
    const aCharObject = buildCharObject(strA)
    // build the object that holds strB data
    const bCharObject = buildCharObject(strB)
  
    // compare number of keys in the two objects
    // (anagrams must have the same number of letters)
    if(Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
      return false
    }
    // if both objects have the same number of keys
    // we can be sure that at least both strings
    // have the same number of characters
    // Now we can compare the two objects to see if both
    // have the same letters in the same amount
    for(let char in aCharObject) {
      if(aCharObject[char] !== bCharObject[char]) {
        return false
      }
    }
    // if both the above checks succeed,
    // you have an anagram: return true
    return true
  }

  console.log(anagram('hello','elloh'))