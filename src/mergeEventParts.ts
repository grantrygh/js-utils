interface mergeEventPartsArgs {
    partId: string;
    parts: Array<any>;
    MERGEABLE_FIELDS: Array<string>;
    JSON_FIELDS: Array<string>;
}

export default function mergeEventParts({ partId, parts, MERGEABLE_FIELDS, JSON_FIELDS }: mergeEventPartsArgs): Object {
    let mergedData: any = {};

    if (parts.length) {
        mergedData = parts.find(part => part.id === partId);
        const mergedTree = {};

        parts.forEach(part => {
            const partMergableData = {};

            MERGEABLE_FIELDS.forEach(mergableField => {
                // field exists in parts
                if (mergableField in parts) {
                    // is a json field
                    if (JSON_FIELDS[mergableField]) {
                        if (!mergedData[mergableField]) {
                            partMergableData[mergableField] = part[mergableField];
                        } else {
                            partMergableData[mergableField] = Object.assign(
                                {},
                                mergedData[mergableField],
                                part[mergableField]
                            );
                        }
                    } else {
                        partMergableData[mergableField] = part[mergableField];
                    }
                }
            });

            mergedData = Object.assign({}, mergedData, partMergableData);
            mergedTree[part.type] = part.id;
        });

        mergedData.event_part_tree = mergedTree;
    }

    return mergedData;
}
