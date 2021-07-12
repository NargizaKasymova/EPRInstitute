
fetch('http://192.168.0.117:5050/my-links', {
    method: "GET"
})
.then(response => {
    console.log(response);
    return response.json();
})
.then(data => {
    console.log(data);
    
})
.catch(e=> {
    console.log('Fetch error: ', e)
})

async function getMyLinks() {
    try {
        const response = await fetch('http://192.168.0.117:5050/my-links', {
            method: "GET"
        });
        const data= await response.json()

        alert(data)
    } catch(e) {
        console.log("Error: ", e)

    }
}
getMyLinks()