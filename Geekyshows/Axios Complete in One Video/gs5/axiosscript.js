document.getElementById("btn").addEventListener('click', makeRequest);

// Ex-1 Promise then
// function makeRequest(e) {
//     e.preventDefault();

//     const name = document.getElementById("name").value;
//     const job = document.getElementById("job").value;

//     console.log("Button Clicked");

//     const config = {
//         method: 'POST',
//         url: 'https://reqres.in/api/users/',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         data: JSON.stringify({ name: name, job: job })
//     };

//     axios(config)
//         .then((res) => {
//             console.log("Data:", res.data);
//         }).catch((error) => {
//             console.log(error);
//         });
// }

// Ex-2 Async and Await
async function makeRequest(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;

    try {
        console.log("Button Clicked");

        const config = {
            method: 'POST',
            url: 'https://reqres.in/api/users/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({ name: name, job: job })
        };

        const res = await axios(config);
        console.log("Data:", res.data);
    }
    catch (error) {
        console.log(error);
    };
}