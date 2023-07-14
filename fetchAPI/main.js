document.getElementById("getText").addEventListener('click', getText);

function getText(){
    fetch("sample.txt")
    // .then(function(response){
    //     return response.text();
    // })
    // .then(function(data){
    //     // console.log(data);
    //     document.getElementById('output').innerHTML = data;
    // })
    // .catch(function(error){
    //     console.log(error);
    // })
    // // return a promise, placeholder for a response
    // fetch('sample.txt')

    // // using arrow function (same as above but shorter)
    .then((response)=> response.text())
    .then((data)=> document.getElementById("output").innerHTML = data)
    // fetch('sample.txt')
    /*
        can only use fetch('sample.txt') once in above and
        don't need in bottom to run 
    */
}
