import './style.css';

document.addEventListener('DOMContentLoaded', async () => {
    //1.Feladat
    document.getElementById('osszesBtn').addEventListener('click', async () => {
       let response = await fetch('/planets.json');
       let data = await response.json();
       
       data.planets.sort((a,b) => a.name.localeCompare(b.name));

       let ul = document.getElementById('osszesBolygo');
       ul.textContent = '';
        for( let q of data.planets){
            let li  = document.createElement('li');
            ul.appendChild(li);
            if(q.dwarf){
                li.innerHTML =  '<i>' + q.name; + '</i>'
            }
            else{
            li.innerHTML = q.name;
        }
        }
    });
    //2.Feladat
    
    document.getElementById('theBtn').addEventListener('click', async () => {
        let response = await fetch('planets.json');
        console.log(response)
        let data = await response.json();
        let s = "";

        let theM = [];

        for(let p of data.planets){
            let D = Math.sqrt(p.area / 4 * Math.PI);
            theM.push(D);
        }

        for(let d of theM){
            s += d + "; ";
        }
        document.getElementById('theM').innerHTML = s;

    });

    document.getElementById('kisnagyBtn').addEventListener('click', async () => {
        let response = await fetch('planets.json');
        console.log(response)
        let data = await response.json();
        let min = document.getElementById('min').value;
        let max = document.getElementById('max').value;
        let inbetween = [];
        inbetween.push(data.planets.filter(planet => planet.area >= min && planet.area <= max))
        console.log(inbetween)
    });


});
