const str1 = "abc"
const str2 = "'abc'"
const str3 = '"abc"'
const str4 = '{"a":undefined}'
const str5 = '{"a":123}'
const str6 = '{a: 123}'

try {
    console.log(JSON.parse(str1))    
} catch (error) {
    console.log(error)
}
//"abc"ではなく'"abc"'にする必要がある

try {
    console.log(JSON.parse(str2))    
} catch (error) {
    console.log(error)
}
//1と同様

try {
    console.log(JSON.parse(str3))    
} catch (error) {
    console.log(error)
}

try {
    console.log(JSON.parse(str4))    
} catch (error) {
    console.log(error)
}
//undefinedを"undefined"にする必要がある

try {
    console.log(JSON.parse(str5))    
} catch (error) {
    console.log(error)
}

try {
    console.log(JSON.parse(str6))    
} catch (error) {
    console.log(error)
}
//5と同じ形にする必要がある