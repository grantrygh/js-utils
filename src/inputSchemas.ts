import { string } from 'yup';

export default {
    username: string().matches(/^[\w -]+$/, 'Only numbers, alphabets, spaces and hyphens are allowed.'),

    email: string().email('Must be a valid e-mail address'),

    email_edu: string().email('Must be a valid e-mail address'),

    url: string().url('Must be a valid URL'),

    password: string().min(8, 'Must be at least 8 characters long'),
};
