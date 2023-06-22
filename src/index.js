import Tooltip from './ui_lib/tooltip';
import Dropdown from './ui_lib/dropdown';
import Tabs from './ui_lib/tabs';

//create a tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const instance = new Dropdown(dropdown);
    instance.init();
});

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();