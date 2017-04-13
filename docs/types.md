# PlayBook
## Types

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
