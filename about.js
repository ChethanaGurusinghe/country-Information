
function searchByName(){
    let seachValue = document.getElementById("txtSearchBox").value;
    console.log(seachValue);
    
    fetch("https://restcountries.com/v3.1/name/"+seachValue).then(res=>res.json()).then(data=>{

        document.getElementById("root");
        
        data.forEach(element => {

            root.innerHTML=`
                <section>
                    <h4 style="color: midnightblue;">Cioc         : </h4><h3 style="color: cornflowerblue;">${element.cioc}</h3>
                    <h4 style="color: midnightblue;">Sub Region   : </h4><h3 style="color: cornflowerblue;">${element.subregion}</h3>
                    <h4 style="color: midnightblue;">Languages    : </h4><p style="color: cornflowerblue;">${element.languages}</p>
                    <h4 style="color: midnightblue;">Latlng       :</h4><p style="color: cornflowerblue;">${element.latlng[0],[1]}</p>
                    <h4 style="color: midnightblue;">Area         :</h4><p style="color: cornflowerblue;">${element.area}</p>
                    <h4 style="color: midnightblue;">Time Zones   :</h4><p style="color: cornflowerblue;">${element.timezones}</p>
                    <h4 style="color: midnightblue;">Domain Name  :</h4><p style="color: cornflowerblue;">${element.idd.root}</p>
                    <h4 style="color: midnightblue;">Domain Name  :</h4><p style="color: cornflowerblue;">${element.idd.suffixes}</p>
                    <h4 style="color: midnightblue;">Domain Name  :</h4><p style="color: cornflowerblue;">${element.borders}</p>
                    
                </section>
                `;
            console.log(element.cioc);
            console.log(element.subregion);
            console.log(element.languages);
            console.log(element.latlng[0],[1]); 
            console.log(element.area);
            console.log(element.timezones);
            console.log(element.idd.root);
            console.log(element.idd.suffixes);
            console.log(element.borders);
        });
    })
    
}