import map from './map.svg';

function aboutLoad() {
    const content = document.getElementById("content");
    const div = document.createElement("div");
    const divAbt = document.createElement("div");
    const divHours = document.createElement("div");
    const divContact = document.createElement("div");
    const image = document.createElement("img");
    const desc = document.createElement('p');
    const hoursTitle = document.createElement('h3');
    const contactTitle = document.createElement('h3');

    const mtTimes = document.createElement('p');
    const fsTimes = document.createElement('p');
    const sTimes = document.createElement('p');

    const address = document.createElement('p');
    const number = document.createElement('p');
    const email = document.createElement('p');

    content.innerHTML = "";
    image.src = map;
    image.alt = 'A map of Asia';
    image.className = 'map';
    desc.textContent = `At Demi's Eats, we bring you the best of Asian Fusion cuisine. Our menu features an exquisite blend of flavors from South, Southeast, and East Asia, all crafted with the freshest ingredients and traditional recipes. Come and experience the vibrant, delicious dishes that make Demi's Eats a culinary destination.`;
    divAbt.appendChild(image);
    divAbt.appendChild(desc);
    divAbt.className = 'abt';

    hoursTitle.textContent = 'Restaurant Hours';
    mtTimes.textContent = 'Monday - Thursday: 11AM - 9PM';
    fsTimes.textContent = 'Friday - Saturday: 11AM - 11PM';
    sTimes.textContent = 'Sunday: CLOSED';
    divHours.appendChild(hoursTitle);
    divHours.appendChild(mtTimes);
    divHours.appendChild(fsTimes);
    divHours.appendChild(sTimes);
    divHours.className = 'hours';

    contactTitle.textContent = 'Contact';
    address.textContent = '2002 Alphabet Way, Santa Clara, CA 95051';
    number.textContent = '(408) 222 - 1293';
    email.textContent = 'demi.eats@gmail.com';

    divContact.appendChild(contactTitle);
    divContact.appendChild(address);
    divContact.appendChild(number);
    divContact.appendChild(email);
    divContact.className = 'contact';

    div.appendChild(divAbt);
    div.appendChild(divHours);
    div.appendChild(divContact); 
    div.className = "abtDiv";

    content.appendChild(div);
}

export { aboutLoad };
