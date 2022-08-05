// 1 e ve kendisine bölünecek, 1 den büyük pozitif tam sayı olacak

const arguments = process.argv.slice(2);

function showPrimeNumbers(lowNumber, highNumber) {
    for (let i = lowNumber; i<=highNumber; i++) {
        let isPrime = true;
        for (let j = 2; j <= i; j++) {
            if(i % j === 0 && j !== i){
                isPrime = false
            }
        }
        if(isPrime){
            console.log(i);
        }
    }
}


showPrimeNumbers(arguments[0] * 1,arguments[1] * 1);

//console.log();
