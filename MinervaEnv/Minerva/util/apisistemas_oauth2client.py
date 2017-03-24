"""
A simple OAuth 2 Client.

For more details about what was needed to build this script, check out APISistemas doc:
https://api.ufrn.br/

Thanks to who did this OAuth Client original code:
@ymotongpoo (who did it in Python, basead in a Java code): https://gist.github.com/ymotongpoo/1907281
@shin1ogawa (who did it in Java): https://gist.github.com/shin1ogawa/1899391
I did a lot of modifications, but I had no idea from where to begin, and the codes above helped me so much.
"""

import requests
import json

#from urllib3 import urlencode

import logging
from . import keyring


# try to get security keys to access APISistemas
sinfo_api_dict = keyring.get(keyring.SINFO_API)

# security data
CLIENT_ID     = sinfo_api_dict['client-id']
CLIENT_SECRET = sinfo_api_dict['client-secret']

# important URLs for APISistemas
API_URL_ROOT           = 'http://apitestes.info.ufrn.br/' # API root (it's a test security link for now)
AUTHORIZATION_ENDPOINT = API_URL_ROOT + 'authz-server/oauth/authorize' # auth
TOKEN_ENDPOINT         = API_URL_ROOT + 'authz-server/oauth/token' # token

# other URLs for some available services
URL_SERVICES = {
    'ensino'        : API_URL_ROOT + 'ensino-services/services/',
    'usuario'       : API_URL_ROOT + 'usuario-services/services/', # deprecated
    'stricto-sensu' : API_URL_ROOT + 'stricto-sensu-services/services/',
    'docente'       : API_URL_ROOT + 'docente-services/services/',
}

# post graduation numerical codes from SIGAA(.ufrn.br) database
SIGAA_PROGRAM_CODES = {
    'PPGP': '1672'
}

# local variables
access_token = ""



def hasClientCredentials():
    """
    Return True if credentials retrieving went ok, 
    and False if they're None or raised an Excepton.
    """
    return (CLIENT_ID is not None) and (CLIENT_SECRET is not None)



def gen_acess_token():
    """
    Retrieving access_token and refresh_token from Token API.
    Return True if the data string (the token) could be successfuly retrieved
    and has been stored in the local variable, 
    and False if it could not be done.
    """
    
    if not hasClientCredentials():
        return False
    
    access_token_request = {
        'client_id'     : CLIENT_ID,
        'client_secret' : CLIENT_SECRET,
        'grant_type'    : 'client_credentials',
    }
    #content_length=len(urlencode(access_token_req))
    #access_token_request['content-length'] = str(content_length)

    #full_return = requests.post(TOKEN_ENDPOINT, data=access_token_request)
    full_return = requests.post(TOKEN_ENDPOINT+'?client_id='+CLIENT_ID+'&client_secret'+CLIENT_SECRET+'&grant_type=client_credentials')
    #json_data = json.loads(full_return.text)
    
    access_token = type(full_return)
    return True

