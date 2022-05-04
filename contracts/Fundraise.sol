// SPDX-License-Identifier: None

pragma solidity >=0.7.0 <0.9.0;
import "./Project.sol";

contract Fundraise{
    //structure
    

    //variables
    address public owner;

    //mapping
    mapping(Project=>bool) public projectList;

    //event
    

    //modifier
    modifier onlyOwner{
        require(msg.sender==owner,"Access Denied2"); //then, excute functions
        _;
    }

    //constructor
    constructor(){
        owner=msg.sender;
    }

    //functions
    //start project
    function makeProject(uint _target) public  onlyOwner returns(Project){
        //requires


        Project newProject = new Project(msg.sender);
        newProject.startProject(_target);
        projectList[newProject]=true;
        return newProject;
    }
    
    //end project
    function endProject(Project _project) public onlyOwner{
        Project projectAddress=Project(_project);

        //requires
        require(projectList[projectAddress]==true,"Invalid Function");
        projectAddress.endProject();
        projectList[projectAddress]=false;
    }
    
    //distribution
    function distribute(Project _project,address _reciever) public payable onlyOwner{
        //requires
        require(msg.value>0,"Invalid Value");

        Project projectAddress=Project(_project);
        require(msg.value<=projectAddress.total(),"Invalid Value");

        payable(_reciever).transfer(msg.value);
        projectAddress.distribute(msg.value);
    }
}