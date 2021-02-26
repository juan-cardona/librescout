from __future__ import print_function
import time
import meli
from meli.rest import ApiException
from pprint import pprint
# Defining the host is optional and defaults to https://api.mercadolibre.com
# See configuration.py for a list of all supported configuration parameters.
configuration = meli.Configuration(
    host="https://api.mercadolibre.com"
)


# Enter a context with an instance of the API client
with meli.ApiClient() as api_client:
    # Create an instance of the API class
    api_instance = meli.RestClientApi(api_client)
    # A resource example like items, search, category, etc.
    resource = 'sites/MLM/search?category=MLM1430'
    # Your access token.
    access_token = 'APP_USR-3249860603230326-022616-ef22fd2f3068028117261924ff6b1693-531228956'

try:
    # Resource path GET
    api_response = api_instance.resource_get(resource, access_token)

    pprint(api_response)


except ApiException as e:
    print("Exception when calling RestClientApi->resource_get: %s\n" % e)
