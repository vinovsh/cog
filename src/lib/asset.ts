/**
 * Prefixes a /public path with the site's base path (e.g. "/cog" on GitHub
 * Pages). next/link does this automatically, but next/image `src` does not.
 */
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
