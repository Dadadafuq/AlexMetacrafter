/*
Assessment Requirements
Create a variable that can hold a number of NFT's. What type of variable might this be?
Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
The metadata values will be passed to the function as parameters. When the NFT is ready, 
you will store it in the variable you created in step 1
Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.


class NFT {
    constructor(name, description) {
        this.name = name,
        this.description = description
    }
  }

  const arrayofNFT = [];

function mintNFT (name, description) {
    const mintedNFT = new NFT(name, description);
    arrayofNFT.push(mintedNFT);
   }

   // create a "loop" that will go through an "array" of NFT's
   // and print their metadata with console.log()
   function listNFTs () {

    arrayofNFT.forEach(elem => {
        console.log("Name: " + elem.name + ", Description: "+ elem.description);
    });

   }

   // print the total number of NFTs we have minted to the console
   function getTotalSupply() {
    console.log("Total Supply: " + arrayofNFT.length + " NFT/s");
   }

   // call your functions below this line
   mintNFT("White Kitty", "a white cat");
   mintNFT("Black Kitty", "a black cat");
   mintNFT("Gray Kitty", "a gray cat");
   listNFTs();
   getTotalSupply();