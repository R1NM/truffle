// SPDX-License-Identifier: None

pragma solidity >=0.7.0 <0.9.0;
import "./Project.sol";

contract Distribution{
    //structure


    //variable
    address owner;
    Project public projectAddress;
    uint public balance;

    //mapping


    //event
    

    //modifier
    modifier onlyOwner{
        require(msg.sender==owner,"Access Denied"); //then, excute following functions
        _;
    }

    //constructor
    constructor() {
        owner=msg.sender;
    }

    //functions
    //set
    function setProject(address _project) public onlyOwner{
        projectAddress=Project(_project);
        require(projectAddress.alive()==false,"Unavailable Project: Please end the project beforehand.");
        require(projectAddress.owner()==owner,"Access Denied");
        balance=projectAddress.total();    
    }

    //distribute
    function distribute(address _reciever) public payable onlyOwner{
        //requires
        require(msg.value>0,"Invalid Value");
        require(msg.value<=balance,"Invalid Value");

        balance-=msg.value;
        payable(_reciever).transfer(msg.value);
    }

}