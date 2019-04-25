export function dedupeArray(list, identifier = 'id') {
    const deduped = [];
    const added = [];

    list.forEach(item => {
        if (!added[identifier]) {
            deduped.push(item);
            added[identifier] = true;
        }
    });

    return deduped;
}
