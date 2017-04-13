# PlayBook Types

#### Defaults
When there is nothing special in the error object  
it doesn't need to be written.  

Client:  
```
{   
    type: [[TYPE]],  
    data: { [[DATA]] }  
}
```  

Server:  
```
{   
    type: [[TYPE]],  
    data: { [[DATA]] }  
}
```

Error:
```
{   
    type: [[TYPE]] + "_ERROR",  // Example: "LOGIN_ERROR"
    data: { [[DATA]] },
    cause: [[CAUSE]] // Simple cause
}
```


#### LOGIN
Client:
```
{   
    type: "LOGIN",  
    data: {  
        username: [[USERNAME]],  
        password: [[PASSWORD]]  
    }  
}
```

Server:
```
{   
    type: "LOGIN",  
    data: {  
        success: [[BOOLEN]], //True if Sucsess
        sessionKey: [[SESSIONKEY]] // Empty string if success False
    }  
}
```

#### REGISTER
Client:
```
{   
    type: "REGISTER",  
    data: {
        email: [[EMAIL]],
        username: [[USERNAME]],
        password: [[PASSWORD]]  
    }  
}
```

Server:
```
{   
    type: "REGISTER",  
    data: {  
        success: [[BOOLEN]], //True if Sucsess
        sessionKey: [[SESSIONKEY]] // Empty string if success False
    }  
}
```