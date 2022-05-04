// SPDX-License-Identifier: None

pragma solidity >=0.7.0 <0.9.0;
import "./Project.sol";
contract Donation{
    //structure


    //variable
    address owner;
    uint private totalDonation=0;

    //mapping
    mapping (Project=>uint) private donationList;


    //event
    

    //modifier
    modifier onlyOwner{
        require(msg.sender==owner,"Access Denied"); //then, excute functions
        _;
    }

    //constructor
    constructor() {
        owner=msg.sender;
    }

    //functions
    //donate
    function Donate(address _project) public payable onlyOwner{
        //requires
        require(msg.value>0,"Invalid Value");
        Project projectAddress=Project(_project);
        require(projectAddress.alive()==true,"This project is not available.");
        address reciever=projectAddress.wallet();

        donationList[projectAddress]+=msg.value;
        projectAddress.donate(msg.value);
        totalDonation+=msg.value;
        payable(reciever).transfer(msg.value);

    }

    //get Total Donation
    function getTotal() public view onlyOwner returns(uint){
        //requires
        return totalDonation;
    }

    //get each Donation
    function getDonation(address _project) public view onlyOwner returns(uint){
        Project projectAddress=Project(_project);
        return donationList[projectAddress];
    }
}
