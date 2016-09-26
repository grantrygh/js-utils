/*
 * A (very) simple localStorage wrapper
 * facilitates storing and retrieving objects/arrays
 */

const createStorage = storage => ({
    set: (item, data) => {
        switch (typeof data) {
        case 'object':
            // Stringify objects before storing them
            storage.setItem(item, JSON.stringify(data));
            break;
        default: storage.setItem(item, data);
        }
    },
    get: item => {
        const data = storage.getItem(item);
        try {
            return JSON.parse(data);
        } catch (err) {
            return data;
        }
    },
    remove: item => storage.removeItem(item),
});

const storage = {
    local: createStorage(localStorage),
    session: createStorage(sessionStorage),
};

export default Object.assign({}, storage, storage.local);
