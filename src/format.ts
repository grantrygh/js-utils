import { ordinalSuffix } from './ordinalSuffix';

type formatType = 'number' | 'ordinal';

export function format(value: number, type: formatType = 'number') {
    switch (type) {
        case 'number':
            return Intl.NumberFormat('en').format(value);
        case 'ordinal':
            return ordinalSuffix(value);
    }

    return value;
}
