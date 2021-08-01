var danishPrice = 50;
var butterbread = 25;
var toastBuscuitPrice = 10;
var myBudget = 100;
var packedWell = false;

if(danishPrice <= myBudget){
    if(packedWell == true){
        console.log('eat danish');
    }
    else{
        console.log('g0 to next element');
    }
}
else if(butterbread <= myBudget){
    console.log('eat buttrbread');
}
else if(toastBuscuitPrice <= myBudget){
    console.log('eat toast biscut');
}
else{ 
    console.log('eat only tea');
}