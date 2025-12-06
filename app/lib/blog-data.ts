export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
  tags: string[];
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'exclusive-fan-meet-nichkhun',
    title: 'Exclusive + Fan Meet with Nichkhun',
    excerpt:
      'Join prove+ and Nichkhun at Lido Connect on 7 Dec for an ' +
      'intimate fan meet experience.',
    date: 'December 7, 2025',
    author: 'prove+ Events Team',
    readTime: '3 min read',
    image: '/images/events/fan-meet-event.jpg',
    tags: ['Events', 'Community', 'Nichkhun'],
    category: 'Events',
    content: `
      <h2>Experience Nichkhun Up Close</h2>
      <p>
        Sunday, 7 Dec 2025, Lido Connect (Siam Square) turns into the
        "คิดถึงคุณ" lounge where Nichkhun shares moments so every fan feels seen while enjoying
        curated probiotic pairings from prove+ specialists.
      </p>

      <h3>Reasons to Join</h3>
      <ul>
        <li>
          Limited audience circles give you closer interaction during
          meet-and-greet rotations.
        </li>
        <li>
          Wellness corners feature guided tastings, gut health coaching,
          and personalized blend recommendations.
        </li>
        <li>
          Exclusive merch bundles include signed prints and probiotic
          starter kits available only at this event.
        </li>
      </ul>

      <h3>How to Secure a Seat</h3>
      <p>
        Tap the RSVP button inside the Events carousel or visit any prove+
        retail pop-up to register before 7 Dec 2025. Confirmed guests
        receive arrival windows plus styling tips so Nichkhun can spot you
        in the crowd. Share your prep using #provePlusFanMeet to unlock
        surprise upgrades on the day.
      </p>
    `
  },
  /*
   * Archived posts (temporarily disabled):
   * - benefits-of-probiotics-for-gut-health
   * - probiotics-and-immunity
   * - science-behind-prove-plus
   * - probiotics-mental-health
   * - probiotics-for-skin
   * - lifestyle-tips-gut-health
   */
];
