import Router from 'next/router'
//import logoutMutation from './mutation'

const redirect = () => {
    Router.push('/');
    return undefined
}

//   acredito que o app é SSR por isso
//   localStorage.clear() não fincionará
//   ainda não consegui usae mutation

const Logout = () => {
    //localStorage.clear()
    redirect()
}

export default Logout