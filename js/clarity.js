import Clarity from 'https://esm.sh/@microsoft/clarity';

// Initialize Clarity
// Replace "yourProjectId" with your actual Clarity Project ID from Settings > Overview
const projectId = "uf8zy7050o";

if (projectId) {
    Clarity.init(projectId);
    console.log("Microsoft Clarity initialized with ID:", projectId);
}

// Export Clarity for usage in other modules if needed
window.Clarity = Clarity;
export default Clarity;
