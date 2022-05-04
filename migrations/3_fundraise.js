var Fundraise = artifacts.require("./Fundraise.sol");

module.exports = function(deployer) {
  deployer.deploy(Fundraise);
};
