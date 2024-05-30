async function callAPI(){

    const url = 'https://pinnacle-odds.p.rapidapi.com/kit/v1/sports';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '81e87eb068mshdd302a80cb7f1d6p1c2537jsnc578b2809085',
            'x-rapidapi-host': 'pinnacle-odds.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        const objects = JSON.parse(result);
        let htmlString = "";
        objects.forEach(element => {
            htmlString +=`
            <div class=" card shadow w-25">
                <div class="card body">
                    <h4> ID:${element.id}</h4>
                    <h5>${element.name}</h5>
                    <p>last: ${element.last}</p>
                    <p> special_last:${element.special_last}</p>
                    <p> last_call:${element.last_call}</p>
                </div>
            </div>`
        });
        document.getElementById("div1").innerHTML = htmlString;
    } catch (error) {
        console.error(error);
    }
}
callAPI();
