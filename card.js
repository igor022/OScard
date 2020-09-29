const ul = document.createElement('ul');
const button = document.getElementById('toggle');
const card = document.getElementById('card');

const info = { 
    appName: window.navigator.appName, 
    appVersion: window.navigator.appVersion, 
    vendor: window.navigator.vendor, 
    platform: window.navigator.platform
};

button.addEventListener('click', toggleInfo);

function createElement(tag, text) {
    const el = document.createElement(tag);
    el.textContent = text;
    return el;
}

function toggleInfo(e) {
    console.log(e.target);
    if (e.target.classList.toggle('on')) {
        ul.style.display = 'block';
        button.textContent = 'Hide';
    } else {
        ul.style.display = 'none';
        button.textContent = 'Show';
    }
}

const list = Object.entries(info).map(([key, value]) => {
    return `<li><b>${key}:</b> ${value}</li>`
});

card.appendChild(ul);
ul.innerHTML = list.join('');




