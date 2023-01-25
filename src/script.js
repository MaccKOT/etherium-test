// адреса для примера
const ethAddressMockup = [
  '0xD0d03f101A6E31a7fc1F1b843BA0b6FD33250991',
  '0x4633084D5815637701758871610c12bFC2A384fF',
  '0x4b6f9B6920D6c919ce59c3e89d07D579490b91b3',
  '0x59314B46124ECDDe2ADD15D9f89e37096a6D66Ef',
  '0x3528CE634eC90aE57BAB14A3A2bcb69E162214d4',
  '0x67F56E93d318F1D7C59A37069f01D5ed7790Ef15',
];
const ethAddressMockupList = document.querySelector('.mockup-list');
ethAddressMockup.map((el) => {
  ethAddressMockupList.innerHTML += `<li>${el}</li>`;
});
