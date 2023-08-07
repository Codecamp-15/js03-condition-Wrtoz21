let input = prompt("input number");
if(input === null || input.trim() ==='' || isNaN(input)){
    alert("Put numbers");
}
else if (input % 2 == 0){
    alert("Even number");
}else{alert("Odd number");}