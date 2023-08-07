## Deploying OFT (V1)
<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Preahvihear&pause=1000&color=F71270&background=FF09A800&center=true&vCenter=true&multiline=true&width=435&lines=Layer+Zero+OFT+Deployer" alt="Typing SVG" /></a>

### Information's
Запуск смартов в  7 сетях(тестнеты):
npx hardhat deploy --network goerli --tags ExampleOFT
npx hardhat deploy --network bsc-testnet --tags ExampleOFT
npx hardhat deploy --network fuji --tags ExampleOFT
npx hardhat deploy --network mumbai --tags ExampleOFT
npx hardhat deploy --network arbitrum-goerli --tags ExampleOFT
npx hardhat deploy --network optimism-goerli --tags ExampleOFT
npx hardhat deploy --network fantom-testnet --tags ExampleOFT
npx hardhat wireAll --e testnet --config-path "./constants/oftConfig/wireUpConfig.json"

### Send OFT между сетями
```
npx hardhat --network fuji oftSend --qty 100000000000000000 --target-network mumbai
```
## Deploying OFTV2 между сетями
```
npx hardhat deploy --network goerli --tags ExampleOFTV2
npx hardhat deploy --network bsc-testnet --tags ExampleOFTV2
```
### Send OFTV2 между сетями
```
npx hardhat --network fuji oftv2Send --qty 100000000000000000 --target-network arbitrum-goerli
```
## Deploying OFTWithFee w/ после деплоя ERC20
```
npx hardhat deploy --network fuji --tags ExampleProxyOFTWithFee
npx hardhat deploy --network bsc-testnet --tags ExampleOFTWithFee
npx hardhat deploy --network arbitrum-goerli --tags ExampleOFTWithFee
```
### Send OFTV2 между сетями
```
npx hardhat --network fuji oftv2Send --qty 100000000000000000 --target-network arbitrum-goerli
```
### OFT (V1) конфигурация
```
npx hardhat setConfig --config-path "./constants/oftConfig/appConfig.json"
```

### OFTV2 конфигурация
```
npx hardhat setConfig --config-path "./constants/oftv2Config/appConfig.json"
```

### OFTWithFee конфигурация
```
npx hardhat setConfig --config-path "./constants/oftWithFeeConfig/appConfig.json"
```
