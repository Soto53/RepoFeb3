import React, { useState } from 'react';
import { useAppStore } from '../store/store';

//props: { numbersArray: number[]; nameArray: string[] }
 // const { numbersArray, nameArray } = props;

export function ArrayManipulator() {

    

  const [sortedNumbers, setSortedNumbers] = useState<number[]>([]);
  const [lengthnames, setLengthnames] = useState<number[]>([]);

  // Accessing global state from Zustand store
  const globalNumbersArray = useAppStore((state) => state.numbersArray);
  const globalNamesArray = useAppStore((state) => state.namesArray);
 // const setNumbersArray = useAppStore((state) => state.setNumbersArray);
  const setNamesArray = useAppStore((state) => state.setNamesArray);

//   const handleSetNumbers = () => {
//     setNumbersArray([25, 42, 31, 100, 8, 23, 9000]); // Update global numbers array
//   };

//   const handleSetNames = () => {
//     setNamesArray(['Bob', 'Jon', 'Dave', 'Me', 'You', 'NotSure']); // Update global names array
//   };

  function sortNum() {
    const sortedNum = [...globalNumbersArray].sort((a, b) => a - b);
    setSortedNumbers(sortedNum);
  }

//   function namesLength() {
//     const lengths = globalNamesArray.map((item) => item.length);
//     setLengthnames(lengths);
//   }

  return (
    <div>
      <button onClick={sortNum}>Click to sort numbers</button>
      {/* <button onClick={namesLength}>Click to get name lengths</button> */}
      {/* <button onClick={handleSetNumbers}>Set Numbers Globally</button> */}
      {/* <button onClick={handleSetNames}>Set Names Globally</button> */}

      <div>
        <h2>Global Numbers Array:</h2>
        <ul>
          {globalNumbersArray.length > 0 ? (
            globalNumbersArray.map((num, index) => <li key={index}>{num}</li>)
          ) : (
            <p>No numbers available</p>
          )}
        </ul>

        <h2>Sorted Numbers:</h2>
        <ul>
          {sortedNumbers.length > 0 ? (
            sortedNumbers.map((num, index) => <li key={index}>{num}</li>)
          ) : (
            <p>No sorted numbers yet</p>
          )}
        </ul>

        {/* <h2>Name Lengths:</h2>
        <ul>
          {lengthnames.length > 0 ? (
            lengthnames.map((length, index) => <li key={index}>{length}</li>)
          ) : (
            <p>No name lengths calculated yet</p>
          )}
        </ul> */}
      </div>
    </div>
  );
}
