# Briskmed
![cover](./Briskmed/briskmed/src/assets/images/Twitter%20header%20-%201.png)
    
<p align="center">
    <a target="_blank" href="https://docs.soliditylang.org/"><img src="https://camo.githubusercontent.com/7f5dae68cf75e9fb9eb72a0209fffc19ae14175eb0073f7659ffee06b9656ac4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f536f6c69646974792d2532333336333633362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d736f6c6964697479266c6f676f436f6c6f723d7768697465"/></a>
    </p>
    <p align="center">
    This repository contains the <strong>Solidity</strong> source code written with <b>hardhat</b> framework & Frontend <strong>ReactJs</strong> Framework.
    <strong>BriskMed</strong> is Making Healthcare access, fast and effective with Healthcare Centers providing bed space availability and Specialty information  in a decentralized platform.
    </p>
    <p align="center">
    <a href="#introduction">Introduction</a> &nbsp;&bull;&nbsp;
    <a href="#usage">Usage</a> &nbsp;&bull;&nbsp;
    <a href="#documentation">Documentation</a> &nbsp;&bull;&nbsp;
    <a href="#issue">Issue?</a>
    </p>

# Introduction
This <b>smart contract</b> was written with ```solidity```, ```hardhat```, ```Pinata``` and on  ```Polygon```. It's has features such as:
- Creating of Health Center profile.
- Enabling Ratings and Review
- Ability for users to know Hospital near them with coordinates
- Becoming a volunteer for a campaign.

# Technologies Used

### Ipfs
We made use of pinata IPFS API using file storage to save profile images and return a cid key in other to store on the blockchain so I can retrieve the image at anytime for the account profile.
### Chanlink Automation
Chainlink automation is used to call the end meeting function which is to be called every 24hours I made use of the Time based trigger cron jobs on the chainlink automation interface
Here is link to the chainlink automation: https://automation.chain.link/mumbai/15126042871348539617950456361182166757342351262351933592710991110229343694907
### QuickNode
I used quicknode API to help deploy my smart contract using the Polygon Mumbai test net on the blockchain, it is reliable scalable and work across all major blockchains 


# Documentation
Multiple methods provide ways to interact with the XTELPT smart contract. Those are listed below in detail.
### 1. How to create a User profile

## Issues and What I Learnt

