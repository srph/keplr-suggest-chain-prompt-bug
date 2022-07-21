## Bug

`experimentalSuggestChain` doesn't throw when user closes Keplr's passport prompt.

Check out [recording.mp4](recording.mp4). In the recording, you'll find that neither success nor error trigger causing the rest of the function to not be called.

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
