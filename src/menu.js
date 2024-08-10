function menuLoad() {
    const content = document.querySelector('#content');
    const div = document.createElement('div');
    const appDiv = document.createElement('div');
    const mainDiv = document.createElement('div');
    const dessDiv = document.createElement('div');
    
    content.innerHTML = "";

    const apps = document.createElement('h2');
    const aItem1 = document.createElement('p');
    const aDesc1 = document.createElement('p');
    const aItem2 = document.createElement('p');
    const aDesc2 = document.createElement('p');
    const aItem3 = document.createElement('p');
    const aDesc3 = document.createElement('p');

    apps.textContent = 'Appetizers';
    aItem1.textContent = 'Scallion Pancakes';
    aDesc1.textContent = 'Unleavened flatbread folded with oil and minced scallions.';
    aItem2.textContent = 'Spring Rolls';
    aDesc2.textContent = 'Ricepaper rolls filled with rice noodles, crunchy vegetables, and protein.';
    aItem3.textContent = 'Potato Samosas';
    aDesc3.textContent = 'Fried pastry filled with savory potatos and peas.';


    appDiv.appendChild(apps);
    appDiv.appendChild(aItem1);
    appDiv.appendChild(aDesc1);
    appDiv.appendChild(aItem2);
    appDiv.appendChild(aDesc2);
    appDiv.appendChild(aItem3);
    appDiv.appendChild(aDesc3);


    const main = document.createElement('h2');
    const mItem1 = document.createElement('p');
    const mDesc1 = document.createElement('p');
    const mItem2 = document.createElement('p');
    const mDesc2 = document.createElement('p');
    const mItem3 = document.createElement('p');
    const mDesc3 = document.createElement('p');

    main.textContent = 'Main Entrees'
    mItem1.textContent = 'Pav Bhaji';
    mDesc1.textContent = 'Thick spicy vegetable curry served with a soft buttered bread roll.';
    mItem2.textContent = 'Chicken Katsu';
    mDesc2.textContent = 'Japanese style fried chicken cutlet coated in panko and served with hot rice and tonkatsu sauce.';
    mItem3.textContent = 'Pad Kee Mao';
    mDesc3.textContent = 'Thai stir-fried noodles with basil, chilies, and choice of protein.';

    mainDiv.appendChild(main);
    mainDiv.appendChild(mItem1);
    mainDiv.appendChild(mDesc1);
    mainDiv.appendChild(mItem2);
    mainDiv.appendChild(mDesc2);
    mainDiv.appendChild(mItem3);
    mainDiv.appendChild(mDesc3);
    
    const dessert = document.createElement('h2');
    const dItem1 = document.createElement('p');
    const dDesc1 = document.createElement('p');
    const dItem2 = document.createElement('p');
    const dDesc2 = document.createElement('p');
    const dItem3 = document.createElement('p');
    const dDesc3 = document.createElement('p');

    dessert.textContent = "Desserts"
    dItem1.textContent = 'Mango Sago';
    dDesc1.textContent = 'Creamy, rich mango sago topped with fresh mango chunks.';
    dItem2.textContent = 'Falooda';
    dDesc2.textContent = 'Milky, rose flavored dessert with rose syrup, jelly, vermicellu, and chia seeds.';
    dItem3.textContent = 'Banh Deo';
    dDesc3.textContent = 'Vietnamese mochi mooncakes with black tahini and chocolate cream filling.';

    dessDiv.appendChild(dessert);
    dessDiv.appendChild(dItem1);
    dessDiv.appendChild(dDesc1);
    dessDiv.appendChild(dItem2);
    dessDiv.appendChild(dDesc2);
    dessDiv.appendChild(dItem3);
    dessDiv.appendChild(dDesc3);
  
    aItem1.className = 'item';
    aItem2.className = 'item';
    aItem3.className = 'item';
    mItem1.className = 'item';
    mItem2.className = 'item';
    mItem3.className = 'item';
    dItem1.className = 'item';
    dItem2.className = 'item';
    dItem3.className = 'item';

    aDesc1.className = 'description';
    aDesc2.className = 'description';
    aDesc3.className = 'description';
    mDesc1.className = 'description';
    mDesc2.className = 'description';
    mDesc3.className = 'description';
    dDesc1.className = 'description';
    dDesc2.className = 'description';
    dDesc3.className = 'description';
    
  
    div.appendChild(appDiv);
    div.appendChild(mainDiv);
    div.appendChild(dessDiv);
    div.className = 'menu';

    content.appendChild(div);
  }
  
  export { menuLoad };
  