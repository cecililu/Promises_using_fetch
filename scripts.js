const countriesContainer=document.querySelector('.country-container')

const renderCountry=function(data){
    const html=`
    <article class="">
        <img src='${data.flags['svg']}' style='height:100px'/>
        <div>
        <h3>${ data.name.common || data.name}</h3>
        <h4>${data.region}</h4>
        <p>${data.population}</p>
        </div>
    </article>`;
 countriesContainer.insertAdjacentHTML('beforeend',html)
}
function getCountryData(country){
    fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json())
    .then(data => {
        console.log('ths',data)
        renderCountry(data[0]) 
        const neighbour=data[0].borders[0]

        return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)    
    }).then(response=>response.json())
    .then(data=>{
        console.log(data)
        renderCountry(data[0])});
}

getCountryData('nepal')
