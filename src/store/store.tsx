import { create } from "zustand";

interface AppState {
  numbersArray: number[];
  namesArray: string[];
  setNumbersArray: (numbers: number[]) => void;
  setNamesArray: (names: string[]) => void;
}

// export const useAppStore = create<AppState>((set) => ({
//   numbersArray: [], // Initial empty array
//   namesArray: [], // Initial empty array
//   setNumbersArray: (numbers) => set({ numbersArray: numbers }),
//   setNamesArray: (names) => set({ namesArray: names }),
// }));





export const useAppStore = create<AppState>((set) => {

    const presetNumbers = [25, 42, 31, 100, 8, 23, 9000];


    // Get the stored values from localStorage or use default empty arrays
    const savedNumbersArray = JSON.parse(localStorage.getItem('numbersArray') || JSON.stringify(presetNumbers));
    const savedNamesArray = JSON.parse(localStorage.getItem('namesArray') || '[]');
  
    return {
      numbersArray: savedNumbersArray, // Load from localStorage if available
      namesArray: savedNamesArray, // Load from localStorage if available
      setNumbersArray: (numbers) => {
        // Update the state and save to localStorage
        set({ numbersArray: numbers });
        localStorage.setItem('numbersArray', JSON.stringify(numbers));
      },
      setNamesArray: (names) => {
        // Update the state and save to localStorage
        set({ namesArray: names });
        localStorage.setItem('namesArray', JSON.stringify(names));
      },
    };
  });