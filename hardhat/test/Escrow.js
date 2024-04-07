const {expect} = require('chai')
const {ethers} = require('hardhat')

const token = (n) =>{
    return ethers.utils.parseUnits(n.toString(),'ether')
}

describe('Escrow',()=>{
    it('saves addresses', async()=>{

        const signers = await ethers.getSigners()
        
        const RealEstate = await ethers.getContractFactory('RealEstate')
        realEstate = await RealEstate.deploy()
    })
})