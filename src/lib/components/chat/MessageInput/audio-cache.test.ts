import { describe, expect, it } from 'vitest';

import { cacheAudioResult } from './audio-cache';

describe('cacheAudioResult', () => {
	it('marks failed audio as resolved so the monitor does not retry it forever', () => {
		const cache = new Map();

		cacheAudioResult(cache, 'TTS content', null);

		expect(cache.has('TTS content')).toBe(true);
		expect(cache.get('TTS content')).toBeNull();
	});
});
