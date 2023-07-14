document.getElementById("getUsers").addEventListener('click', getUsers);

function getUsers() {
    fetch('users.json')
        .then((response) => response.json())
        .then((data) => {
            let output = '<h2>Users</h2>';
            data.forEach(function (user) {
                output +=
                    `
                <ul>
                    <li>ID: ${user}</li>
                    <li>Name: ${user.name}</li>
                    <li>Email: ${user.email}</li>
                </ul>
                `;
            });
            document.getElementById("output").innerHTML = output;
            // console.log(data);
        })
}