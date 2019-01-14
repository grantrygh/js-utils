/* eslint-disable import/export */

declare module '*.scss' {
    const obj: { [key: string]: string };
    export default obj;
}

declare const __image__: string;

declare module '*.png' {
    export default __image__;
}

declare module '*.svg' {
    export default __image__;
}

declare module '*.jpg' {
    export default __image__;
}

declare module '*.jpeg' {
    export default __image__;
}

declare module 'react-i18next' {
    export function translate(namespaces: Array<string>): any;
    interface I18nextProviderProps {
        i18n: any;
    }
    export class I18nextProvider extends React.Component<I18nextProviderProps> {}
}

declare module 'react-redux' {
    type obj = { [key: string]: any };
    type mapStateToProps = (state: obj, props: obj) => obj;
    export function connect(mapStateToProps: mapStateToProps): any;
}

declare module 'react-router-dom' {
    export function withRouter(c: any): any;
}

type Weaken<T, K extends keyof T> = { [P in keyof T]?: P extends K ? any : T[P] };
type ComposeProps<T, K extends keyof T> = { [P in keyof T]?: T[P] };

/* eslint-disable no-unused-vars, no-use-before-define */
declare const __DEV__: boolean;
declare const __BROWSER__: boolean;
declare const __VERSION__: string;
