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
      'Step inside the "คิดถึงคุณ" fan meet with Nichkhun ' +
      'at Lido Connect.',
    date: 'December 7, 2025',
    author: 'prove+ Events Team',
    readTime: '3 min read',
    image: '/images/events/fan-meet-event.jpg',
    tags: ['Events', 'Community', 'Nichkhun'],
    category: 'Events',
    content: `
      <h2>"คิดถึงคุณ" Comes to Life</h2>
      <p>
        The poster captures our prove+ Exclusive + Fan Meet with Nichkhun.
        It calls everyone to Lido Connect (Siam Square) on Sunday, 7 Dec 2025.
        We mirror the sky blue gradient and playful plus icons on site.
      </p>

      <h3>Poster Highlights</h3>
      <ul>
        <li>
          Signature line คิดถึง "คุณ" keeps it personal.
        </li>
        <li>
          Bold EXCLUSIVE + FAN MEET WITH NICHKHUN typography.
        </li>
        <li>
          07.12.2025 timing with the Siam Square location call out.
        </li>
        <li>
          Glossy prove+ bubble crosses guiding the stage design.
        </li>
      </ul>

      <h3>What to Expect</h3>
      <p>
        Expect curated wellness chats, acoustic sets, and signed keepsakes.
        Guided probiotic tastings echo the calm gradient in the artwork.
        Purple plus motifs throughout the hall create photo-ready zones.
      </p>

      <h3>Secure Your Spot</h3>
      <p>
        Seats are limited. Tap RSVP prompts in the events carousel to join.
        Share poster inspired looks with #provePlusFanMeet once you confirm.
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
