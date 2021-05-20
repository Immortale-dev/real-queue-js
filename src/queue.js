import {Node} from './node';

/** Class represents basic queue functionality. */
export class Queue {
	
	/**
	 * Creates the Queue instance
	 * 
	 * @constructor 
	 */
	constructor() {

		/** Reference to the first Node in queue. */
		this._root = null;

		/** Reference to the last Node in queue. */
		this._last = null;

		/** keep track of size of trie */
		this._size = 0;
	}

	/**
	 * Returns the length of the queue.
	 * 
	 * @return {number}
	 */
	size() {
		return this._size;
	}
	
	/**
	 * Checks whatever the queue is empty.
	 * 
	 * @return {boolean}
	 */
	empty() {
		return !this._root;
	}
	
	/**
	 * Returns next element in the queue.
	 * 
	 * @return {any}
	 * @throw if the queue is empty
	 */
	front() {
		if(this.empty()) throw new Error(ERRORS.EMPTY);
		
		return this._root.data;
	}
	
	/**
	 * Returns last element in the queue.
	 * 
	 * @return {any}
	 * @throw if there queue is empty
	 */
	back() {
		if(this.empty()) throw new Error(ERRORS.EMPTY);
		
		return this._last.data;
	}
	
	/**
	 * Inserts item to the queue.
	 */
	push(data) {
		const newNode = new Node(data);
		if(this.empty()) {
			this._root = newNode;
			this._last = newNode;
		} else {
			this._last.next = newNode;
			this._last = newNode;
		}
		++this._size;
	}
	
	/**
	 * Removes next item from the queue.
	 * 
	 * @throw if the queue is empty
	 */
	pop() {
		if(this.empty()) throw new Error(ERRORS.EMPTY);
		
		this._root = this._root.next;
		
		--this._size;
		
		if(!this._root) {
			this._last = null;
		}
	}
}

const ERRORS = {
	EMPTY: 'The Queue is empty'
}
