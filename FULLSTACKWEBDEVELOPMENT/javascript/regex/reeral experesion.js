let pattern ='hi'
let regExOne= new RegExp(pattern)
console.log(regExOne)

let flag='gi'
let regExTwo=new RegExp(pattern,flag)
console.log(regExTwo)

let regExThree=/hi/gi
console.log(regExThree)

const strToCheck=" hi , this side shreedhar anand , calling with hi expresiion and HI means hello which can be called as hi"

const result=regExThree.test(strToCheck)

console.log(result)

const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult);


const matchedResult=strToCheck.replace(regExThree,'p-w')

console.log(matchedResult)


const webUrl = "https://pwskills.com/hitesh%20choudhary"

const useableUrl = webUrl.replace(/%\d0/, '-')
console.log(useableUrl);