document.getElementById('search-input').addEventListener('keyup', async (e) => {
    const res = await fetch('./php/server.php');
    console.log(res)
    const json = await res.json()
    const key_stroke = document.getElementById("search-input").value
    let display = '';
    json.forEach(obj => {
        if((obj.name.match(key_stroke))){
            display += '<li><a href="#">'+obj.name+'</a><BR><BR><span>Email: '+obj.email + '<BR>Body: '+obj.body + '</span></li><hr>'
        }
    })
    const result = display
    document.getElementById('results').innerHTML = result
});