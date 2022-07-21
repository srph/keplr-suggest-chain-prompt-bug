## Bug

`experimentalSuggestChain` doesn't throw when user closes Keplr's passport prompt.

## Running

```
npm start
```

### Steps to reproduce

- Remove any _chain suggested_ on your Keplr wallet
- Logout of Keplr
- Press Connect
- Open up your console
- When Keplr's password prompt shows up, close that prompt
- Note that neither `[Suggest chain] success"` nor `[Suggest chain] success"` show up