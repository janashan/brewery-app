async function getBrewery() {
    const data = await fetch('https://api.openbrewerydb.org/breweries',
        { method: 'GET' });
    const breweries = await data.json();
    console.log(breweries);
    return breweries;

}

getBrewery();

async function displayBrewery() {
    try {

        const displayBreweries = await getBrewery();
        displayBreweries.map((brewery) => {
            console.log(brewery)
            var container = document.createElement('div');
            container.className = 'container';

            container.innerHTML =
                `
                  <h2><span class='side-heading'></span> ${brewery.name}</h2>
                  <p><span class='side-heading'>Type:</span> ${brewery.brewery_type.toUpperCase()}</p>
                  <p><span class='side-heading'>Address:</span> ${brewery.address_2} , ${brewery.address_2}</p>
                  <p><span class='side-heading'>Phone No:</span> ${brewery.phone}</p>
                  <p><span class='side-heading'>Website:</span><a class='web-link'
                  href=${brewery.website_url}
                  rel='noopener noreferrer'
                  target='_blank'
                  aria-label='Brewery address'
              >
              ${brewery.website_url}
              </a></p>
          
          `
            document.body.append(container);
        })
    } catch (err) {
        console.log(err)
    }
}

displayBrewery();