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

[[VALID]] type Boolean
[[EMAIL]] type String, Is an Empty String when Login credentials where false.  
[[USERNAME]] type String, Is an Empty String when Login credentials where false.  
[[SESSIONKEY]] type String, Is an Empty String when Login credentials where false.  
  
```JSON
{   
    "type": "LOGIN",  
    "data": {  
        "valid": "[[VALID]]",
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
        "sessionkey": "[[SESSIONKEY]]"
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

#### LOGOUT
Client:  

  
```JSON
{   
    "type": "LOGOUT",  
    "data": {}  
}
```

Server:   
  
```JSON
{   
    "type": "LOGOUT",  
    "data": {}  
}
```
  
  
#### DOES_EMAIL_EXIST
Client:  
  
[[EMAIL]] type String
  
```JSON
{   
    "type": "DOES_EMAIL_EXIST",  
    "data": {
      "email": "[[EMAIL]]"
    }  
}
```

Server:  
  
[[EMAIL]] type String  
[[EXISTS]] type Boolean, is True when Exists  
  
```JSON  
{   
    "type": "DOES_EMAIL_EXIST",  
    "data": {
      "email": "[[EMAIL]]",
      "exists": "[[EXISTS]]"
    }  
}
```  
  
  
#### DOES_USERNAME_EXIST  
Client:  
  
[[USERNAME]] type String
  
```JSON  
{   
    "type": "DOES_USERNAME_EXIST",  
    "data": {
      "username": "[[USERNAME]]"
    }  
}
```  
  
Server:  
  
[[USERNAME]] type String  
[[EXISTS]] type Boolean, is True when Exists  
  
```JSON  
{   
    "type": "DOES_USERNAME_EXIST",  
    "data": {
      "username": "[[USERNAME]]",
      "exists": "[[EXISTS]]"
    }  
}
```  
  
  
#### MULTIJ_GET_COLLECTIONS  
Client:  
  
```JSON  
{   
    "type": "MULTIJ_GET_COLLECTIONS",  
    "data": {}  
}
```  
  
Server:  
  
[[COLLECTION_ID]] type number  
[[COLLECTION_NAME]] type string
  
```JSON  
{   
    "type": "MULTIJ_GET_COLLECTIONS",  
    "data": {
      "[[COLLECTION_ID]]": "[[COLLECTION_NAME]]"
    }  
}
```  
  
  
#### MULTIJ_JOIN  
Client:  
  
[[COLLECTION_ID]] type number, id of Collection
  
```JSON  
{   
    "type": "MULTIJ_JOIN",  
    "data": {
      "collection": "[[COLLECTION_ID]]"
    }  
}
```  
  
Server:  
  
[[QUESTION_ID]] type number  
[[QUESTION]] type string  
[[ANSWER_ID]] type number  
[[ANSWER]] type string  
  
```JSON  
{   
    "type": "MULTIJ_JOIN",  
    "data": {
      "questions": {
        [[QUESTION_ID]] : {
            "question": [[QUESTION]],
            "answers": {
                "[[ANSWER_ID]]": "[[ANSWER]]"
            }
        }
      }
    }  
}
```  
  
  
#### MULTIJ_ANSWER_QUESTION
Client:  
  
[[QUESTION_ID]] type number
[[ANSWER_ID]] type number
  
```JSON  
{   
    "type": "MULTIJ_ANSWER_QUESTION",  
    "data": {
      "questionid": "[[QUESTION_ID]]",
      "answerid": "[[ANSWER_ID]]"
    }  
}
```  
  
  
#### MULTIJ_QUIT  
Client:  

  
```JSON  
{   
    "type": "MULTIJ_QUIT",  
    "data": { }  
}
```  
  
Server:  

```JSON  
{   
    "type": "MULTIJ_QUIT",  
    "data": { }  
}
```  
  
  
#### MULTIJ_FINISH  
  
Server:  
  
[[POINTS]] type number,
[[YOUR_POINTS]] type number,
[[TIME]] type number, in seconds
  
```JSON  
{   
    "type": "MULTIJ_QUIT",  
    "data": {
        "points": [[POINTS]],
        "yourpoints": [[YOUR_POINTS]],
        "time": [[TIME]]
    }  
}
```  
  
  