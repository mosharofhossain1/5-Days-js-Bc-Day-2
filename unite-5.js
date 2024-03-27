// unite five :-

//  String Type Date 

const myName = 'Mosharof Hossain';
console.log(myName);

// String ANd its Methods 

const str = String('Hello World'); // its a constructor method 
console.log(str);

const str1 = 'The Independence Day of Bangladesh is celebrated on the 26th of March as a national holiday in Bangladesh. It commemorates the countrys declaration of independence from Pakistan in the early hours of March 26, 1971.';

// 1. charAt()
const charAt = str1.charAt(30);
console.log(charAt);

// 2. charCodeAt()
const chartCodeAt = str1.charCodeAt(30);
console.log(chartCodeAt);

// 3. concat()
const concatValue = str.concat(' $ ',str1);
console.log(concatValue);

// 4. startsWith()
const startwith = str1.startsWith('The')
console.log(startwith);

// 5. endsWith()
const endsWith = str1.endsWith('1971');
console.log(endsWith);

// 6. String.fromCharCode()


const asciCodeStringCreate = String.fromCharCode(65, 66);
const asciCodeStringCreate2 = String.fromCharCode(67, 68);
console.log(asciCodeStringCreate);
console.log(asciCodeStringCreate2);

// 7. includes()
const includesValue = str1.includes('holiday');
console.log(includesValue);

// 8.indexOf()
const indexOfValue = str1.indexOf('holiday');
console.log(indexOfValue);

// 9. lastIndexOf()
const lastIndexOfValue = str1.lastIndexOf('1971');
const lastIndexOfValue2 = str1.lastIndexOf('.')
console.log(lastIndexOfValue);
console.log(lastIndexOfValue2);

// 10. Length
const lenghtvalue = str1.length;
console.log(lenghtvalue);

// 11. repeat()
const repeatValue = str.repeat(3);
console.log(repeatValue);

// 12. replace()

const replaceValue = str.replace('World', 'Universe');
console.log(replaceValue);
// 13. search()
const searchValue = myName.search('Hossain');
console.log(searchValue);

// 14. slice()
const sliceValue = myName.slice(0, 8);
console.log(sliceValue);

// 15. split()
const splitValue = myName.split(' ');
console.log(splitValue);

// 16. substring()
const substringValue = myName.substring(0, 8);
console.log(substringValue);

// 17. toUpperCase()
const toUpperCaseValue = myName.toUpperCase();
console.log(toUpperCaseValue);

// 18. toLowerCase()
const toLowerCaseValue = myName.toLowerCase();
console.log(toLowerCaseValue);

// 19. toString()
const toStringValue = myName.toString();
console.log(toStringValue);

// 20. trim()

const trims = '      Bangladesh      ';
const trimsValue = trims.trim();
console.log(trimsValue);

// 21. trimStart()

const trimstart = trims.trimStart();
console.log(trimstart);

// 22. trimEnd()
const trimEnd = trims.trimEnd();
console.log(trimEnd);


// Boolean and truthy false value 

// False Value Explain 
let  boll = Boolean(false);
    boll = Boolean();
    boll = Boolean(undefined);
    boll = Boolean(null);
    boll = Boolean(0);
    boll = Boolean(NaN);
console.log(boll);

// Truthy Value Explain 

let truthyValue = Boolean(true);
    truthyValue = Boolean([])
    truthyValue = Boolean({})
    truthyValue = Boolean(230)
    truthyValue = Boolean('MOsharof Hossain')
    console.log(truthyValue);
    


