const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

const escapeHtml = (text: string) =>
  text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * Renders the `[text](url)` links used in CV achievement copy as HTML anchors.
 * Only markdown syntax in use across the CV data - not a general markdown renderer.
 */
export const mdLinksToHtml = (text: string): string =>
  text.replace(LINK_PATTERN, (_match, label: string, href: string) => {
    const safeHref = escapeHtml(href);
    return `<a href="${safeHref}" class="text-accent-600 underline underline-offset-2 hover:underline-offset-4 transition-all">${escapeHtml(label)}</a>`;
  });
