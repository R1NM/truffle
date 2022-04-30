import React, { useState,useEffect } from "react";
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "../getWeb3";

function BCtest() {
    const [storageValue, setstorageValue] = useState(0);
    const [web3, setweb3] = useState(null);
    const [accounts, setaccounts] = useState(null);
    const [contract, setcontract] = useState(null);

    useEffect(() => {
        try {
            const web3 =  getWeb3();
            // Use web3 to get the user's accounts.
            const accounts =  web3.eth.getAccounts();

            // Get the contract instance.
            const networkId =  web3.eth.net.getId();
            const deployedNetwork = SimpleStorageContract.networks[networkId];
            const instance = new web3.eth.Contract(
            SimpleStorageContract.abi,
            deployedNetwork && deployedNetwork.address,
            );

            // Set web3, accounts, and contract to the state, and then proceed with an
            // example of interacting with the contract's methods.
            setweb3(web3);
            setaccounts(accounts);
            setcontract(instance);
            runExample();
        } catch (error) {
            // Catch any errors for any of the above operations.
            alert(
            `Failed to load web3, accounts, or contract. Check console for details.`,
            );
            console.error(error);
        }
    }, [])
    
    const runExample = async () => {
    
        // Stores a given value, 5 by default.
        await contract.methods.set(5).send({ from: accounts[0] });
    
        // Get the value from the contract to prove it worked.
        const response = await contract.methods.get().call();
    
        // Update state with the result.
        setstorageValue(response);
    };


    return (
    <div>BCtest</div>
    )
}

export default BCtest