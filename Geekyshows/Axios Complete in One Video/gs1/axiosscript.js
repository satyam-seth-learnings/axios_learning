document.getElementById("btn").addEventListener('click', makeRequest);


// Ex-1
// function makeRequest() {
//     console.log("Button Clicked");

//     config = {
//         method: 'get',
//         url: 'data.txt'
//     }

//     const promiseObj = axios(config);
//     promiseObj.then((res) => {
//         console.log(res);
//         console.log(res.data);
//     })
// }

// Ex-2
// function makeRequest() {
//     console.log("Button Clicked");

//     config = {
//         method: 'get',
//         url: 'data.txt'
//     }

//     axios(config).then((res) => {
//         console.log(res);
//         console.log(res.data);
//     })
// }

// Ex-3
// function makeRequest() {
//     console.log("Button Clicked");

//     axios({
//         method: 'get',
//         url: 'data.txt'
//     }).then((res) => {
//         console.log(res);
//         console.log(res.data);
//     })
// }

// Ex-4 get shorthand
// function makeRequest() {
//     console.log("Button Clicked");

//     axios.get('data.txt').then((res) => {
//         console.log(res);
//         console.log(res.data);
//     })
// }

// Ex-5 default method is get
// function makeRequest() {
//     console.log("Button Clicked");

//     axios('data.txt').then((res) => {
//         console.log(res);
//         console.log(res.data);
//     })
// }

// Ex-6 specify method config
// function makeRequest() {
//     console.log("Button Clicked");

//     axios('data.txt', { method: 'get' }).then((res) => {
//         console.log(res);
//         console.log(res.data);
//     })
// }

// Ex-7 specify method config 
// function makeRequest() {
//     console.log("Button Clicked");

//     const config = { method: 'get' };

//     axios('data.txt', config).then((res) => {
//         console.log(res);
//         console.log(res.data);
//     })
// }

// Ex-8 Promise Then | Error Handling
// function makeRequest() {
//     console.log("Button Clicked");

//     axios('data-not-fount.txt').then((res) => {
//         // axios('data.txt').then((res) => {
//         console.log(res);
//         console.log(res.data);
//     }).catch((error) => {
//         console.log(error);
//     }).then(() => {
//         // always execute no matter error accord or not
//         console.log("Clean");
//     });
// }

// Ex-9 Promise Then | Showing Data in Browser
// function makeRequest() {
//     console.log("Button Clicked");

//     axios('data.txt').then((res) => {
//         console.log(res);
//         console.log(res.data);

//         document.getElementById("data").innerText = res.data;
//     }).catch((error) => {
//         console.log(error);
//     });
// }

// Ex-10 Async and Await
// async function makeRequest() {
//     console.log("Button Clicked");

//     const config = {
//         method: 'get',
//         url: 'data.txt'
//     }
//     const res = await axios(config);
//     console.log(res);
//     console.log(res.data);
// }

// Ex-11 Async and Await
// async function makeRequest() {
//     console.log("Button Clicked");

//     const config = {
//         method: 'get',
//     }
//     const res = await axios('data.txt', config);
//     console.log(res);
//     console.log(res.data);
// }

// Ex-12 Async and Await
// async function makeRequest() {
//     console.log("Button Clicked");

//     const res = await axios.get('data.txt');
//     console.log(res);
//     console.log(res.data);
// }

// Ex-13 Async and Await | Error Handling
// async function makeRequest() {
//     try {
//         console.log("Button Clicked");

//         // const res = await axios.get('data.txt');
//         const res = await axios.get('data-not-fount.txt');
//         console.log(res);
//         console.log(res.data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// Ex-14 Async and Await | Showing Data in Browser
async function makeRequest() {
    try {
        console.log("Button Clicked");

        const res = await axios.get('data.txt');
        console.log(res);
        console.log(res.data);

        document.getElementById("data").innerText = res.data;
    } catch (error) {
        console.log(error);
    }
}