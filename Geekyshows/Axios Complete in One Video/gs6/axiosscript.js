document.getElementById("btn").addEventListener("click", makeRequest);

// Global Axios Default
axios.defaults.headers.common['Authorization'] = 'sdfkjsdhfjk32423432jkhjshfd342387fdsf';

//Ex-1  Get Request
// function makeRequest() {
//     console.log("Button Clicked");

//     axios('https://jsonplaceholder.typicode.com/posts/1')
//         .then((res) => {
//             console.log("Data:", res.data);
//             console.log("ID:", res.data.id);
//             console.log("Title:", res.data.title);
//             console.log("Body:", res.data.body);
//         }).catch((error) => {
//             console.log(error);
//         });
// }

// Ex-2 Post Request
function makeRequest() {
    console.log("Button Clicked");

    const config = {
        method: 'POST',
        url: 'https://reqres.in/api/users',
        headers: {
            'Content-Type': 'application/json',
        },
        data: '{ "name": "Sonam", "job": "Web Dev" }'
    };

    axios(config).then((res) => {
        console.log(res.data);
    }).catch((error) => {
        console.log(error);
    });
}