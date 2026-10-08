import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'writing'> & {
  num: string;
  minutes: number;
  next?: Post;
};

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });

/** Published posts, newest first. № counts up from the oldest (01). */
export async function getPosts(): Promise<Post[]> {
  const published = (await getCollection('writing', ({ data }) => !data.draft)).sort(
    (a, b) => a.data.date.valueOf() - b.data.date.valueOf()
  );
  const numbered: Post[] = published.map((p, i) => ({
    ...p,
    num: String(i + 1).padStart(2, '0'),
    minutes: Math.max(1, Math.ceil((p.body ?? '').split(/\s+/).filter(Boolean).length / 200)),
  }));
  // "Next" is the next older post; the oldest has none.
  numbered.forEach((p, i) => { p.next = numbered[i - 1]; });
  return numbered.reverse();
}
