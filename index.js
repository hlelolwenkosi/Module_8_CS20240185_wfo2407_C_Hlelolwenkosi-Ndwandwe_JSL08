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

