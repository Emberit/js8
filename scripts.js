function mes(type, string) {
let banner = document.createElement('div');

if (type == 'error') {

    banner.innerHTML = string;
    banner.classList.add('banner');

    document.body.appendChild(banner);
    banner.style.backgroundColor = 'red';
    banner.style.fontSize = '28px';
    banner.style.fontWeight = 'bold';
    banner.style.border = '1px solid black';
    banner.style.width = '200px';
    banner.style.textAlign = 'center';
    banner.style.padding = '15px';

} else if (type == 'alert') {
    banner.innerHTML = string;
    banner.classList.add('banner');

    document.body.appendChild(banner);
    banner.style.backgroundColor = 'yellow';
    banner.style.fontSize = '28px';
    banner.style.fontWeight = 'bold';
    banner.style.border = '1px solid black';
    banner.style.width = '200px';
    banner.style.textAlign = 'center';
    banner.style.padding = '15px';

} else if (type == 'msg') {
    banner.innerHTML = string;
    banner.classList.add('banner');

    document.body.appendChild(banner);
    banner.style.backgroundColor = 'gray';
    banner.style.fontSize = '28px';
    banner.style.fontWeight = 'bold';
    banner.style.border = '1px solid black';
    banner.style.width = '200px';
    banner.style.textAlign = 'center';
    banner.style.padding = '15px';

} else {

    banner.innerHTML = 'Неверные параметры функции';
    banner.classList.add('banner');

    document.body.appendChild(banner);
    banner.style.backgroundColor = 'white';
    banner.style.fontSize = '20px';
    banner.style.fontWeight = 'bold';
    banner.style.width = '200px';
    banner.style.textAlign = 'center';
    banner.style.padding = '15px';
}


}

mes('alert', 'Внимание уведомление');