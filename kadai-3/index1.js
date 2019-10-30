const day = parseInt(process.argv[2])

if(day % 3 === 0){
    console.log('天才')
}else if (day%3===1){
    console.log('普通')
}else if(day%3===2){
    console.log('謎')
}