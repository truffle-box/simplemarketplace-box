const SimpleMarketplace = artifacts.require("SimpleMarketplace");

const main = async (cb) => {
  try {
    const accounts = await web3.eth.getAccounts();
    const marketplace = new web3.eth.Contract(SimpleMarketplace.abi, SimpleMarketplace.address);
    await marketplace.methods.MakeOffer(50).send({ from: accounts[1] });

    console.log('Offer made 💸 Good luck!');

  } catch(err) {
    console.log('Doh! ', err.message);
  }
  cb();
}

module.exports = main;