/**
 * imports the function we made in 0
 */
import ClassRoom from './0-classroom';

export default function initializeRooms() {
  /**
   * initialiseRooms - returns new classrooms
   */
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
