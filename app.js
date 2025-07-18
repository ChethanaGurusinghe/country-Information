function searchByName(){
    let seachValue = document.getElementById("txtSearchBox").value;
    console.log(seachValue);
    
    fetch("https://restcountries.com/v3.1/name/"+seachValue).then(res=>res.json()).then(data=>{

        document.getElementById("root");
        
        data.forEach(element => {

            root.innerHTML=`
                <section>
                    <p><img src="${element.flags.png}" alt=""></p>
                    <h4 style="color: midnightblue;">Official Name    : </h4><h3 style="color: cornflowerblue;">${element.name.official}</h3>
                    <h4 style="color: midnightblue;">Capital City     : </h4><p style="color: cornflowerblue;">${element.capital[0]}</p>
                    <h4 style="color: midnightblue;">Region           :</h4><p style="color: cornflowerblue;">${element.region}</p>
                    <h4 style="color: midnightblue;">population       :</h4><p style="color: cornflowerblue;">${element.population}</p>
                    <h4 style="color: midnightblue;">currency         :</h4><p style="color: cornflowerblue;">${element.currencies[0]}</p>
                    <h4 style="color: midnightblue;">Domain Name      :</h4><p style="color: cornflowerblue;">${element.altSpellings[0]}</p>
                    <h4 style="color: midnightblue;">See more Details :</h4><a href="about.js">Click here</a>
                    
                </section>
                `;

            console.log(element.name.official);
            console.log(element.flags.png);
            console.log(element.capital[0]); 
            console.log(element.region);
            console.log(element.population);
            console.log(element.currencies[0]);
            console.log(element.altSpellings[0]);
        });
    })
    
}