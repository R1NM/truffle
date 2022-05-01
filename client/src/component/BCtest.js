import React, { useState,useEffect } from "react";
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "../getWeb3";

function BCtest() {
    const [storageValue, setstorageValue] = useState(0);
    const [web3, setweb3] = useState(null);
    const [accounts, setaccounts] = useState(null);
    const [contract, setcontract] = useState(null);
    const [loaded, setloaded] = useState(false)
    

    useEffect(() => {
        const runExample= async()=>{
            if(loaded){
                console.log(web3);
                // Stores a given value, 5 by default.
                await contract.methods.set(5).send({ from: accounts[0] });
                // Get the value from the contract to prove it worked.
                const response = await contract.methods.get().call();
                setstorageValue(response);
            }
            
        }
        const getMeta = async ()=>{
            try {
                const _web3 =  await getWeb3();
                // Use web3 to get the user's accounts.
                const _accounts = await _web3.eth.getAccounts();
                // console.log(accounts);
                // Get the contract instance.
                const networkId = await _web3.eth.net.getId();
                const deployedNetwork = await SimpleStorageContract.networks[networkId];
                // console.log(SimpleStorageContract);
                const _instance = new _web3.eth.Contract(
                SimpleStorageContract.abi,
                deployedNetwork && deployedNetwork.address,
                );
                // console.log(instance);
    
                // // Set web3, accounts, and contract to the state, and then proceed with an
                // // example of interacting with the contract's methods.
                setweb3(_web3);
                setaccounts(_accounts);
                setcontract(_instance);
                setloaded(true);
            } catch (error) {
                // Catch any errors for any of the above operations.
                console.error(error);
            }
        }
        
        getMeta();
        runExample();
        

    }, [loaded]);

    
    const render=()=>{
        if(web3===null){
            return(
                <div>
                    loading...
                </div>
            )
        }else{
            return(
                <div>
                    {storageValue}
                </div>
            )
        }
        
    }


    return (
        render()
    )
}

export default BCtest