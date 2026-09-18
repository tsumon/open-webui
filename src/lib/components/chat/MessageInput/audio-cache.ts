export type CachedAudio = HTMLAudioElement | true | null;

export const cacheAudioResult = (
	cache: Map<string, CachedAudio>,
	content: string,
	audio: CachedAudio | undefined
) => {
	// A failed synthesis is still a resolved cache entry. This prevents the
	// playback monitor from re-queueing the same content indefinitely.
	cache.set(content, audio ?? null);
};
