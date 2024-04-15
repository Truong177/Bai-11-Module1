let count=0;
let start=+prompt("moi nhap vao so bat dau");
let number= +prompt("moi nhap vao so luong so nguyen to can thiet")
while (count<number){
    if (checkPrime(start)){
        document.write(start+" ");
        count++;
    }
    start++;
}

function checkPrime(n){
    if (n<2) return false;
    if (n<4) return true;
    for (let i = 2; i <= n/2; i++) {
        if (n%i===0) return false;
    }
    return true;
}