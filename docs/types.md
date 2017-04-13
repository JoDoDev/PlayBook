# PlayBook Types

#### Defaults
When there is nothing special in the error object  
it doesn't need to be written.  

Client:  
```JSON
{   
    type: [[TYPE]],  
    data: { [[DATA]] }  
}
```  

Server:  
```JSON
{   
    "type": "[[TYPE]]",  
    "data": "[[DATA]]" // musst be an Object
}
```

Error:
```JSON
{   
    "type": "[[TYPE]] + _ERROR",  // Example: "LOGIN_ERROR"
    "data": "[[DATA]]", // musst be an Object
    "cause": "[[CAUSE]]" // Simple cause
}
```


#### LOGIN
Client:
```JSON
{   
    "type": "LOGIN",  
    "data": {  
        "username": "[[USERNAME]]",  
        "password": "[[PASSWORD]]"  
    }  
}
```

Server:
```JSON
{   
    "type": "LOGIN",  
    "data": {  
        "success": "[[BOOLEN]]", //True if Sucsess
        "sessionKey": "[[SESSIONKEY]]" // Empty string if success False
    }  
}
```

#### REGISTER
Client:
```JSON
{   
    "type": "REGISTER",  
    "data": {
        "email": "[[EMAIL]]",
        "username": "[[USERNAME]]",
        "password": "[[PASSWORD]]"  
    }  
}
```

Server:
```JSON
{   
    "type": "REGISTER",  
    "data": {  
        "success": "[[BOOLEN]]",  //True if Sucsess 
        "sessionKey": "[[SESSIONKEY]]" // Empty string if success False
    }  
}
```