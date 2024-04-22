import plugin from 'tailwindcss/plugin';
export const multi = plugin(({ matchUtilities }) => {
    matchUtilities({
        multi: (value) => {
            const escape = (str) => str.replace(/_/g, '\\_').replace(/ /g, '_');
            const delimiter = /;(?![^[]*\])/;
            const utilities = value.slice(1, -1).split(delimiter).map(escape).join(' ');
            return !utilities.trim()
                ? {}
                : {
                    [`@apply ${utilities}`]: {},
                };
        },
    });
});
export default multi;
module.exports = multi;
