function howManyArgs(...args){
    console.log(args.length)
}

howManyArgs(1)
howManyArgs(1,2)
howManyArgs(1,2,3)

function multiply(multiple,...array){
    for(var i=0; i < array.length; i++){
        array[i] *= multiple
    }
    console.log(array)
}

multiply(1,200)
multiply(2,100)
multiply(4,100,200)