import ReactGA, { FieldsObject, TimingArgs, InitializeOptions, TrackerNames, EventArgs } from 'react-ga';
import { GA_ID, GA_FORCE_ENABLE } from 'config/application';

const shouldLog = GA_ID && (!__DEV__ || GA_FORCE_ENABLE);

const analytics = {
    initialize(trackingCode: string, options?: InitializeOptions) {
        if (shouldLog) ReactGA.initialize(trackingCode, options);
    },

    set(fieldsObject: FieldsObject, trackerNames?: TrackerNames) {
        if (shouldLog) ReactGA.set(fieldsObject, trackerNames);
    },
    send(fieldsObject: FieldsObject, trackerNames?: TrackerNames) {
        if (shouldLog) ReactGA.send(fieldsObject, trackerNames);
    },
    pageview(path: string, trackerNames?: TrackerNames, title?: string) {
        if (shouldLog) ReactGA.pageview(path, trackerNames);
    },
    modalview(name: string, trackerNames?: TrackerNames) {
        if (shouldLog) ReactGA.modalview(name, trackerNames);
    },
    timing(args: TimingArgs, trackerNames?: TrackerNames) {
        if (shouldLog) ReactGA.timing(args, trackerNames);
    },
    event(args: EventArgs, trackerNames?: TrackerNames) {
        if (shouldLog) ReactGA.event(args, trackerNames);
    },
    exception(fieldsObject: FieldsObject, trackerNames?: TrackerNames) {
        if (shouldLog) ReactGA.exception(fieldsObject, trackerNames);
    },
};

export default analytics;
