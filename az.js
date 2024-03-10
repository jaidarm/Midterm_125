let mainElement = document.getElementById("main");

fetch("./location_list.json")
.then(response => response.json())
.then(locations => loadLocations(locations))
.catch(console.error("error"));

function loadLocations(locations){
    let morningTitle = document.createElement("h1");
    morningTitle.innerHTML=`<a id="morning">Morning Locations</a><hr>`
    mainElement.appendChild(morningTitle);
    
    for (var i = 0; i < locations.places.length; i++){
        if(locations.places[i].subcat ==="morning"){
        let name = locations.places[i].id;
        let address = locations.places[i].address;
        let subcat = locations.places[i].subcat;
        let img = locations.places[i].img;

        let addLocation = document.createElement("div");

        addLocation.classList.add("col");
        addLocation.innerHTML = `
        <h1>${name}</h1>
        <h2>${address}</h2>
        <h3>${subcat}</h3>
        <img src="${img}">           
        `;
        mainElement.appendChild(addLocation);
    }
    }


    let afternoonTitle = document.createElement("h1");
    afternoonTitle.innerHTML=`<a id="afternoon">Afternoon Locations</a><hr>`
    mainElement.appendChild(afternoonTitle);
    for (var i = 0; i < locations.places.length; i++){
        if(locations.places[i].subcat ==="afternoon"){
        let name = locations.places[i].id;
        let address = locations.places[i].address;
        let subcat = locations.places[i].subcat;
        let img = locations.places[i].img;

        let addLocation = document.createElement("div");

        addLocation.classList.add("col");
        addLocation.innerHTML = `
        <h1>${name}</h1>
        <h2>${address}</h2>
        <h3>${subcat}</h3>
        <img src="${img}">           
        `;
        mainElement.appendChild(addLocation);
    }
    }

    let nightTitle = document.createElement("h1");
    nightTitle.innerHTML=`<a id="night">Night Locations</a><hr>`
    mainElement.appendChild(nightTitle);
    for (var i = 0; i < locations.places.length; i++){
        if(locations.places[i].subcat ==="night"){
        let name = locations.places[i].id;
        let address = locations.places[i].address;
        let subcat = locations.places[i].subcat;
        let img = locations.places[i].img;

        let addLocation = document.createElement("div");

        addLocation.classList.add("col");
        addLocation.innerHTML = `
        <h1>${name}</h1>
        <h2>${address}</h2>
        <h3>${subcat}</h3>
        <img src="${img}">           
        `;
        mainElement.appendChild(addLocation);
    }
    }

}

