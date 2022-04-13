import DhivehiFontFamily from './DhivehiFontFamily';
import DhivehiFontFamilyMenu from './DhivehiFontFamilyMenu.vue';

Statamic.$bard.extend(({mark}) => mark(new DhivehiFontFamily()));
Statamic.$bard.buttons(() => {
    return {
        name: 'DhivehiFontFamily',
        text: 'Dhivehi Font Family',
        command: 'classType',
        args: {
            key: ""
        },
        icon: 'maldicore-dhivehi-fonts',
        component: DhivehiFontFamilyMenu
    };
});