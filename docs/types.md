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

[[EMAIL]] type String, Is an Empty String when Login credentials where false.  
[[USERNAME]] type String, Is an Empty String when Login credentials where false.  
[[SESSIONKEY]] type String, Is an Empty String when Login credentials where false.  
  
```JSON
{   
    "type": "LOGIN",  
    "data": {  
        "email": "[[EMAIL]]",
        "username": "[[USERNAME]]",
        "sessionKey": "[[SESSIONKEY]]"
    }  
}
```

Server Error:  
  
[[USERNAME]] type string, Is the username the user wanted to login. can be empty string if object is has wrong properties.   
[[EMAIL]] type string, Is the email the user wanted to login. can be empty string if object is has wrong properties.  
[[CAUSE]] type string   

```JSON
{   
    "type": "REGISTER_ERROR",
    "data": {
      "username": "[[USERNAME]]"
    },
    "cause": "[[CAUSE]]"
}
```

#### REGISTER  
  
Client:  

[[EMAIL]] type string  
[[USERNAME]] type string  
[[PASSWORD]] type string  
  
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
[[EMAIL]] type String, Is an Empty String when Registration failed.  
[[USERNAME]] type String, Is an Empty String when Registration failed.  
[[SESSIONKEY]] type String, Is an Empty String when Registration failed.  
[[REASON]] type String, Is an Empty String when Registration went the right way.  

```JSON
{   
    "type": "REGISTER",  
    "data": {  
        "email": "[[EMAIL]]",
        "username": "[[USERNAME]]",
        "sessionKey": "[[SESSIONKEY]]"
    }  
}
```  

Server Error:  
  
[[USERNAME]] type string, Is the username the user wanted to register. can be empty string if object is has wrong properties.  
[[EMAIL]] type string, Is the email the user wanted to register. can be empty string if object is has wrong properties.  
[[CAUSE]] type string   
  
```JSON
{   
    "type": "REGISTER_ERROR",
    "data": {
      "username": "[[USERNAME]]",
      "email": "[[EMAIL]]"
    },
    "cause": "[[CAUSE]]"
}
```