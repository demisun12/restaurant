import pic from './pic.png';

function pageLoad() {
  const content = document.querySelector('#content');
  const div = document.createElement('div');
  const heading = document.createElement('h2');
  const img = document.createElement('img')

  content.innerHTML = "";


  img.src = pic;
  img.alt = 'Variety of Asian foods.'
  img.className = "food";

  heading.textContent = "The best of Asian fusion cuisine";
  heading.className = 'heading';

  div.appendChild(img);
  div.appendChild(heading);
  div.className = 'mainimg';

  content.appendChild(div);
}

export { pageLoad };
