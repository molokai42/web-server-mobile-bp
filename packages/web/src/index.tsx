import { client } from "./apollo";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";
import { Routes } from "./routes";
import "./index.css";

/* ApolloProvider makes it so we can do
 GraphQL requests 
 from anywhere within our app
 */

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
