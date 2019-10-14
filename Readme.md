# UWP sample

This is a sample project to reproduce this bug: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/23611760/

- install http-server with npm
- run http-server in UWP-content to serve it at http://localhost:8080
- run the UWP-shell Visual Studio project
- in the app, open the new window, close it and re-open it
- Result WWAHost.exe crashes:

Error:
```
Unhandled exception at 0x00007FF69C37210A in WWAHost.exe: 0xC0000005: Access violation reading location 0x0000000000000000.
```

The crash occurs in WWAHost.exe version 10.0.18362.1.  
The crash doesn’t occur in version 10.0.17134.799.