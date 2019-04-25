import { withRouter as originalWithRouter } from 'react-router-dom';

/* This is to avoid TS errors until withRouter/decorators get fixed */
export function withRouter(Component: any): any {
    return originalWithRouter(Component);
}
