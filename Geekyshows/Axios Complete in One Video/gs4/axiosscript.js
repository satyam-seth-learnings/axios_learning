document.getElementById("btn").addEventListener('click', makeRequest);

// Ex-1 Promise then
// function makeRequest() {
//     console.log("Button Clicked");

//     const config = {
//         method: 'POST',
//         url: 'https://reqres.in/api/users/',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         data: '{"name":"Sonam", "Job":"Web Dev"}'
//     };

//     axios(config)
//         .then((res) => {
//             console.log("Data:", res.data);
//         }).catch((error) => {
//             console.log(error);
//         });
// }

// Ex-2 Promise then
// function makeRequest() {
//     console.log("Button Clicked");

//     const url = 'https://reqres.in/api/users/';
//     const data = '{"name":"Rahul", "Job":"DevOps"}';
//     const config = {
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };

//     // axios.post('https://reqres.in/api/users/', '{"name":"Rahul", "Job":"DevOps"}', config)
//     axios.post(url, data, config)
//         .then((res) => {
//             console.log("Data:", res.data);
//         }).catch((error) => {
//             console.log(error);
//         });
// }

// Ex-3 Async and Await
// async function makeRequest() {
//     try {
//         console.log("Button Clicked");

//         const config = {
//             method: 'POST',
//             url: 'https://reqres.in/api/users/',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             data: '{"name":"Sonam", "Job":"Web Dev"}'
//         };

//         const res = await axios(config);
//         console.log("Data:", res.data);
//     }
//     catch (error) {
//         console.log(error);
//     };
// }

// Ex-4 Async and Await
async function makeRequest() {
    try {
        console.log("Button Clicked");

        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };

        const res = await axios.post('https://reqres.in/api/users/', '{"name":"Rahul", "Job":"DevOps"}', config);
        console.log("Data:", res.data);
    }
    catch (error) {
        console.log(error);
    };
}