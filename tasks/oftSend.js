const { BigNumber } = require("ethers");
const CHAIN_ID = require("@layerzerolabs/lz-sdk").CHAIN_ID;

module.exports = async function (taskArgs, hre) {
  const signers = await ethers.getSigners();
  const owner = signers[0];
  const toAddress = owner.address;
  const qty = BigNumber.from(taskArgs.qty);

  // Получение идентификатора удаленной цепи
  const remoteChainId = CHAIN_ID[taskArgs.targetNetwork];

  // Получение контракта ExampleOFT
  const exampleOFT = await ethers.getContract("ExampleOFT");

  // Определение параметров адаптера как null
  let adapterParams = ethers.utils.solidityPack(["uint16", "uint256"], [1, 200000])
  // Оценка комиссии с использованием параметров адаптера
  const fees = await exampleOFT.estimateSendFee(remoteChainId, toAddress, qty, false, adapterParams);
  console.log(`fees[0] (wei): ${fees[0]} / (eth): ${ethers.utils.formatEther(fees[0])}`);

  // Отправка транзакции с использованием параметров адаптера и комиссии
  const tx = await (
    await exampleOFT.sendFrom(
      owner.address,
      remoteChainId,
      toAddress,
      qty,
      owner.address,
      ethers.constants.AddressZero,
      adapterParams,
      { value: fees[0] }
    )
  ).wait();

  console.log(`✅ Сообщение отправлено [${hre.network.name}] sendTokens() в OFT @ LZ chainId[${remoteChainId}] token:[${toAddress}]`);
  console.log(` tx: ${tx.transactionHash}`);
  console.log(`* Проверьте ваш адрес [${owner.address}] на целевой цепи во вкладке транзакций ERC20!`);
};
