import React from "react";
import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";

const httpLink = createHttpLink({
  uri: "https://fast-caverns-41450.herokuapp.com",
  // uri: "http://localhost:5000",
});

const authLink = setContext(() => {
    const token =  localStorage.getItem('AppJwtToken')
    return{
        headers:{
            Authorization:token?`Bearer ${token}`:''
        }
    }
  });

const client= new ApolloClient({
    link:authLink.concat(httpLink),
    cache:new InMemoryCache()
})


  
export default(
    <ApolloProvider client={client}>
    <div>
    <app/>
    </div>
        
    </ApolloProvider>
)