export enum AppScreens {
    Welcome = 'Welcome',
    Login = 'Login',
    CreatePassword = 'CreatePassword',
    CreatePhrase = 'CreatePhrase',
}

export type AuthStackParamList = {
    Login: undefined;
    CreatePassword: undefined;
    CreatePhrase: undefined;
    Welcome: undefined;
}