const tabs = document.querySelectorAll('.tabs button');
const places = document.querySelectorAll('.place');
tabs.forEach((tab) => tab.addEventListener('click', () => {
  tabs.forEach((item) => item.classList.remove('active'));
  tab.classList.add('active');
  places.forEach((place) => {
    place.hidden = tab.dataset.city !== '全部' && place.dataset.city !== tab.dataset.city;
  });
}));

document.querySelector('#menu').addEventListener('click', () => document.querySelector('#nav').classList.toggle('open'));
