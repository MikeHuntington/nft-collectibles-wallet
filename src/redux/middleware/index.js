import auth from './auth.middleware'
import collectible from './collectible.middleware'
import keyring from './keyring.middleware'

export default [
    ...auth,
    ...collectible,
    ...keyring
]