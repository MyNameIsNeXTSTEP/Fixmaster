# Interactors
The API interaction with FIXMASTER backend

Configureations for requests are in … file
API swagger - http://79.174.92.110:8000/swagger

Use sample:
```javascript
import BaseHttpRequest from 'Interactors/BaseHttpRequest';
import { EHttpRequestMethods } from 'Interactors/types';

const url = new URL(`http://${process.env.FIXMASTER_API_URL}`);
const businesses = new BaseHttpRequest(url).send({
    path: '/api/business',
    method: EHttpRequestMethods.GET,
    headers: {
        'Content-type': 'application/json', // or any other headers that's needed
    }
});
```