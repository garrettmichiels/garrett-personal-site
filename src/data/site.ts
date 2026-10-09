// Loads the site's text from src/content/site.yaml. Every section is
// optional: commenting one out in the YAML hides it on the page.
import { parse } from 'yaml';
import raw from '../content/site.yaml?raw';

export type IconName = 'golf' | 'book' | 'screen' | 'code' | 'headphones';

export interface SiteContent {
  name: string;
  description?: string;
  home?: {
    roles?: string[];
    tagline?: string;
    intro?: string[];
    writing?: boolean;
    experience?: { org: string; role: string; years: string | number }[];
    resume?: string;
    more?: string;
    connect?: string;
    currently?: string;
    long_drive?: string;
  };
  more?: {
    title?: string;
    bio?: string[];
    interests?: { name: string; icon?: IconName; text?: string }[];
    elsewhere?: string;
  };
  writing?: { title?: string; intro?: string };
  not_found?: { title?: string; text?: string };
}

export const site: SiteContent = parse(raw) ?? {};

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Turns the YAML's light formatting into HTML: [text](url) links and *italics*. */
export function inline(text: string | number | undefined): string {
  if (text == null) return '';
  return escape(String(text))
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
}
