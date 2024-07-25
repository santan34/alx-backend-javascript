export default function appendToEachArrayValue(array, appendString) {
    const newArray = []
    for (let value of array) {
      const string = `${appendString}${value}`;
      newArray.push(string);
    }
  
    return newArray;
  }