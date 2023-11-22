let i;
for(i = 1; i <= 100; i++){
    if(i%5 == 0 && i%3 == 0){
        console.log(i + ' ciupa');
    }else if(i%5 == 0){
        console.log(i + ' multiplo di 5');
    }
    else if(i%3 == 0){
        console.log(i + ' multiplo di 3');
    }

    console.log(i);
}