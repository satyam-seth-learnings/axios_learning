document.getElementById("btn").addEventListener('click', makeRequest);

// Ex-1 Promise then | Single Data
// function makeRequest() {
//     console.log("Button Clicked");

//     axios('https://jsonplaceholder.typicode.com/posts/1')
//         .then((res) => {
//             console.log(res);
//             console.log("Data:", res.data);
//             console.log("ID:", res.data.id);
//             console.log("Title:", res.data.title);
//             console.log("Body:", res.data.body);
//         }).catch((error) => {
//             console.log(error);
//         });
// }

// Ex-2 Promise then | Single Data
// function makeRequest() {
//     console.log("Button Clicked");

//     const config = {
//         params: { id: 1 }
//     }

//     axios('https://jsonplaceholder.typicode.com/posts/', config)
//         .then((res) => {
//             console.log(res);
//             console.log("Data:", res.data);
//             console.log("Data[0]:", res.data[0]);

//             // console.log("ID:", res.data[0].id);
//             // console.log("Title:", res.data[0].title);
//             // console.log("Body:", res.data[0].body);

//             const data = res.data[0];

//             console.log(data);
//             console.log("ID:", data.id);
//             console.log("Title:", data.title);
//             console.log("Body:", data.body);
//         }).catch((error) => {
//             console.log(error);
//         });
// }

// Ex-3 Promise then | Single Data | Showing Data in Browser
// function makeRequest() {
//     console.log("Button Clicked");

//     axios('https://jsonplaceholder.typicode.com/posts/1')
//         .then((res) => {
//             console.log(res);
//             console.log("Data:", res.data);

//             document.getElementById('pid').innerText = res.data.id;
//             document.getElementById('title').innerText = res.data.title;
//             document.getElementById('body').innerText = res.data.body;
//         }).catch((error) => {
//             console.log(error);
//         });
// }

// Ex-4 Promise then | Multiple Data
// function makeRequest() {
//     console.log("Button Clicked");

//     axios('https://jsonplaceholder.typicode.com/posts/')
//         .then((res) => {
//             console.log("Data:", res.data);

//             res.data.forEach(element => {
//                 console.log("ID:", element.id);
//                 console.log("Title:", element.title);
//                 console.log("Body:", element.body);
//             });
//         }).catch((error) => {
//             console.log(error);
//         });
// }

// Ex-5 Promise then | Multiple Data | Showing Data in Browser
// function makeRequest() {
//     console.log("Button Clicked");

//     axios('https://jsonplaceholder.typicode.com/posts/')
//         .then((res) => {
//             console.log("Data:", res.data);

//             res.data.forEach(element => {
//                 const output = document.getElementById('all-post')

//                 output.innerHTML += `
//                                 <div>ID: ${element.id}</div>
//                                 <div>Title: ${element.title}</div>
//                                 <div>Body: ${element.body}</div>
//                                 <hr>
//                                 `;
//             });
//         }).catch((error) => {
//             console.log(error);
//         });
// }

// Ex-6 Async Await | Single Data
// async function makeRequest() {
//     try {
//         console.log("Button Clicked");

//         const res = await axios('https://jsonplaceholder.typicode.com/posts/1');
//         console.log("Data:", res.data);
//         console.log("ID:", res.data.id);
//         console.log("Title:", res.data.title);
//         console.log("Body:", res.data.body);
//     } catch (error) {
//         console.log(error);
//     }
// }

// Ex-7 Async Await | Single Data | Showing Data in Browser
// async function makeRequest() {
//     try {
//         console.log("Button Clicked");

//         const res = await axios('https://jsonplaceholder.typicode.com/posts/1');
//         console.log("Data:", res.data);

//         document.getElementById('pid').innerText = res.data.id;
//         document.getElementById('title').innerText = res.data.title;
//         document.getElementById('body').innerText = res.data.body;
//     } catch (error) {
//         console.log(error);
//     }
// }

// Ex-8 Async Await | Multiple Data
// async function makeRequest() {
//     try {
//         console.log("Button Clicked");

//         const res = await axios('https://jsonplaceholder.typicode.com/posts/');
//         console.log("Data:", res.data);

//         res.data.forEach(element => {
//             console.log("ID:", element.id);
//             console.log("Title:", element.title);
//             console.log("Body:", element.body);
//         });
//     } catch (error) {
//         console.log(error);
//     }
// }

// Ex-8 Async Await | Multiple Data | Showing Data in Browser
async function makeRequest() {
    try {
        console.log("Button Clicked");

        const res = await axios('https://jsonplaceholder.typicode.com/posts/');
        console.log("Data:", res.data);

        res.data.forEach(element => {
            const output = document.getElementById('all-post')

            output.innerHTML += `
                            <div>ID: ${element.id}</div>
                            <div>Title: ${element.title}</div>
                            <div>Body: ${element.body}</div>
                            <hr>
                            `;
        });
    } catch (error) {
        console.log(error);
    }
}