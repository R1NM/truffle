# truffle

### Based on truffle react box
1. Require react-app-rewired
```
cd client
npm install react-app-rewired
```

2. Install dependencies and run client
```
cd client
npm install
npm start
```

### Linked with Ganache
1. Download any __Ganache__(Gui or Cli) to use blockchain test network  
2. Configure with __truffle-config.js__  
3. Default develop configuration:
- Host: "127.0.0.1:7545"
- Network ID: 5777


### Deploy Smart Contract with Truffle
- compiler: 0.8.7

1. Create contract files(.sol) in __/contracts__
2. Compile & deploy contracts
```
truffle complie
truffle migrate
```
3. Deployed contracts will be built in __/client/src/contracts__

### Access Block Chain with Matamask
1. Install __Matamask__ Chrome extension  
2. Connect any account in ganache network to your matamask wallet
