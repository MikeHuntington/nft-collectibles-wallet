import auth from './auth.middleware'
import keyring from './keyring.middleware'

export default [
    ...auth,
    ...keyring
]