document.getElementById('addPost').addEventListener('submit', addPost);

function addPost(event){
    event.preventDefault();
    let title = document.getElementById('title').value;
    console.log
    let body = document.getElementById('body').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    
}