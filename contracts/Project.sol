// SPDX-License-Identifier: None

pragma solidity >=0.7.0 <0.9.0;

contract Project{
    //structure
    

    //variables
    address public owner;
    uint public total;
    uint public target;
    bool public alive=false;

    //mapping
    

    //event
    

    //modifier
    modifier onlyOwner{
        require(msg.sender==owner,"Access Denied"); //then, excute functions
        _;
    }

    //constructor
    constructor(){
        owner=msg.sender;
    }

    //functions
    //start project
    function startProject(uint _target) public onlyOwner{
        //requires
        require(alive==false,"Already started project.");
        require(_target>0,"Target is too low.");
        total=0;
        target=_target;
        alive=true;
    }
    
    //end project
    function endProject() public onlyOwner{
        //requires
        require(alive==true,"Already finished project.");

        alive=!alive;
    }
    
    function donate(uint _amount) public{
        //requires
        // require(alive==true,"Finished project.");
        // require(_amount>0,"Invalid Value");

        total+=_amount;
    }

}