function searchByName(){
    let seachValue = document.getElementById("txtSearchBox").value;
    console.log(seachValue);
    
    fetch("https://restcountries.com/v3.1/name/"+seachValue).then(res=>res.json()).then(data=>{

        document.getElementById("root");
        
        data.forEach(element => {

            root.innerHTML=`
                <section>
                    <p><img src="${element.flags.png}" alt=""></p>
                    <h1>${element.name.official}</h1>
                    <p>${element.capital[0]}</p>
                    <p></p>
                </section>
                `;

            console.log(element.name.official);
            console.log(element.flags.png);
            console.log(element.capital[0]); 
        });
    
    })
    
}