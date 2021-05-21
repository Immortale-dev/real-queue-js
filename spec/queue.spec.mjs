import {Queue} from '../src/queue.js'

describe('Queue', () => {
	describe('Create a queue', () => {
		let q;
		
		beforeEach(() => {
			q = new Queue();
		});
		
		it('should be empty', () => {
			expect(q.empty()).toBe(true);
			expect(q.size()).toBe(0);
		});
		
		it('should throw trying to access element', () => {
			expect(() => { q.front(); }).toThrow();
			expect(() => { q.back(); }).toThrow();
		});
		
		describe('Push 3 items', () => {
			beforeEach(() => {
				q.push(1);
				q.push(2);
				q.push(3);
			}); 
			
			it('should contain 3 items', () => {
				expect(q.size()).toBe(3);
			});
			
			it('first item should be `1`', () => {
				expect(q.front()).toBe(1);
			});
			
			it('last item should be `3`', () => {
				expect(q.back()).toBe(3);
			});
			
			describe('Remove one item', () => {
				beforeEach(() => {
					q.pop();
				});
				
				it('first item should be `2`', () => {
					expect(q.front()).toBe(2);
					expect(q.size()).toBe(2);
				});
			});
			
			describe('remove all items', () => {
				beforeEach(() => {
					while(!q.empty()) {
						q.pop();
					}
				});
				
				it('should be empty', () => {
					expect(q.empty()).toBe(true);
					expect(q.size()).toBe(0);
				});
				
				it('should throw accessing elements', () => {
					expect(() => { q.front(); }).toThrow();
					expect(() => { q.back(); }).toThrow();
				});
			})
		});
	});
});
