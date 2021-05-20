/**
 * Distinguish item located inside the Queue. Contains data information
 * and reference to next item in the Queue.
 */
export class Node {
	/**
	 * @constructor
	 * @parameter data: {any} - the item you want to save it the queue
	 */
	constructor(data) {
		/** Points to the data saved in the node */
		this.data = data;
		
		/** Points to the next element in the Queue */
		this.next = null;
	}
}
