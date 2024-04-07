// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RealEstateTokenization {
    struct Property {
        string name;
        uint256 totalFractions;
        uint256 fractionPrice;
        uint256 fractionsSold;
    }

    mapping(uint256 => Property) public properties;
    mapping(uint256 => mapping(address => uint256)) public tokenBalances;
    uint256 public propertyCount;

    event PropertyMinted(uint256 indexed propertyId, string name, uint256 totalFractions, uint256 fractionPrice);
    event FractionsPurchased(uint256 indexed propertyId, address indexed buyer, uint256 amount);

    function mintProperty(string memory _name, uint256 _totalFractions, uint256 _fractionPrice) public {
        properties[propertyCount] = Property({
            name: _name,
            totalFractions: _totalFractions,
            fractionPrice: _fractionPrice,
            fractionsSold: 0
        });
        emit PropertyMinted(propertyCount, _name, _totalFractions, _fractionPrice);
        propertyCount++;
    }

    function buyFractions(uint256 _propertyId, uint256 _amount) public payable {
        Property storage property = properties[_propertyId];
        require(msg.value == property.fractionPrice * _amount, "Incorrect payment amount");
        require(property.fractionsSold + _amount <= property.totalFractions, "Insufficient fractions available");

        tokenBalances[_propertyId][msg.sender] += _amount;
        property.fractionsSold += _amount;

        emit FractionsPurchased(_propertyId, msg.sender, _amount);
    }

    function getPropertyDetails(uint256 _propertyId) public view returns (string memory, uint256, uint256, uint256) {
        Property storage property = properties[_propertyId];
        return (property.name, property.totalFractions, property.fractionPrice, property.fractionsSold);
    }

    function getTokenBalance(uint256 _propertyId, address _owner) public view returns (uint256) {
        return tokenBalances[_propertyId][_owner];
    }
}