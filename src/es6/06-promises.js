const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!!');
        } else {
            return('Whooooops!');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))