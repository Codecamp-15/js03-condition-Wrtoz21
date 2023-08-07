let input1 = prompt("take input1");
let input2 = prompt("take input2");
if(input1 === null || input1.trim() ==='' || isNaN(input1)){
    alert("Put numbers");
}
else if(input2 === null || input2.trim() ==='' || isNaN(input2)){
    alert("Put numbers");
}else{alert((+input1)+(+input2));}