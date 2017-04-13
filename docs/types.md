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
        sucsess: [[BOOLEN]] //True if Sucsess
    }  
}
```
