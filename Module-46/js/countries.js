const loadingData = () =>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => displayLoadingData(data))
}

const displayLoadingData = (countries)=>{
    const container = document.getElementById('container')
    const countryHtml = countries.map(country=>getCountryHtml(country))
    container.innerHTML = countryHtml.join(' ');
    
    
}

// original
// const getCountryHtml = (country)=>{
//     return `
//     <div>
//     <figure><img src="${country.flags.png}" class="p-4 border border-black rounded-md	 border-4"></figure>
//             <div class="card-body">
//               <h2 class="card-title font-bold text-2xl">${country.name.common}</h2>
//               <p><span class="text-2xl font-semibold"> Capital :${country.capital} </span> </p>
//             <div class="card-actions justify-end">
//                 <button class="btn btn-primary">Details</button>
//             </div>
//     </div>
//     </div>
//     `
// }


// option -1 
// const getCountryHtml = ({name,capital,flags})=>{
//     return `
//     <div>
//     <figure><img src="${flags.png}" class="p-4 border border-black rounded-md	 border-4"></figure>
//             <div class="card-body">
//               <h2 class="card-title font-bold text-2xl">${name.common}</h2>
//               <p><span class="text-2xl font-semibold"> Capital :${capital} </span> </p>
//             <div class="card-actions justify-end">
//                 <button class="btn btn-primary">Details</button>
//             </div>
//     </div>
//     </div>
//     `
// }

// option-2
const getCountryHtml = country =>{
    const {name,flags,capital} = country;
        return `
    <div>
    <figure><img src="${flags.png}" class="p-4 border border-black rounded-md	 border-4"></figure>
            <div class="card-body">
              <h2 class="card-title font-bold text-2xl">${name.common}</h2>
              <p><span class="text-2xl font-semibold"> Capital :${capital} </span> </p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Details</button>
            </div>
    </div>
    </div>
    `
}