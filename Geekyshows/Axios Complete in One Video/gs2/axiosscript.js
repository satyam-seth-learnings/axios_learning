document.getElementById("btn").addEventListener('click', makeRequest);

// Ex-1 Promise Then | Error Handling
// function makeRequest() {
//     console.log("Button Clicked");

//     axios('data.json').then((res) => {
//         console.log(res);
//         console.log(res.data);
//         console.log(res.data.name);
//         console.log(res.data.roll);
//     }).catch((error) => {
//         console.log(error);
//     });
// }

// Ex-2 Promise Then | Showing Data in Browser
// function makeRequest() {
//     console.log("Button Clicked");

//     axios('data.json').then((res) => {
//         console.log(res);
//         console.log(res.data);
//         console.log(res.data.name);
//         console.log(res.data.roll);

//         document.getElementById("data1").innerText = res.data.name;
//         document.getElementById("data2").innerText = res.data.roll;
//     }).catch((error) => {
//         console.log(error);
//     });
// }

// Ex-3 Async and Await | Error Handling
// async function makeRequest() {
//     try {
//         console.log("Button Clicked");

//         const res = await axios.get('data.json');
//         console.log(res);
//         console.log(res.data);
//         console.log(res.data.name);
//         console.log(res.data.roll);
//     } catch (error) {
//         console.log(error);
//     }
// }

// Ex-4 Async and Await | Showing Data in Browser
async function makeRequest() {
    try {
        console.log("Button Clicked");

        const res = await axios.get('data.json');
        console.log(res);
        console.log(res.data);
        console.log(res.data.name);
        console.log(res.data.roll);

        document.getElementById("data1").innerText = res.data.name;
        document.getElementById("data2").innerText = res.data.roll;
    } catch (error) {
        console.log(error);
    }
}