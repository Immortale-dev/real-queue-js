# Real Queue JS
This package represents fifo **Queue** data structure. Provides basic queue functionality. 
The reason of this library to exists is poor js array *shift* method performance. If you need to remove a lot of items from the top of the array, for best experience use Queue instead. 
You can find performance comparison in the [performance](#performance) section.

## Requirements
- NodeJS: **13.2+**
- NPM: **6.13+**

## Install
```bash
npm install real-queue
```

## Docs
Provides default fifo queue functionality.

### constructor()
Creates an **Queue** instance. Receives no parameters. 

### push(data: any): void
Pushes **data** to the end of the queue. 

### pop(): void
Removes next item from the queue

Throws an error if there are no items in the queue.

### front(): any
Returns next (first) item in the queue.

Throws an error if there are no items in the queue.

### back(): any
Returns last item in the queue

Throws an error if there are no items in the queue.

### size(): number
Returns number of elements in the queue

### empty(): boolean
Returns **true** if the queue is empty and **false** otherwise.

## Examples
```javascript
const q = new Queue();
for(let i=0;i<10;i++) {
	q.push(i);
}
while(!q.empty()){
	console.log(q.front()); // 0 1 2...
	q.pop();
}
```

## Performance

Running next script

```javascript
import {Queue} from 'real-queue'

// Time for push to js array
let t = Date.now();
const arr = [];
for(let i=0;i<100000;i++){
	arr.push(i);
}
console.log('Array push', Date.now()-t);

// Time for shift from js array
t = Date.now();
for(let i=0;i<100000;i++){
	arr.shift();
}
console.log('Array shift', Date.now()-t);

// Time for push to Queue
t = Date.now();
const q = new Queue();
for(let i=0;i<100000;i++){
	q.push(i);
}
console.log('Queue push', Date.now()-t);

// Time for pop from Queue
t = Date.now();
for(let i=0;i<100000;i++){
	q.pop();
}
console.log('Queue pop', Date.now()-t);
```

gives the next results:

```
Array push 8
Array shift 853
Queue push 16
Queue pop 6
```

It takes almost a second for shifting 100`000 items from array, and just a 6ms to remove items from Queue!

## License
MIT

Have fun!
