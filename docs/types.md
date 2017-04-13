# PlayBook
## Types



#### Defaults
Client ->  
```
{   
    type: [[TYPE]],  
    data: { [[DATA]] }  
}
```

Server ->  
```
{   
    type: [[TYPE]],  
    data: { [[DATA]] }  
}
```

Error ->
```
{   
    type: [[TYPE]] + "_ERROR",  // Example: "LOGIN_ERROR"
    data: { [[DATA]] },
    cause: [[CAUSE]] // Simple cause
}
```


#### LOGIN
Client ->  
```
{   
    type: "LOGIN",  
    data: {  
        username: [[USERNAME]],  
        password: [[PASSWORD]]  
    }  
}
```

Server ->  
```
{   
    type: "LOGIN",  
    data: {  
        success: [[BOOLEN]], //True if Sucsess
        sessionKey: [[SESSIONKEY]] // Empty string if False
    }  
}
```
