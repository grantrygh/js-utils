/*
 * For simpler(?) getComponent syntax
 */
const routerLoader = req => (location, callback) => {
    req.then(component => {
        callback(null, component.default);
    }).catch(error => {
        console.error(error);
    });
};

export default routerLoader;
