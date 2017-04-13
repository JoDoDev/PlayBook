# PlayBook Types

#### Defaults
When there is nothing special in the Error Object  
it does not need to be written.  

Client:  
  
[[TYPE]] type string  
[[DATA]] type object

```JSON
{   
    "type": "[[TYPE]]",  
    "data": "[[DATA]]"  
}
```

Server:  

[[TYPE]] type string  
[[DATA]] type object  

```JSON
{   
    "type": "[[TYPE]]",  
    "data": "[[DATA]]"
}
```

Error:  

[[TYPE]] type string, Example: "LOGIN_ERROR"  
[[DATA]] type object   
[[CAUSE]] type string   

```JSON
{   
    "type": "[[TYPE]] + _ERROR",
    "data": "[[DATA]]",
    "cause": "[[CAUSE]]"
}
```

## Special

#### JSON_SYNTAX_ERROR

Server:  
  
```JSON
{   
    "type": "JSON_SYNTAX_ERROR",
    "data": {},
    "cause": "Could not Transform data into Object"
}
```

## Normal   

#### LOGIN
Client:  

[[USERNAME]] type String or Number, Can also be Email   
[[PASSWORD]] type String or Number  
  
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

[[SUCCESS]] type Boolean, Is true when Login credentials where right.  
[[SESSIONKEY]] type String, Is an Empty String when Login credentials where false.

```JSON
{   
    "type": "LOGIN",  
    "data": {  
        "success": "[[SUCCESS]]",
        "sessionKey": "[[SESSIONKEY]]"
    }  
}
```

#### REGISTER  
  
[[EMAIL]] type string  
[[USERNAME]] type string  
[[PASSWORD]] type string  
  
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

[[SUCCESS]] type Boolean, Is true when Login credentials where right.  
[[SESSIONKEY]] type String, Is an Empty String when Login credentials where false.

```JSON
{   
    "type": "REGISTER",  
    "data": {  
        "success": "[[BOOLEAN]]",
        "sessionKey": "[[SESSIONKEY]]"
    }  
}
```