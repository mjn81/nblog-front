import { get, post } from './methods';

export const login = (data) => post('/accounts/auth/token/', data);

export const register = (data) => post('/accounts/register/', data);

export const getProfile = () => get('/accounts/user/');