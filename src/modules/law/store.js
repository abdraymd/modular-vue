import { defineStore } from 'pinia';

const COUNT_KEY = 'count';

export const useStoreLaw = defineStore('law', {
	state: () => ({
		count: +localStorage.getItem(COUNT_KEY) || 0
	}),
	actions: {
		increment() {
			this.count++;
			localStorage.setItem(COUNT_KEY, this.count);
		}
	}
});
