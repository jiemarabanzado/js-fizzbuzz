let a="Fizz";
let b='Buzz';
let c='FizzBuzz';
var NewDiv =document.getElementsByClassName("Mydiv");

for(let i=1 ; i<=100;i++){
    let element=document.createElement('div');
    if(i%3==0 && i%5==0){
        element.innerHTML=c;
        NewDiv.append(element);
        element.classList.add('square');
        console.log(c);
    }else if(i%5==0){
        element.innerHTML=b;
        element.classList.add('square');
        console.log(b)
    }else if(i%3==0){
        element.innerHTML=a;
        NewDiv.append(element);
        element.classList.add('square');
        console.log(a);
    }else{
        element.innerHTML=i;
        NewDiv.append(element);
        element.classList.add('square');
        console.log(i);
    }
    
}
