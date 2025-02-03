import React, { useState } from 'react';
import { useAppStore } from '../store/store'; // Import the Zustand store

export function AddNumber() {
  const [input, setInput] = useState<string>(''); // State to hold user input
  const setNumbersArray = useAppStore((state) => state.setNumbersArray);
  const globalNumbersArray = useAppStore((state) => state.numbersArray);

  // Function to handle form submission
  const handleAddNumber = (e: React.FormEvent) => {
    e.preventDefault();

    // Convert input to a number
    const number = parseInt(input);

    // Only add if it's a valid number
    if (!isNaN(number)) {
      // Add the new number to the global numbers array
      setNumbersArray([...globalNumbersArray, number]);
      setInput(''); // Clear the input field
    } else {
      alert('Please enter a valid number');
    }
  };

  return (
    <div>
      <h2>Add a New Number</h2>
      <form onSubmit={handleAddNumber}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a number"
        />
        <button type="submit">Add Number</button>
      </form>
    </div>
  );
}
