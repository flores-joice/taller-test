import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Router from 'next/router'

const link = createHttpLink({
    uri: '/graphql',
    credentials: 'same-origin'
  });
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });  

const redirect = () => {
    Router.push('/');
    return undefined
}

const Logout = () => {
    localStorage.clear()
    client.clearStore().then(() => {
        client.resetStore()
        redirect()
    })
}

export default Logout