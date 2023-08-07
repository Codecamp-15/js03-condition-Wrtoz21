let input = prompt("input numbers");
    if(+input > 0){ console.log("Positive number")}
    else if(+input == 0){ console.log("zero")}
    else if(+input < 0){ console.log("Negative number")}
    else{console.log("Invalid number")}


let num = prompt('Enter Number1');
//Input : null,'','        ',"qsewd","12"
//null == null [ok];
//'','      ',=>str.trim() == ''
//console.log(num);
console.log(num);
//guard-clause
if(num === null || num.trim() ==='' || isNaN(num)){
    alert('Invalid Number');
}   else if (+num > 0){
    alert ('Positive Number')
}
    else if (+num == 0){
    alert ('zero')
}
    else if (+num < 0){
    alert ('negative number')
}