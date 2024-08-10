import { pageLoad } from './home';
import { aboutLoad } from './about';
import { menuLoad } from './menu';
import './style.css';

const tabs = Array.from(document.getElementsByClassName("tab")); // Convert HTMLCollection to array

function setActiveTab(tab) {
  tabs.forEach(button => button.classList.remove('active'));
  tab.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const about = document.getElementById('about');

  // Set the initial active tab
  setActiveTab(home);
  pageLoad();

  // Attach event listeners
  home.addEventListener('click', () => {
    setActiveTab(home);
    pageLoad();
  });

  menu.addEventListener('click', () => {
    setActiveTab(menu);
    menuLoad();
  });

  about.addEventListener('click', () => {
    setActiveTab(about);
    aboutLoad();
  });
});
