// Step 1: Singleton instance storage
let bankBranchInstance  = null;

// Step 2: Define the BankBranch class for managing branch information
class BankBranch {
    constructor(branchInfo) {
        // Step 3: Create new instance only if one doesn't already exist
        if (bankBranchInstance === null) {
            this.branchInfo = branchInfo; // Store branch info
            bankBranchInstance = this; // Assign the new instance to the singleton variable
        }
        // Always return the singleton instance
        return bankBranchInstance;
    }

    // Step 4: Method to retrieve branch information
    getBranchInfo() {
        return this.branchInfo; // Return the stored branch information
    }
}
// Step 5: Create two instances of BankBranch with different information
const branchA = new BankBranch({ name: 'Downtown', address: '123 Main St' });
const branchB = new BankBranch({ name: 'Uptown', address: '456 High St' });

// Verifying that both instances refer to the same object
console.log(branchA === branchB); // Output: true, proving it's a singleton

// Display branch information
console.log(branchA.getBranchInfo()); // Output: { name: 'Downtown', address: '123 Main St' }
console.log(branchB.getBranchInfo()); // Output: { name: 'Downtown', address: '123 Main St' }

// Dynamically adding an h1 element with branch info
const bodyElement = document.querySelector('body');

// Create an h1 element to display bank branch information
const heading = document.createElement('h1');
heading.textContent = `Branch Name: ${branchA.getBranchInfo().name}, Branch Address: ${branchA.getBranchInfo().address}`;

// Append the h1 element to the body
bodyElement.appendChild(heading);