import axios from "axios";

// we can configure and export the Axios object that we will
// use to make HTTP requests to the relevant remote API through this code
export default axios.create({
    baseURL:'http://localhost:8080',
    headers: {"Content-type":"application/json" }
});

/*
we have the base URL setting, which provides the base address
of the API endpoints that our client react application will be
calling. So you'll see later on when we use Axios to call an endpoint, 
we won't need to repeat the base URL with each
HTTP request within our code, we will only need to include the
additional path information required to target a specific
endpoint. 

When we write code to make a HTTP request to the
relevant remote endpoint. This setting here is necessary.
Because during the development phase, the technology that the
remote machine is using to expose the relevant API
endpoints is called ngrok.

we need to include this setting in order for our
client HTTP requests to not be blocked by CORS (for cross origin resource
sharing). 

The relevant web API is running in a different
domain, or origin, that cause may block our access to the end
point. The server code has included settings in order to
overcome the restrictions imposed by CORS. 

And we are including this setting in the
HTTP headers of our requests from the client, so that we can
overcome the restrictions imposed by CORS ie, so that we
are able to access the resources made available through the
relevant API endpoints.

*/