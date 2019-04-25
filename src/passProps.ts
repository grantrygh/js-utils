const passThroughProps = [
    'refCallback',
    'onMouseOver',
    'onMouseEnter',
    'onMouseLeave',
    'onKeyPress',
    'className',
    'onClick',
    'required',
    'style',
    'id',
];

export function passProps(props: any, opts?: any) {
    const { include = [], exclude = [] } = opts || {};
    const filteredProps = {};

    for (const prop in props) {
        if (
            (passThroughProps.indexOf(prop) > -1 || prop.indexOf('data-') === 0 || include.indexOf(prop) > -1) &&
            exclude.indexOf(prop) === -1
        ) {
            filteredProps[prop] = props[prop];
        }
    }

    return filteredProps;
}
