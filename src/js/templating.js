import menuTemplate from '../templates/menu-items.hbs'
import menuItems from '../menu.json'


const menuTemplateCode = menuTemplate(menuItems);
const templateRef = document.querySelector(".js-menu");


templateRef.insertAdjacentHTML('beforeend', menuTemplateCode);