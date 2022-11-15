console.log("script works")
let url = "https://raw.githubusercontent.com/metapercept/CodeExcercise/master/Excercise-1/data/class.json";

let arr = [];


let data = []
fetch(url).then((response) => {
        response = response.json().then((result) => {
                data = result
        })
})
setTimeout(function () {
        let ulmy = document.createElement("div")
        ulmy.className = "eachcard"
        for (let i = 0; i < data.length; i++) {

                //console.log(data)
                let x = document.createElement("img");
                x.className = "image"
                //x.src = data[i].ImageUrl;
                x.alt = data[i].ID
                //console.log(x)
                let h1 = document.createElement("h1");

                h1.innerHTML = data[i].Name;
                h1.className = "nameofuser"
                let p = document.createElement("p");
                p.innerHTML = data[i].ShortDesc;
                p.className = "discription";
                ulmy.appendChild(x)
                ulmy.appendChild(h1);
                ulmy.appendChild(p)
                console.log(ulmy)
                document.createElement("div").appendChild(ulmy)
                document.getElementById("kjs").appendChild(ulmy)
        }
}, 2000);