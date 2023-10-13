document.getElementById("btn").addEventListener("click", makeRequest);

// Axios Instance
const ai = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

// Ex-1 Get Request
// function makeRequest() {
//     console.log("Button Clicked");

//     ai('/posts/1')
//         .then((res) => {
//             console.log("Data:", res.data);
//             console.log("ID:", res.data.id);
//             console.log("Title:", res.data.title);
//             console.log("Body:", res.data.body);
//         }).catch((error) => {
//             console.log(error);
//         });
// }

// Ex-2 Get Request
function makeRequest() {
    console.log("Button Clicked");

    ai('/posts/')
        .then((res) => {
            console.log("Data:", res.data);
        }).catch((error) => {
            console.log(error);
        })
}