export default function createInt8TypedArray(length, position, value) {
  if (position > length - 1) {
    throw new Error('Position outside range ');
  }
  const arrayBuffer = new ArrayBuffer(length);
  const myArray = new Int8Array(arrayBuffer, 0, length);
  myArray[position] = value;
  return new DataView(arrayBuffer);
}
