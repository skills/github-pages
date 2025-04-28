import { useState } from 'react';

export default function ContainerLoadingApp() {
  // Container dimensions in cm (internal) - Length × Width × Height
  const containerTypes = {
    "20ft": { length: 589, width: 235, height: 239 },
    "40ft": { length: 1203, width: 235, height: 239 },
  };

  const [containerType, setContainerType] = useState("20ft");
  const [allowStacking, setAllowStacking] = useState(false);
  const [pallets, setPallets] = useState([]);
  const [newPallet, setNewPallet] = useState({ length: 120, width: 100, height: 150 });
  const [results, setResults] = useState(null);

  // Add a new pallet to the list
  const addPallet = () => {
    if (newPallet.length > 0 && newPallet.width > 0 && newPallet.height > 0) {
      setPallets([...pallets, { ...newPallet, id: Date.now() }]);
      setNewPallet({ length: 120, width: 100, height: 150 }); // Reset to default values
    }
  };

  // Remove a pallet from the list
  const removePallet = (id) => {
    setPallets(pallets.filter(pallet => pallet.id !== id));
  };

  // Calculate if pallets fit in the container
  const calculateFit = () => {
    if (pallets.length === 0) {
      alert("Please add at least one pallet");
      return;
    }

    const container = containerTypes[containerType];
    let fittingPallets = [];
    let nonFittingPallets = [];

    // Simple bin packing algorithm
    // This is a basic approach and could be improved with more sophisticated algorithms
    const containerVolume = container.length * container.width * container.height;
    
    // Sort pallets by volume (largest first) for better packing
    const sortedPallets = [...pallets].sort((a, b) => {
      const volumeA = a.length * a.width * a.height;
      const volumeB = b.length * b.width * b.height;
      return volumeB - volumeA;
    });

    // Track container space
    let remainingSpace = {
      length: container.length,
      width: container.width,
      height: container.height
    };

    // Track used volume
    let usedVolume = 0;

    // Check each pallet
    sortedPallets.forEach(pallet => {
      const palletVolume = pallet.length * pallet.width * pallet.height;
      
      // Check if pallet dimensions fit in container
      if (pallet.length <= container.length && 
          pallet.width <= container.width && 
          pallet.height <= (allowStacking ? container.height : pallet.height)) {
        
        // Simple check if there's enough volume left
        if (usedVolume + palletVolume <= containerVolume) {
          // This is simplified - in real bin packing, we'd need to track actual 3D space
          fittingPallets.push(pallet);
          usedVolume += palletVolume;
        } else {
          nonFittingPallets.push(pallet);
        }
      } else {
        // Pallet is too large for container dimensions
        nonFittingPallets.push(pallet);
      }
    });

    setResults({
      fittingPallets,
      nonFittingPallets,
      containerVolume,
      usedVolume,
      utilizationPercentage: ((usedVolume / containerVolume) * 100).toFixed(2)
    });
  };

  return (
    <div className="mx-auto max-w-4xl p-4 bg-gray-50">
      <h1 className="text-2xl font-bold mb-4 text-center">Container Loading Calculator</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Container Settings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Container Type</label>
            <select 
              className="w-full p-2 border border-gray-300 rounded-md"
              value={containerType}
              onChange={(e) => setContainerType(e.target.value)}
            >
              <option value="20ft">20ft Standard Container</option>
              <option value="40ft">40ft Standard Container</option>
            </select>
            <div className="text-sm text-gray-500 mt-1">
              {containerType === "20ft" ? 
                "Internal: 589cm × 235cm × 239cm (L×W×H)" : 
                "Internal: 1203cm × 235cm × 239cm (L×W×H)"}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Stacking Options</label>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="allowStacking"
                checked={allowStacking}
                onChange={() => setAllowStacking(!allowStacking)}
                className="h-4 w-4 text-blue-600"
              />
              <label htmlFor="allowStacking" className="ml-2 text-gray-700">
                Allow pallet stacking
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Add Pallets</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Length (cm)</label>
            <input 
              type="number" 
              className="w-full p-2 border border-gray-300 rounded-md"
              value={newPallet.length}
              onChange={(e) => setNewPallet({...newPallet, length: parseInt(e.target.value) || 0})}
              min="1"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Width (cm)</label>
            <input 
              type="number" 
              className="w-full p-2 border border-gray-300 rounded-md"
              value={newPallet.width}
              onChange={(e) => setNewPallet({...newPallet, width: parseInt(e.target.value) || 0})}
              min="1"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
            <input 
              type="number" 
              className="w-full p-2 border border-gray-300 rounded-md"
              value={newPallet.height}
              onChange={(e) => setNewPallet({...newPallet, height: parseInt(e.target.value) || 0})}
              min="1"
            />
          </div>
          
          <div className="flex items-end">
            <button 
              onClick={addPallet}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Add Pallet
            </button>
          </div>
        </div>
      </div>

      {pallets.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Pallet List ({pallets.length})</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Length (cm)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Width (cm)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Height (cm)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume (cm³)</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pallets.map((pallet, index) => (
                  <tr key={pallet.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pallet.length}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pallet.width}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{pallet.height}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {pallet.length * pallet.width * pallet.height}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button 
                        onClick={() => removePallet(pallet.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 flex justify-center">
            <button 
              onClick={calculateFit}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md font-medium"
            >
              Calculate Container Loading
            </button>
          </div>
        </div>
      )}

      {results && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Loading Results</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-4 rounded-md border border-green-200">
              <h3 className="text-lg font-medium text-green-800 mb-2">
                Fitting Pallets: {results.fittingPallets.length}
              </h3>
              <p className="text-green-700">
                These pallets can be successfully loaded into the {containerType} container.
              </p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-md border border-red-200">
              <h3 className="text-lg font-medium text-red-800 mb-2">
                Non-Fitting Pallets: {results.nonFittingPallets.length}
              </h3>
              <p className="text-red-700">
                These pallets cannot fit in the selected container.
              </p>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-blue-50 rounded-md border border-blue-200">
            <h3 className="text-lg font-medium text-blue-800 mb-2">Container Utilization</h3>
            <div className="flex flex-col space-y-2">
              <div>
                <span className="font-medium">Container Volume:</span> {results.containerVolume} cm³
              </div>
              <div>
                <span className="font-medium">Used Volume:</span> {results.usedVolume} cm³
              </div>
              <div>
                <span className="font-medium">Utilization:</span> {results.utilizationPercentage}%
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}