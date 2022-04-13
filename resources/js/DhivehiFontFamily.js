export default class DhivehiFontFamily {
    name() {
        return "DhivehiFontFamily";
    }

    schema() {
        return {
            attrs: {
                key: '',
            },
            parseDOM: [
                {
                    tag: "span.maldicore-dhivehi-fonts",
                    getAttrs: (dom) => ({
                        key: dom.getAttribute('data-class')
                    })
                }
            ],
            toDOM: (mark) => {
                let style = 'direction: rtl; display: block; font-family: ';
                switch (mark.attrs.key) {
                    case 'alh-mv-a-waheed':
                        style += 'MVAWaheed;';
                    break;

                    case 'alh-faruma':
                        style += 'Faruma;';
                    break;

                    case 'alh-a-faruma':
                        style += 'AFaruma;';
                    break;

                    case 'alh-mv-iyyu':
                        style += 'MVIyyu;';
                    break;

                    case 'alh-mv-galan':
                        style += 'MVGalan;';
                    break;

                    case 'alh-mv-faseyha':
                        style += 'MVFaseyha;';
                    break;

                    case 'alh-mv-elaaf':
                        style += 'MVElaaf;';
                    break;

                    case 'alh-mv-emaan-xp':
                        style += 'MVEmaanXP;';
                    break;

                    case 'alh-mv-amaan-xp':
                        style += 'MVAmaanXP;';
                    break;

                    case 'alh-faagathi-dheli':
                        style += 'FaagathiDheli;';
                    break;
                }

                return [
                    "span",
                    {
                        'class': 'maldicore-dhivehi-fonts',
                        'data-class': mark.attrs.key,
                        'style': style
                    },
                    0,
                ];
            }
        };
    }

    commands({type, updateMark, removeMark}) {
        return attrs => {
            if (attrs.key) {
                return updateMark(type, attrs)
            }

            return removeMark(type)
        }
    }

    pasteRules({type}) {
        return [];
    }

    plugins() {
        return [];
    }
}