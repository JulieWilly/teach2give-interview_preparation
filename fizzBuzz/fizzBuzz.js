function fizzBuzz(number) {
    for(a = 1; a <= number; a++)
        if (a % 3 === 0 && a % 5 === 0) {
            console.log(`fizzBuzz`)
        } else if (a % 5 === 0) {
            console.log(`Buzz`)
        } else if(a % 3 === 0){
            console.log(`fizz`)
        } else {
            console.log(a)
        }

}
fizzBuzz(100)