const i18n = require('i18n');
const path = require('path');

i18n.configure({
    locales: ['es', 'en'],
    directory: path.join(__dirname, '..', 'locales'),
    defaultLocale: 'es',
    autoReload: true,
    syncFiles: true,
    cookie: 'locale'
})

i18n.setLocale('es');

module.exports = i18n;