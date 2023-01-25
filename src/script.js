//Crypto setup
import { ethers } from 'ethers';
import { Network, Alchemy } from 'alchemy-sdk';
const { API_KEY } = process.env;
const settings = {
  apiKey: API_KEY,
  network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);

// адреса для примера
const ethAddressMockup = [
  '0xA626B50233F1157CE74060a8affc0855c1868466',
  '0xc2f6f3a04dfd0107afeb31219d423acab2a32821',
  '0x1b165fE4DA6bC58AB8370DDC763d367D29F50Ef0',
  '0x033edE126bc089e6a63226c669E1AD02fa5890E2',
  '0x1E136032A34092EeAFB7855061110F8433e379BA',
];
const ethAddressMockupList = document.querySelector('.mockup-list');
ethAddressMockup.map((el) => {
  ethAddressMockupList.innerHTML += `<li>${el}</li>`;
});

//проверка баланса
const buttonBalance = document.querySelector('#test-cash');
const ethAddress = document.querySelector('#eth-address');
const cashOutput = document.querySelector('#cash-output');

buttonBalance.addEventListener('click', () => {
  let eth = ethAddress.value;
  if (eth) {
    //ищем баланс и выводим
    alchemy.core
      .getBalance(eth, 'latest')
      .then((response) => balanceOutput(response));
  }

  function balanceOutput(res) {
    if (process.env.NODE_ENV !== 'production') {
      // some debug here
      console.log(res);
    }
    // c hex-числами ETH нельзя работать напрямую, потому что они за пределами возможностей языка Javascript, поэтому используется библиотека Ethers.js
    const cash = ethers.utils.formatEther(parseInt(res._hex).toString());
    cashOutput.innerHTML = `Баланс: ${cash} ETH.`;
  }
});
