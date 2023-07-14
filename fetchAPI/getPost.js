document.getElementById("getPost").addEventListener("click", getPost);

function getPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data)=>{
        let output = '<h2>Posts</h2>';
        data.forEach(function(post){
            output += `
                <div>
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
            `
        })
        document.getElementById('output').innerHTML = output;
    })
}