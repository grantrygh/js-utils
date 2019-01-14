const isObject = value => value === Object(value);

// const isArray = value => Array.isArray(value);

const isArray = value => value !== null && value.constructor === Array; // faster

const isFile = value => value instanceof File;

export default function objectToFormData(body_unfiltered, $form_data?: FormData, pre?: any): FormData {
    const form_data = $form_data || new FormData();
    const body = {};

    // Filter body - remove "undefined" and "null" fields
    // appending those to FormData makes it a string
    // which is not intended
    for (const field in body_unfiltered) {
        if (body_unfiltered[field] !== undefined && body_unfiltered[field] !== null) {
            body[field] = body_unfiltered[field];
        }
    }

    Object.keys(body).forEach(prop => {
        const key = pre ? pre + '[' + prop + ']' : prop;

        if (isObject(body[prop]) && !isArray(body[prop]) && !isFile(body[prop])) {
            // field is an Object
            // recursive add fields (field[key])
            objectToFormData(body[prop], form_data, key);
        } else if (isArray(body[prop])) {
            // field is an Array
            // recursive add fields (field[])
            // form_data.append(, value);
            if (!body[prop].length) {
                // Empty array
                form_data.append(`${key}[]`, []);
            } else {
                body[prop].forEach(value => {
                    const arrayKey = key + '[]';

                    if (isObject(value) && !isFile(value)) {
                        objectToFormData(value, form_data, arrayKey);
                    } else {
                        form_data.append(arrayKey, value);
                    }
                });
            }
        } else {
            // Strings and Files
            // append normally - FormData takes care of boundries
            form_data.append(key, body[prop]);
        }
    });

    return form_data;
}
