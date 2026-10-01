export interface BlogPost {
  slug: string;
  title: string;
  title_th?: string;
  excerpt: string;
  excerpt_th?: string;
  content: string;
  content_th?: string;
  date: string;
  date_th?: string;
  author: string;
  image: string;
  readTime: string;
  readTime_th?: string;
  tags: string[];
  category: string;
  /** CSS object-position for cropping `image` on blog listing cards. */
  imagePosition?: string;
  /** 'magazine' renders the editorial layout in app/blog/[slug]/MagazineArticle.tsx. */
  layout?: 'standard' | 'magazine';
  /** Small label above a magazine headline; defaults to `category`. */
  kicker?: string;
  kicker_th?: string;
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
    image: '/images/events/fan-meet-event.webp',
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
  {
    slug: 'prove-plus-official-launch',
    title: 'Official Launch of Prove+ — Nichkhun & Cherreen Lead the Family, Inspiring a Healthier Lifestyle',
    title_th: 'เปิดตัว Prove+ อย่างเป็นทางการ — นิชคุณ–เชอรีน นำทีมครอบครัว ร่วมสร้างแรงบันดาลใจด้านสุขภาพ',
    excerpt: 'Prove+, a premium probiotic brand, has officially launched in Thailand with PROVE+ ALLERPRO. Nichkhun and Cherreen inspire wellness under the concept "Built on friendship, backed by science."',
    excerpt_th: 'Prove+ แบรนด์โพรไบโอติกระดับพรีเมียม เปิดตัวอย่างเป็นทางการในประเทศไทย พร้อมแนะนำผลิตภัณฑ์ใหม่ PROVE+ ALLERPRO ภายใต้แนวคิด "Built on friendship, backed by science"',
    date: 'December 9, 2025',
    date_th: '9 ธันวาคม 2025',
    author: 'prove+ Team',
    readTime: '5 min read',
    readTime_th: 'อ่าน 5 นาที',
    image: '/images/blog/prove-plus-launch/F.webp',
    tags: ['Events', 'Product Launch', 'ALLERPRO', 'Nichkhun'],
    category: 'Events',
    content: `
      <div style="margin-bottom: 2.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563;">
          Prove+, a premium probiotic brand, has officially launched in Thailand, introducing its latest product <strong>PROVE+ ALLERPRO</strong>, following the success of <strong>PROVE+ FLOWPRO</strong>. The launch event was held under the concept:
        </p>
        <blockquote style="border-left: 4px solid #5d6fcd; padding: 1.25rem 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); border-radius: 0 12px 12px 0; font-style: italic; font-size: 1.1rem; color: #4456a6;">
          "STANDARD x UMC: Built on friendship, backed by science."
        </blockquote>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563;">
          This event not only marked the introduction of a new product, but also symbolized over <strong>25 years of strong collaboration</strong> between Thai and Taiwanese partners — growing from business partners into a true family.
        </p>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">From Partnership to Global Trust</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 1.5rem;">
          The collaboration between the two organizations has been driven by a shared goal: to enhance quality of life through <strong>Preventive Wellness</strong>.
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 2rem;">
          All Prove+ products are developed under international standards, supported by a team of <strong>over 200 experts</strong>, advanced technology, and comprehensive research — ensuring both quality and effectiveness.
        </p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
          <picture><source srcset="/images/blog/prove-plus-launch/A1.webp" type="image/webp" /><img src="/images/blog/prove-plus-launch/A1.jpg" alt="Prove+ booth at launch event" style="width: 100%; border-radius: 16px; object-fit: cover; aspect-ratio: 1/1;" /></picture>
          <picture><source srcset="/images/blog/prove-plus-launch/A2.webp" type="image/webp" /><img src="/images/blog/prove-plus-launch/A2.jpg" alt="Fan messages at the event" style="width: 100%; border-radius: 16px; object-fit: cover; aspect-ratio: 1/1;" /></picture>
        </div>
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af; margin-top: 0.5rem;">STANDARD x Union Medical (Thailand) — From Partners to Family</p>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">PROVE+ ALLERPRO: Everyday Support for Allergy Care</h2>
        <div style="background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f0f9ff 100%); border: 1px solid #d1fae5; border-radius: 20px; padding: 2rem; margin-bottom: 2rem;">
          <p style="font-size: 1.05rem; line-height: 1.8; color: #4b5563; margin-bottom: 1.25rem;">
            PROVE+ ALLERPRO is designed to meet the needs of modern lifestyles, offering a convenient and effective way to take care of your health:
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.25rem;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: #5d6fcd; border-radius: 50%; color: white; font-size: 0.85rem; flex-shrink: 0;">&#10003;</span>
              <span style="font-size: 1.05rem; color: #374151; font-weight: 500;">Strengthening the immune system</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: #5d6fcd; border-radius: 50%; color: white; font-size: 0.85rem; flex-shrink: 0;">&#10003;</span>
              <span style="font-size: 1.05rem; color: #374151; font-weight: 500;">Supporting allergy care</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: #5d6fcd; border-radius: 50%; color: white; font-size: 0.85rem; flex-shrink: 0;">&#10003;</span>
              <span style="font-size: 1.05rem; color: #374151; font-weight: 500;">Promoting overall well-being</span>
            </div>
          </div>
          <p style="font-size: 0.95rem; color: #6b7280; font-style: italic;">
            "Convenient, easy to take, and reliable every day."
          </p>
        </div>
        <picture><source srcset="/images/blog/prove-plus-launch/C.webp" type="image/webp" /><img src="/images/blog/prove-plus-launch/C.jpg" alt="PROVE+ ALLERPRO and FLOWPRO products" style="width: 100%; border-radius: 16px; margin-bottom: 0.5rem;" /></picture>
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af;">PROVE+ product lineup — FLOWPRO & ALLERPRO</p>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">Building on the Success of PROVE+ FLOWPRO</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 1rem;">
          Previously, Prove+ introduced its first product, <strong>PROVE+ FLOWPRO</strong>, which supports gut balance and has received positive feedback from consumers.
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563;">
          The launch of ALLERPRO marks another important step in expanding the product portfolio to better meet diverse health needs.
        </p>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">Global Standards for Consumer Confidence</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 1.5rem;">
          All Prove+ products are developed and designed by <strong>Syngen Biotech, Taiwan</strong>, a leader in biotechnology. With over <strong>30 years of experience</strong> in probiotics, combined with strict quality control processes at every stage, consumers can be confident in the safety, effectiveness, and suitability of every product.
        </p>
        <picture><source srcset="/images/blog/prove-plus-launch/B.webp" type="image/webp" /><img src="/images/blog/prove-plus-launch/B.jpg" alt="Prove+ leadership team" style="width: 100%; border-radius: 16px; margin-bottom: 0.5rem;" /></picture>
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af;">STANDARD x Union Medical (Thailand) — From Partners to Family</p>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">Inspiring Wellness Through Brand Ambassadors</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 1.5rem;">
          The event was honored by the presence of <strong>Nichkhun Horvejkul</strong> and <strong>Nachjaree Horvejkul (Cherreen)</strong> as brand ambassadors. They shared their perspectives on health and inspired audiences to embrace a wellness lifestyle, starting from simple everyday habits.
        </p>
        <picture><source srcset="/images/blog/prove-plus-launch/D.webp" type="image/webp" /><img src="/images/blog/prove-plus-launch/D.jpg" alt="Nichkhun and Cherreen at the launch event" style="width: 100%; border-radius: 16px; margin-bottom: 0.5rem;" /></picture>
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af;">Nichkhun & Cherreen — Brand Ambassadors of Prove+</p>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">The Next Step for Prove+</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 1.5rem;">
          Prove+ remains committed to developing high-quality health products under the concept:
        </p>
        <blockquote style="border-left: 4px solid #5d6fcd; padding: 1.25rem 1.5rem; margin: 1.5rem 0; background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); border-radius: 0 12px 12px 0; font-style: italic; font-size: 1.1rem; color: #4456a6;">
          "Prove in every dose, Plus in every need."
        </blockquote>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 2rem;">
          With the goal of elevating the health standards of Thai consumers sustainably to a global level.
        </p>
        <picture><source srcset="/images/blog/prove-plus-launch/E.webp" type="image/webp" /><img src="/images/blog/prove-plus-launch/E.jpg" alt="Full team at the Prove+ launch event" style="width: 100%; border-radius: 16px; margin-bottom: 0.5rem;" /></picture>
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af;">The Prove+ family — The Next Generation of Probiotics</p>
      </div>

      <div style="background: linear-gradient(135deg, #4456a6 0%, #5d6fcd 100%); border-radius: 20px; padding: 2rem; text-align: center; color: white;">
        <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: white;">Stay Connected with Prove+</h3>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem;">
          <a href="https://www.facebook.com/share/14JJxjH6w57/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px); transition: background 0.2s;">Facebook</a>
          <a href="https://twitter.com/proveplus" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">X (Twitter)</a>
          <a href="https://www.instagram.com/proveplus_th/" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">Instagram</a>
          <a href="https://www.tiktok.com/@proveplus?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">TikTok</a>
        </div>
      </div>
    `,
    content_th: `
      <div style="margin-bottom: 2.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563;">
          Prove+ แบรนด์โพรไบโอติกระดับพรีเมียม เปิดตัวอย่างเป็นทางการในประเทศไทย พร้อมแนะนำผลิตภัณฑ์ใหม่ <strong>PROVE+ ALLERPRO</strong> ต่อจาก <strong>PROVE+ FLOWPRO</strong> ภายในงานเปิดตัวสุดพิเศษ ภายใต้แนวคิด
        </p>
        <blockquote style="border-left: 4px solid #5d6fcd; padding: 1.25rem 1.5rem; margin: 2rem 0; background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); border-radius: 0 12px 12px 0; font-style: italic; font-size: 1.1rem; color: #4456a6;">
          "STANDARD x UMC : Built on friendship, backed by science"
        </blockquote>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563;">
          งานครั้งนี้ไม่เพียงสะท้อนการเปิดตัวผลิตภัณฑ์ใหม่ แต่ยังเป็นสัญลักษณ์ของความร่วมมืออันยาวนานกว่า <strong>25 ปี</strong> ระหว่างพันธมิตรไทย–ไต้หวัน ที่เติบโตจาก "คู่ค้า" สู่ "ครอบครัว" อย่างแท้จริง
        </p>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">จากความร่วมมือ สู่ความเชื่อมั่นระดับสากล</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 1.5rem;">
          ความร่วมมือระหว่างสององค์กรถูกขับเคลื่อนด้วยเป้าหมายเดียวกัน คือการยกระดับคุณภาพชีวิตผ่านแนวคิด <strong>Preventive Wellness</strong> หรือการดูแลสุขภาพเชิงป้องกัน
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 2rem;">
          ผลิตภัณฑ์ Prove+ ทุกตัวได้รับการพัฒนา ภายใต้มาตรฐานระดับสากล โดยทีมวิจัยผู้เชี่ยวชาญกว่า <strong>200 คน</strong> ผสานเทคโนโลยีที่ทันสมัย พร้อมงานวิจัยรองรับอย่างครบถ้วน เพื่อสร้างความมั่นใจในคุณภาพและประสิทธิภาพ
        </p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
          <picture><source srcset="/images/blog/prove-plus-launch/A1.webp" type="image/webp" /><img src="/images/blog/prove-plus-launch/A1.jpg" alt="บูธ Prove+ ในงานเปิดตัว" style="width: 100%; border-radius: 16px; object-fit: cover; aspect-ratio: 1/1;" /></picture>
          <picture><source srcset="/images/blog/prove-plus-launch/A2.webp" type="image/webp" /><img src="/images/blog/prove-plus-launch/A2.jpg" alt="ข้อความจากแฟนๆ ในงาน" style="width: 100%; border-radius: 16px; object-fit: cover; aspect-ratio: 1/1;" /></picture>
        </div>
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af; margin-top: 0.5rem;">STANDARD x Union Medical (Thailand) — From Partners to Family</p>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">PROVE+ ALLERPRO: ทางเลือกใหม่ของการดูแลภูมิแพ้ในชีวิตประจำวัน</h2>
        <div style="background: linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f0f9ff 100%); border: 1px solid #d1fae5; border-radius: 20px; padding: 2rem; margin-bottom: 2rem;">
          <p style="font-size: 1.05rem; line-height: 1.8; color: #4b5563; margin-bottom: 1.25rem;">
            PROVE+ ALLERPRO ถูกออกแบบมาเพื่อตอบโจทย์ไลฟ์สไตล์คนยุคใหม่ที่ต้องการความสะดวกและรวดเร็วในการดูแลสุขภาพ โดยมุ่งเน้น:
          </p>
          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.25rem;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: #5d6fcd; border-radius: 50%; color: white; font-size: 0.85rem; flex-shrink: 0;">&#10003;</span>
              <span style="font-size: 1.05rem; color: #374151; font-weight: 500;">เสริมภูมิคุ้มกัน</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: #5d6fcd; border-radius: 50%; color: white; font-size: 0.85rem; flex-shrink: 0;">&#10003;</span>
              <span style="font-size: 1.05rem; color: #374151; font-weight: 500;">ช่วยดูแลอาการภูมิแพ้</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: #5d6fcd; border-radius: 50%; color: white; font-size: 0.85rem; flex-shrink: 0;">&#10003;</span>
              <span style="font-size: 1.05rem; color: #374151; font-weight: 500;">สนับสนุนสุขภาพโดยรวม</span>
            </div>
          </div>
          <p style="font-size: 0.95rem; color: #6b7280; font-style: italic;">
            ภายใต้คอนเซ็ปต์ "สะดวก ทานง่าย และมั่นใจได้ในทุกวัน"
          </p>
        </div>
        <picture><source srcset="/images/blog/prove-plus-launch/C.webp" type="image/webp" /><img src="/images/blog/prove-plus-launch/C.jpg" alt="ผลิตภัณฑ์ PROVE+ ALLERPRO และ FLOWPRO" style="width: 100%; border-radius: 16px; margin-bottom: 0.5rem;" /></picture>
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af;">ผลิตภัณฑ์ PROVE+ — FLOWPRO & ALLERPRO</p>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">ต่อยอดความสำเร็จจาก PROVE+ FLOWPRO</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 1rem;">
          ก่อนหน้านี้ Prove+ ได้เปิดตัวผลิตภัณฑ์แรก <strong>PROVE+ FLOWPRO</strong> ซึ่งช่วยดูแลสมดุลลำไส้ และได้รับการตอบรับอย่างดีจากผู้บริโภค
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563;">
          การเปิดตัว ALLERPRO ในครั้งนี้ จึงถือเป็นอีกก้าวสำคัญในการขยายพอร์ตผลิตภัณฑ์เพื่อรองรับความต้องการด้านสุขภาพที่ครอบคลุมมากยิ่งขึ้น
        </p>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">มาตรฐานระดับโลก เพื่อความมั่นใจของผู้บริโภค</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 1.5rem;">
          ผลิตภัณฑ์ Prove+ ทุกชิ้น ได้รับการพัฒนาและออกแบบโดย <strong>Syngen Biotech, Taiwan</strong> ผู้นำด้านไบโอเทคโนโลยีด้วยประสบการณ์ด้านโพรไบโอติกมากกว่า <strong>30 ปี</strong> และกระบวนการผลิตที่ควบคุมคุณภาพอย่างเข้มงวดในทุกขั้นตอน จึงมั่นใจได้ว่า ผลิตภัณฑ์มีทั้งความปลอดภัย ประสิทธิภาพ และเหมาะสำหรับผู้บริโภคในทุกช่วงวัย
        </p>
        <picture><source srcset="/images/blog/prove-plus-launch/B.webp" type="image/webp" /><img src="/images/blog/prove-plus-launch/B.jpg" alt="ทีมผู้บริหาร Prove+" style="width: 100%; border-radius: 16px; margin-bottom: 0.5rem;" /></picture>
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af;">STANDARD x Union Medical (Thailand) — From Partners to Family</p>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">แรงบันดาลใจด้านสุขภาพ จากพรีเซนเตอร์</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 1.5rem;">
          ภายในงาน ได้รับเกียรติจาก <strong>นิชคุณ หรเวชกุล</strong> และ <strong>ณัฐจารี หรเวชกุล (เชอรีน)</strong> ในฐานะพรีเซนเตอร์ของแบรนด์ ทั้งสองได้ร่วมแบ่งปันแนวคิดการดูแลสุขภาพ และสร้างแรงบันดาลใจในการเริ่มต้น Wellness Lifestyle จากเรื่องใกล้ตัว
        </p>
        <picture><source srcset="/images/blog/prove-plus-launch/D.webp" type="image/webp" /><img src="/images/blog/prove-plus-launch/D.jpg" alt="นิชคุณ และ เชอรีน ในงานเปิดตัว" style="width: 100%; border-radius: 16px; margin-bottom: 0.5rem;" /></picture>
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af;">นิชคุณ & เชอรีน — พรีเซนเตอร์ Prove+</p>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">ก้าวต่อไปของ Prove+</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 1.5rem;">
          Prove+ ยังคงมุ่งมั่นในการพัฒนาผลิตภัณฑ์ด้านสุขภาพที่มีคุณภาพระดับสากล ภายใต้แนวคิด
        </p>
        <blockquote style="border-left: 4px solid #5d6fcd; padding: 1.25rem 1.5rem; margin: 1.5rem 0; background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); border-radius: 0 12px 12px 0; font-style: italic; font-size: 1.1rem; color: #4456a6;">
          "Prove in every dose, Plus in every need"
        </blockquote>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 2rem;">
          เพื่อยกระดับสุขภาพของคนไทยสู่มาตรฐานระดับโลกอย่างยั่งยืน
        </p>
        <picture><source srcset="/images/blog/prove-plus-launch/E.webp" type="image/webp" /><img src="/images/blog/prove-plus-launch/E.jpg" alt="ทีม Prove+ ทั้งหมดในงานเปิดตัว" style="width: 100%; border-radius: 16px; margin-bottom: 0.5rem;" /></picture>
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af;">ครอบครัว Prove+ — The Next Generation of Probiotics</p>
      </div>

      <div style="background: linear-gradient(135deg, #4456a6 0%, #5d6fcd 100%); border-radius: 20px; padding: 2rem; text-align: center; color: white;">
        <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: white;">ติดตาม Prove+ ได้ที่</h3>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem;">
          <a href="https://www.facebook.com/share/14JJxjH6w57/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">Facebook</a>
          <a href="https://twitter.com/proveplus" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">X (Twitter)</a>
          <a href="https://www.instagram.com/proveplus_th/" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">Instagram</a>
          <a href="https://www.tiktok.com/@proveplus?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">TikTok</a>
        </div>
      </div>
    `
  },
  {
    slug: 'urban-allergies-gut-health',
    title: 'Allergies in the City: How Pollution, Lifestyle, and the Gut Shape Your Immune Response',
    title_th: 'ภูมิแพ้ในคนเมือง: มลภาวะ ไลฟ์สไตล์ และลำไส้ มีผลต่อภูมิคุ้มกันอย่างไร',
    excerpt: 'Urban allergies sit at the intersection of PM 2.5, indoor air, sleep, and gut balance. A practical look at what triggers reactions in the city — and the levers that actually move the needle.',
    excerpt_th: 'ภูมิแพ้ของคนเมืองเกิดจากหลายปัจจัย ทั้ง PM 2.5 ฝุ่น ละออง การพักผ่อน และสมดุลลำไส้ — มาดูกันว่าอะไรเป็นตัวกระตุ้น และสิ่งที่ทำได้จริงในชีวิตประจำวันคืออะไร',
    date: 'May 11, 2026',
    date_th: '11 พฤษภาคม 2026',
    author: 'prove+ Team',
    readTime: '6 min read',
    readTime_th: 'อ่าน 6 นาที',
    image: '/images/blog/urban-allergies-gut-health/A.webp',
    tags: ['Wellness', 'Allergies', 'Gut Health', 'Urban Living', 'ALLERPRO'],
    category: 'Wellness',
    content: `
      <div style="margin-bottom: 2.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563;">
          Allergic diseases are an increasingly common reality of city life. In Thailand and across the region, allergic rhinitis is rising fastest in areas where PM 2.5 numbers climb past safe thresholds and daily routines stay constantly on the move. The symptoms feel routine — a stuffy nose, runny eyes, sneezing, an irritated throat — but persistent allergic reactions quietly erode sleep, focus, and energy.
        </p>
      </div>

      <div style="margin-bottom: 3rem;">
        <picture><source srcset="/images/blog/urban-allergies-gut-health/B.webp" type="image/webp" /><img src="/images/blog/urban-allergies-gut-health/B.jpg" alt="Bangkok skyline shrouded in PM 2.5 smog at sunset" style="width: 100%; border-radius: 20px; margin-bottom: 0.75rem; box-shadow: 0 20px 40px -20px rgba(68, 86, 166, 0.25);" /></picture>
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af; font-style: italic;">A typical PM 2.5 day in the city — invisible particles, very visible effects.</p>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">The Urban Trigger Stack</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 1.5rem;">
          People living in cities navigate a constant overlap of allergy-driving factors. Each one alone is manageable; together they accumulate.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
          <div style="background: #f5f7ff; border-radius: 16px; padding: 1.5rem;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: #4456a6; color: white; border-radius: 50%; font-weight: 700; margin-bottom: 0.75rem;">1</div>
            <h3 style="font-size: 1.05rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">Air Pollution</h3>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">PM 2.5 and vehicle emissions — small enough to slip deep into airways.</p>
          </div>
          <div style="background: #f5f7ff; border-radius: 16px; padding: 1.5rem;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: #4456a6; color: white; border-radius: 50%; font-weight: 700; margin-bottom: 0.75rem;">2</div>
            <h3 style="font-size: 1.05rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">Airborne Allergens</h3>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">Dust, dust mites, pollen, and pet dander circulating indoors and out.</p>
          </div>
          <div style="background: #f5f7ff; border-radius: 16px; padding: 1.5rem;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: #4456a6; color: white; border-radius: 50%; font-weight: 700; margin-bottom: 0.75rem;">3</div>
            <h3 style="font-size: 1.05rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">Indoor Climate</h3>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">Long hours in air-conditioned, dry, closed environments.</p>
          </div>
          <div style="background: #f5f7ff; border-radius: 16px; padding: 1.5rem;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: #4456a6; color: white; border-radius: 50%; font-weight: 700; margin-bottom: 0.75rem;">4</div>
            <h3 style="font-size: 1.05rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">Stress &amp; Sleep</h3>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">Chronic strain and not enough rest both leave the immune system on edge.</p>
          </div>
        </div>
        <p style="font-size: 0.9rem; color: #9ca3af; margin-top: 1rem; font-style: italic;">Per the WHO and Thailand's Department of Disease Control, air pollution correlates with rising rates of respiratory and allergic conditions.</p>
      </div>

      <div style="margin-bottom: 3rem; display: flex; flex-wrap: wrap; gap: 2rem; align-items: center;">
        <div style="flex: 1 1 280px;">
          <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">How an Allergic Reaction Unfolds</h2>
          <p style="font-size: 1.05rem; line-height: 1.8; color: #4b5563; margin-bottom: 1rem;">
            An allergic reaction is the immune system overreacting to something that is, in itself, harmless — dust, pollen, smoke, a familiar pet.
          </p>
          <p style="font-size: 1.05rem; line-height: 1.8; color: #4b5563; margin: 0;">
            When the body encounters the trigger, mast cells release <strong>histamine</strong> and other inflammatory mediators. That cascade is what you feel as sneezing, congestion, watery eyes, and irritated airways.
          </p>
        </div>
        <div style="flex: 1 1 280px;">
          <picture><source srcset="/images/blog/urban-allergies-gut-health/D.webp" type="image/webp" /><img src="/images/blog/urban-allergies-gut-health/D.jpg" alt="Diagram showing mast cells releasing histamine and the resulting allergy symptoms across the body" style="width: 100%; border-radius: 16px; background: white;" /></picture>
        </div>
      </div>

      <blockquote style="border: none; padding: 2rem 1.5rem; margin: 3rem 0; background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); border-radius: 24px; font-style: italic; font-size: 1.35rem; color: #4456a6; text-align: center; line-height: 1.5; font-weight: 500;">
        "A significant share of your immune activity actually lives in the gut — digestion and immunity are two sides of the same conversation."
      </blockquote>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">The Gut–Immunity Conversation</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 1rem;">
          Research from institutions including <strong>Harvard Medical School</strong> and <strong>Cleveland Clinic</strong> places the gut at the center of immune regulation. The community of microbes lining your intestines — the gut microbiota — helps:
        </p>
        <ul style="font-size: 1.05rem; line-height: 1.8; color: #4b5563; padding-left: 1.25rem; margin-bottom: 1rem;">
          <li>Calibrate immune responses so they're proportional to the actual threat</li>
          <li>Lower systemic, low-grade inflammation</li>
          <li>Maintain the integrity of the gut barrier</li>
        </ul>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563;">
          When that balance tips out of alignment — a state called <strong>dysbiosis</strong> — the immune system can become more reactive, including to the allergens that surround everyone living in a city.
        </p>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">Three Levers You Can Actually Pull</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 2rem;">
          Allergy management in a city isn't about one heroic fix. It's about stacking small, repeatable choices across three fronts.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">
          <div style="background: white; border: 1px solid #e5e7eb; border-radius: 20px; overflow: hidden;">
            <picture><source srcset="/images/blog/urban-allergies-gut-health/C.webp" type="image/webp" /><img src="/images/blog/urban-allergies-gut-health/C.jpg" alt="Person at home reaching for tissues" style="width: 100%; height: 180px; object-fit: cover; display: block;" /></picture>
            <div style="padding: 1.25rem 1.5rem 1.5rem;">
              <h3 style="font-size: 1.1rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">01 — Reduce Exposure</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">Mask up on high-PM days. Keep windows shut when AQI spikes. Wash bedding and clean indoor surfaces regularly to keep dust and dander down.</p>
            </div>
          </div>
          <div style="background: white; border: 1px solid #e5e7eb; border-radius: 20px; overflow: hidden;">
            <picture><source srcset="/images/blog/urban-allergies-gut-health/E.webp" type="image/webp" /><img src="/images/blog/urban-allergies-gut-health/E.jpg" alt="Family stretching and exercising together at home" style="width: 100%; height: 180px; object-fit: cover; display: block;" /></picture>
            <div style="padding: 1.25rem 1.5rem 1.5rem;">
              <h3 style="font-size: 1.1rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">02 — Lifestyle Recovery</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">Protect sleep. Build daily movement into the routine. Keep stress in check — the immune system reads all of it.</p>
            </div>
          </div>
          <div style="background: white; border: 1px solid #e5e7eb; border-radius: 20px; overflow: hidden;">
            <picture><source srcset="/images/blog/urban-allergies-gut-health/F.webp" type="image/webp" /><img src="/images/blog/urban-allergies-gut-health/F.jpg" alt="A balanced bowl of vegetables, grains, and protein on a wooden table" style="width: 100%; height: 180px; object-fit: cover; display: block;" /></picture>
            <div style="padding: 1.25rem 1.5rem 1.5rem;">
              <h3 style="font-size: 1.1rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">03 — Gut Support</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">Fiber-rich meals, fermented foods, and a balanced diet feed the beneficial microbes that help moderate your immune response.</p>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">The Bigger Picture</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563;">
          Urban allergies sit at the intersection of environment, lifestyle, and what's happening inside your body. Understanding both the mechanism and the role of the gut shifts the question from "how do I suppress symptoms?" to "how do I make my immune system less reactive in the first place?"
        </p>
      </div>

      <div style="margin-bottom: 3rem; background: linear-gradient(135deg, #fffaf0 0%, #fef3c7 100%); border: 1px solid #fde68a; border-radius: 24px; padding: 2rem;">
        <p style="font-size: 0.8rem; font-weight: 700; letter-spacing: 0.08em; color: #b45309; text-transform: uppercase; margin: 0 0 0.5rem;">Targeted Support</p>
        <h3 style="font-size: 1.5rem; font-weight: 700; color: #4456a6; margin-bottom: 0.75rem;">PROVE+ ALLERPRO</h3>
        <p style="font-size: 1.05rem; line-height: 1.7; color: #4b5563; margin-bottom: 1rem;">
          Some supplements are formulated specifically to support gut balance and immune response in the context of allergies. <strong>PROVE+ ALLERPRO</strong> combines targeted probiotic strains with immune-supporting ingredients including <strong>LCW23</strong> and <strong>Wellmune</strong>.
        </p>
        <p style="font-size: 0.95rem; line-height: 1.6; color: #6b7280; font-style: italic; margin: 0;">
          As with any supplement, evaluate carefully and pair with evidence-based advice for your situation.
        </p>
      </div>

      <div style="margin-top: 3rem; background: #f9fafb; border-left: 3px solid #d1d5db; border-radius: 4px; padding: 1.5rem;">
        <h3 style="font-size: 0.95rem; font-weight: 700; color: #374151; letter-spacing: 0.05em; text-transform: uppercase; margin: 0 0 0.75rem;">References</h3>
        <ul style="font-size: 0.95rem; line-height: 1.8; color: #6b7280; margin: 0; padding-left: 1.25rem;">
          <li>World Health Organization — air quality and respiratory health</li>
          <li>Harvard Medical School — gut microbiome and immunity</li>
          <li>Cleveland Clinic — allergic rhinitis and inflammation</li>
          <li>Department of Disease Control, Thailand — PM 2.5 advisories</li>
        </ul>
      </div>
    `,
    content_th: `
      <div style="margin-bottom: 2.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563;">
          โรคภูมิแพ้กลายเป็นเรื่องคุ้นเคยของคนเมืองมากขึ้นเรื่อยๆ โดยเฉพาะในพื้นที่ที่ค่า PM 2.5 พุ่งสูงและไลฟ์สไตล์เร่งรีบ อย่างเช่นในหลายเมืองของประเทศไทย อาการที่พบบ่อย เช่น <strong>คัดจมูก น้ำมูกไหล จาม</strong> และระคายเคืองทางเดินหายใจ อาจดูไม่รุนแรง แต่หากเป็นเรื้อรังก็ส่งผลต่อคุณภาพการนอน สมาธิ และพลังในแต่ละวัน
        </p>
      </div>

      <div style="margin-bottom: 3rem;">
        <picture><source srcset="/images/blog/urban-allergies-gut-health/B.webp" type="image/webp" /><img src="/images/blog/urban-allergies-gut-health/B.jpg" alt="ภาพเส้นขอบฟ้ากรุงเทพในวันที่มีฝุ่น PM 2.5" style="width: 100%; border-radius: 20px; margin-bottom: 0.75rem; box-shadow: 0 20px 40px -20px rgba(68, 86, 166, 0.25);" /></picture>
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af; font-style: italic;">ฝุ่น PM 2.5 อาจมองไม่เห็น แต่ผลกระทบที่ตามมาเห็นได้ชัดในร่างกายของคนเมือง</p>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">ปัจจัยกระตุ้นภูมิแพ้ของคนเมือง</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 1.5rem;">
          คนเมืองต้องเผชิญหลายปัจจัยที่กระตุ้นภูมิแพ้พร้อมๆ กัน แต่ละข้ออาจจัดการได้ แต่เมื่อมารวมกันก็สะสมจนเกินรับ
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
          <div style="background: #f5f7ff; border-radius: 16px; padding: 1.5rem;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: #4456a6; color: white; border-radius: 50%; font-weight: 700; margin-bottom: 0.75rem;">1</div>
            <h3 style="font-size: 1.05rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">มลภาวะทางอากาศ</h3>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">ฝุ่น PM 2.5 และควันจากยานพาหนะ — เล็กพอที่จะลงไปลึกถึงระบบทางเดินหายใจ</p>
          </div>
          <div style="background: #f5f7ff; border-radius: 16px; padding: 1.5rem;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: #4456a6; color: white; border-radius: 50%; font-weight: 700; margin-bottom: 0.75rem;">2</div>
            <h3 style="font-size: 1.05rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">สารก่อภูมิแพ้ในอากาศ</h3>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">ฝุ่น ไรฝุ่น ละอองเกสร รวมถึงรังแคและขนสัตว์เลี้ยงที่ลอยอยู่ทั้งในและนอกบ้าน</p>
          </div>
          <div style="background: #f5f7ff; border-radius: 16px; padding: 1.5rem;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: #4456a6; color: white; border-radius: 50%; font-weight: 700; margin-bottom: 0.75rem;">3</div>
            <h3 style="font-size: 1.05rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">สภาพอากาศในร่ม</h3>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">การอยู่ในห้องปรับอากาศปิดที่อากาศแห้งเป็นเวลานาน</p>
          </div>
          <div style="background: #f5f7ff; border-radius: 16px; padding: 1.5rem;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; background: #4456a6; color: white; border-radius: 50%; font-weight: 700; margin-bottom: 0.75rem;">4</div>
            <h3 style="font-size: 1.05rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">ความเครียดและการพักผ่อน</h3>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">ความเครียดสะสมและการนอนไม่เพียงพอ ทำให้ระบบภูมิคุ้มกันแปรปรวน</p>
          </div>
        </div>
        <p style="font-size: 0.9rem; color: #9ca3af; margin-top: 1rem; font-style: italic;">ข้อมูลจาก WHO และกรมควบคุมโรคของไทยชี้ว่ามลภาวะทางอากาศมีความสัมพันธ์กับการเพิ่มขึ้นของโรคทางเดินหายใจและภูมิแพ้</p>
      </div>

      <div style="margin-bottom: 3rem; display: flex; flex-wrap: wrap; gap: 2rem; align-items: center;">
        <div style="flex: 1 1 280px;">
          <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">กลไกการเกิดภูมิแพ้</h2>
          <p style="font-size: 1.05rem; line-height: 1.8; color: #4b5563; margin-bottom: 1rem;">
            อาการแพ้คือการที่ระบบภูมิคุ้มกันตอบสนองมากเกินไปต่อสิ่งที่ไม่ใช่อันตรายอยู่ดี เช่น ฝุ่น ละอองเกสร หรือควัน
          </p>
          <p style="font-size: 1.05rem; line-height: 1.8; color: #4b5563; margin: 0;">
            เมื่อร่างกายสัมผัสกับสารก่อภูมิแพ้ เซลล์มาสต์ (mast cells) จะหลั่ง <strong>ฮีสตามีน</strong> และสารก่ออักเสบอื่นๆ ส่งผลให้เกิดอาการจาม คัดจมูก น้ำตาไหล หรือทางเดินหายใจระคายเคือง
          </p>
        </div>
        <div style="flex: 1 1 280px;">
          <picture><source srcset="/images/blog/urban-allergies-gut-health/D.webp" type="image/webp" /><img src="/images/blog/urban-allergies-gut-health/D.jpg" alt="ภาพอธิบายกลไกการเกิดภูมิแพ้และฮีสตามีน" style="width: 100%; border-radius: 16px; background: white;" /></picture>
        </div>
      </div>

      <blockquote style="border: none; padding: 2rem 1.5rem; margin: 3rem 0; background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); border-radius: 24px; font-style: italic; font-size: 1.35rem; color: #4456a6; text-align: center; line-height: 1.5; font-weight: 500;">
        "ระบบภูมิคุ้มกันส่วนใหญ่ของร่างกายอยู่ในลำไส้ — สุขภาพของลำไส้และภูมิคุ้มกันจึงคือเรื่องเดียวกัน"
      </blockquote>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">ลำไส้กับภูมิคุ้มกัน</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 1rem;">
          งานวิจัยจากสถาบันชั้นนำ เช่น <strong>Harvard Medical School</strong> และ <strong>Cleveland Clinic</strong> ระบุว่าลำไส้มีบทบาทสำคัญต่อระบบภูมิคุ้มกัน จุลินทรีย์ในลำไส้ (gut microbiota) ช่วย:
        </p>
        <ul style="font-size: 1.05rem; line-height: 1.8; color: #4b5563; padding-left: 1.25rem; margin-bottom: 1rem;">
          <li>ควบคุมการตอบสนองของภูมิคุ้มกันให้อยู่ในระดับเหมาะสม</li>
          <li>ลดการอักเสบเรื้อรังในร่างกาย</li>
          <li>รักษาความแข็งแรงของผนังลำไส้</li>
        </ul>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563;">
          เมื่อสมดุลของจุลินทรีย์เสียไป (<strong>dysbiosis</strong>) ภูมิคุ้มกันก็อาจตอบสนองไวเกินไป รวมถึงต่อสารก่อภูมิแพ้ในเมืองที่เราเจอกันทุกวัน
        </p>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">3 แนวทางที่ทำได้จริงในชีวิตประจำวัน</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 2rem;">
          การดูแลภูมิแพ้ของคนเมืองไม่ได้พึ่งวิธีเดียว แต่เป็นการสะสมพฤติกรรมเล็กๆ ทุกวันใน 3 ด้าน
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">
          <div style="background: white; border: 1px solid #e5e7eb; border-radius: 20px; overflow: hidden;">
            <picture><source srcset="/images/blog/urban-allergies-gut-health/C.webp" type="image/webp" /><img src="/images/blog/urban-allergies-gut-health/C.jpg" alt="คนหยิบกระดาษทิชชู่ที่บ้าน" style="width: 100%; height: 180px; object-fit: cover; display: block;" /></picture>
            <div style="padding: 1.25rem 1.5rem 1.5rem;">
              <h3 style="font-size: 1.1rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">01 — ลดการสัมผัสสารก่อภูมิแพ้</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">สวมหน้ากากในวันที่ฝุ่นเยอะ ปิดหน้าต่างเมื่อ AQI สูง ทำความสะอาดเครื่องนอนและพื้นผิวในบ้านเป็นประจำ</p>
            </div>
          </div>
          <div style="background: white; border: 1px solid #e5e7eb; border-radius: 20px; overflow: hidden;">
            <picture><source srcset="/images/blog/urban-allergies-gut-health/E.webp" type="image/webp" /><img src="/images/blog/urban-allergies-gut-health/E.jpg" alt="ครอบครัวออกกำลังกายร่วมกันที่บ้าน" style="width: 100%; height: 180px; object-fit: cover; display: block;" /></picture>
            <div style="padding: 1.25rem 1.5rem 1.5rem;">
              <h3 style="font-size: 1.1rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">02 — ดูแลไลฟ์สไตล์</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">นอนให้พอ ออกกำลังกายสม่ำเสมอ จัดการความเครียด — เพราะภูมิคุ้มกันรับรู้ทุกอย่าง</p>
            </div>
          </div>
          <div style="background: white; border: 1px solid #e5e7eb; border-radius: 20px; overflow: hidden;">
            <picture><source srcset="/images/blog/urban-allergies-gut-health/F.webp" type="image/webp" /><img src="/images/blog/urban-allergies-gut-health/F.jpg" alt="ชามอาหารที่มีผัก ธัญพืช และโปรตีนครบหมู่" style="width: 100%; height: 180px; object-fit: cover; display: block;" /></picture>
            <div style="padding: 1.25rem 1.5rem 1.5rem;">
              <h3 style="font-size: 1.1rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">03 — ดูแลสุขภาพลำไส้</h3>
              <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">เน้นอาหารใยอาหารสูง อาหารหมัก และอาหารที่สมดุล ซึ่งเลี้ยงจุลินทรีย์ที่ดีและช่วยปรับภูมิคุ้มกัน</p>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">ภาพรวมที่ใหญ่กว่า</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563;">
          ภูมิแพ้ของคนเมืองอยู่ตรงจุดตัดของสิ่งแวดล้อม ไลฟ์สไตล์ และสิ่งที่เกิดขึ้นภายในร่างกาย เมื่อเข้าใจทั้งกลไกและบทบาทของลำไส้ คำถามจึงเปลี่ยนจาก "จะกดอาการอย่างไร" เป็น "จะทำให้ภูมิคุ้มกันไม่ตื่นตัวเกินไปตั้งแต่ต้นได้อย่างไร"
        </p>
      </div>

      <div style="margin-bottom: 3rem; background: linear-gradient(135deg, #fffaf0 0%, #fef3c7 100%); border: 1px solid #fde68a; border-radius: 24px; padding: 0; overflow: hidden;">
        <picture><source srcset="/images/blog/urban-allergies-gut-health/G.webp" type="image/webp" /><img src="/images/blog/urban-allergies-gut-health/G.jpg" alt="AllerPro โพรไบโอติกส์คนเมือง" style="width: 100%; display: block;" /></picture>
        <div style="padding: 1.75rem 2rem 2rem;">
          <p style="font-size: 0.8rem; font-weight: 700; letter-spacing: 0.08em; color: #b45309; text-transform: uppercase; margin: 0 0 0.5rem;">ตัวช่วยเฉพาะทาง</p>
          <h3 style="font-size: 1.5rem; font-weight: 700; color: #4456a6; margin-bottom: 0.75rem;">PROVE+ ALLERPRO</h3>
          <p style="font-size: 1.05rem; line-height: 1.7; color: #4b5563; margin-bottom: 1rem;">
            อาหารเสริมที่ถูกออกแบบมาเพื่อสนับสนุนสมดุลลำไส้และระบบภูมิคุ้มกันโดยเฉพาะ <strong>PROVE+ ALLERPRO</strong> รวมโพรไบโอติกสายพันธุ์เฉพาะร่วมกับสารช่วยปรับภูมิคุ้มกัน เช่น <strong>LCW23</strong> และ <strong>Wellmune</strong>
          </p>
          <p style="font-size: 0.95rem; line-height: 1.6; color: #6b7280; font-style: italic; margin: 0;">
            ทั้งนี้ การเลือกใช้ผลิตภัณฑ์ควรพิจารณาข้อมูลทางวิชาการและความเหมาะสมของแต่ละคน
          </p>
        </div>
      </div>

      <div style="margin-top: 3rem; background: #f9fafb; border-left: 3px solid #d1d5db; border-radius: 4px; padding: 1.5rem;">
        <h3 style="font-size: 0.95rem; font-weight: 700; color: #374151; letter-spacing: 0.05em; text-transform: uppercase; margin: 0 0 0.75rem;">แหล่งอ้างอิง</h3>
        <ul style="font-size: 0.95rem; line-height: 1.8; color: #6b7280; margin: 0; padding-left: 1.25rem;">
          <li>World Health Organization — คุณภาพอากาศและสุขภาพระบบทางเดินหายใจ</li>
          <li>Harvard Medical School — ลำไส้และภูมิคุ้มกัน</li>
          <li>Cleveland Clinic — ภูมิแพ้และการอักเสบ</li>
          <li>กรมควบคุมโรค กระทรวงสาธารณสุข — ข้อมูล PM 2.5</li>
        </ul>
      </div>
    `
  },
  {
    slug: 'gut-brain-axis-probiotics',
    title: 'Is the Gut Really the Second Brain? Why Probiotics Matter for Mood and Health',
    title_th: 'ลำไส้คือสมองที่สองจริงไหม? ทำไมโพรไบโอติกถึงสำคัญต่ออารมณ์และสุขภาพ',
    excerpt: 'Stress, brain fog, energy dips — the cause may not be in your head. The gut hosts 70–80% of your immune system and produces over 90% of your serotonin. Here is why the gut-brain axis matters.',
    excerpt_th: 'ความเครียด สมองล้า อารมณ์แปรปรวน — คำตอบอาจไม่ได้อยู่ที่สมอง ลำไส้เป็นที่อยู่ของระบบภูมิคุ้มกัน 70–80% และผลิตเซโรโทนินมากกว่า 90% มาดูกันว่าทำไม Gut-Brain Axis จึงสำคัญ',
    date: 'May 12, 2026',
    date_th: '12 พฤษภาคม 2026',
    author: 'prove+ Team',
    readTime: '5 min read',
    readTime_th: 'อ่าน 5 นาที',
    image: '/images/blog/gut-brain-axis-probiotics/A.webp',
    tags: ['Wellness', 'Gut Health', 'Brain Health', 'Probiotics', 'FLOWPRO'],
    category: 'Wellness',
    content: `
      <div style="margin-bottom: 2.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563;">
          Stress that creeps in for no clear reason. Brain fog. Mood that shifts unpredictably. The cause may not be in your head — at least not entirely. Your gut and brain run a non-stop, two-way conversation called the <strong>gut-brain axis</strong>, and a surprising amount of what happens upstairs starts downstairs.
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-top: 1rem;">
          The gut hosts <strong>70–80%</strong> of your body's immune system. It produces over <strong>90%</strong> of your serotonin — the so-called "feel-good" hormone. Calling it your "second brain" is less metaphor than physiology.
        </p>
      </div>

      <div style="margin-bottom: 3rem;">
        <picture><source srcset="/images/blog/gut-brain-axis-probiotics/B.webp" type="image/webp" /><img src="/images/blog/gut-brain-axis-probiotics/B.jpg" alt="A paper-craft illustration of the gut connected to the brain inside a body silhouette" style="width: 100%; border-radius: 24px; margin-bottom: 0.75rem;" /></picture>
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af; font-style: italic;">The gut and brain are in constant conversation — biologically and chemically.</p>
      </div>

      <blockquote style="border: none; padding: 2rem 1.5rem; margin: 3rem 0; background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); border-radius: 24px; font-style: italic; font-size: 1.35rem; color: #4456a6; text-align: center; line-height: 1.5; font-weight: 500;">
        "Over 90% of your serotonin — the 'feel-good' hormone — is produced in your gut, not your brain."
      </blockquote>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">Five Ways Your Gut Shapes Your Health</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 2rem;">
          Most of the time, the gut works quietly in the background. When it falls out of balance, it doesn't just show up in digestion — it shows up everywhere.
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
          <div style="background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); border-radius: 16px; padding: 1.5rem;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #4456a6; color: white; border-radius: 12px; font-weight: 700; font-size: 1.1rem; margin-bottom: 0.75rem;">01</div>
            <h3 style="font-size: 1.05rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">Gut–Brain Axis</h3>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">Constant signaling between gut and brain shapes mood, stress, and cognition.</p>
          </div>
          <div style="background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); border-radius: 16px; padding: 1.5rem;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #4456a6; color: white; border-radius: 12px; font-weight: 700; font-size: 1.1rem; margin-bottom: 0.75rem;">02</div>
            <h3 style="font-size: 1.05rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">Immune Defense</h3>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">A balanced gut helps the body recognize real threats and tame inflammation.</p>
          </div>
          <div style="background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); border-radius: 16px; padding: 1.5rem;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #4456a6; color: white; border-radius: 12px; font-weight: 700; font-size: 1.1rem; margin-bottom: 0.75rem;">03</div>
            <h3 style="font-size: 1.05rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">Mood &amp; Mental Health</h3>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">Gut microbes are involved in producing the neurotransmitters that keep mood steady.</p>
          </div>
          <div style="background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); border-radius: 16px; padding: 1.5rem;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #4456a6; color: white; border-radius: 12px; font-weight: 700; font-size: 1.1rem; margin-bottom: 0.75rem;">04</div>
            <h3 style="font-size: 1.05rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">Metabolism</h3>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">Gut bacteria help break down food, synthesize vitamins, and influence weight regulation.</p>
          </div>
          <div style="background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); border-radius: 16px; padding: 1.5rem;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #4456a6; color: white; border-radius: 12px; font-weight: 700; font-size: 1.1rem; margin-bottom: 0.75rem;">05</div>
            <h3 style="font-size: 1.05rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">Disease Prevention</h3>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">A healthy gut is associated with lower risk of chronic conditions like diabetes and heart disease.</p>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">Why Probiotics Matter</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 1.5rem;">
          Probiotics help restore the balance of beneficial microbes in the gut. One of the most useful things those microbes produce is a group of compounds called <strong>short-chain fatty acids (SCFAs)</strong> — molecules that lower inflammation, reinforce the gut barrier, and support immune balance.
        </p>
        <picture><source srcset="/images/blog/gut-brain-axis-probiotics/C.webp" type="image/webp" /><img src="/images/blog/gut-brain-axis-probiotics/C.jpg" alt="Diagram of the gut-brain axis showing how microbial balance influences stress, mood, anxiety, and neurotransmitters" style="width: 100%; border-radius: 20px; margin-bottom: 0.5rem; background: white;" /></picture>
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af; font-style: italic;">The gut-brain axis: microbial balance influences neurotransmitters, mood, and even anxiety.</p>
      </div>

      <div style="margin-bottom: 3rem; display: flex; flex-wrap: wrap; gap: 2rem; align-items: center;">
        <div style="flex: 1 1 280px;">
          <p style="font-size: 1.625rem; font-weight: 700; color: #5d6fcd; margin: 0 0 0.4rem; line-height: 1.25;">Made to Survive the Journey</p>
          <h2 style="font-size: 1.5rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">What Makes FLOWPRO Different</h2>
          <p style="font-size: 1.05rem; line-height: 1.8; color: #4b5563; margin-bottom: 1rem;">
            <strong>FLOWPRO</strong> uses <strong>Bacillus coagulans BC198</strong>, a spore-forming probiotic strain that holds up against heat and stomach acid where most probiotics break down.
          </p>
          <p style="font-size: 1.05rem; line-height: 1.8; color: #4b5563; margin-bottom: 1rem;">
            Combined with a <strong>5-layer encapsulation</strong> technology, the bacteria actually reach the intestines alive — which is, after all, where they need to be to do anything.
          </p>
          <p style="font-size: 0.95rem; line-height: 1.7; color: #6b7280; margin: 0;">
            Manufactured by <strong>Syngen Biotech</strong> in Taiwan, with 20+ years of probiotic R&amp;D and a team of 200+ scientists behind every batch.
          </p>
        </div>
        <div style="flex: 1 1 280px;">
          <picture><source srcset="/images/blog/gut-brain-axis-probiotics/E.webp" type="image/webp" /><img src="/images/blog/gut-brain-axis-probiotics/E.jpg" alt="Diagram of 5-layer encapsulation technology protecting probiotics through the digestive tract" style="width: 100%; border-radius: 20px;" /></picture>
        </div>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">Start at the Foundation</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 2rem;">
          The gut isn't a side system. It's the foundation under almost everything — mood, immunity, energy, metabolism, even how clearly you think. Choosing a probiotic with both science and survivability behind it isn't about chasing wellness trends; it's about giving the foundation what it needs.
        </p>
        <blockquote style="border-left: 4px solid #5d6fcd; padding: 1.25rem 1.5rem; margin: 1.5rem 0; background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); border-radius: 0 12px 12px 0; font-style: italic; font-size: 1.15rem; color: #4456a6;">
          "PROVE+ — Proof in every dose, plus in every need."
        </blockquote>
      </div>

      <div style="position: relative; border-radius: 24px; overflow: hidden; min-height: 480px; display: flex; align-items: flex-end; background: #4456a6; color: white;">
        <picture><source srcset="/images/blog/gut-brain-axis-probiotics/F.webp" type="image/webp" /><img src="/images/blog/gut-brain-axis-probiotics/F.jpg" alt="PROVE+ FLOWPRO probiotic product" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block;" /></picture>
        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(68,86,166,0.05) 0%, rgba(68,86,166,0.55) 55%, rgba(68,86,166,0.95) 100%);"></div>
        <div style="position: relative; padding: 3rem 2rem 2rem; text-align: center; width: 100%;">
          <h3 style="font-size: 1.35rem; font-weight: 600; margin-bottom: 1rem; color: white; text-shadow: 0 2px 12px rgba(0,0,0,0.25);">Start taking care of your gut</h3>
          <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem;">
            <a href="https://shopee.co.th/proveplus" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">Shopee</a>
            <a href="https://www.tiktok.com/@proveplus" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">TikTok</a>
            <a href="https://www.lazada.co.th/shop/proveplus" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">Lazada</a>
          </div>
        </div>
      </div>
    `,
    content_th: `
      <div style="margin-bottom: 2.5rem;">
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563;">
          เคยรู้สึกเครียดโดยไม่มีสาเหตุ สมองล้า หรืออารมณ์แปรปรวนไหม? คำตอบอาจไม่ได้อยู่ที่สมองเพียงอย่างเดียว แต่ยังอยู่ที่ "ลำไส้" ของคุณ ลำไส้กับสมองสื่อสารกันตลอดเวลาผ่านระบบ <strong>Gut-Brain Axis</strong> และสิ่งที่เกิดขึ้นในสมอง ก็มักจะเริ่มจากลำไส้
        </p>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-top: 1rem;">
          ลำไส้เป็นที่อยู่ของระบบภูมิคุ้มกัน <strong>70–80%</strong> ของร่างกาย และผลิต <strong>เซโรโทนินมากกว่า 90%</strong> ซึ่งเป็นฮอร์โมนแห่งความสุข การเรียกลำไส้ว่า "สมองที่สอง" จึงไม่ใช่แค่คำเปรียบเปรย แต่เป็นเรื่องของสรีรวิทยา
        </p>
      </div>

      <div style="margin-bottom: 3rem;">
        <picture><source srcset="/images/blog/gut-brain-axis-probiotics/B.webp" type="image/webp" /><img src="/images/blog/gut-brain-axis-probiotics/B.jpg" alt="ภาพศิลปะจากกระดาษแสดงลำไส้เชื่อมต่อกับสมอง" style="width: 100%; border-radius: 24px; margin-bottom: 0.75rem;" /></picture>
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af; font-style: italic;">ลำไส้กับสมองคุยกันตลอดเวลา — ทั้งทางชีวภาพและทางเคมี</p>
      </div>

      <blockquote style="border: none; padding: 2rem 1.5rem; margin: 3rem 0; background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); border-radius: 24px; font-style: italic; font-size: 1.35rem; color: #4456a6; text-align: center; line-height: 1.5; font-weight: 500;">
        "เซโรโทนินกว่า 90% — ฮอร์โมนแห่งความสุข — ถูกผลิตที่ลำไส้ ไม่ใช่สมอง"
      </blockquote>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">5 พลังของลำไส้</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 2rem;">
          ส่วนใหญ่ลำไส้ทำงานเงียบๆ อยู่เบื้องหลัง แต่เมื่อสมดุลเสีย ผลกระทบไม่ได้อยู่แค่ระบบย่อยอาหาร แต่กระจายไปทั่วร่างกาย
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
          <div style="background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); border-radius: 16px; padding: 1.5rem;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #4456a6; color: white; border-radius: 12px; font-weight: 700; font-size: 1.1rem; margin-bottom: 0.75rem;">01</div>
            <h3 style="font-size: 1.05rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">Gut–Brain Axis</h3>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">ลำไส้กับสมองสื่อสารกันตลอด ส่งผลต่ออารมณ์ ความเครียด และการคิด</p>
          </div>
          <div style="background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); border-radius: 16px; padding: 1.5rem;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #4456a6; color: white; border-radius: 12px; font-weight: 700; font-size: 1.1rem; margin-bottom: 0.75rem;">02</div>
            <h3 style="font-size: 1.05rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">ระบบภูมิคุ้มกัน</h3>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">ลำไส้ที่สมดุลช่วยให้ร่างกายแยกแยะภัยจริงและลดการอักเสบ</p>
          </div>
          <div style="background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); border-radius: 16px; padding: 1.5rem;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #4456a6; color: white; border-radius: 12px; font-weight: 700; font-size: 1.1rem; margin-bottom: 0.75rem;">03</div>
            <h3 style="font-size: 1.05rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">อารมณ์และสุขภาพจิต</h3>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">จุลินทรีย์ในลำไส้มีส่วนผลิตสารสื่อประสาทที่ช่วยให้อารมณ์สมดุล</p>
          </div>
          <div style="background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); border-radius: 16px; padding: 1.5rem;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #4456a6; color: white; border-radius: 12px; font-weight: 700; font-size: 1.1rem; margin-bottom: 0.75rem;">04</div>
            <h3 style="font-size: 1.05rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">เมตาบอลิซึม</h3>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">ช่วยย่อยอาหาร สร้างวิตามิน และมีส่วนในการควบคุมน้ำหนัก</p>
          </div>
          <div style="background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); border-radius: 16px; padding: 1.5rem;">
            <div style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: #4456a6; color: white; border-radius: 12px; font-weight: 700; font-size: 1.1rem; margin-bottom: 0.75rem;">05</div>
            <h3 style="font-size: 1.05rem; font-weight: 600; color: #4456a6; margin-bottom: 0.5rem;">ป้องกันโรค</h3>
            <p style="font-size: 0.95rem; line-height: 1.6; color: #4b5563; margin: 0;">ลำไส้ที่ดีสัมพันธ์กับความเสี่ยงโรคเรื้อรังที่ลดลง เช่น เบาหวาน และหัวใจ</p>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">ทำไมโพรไบโอติกถึงสำคัญ</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 1.5rem;">
          โพรไบโอติกช่วยปรับสมดุลจุลินทรีย์ดีในลำไส้ และที่สำคัญคือช่วยให้ลำไส้ผลิต <strong>SCFAs (Short-Chain Fatty Acids)</strong> ซึ่งช่วยลดการอักเสบ เสริมความแข็งแรงของผนังลำไส้ และสนับสนุนสมดุลของภูมิคุ้มกัน
        </p>
        <picture><source srcset="/images/blog/gut-brain-axis-probiotics/C.webp" type="image/webp" /><img src="/images/blog/gut-brain-axis-probiotics/C.jpg" alt="ภาพอธิบาย Gut-Brain Axis ความสัมพันธ์ระหว่างจุลินทรีย์ในลำไส้และอารมณ์" style="width: 100%; border-radius: 20px; margin-bottom: 0.5rem; background: white;" /></picture>
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af; font-style: italic;">Gut-Brain Axis: สมดุลของจุลินทรีย์ส่งผลถึงสารสื่อประสาท อารมณ์ และความวิตกกังวล</p>
      </div>

      <div style="margin-bottom: 3rem;">
        <picture><source srcset="/images/blog/gut-brain-axis-probiotics/D.webp" type="image/webp" /><img src="/images/blog/gut-brain-axis-probiotics/D.jpg" alt="สิ่งที่ต้องดูเมื่อเลือกซื้อโพรไบโอติก" style="width: 100%; border-radius: 20px;" /></picture>
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af; font-style: italic; margin-top: 0.5rem;">สิ่งที่ควรพิจารณาเมื่อเลือกซื้อโพรไบโอติก</p>
      </div>

      <div style="margin-bottom: 3rem; display: flex; flex-wrap: wrap; gap: 2rem; align-items: center;">
        <div style="flex: 1 1 280px;">
          <p style="font-size: 1.625rem; font-weight: 700; color: #5d6fcd; margin: 0 0 0.4rem; line-height: 1.25;">รอดถึงลำไส้ได้จริง</p>
          <h2 style="font-size: 1.5rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">FLOWPRO ต่างจากตัวอื่นยังไง</h2>
          <p style="font-size: 1.05rem; line-height: 1.8; color: #4b5563; margin-bottom: 1rem;">
            <strong>FLOWPRO</strong> ใช้ <strong>Bacillus coagulans BC198</strong> โพรไบโอติกแบบสปอร์ที่ทนทั้งกรดในกระเพาะและความร้อน — จุดที่โพรไบโอติกทั่วไปมักจะตายไปก่อน
          </p>
          <p style="font-size: 1.05rem; line-height: 1.8; color: #4b5563; margin-bottom: 1rem;">
            ผสานเทคโนโลยี <strong>5-layer encapsulation</strong> ที่ช่วยให้จุลินทรีย์รอดถึงลำไส้ได้จริง — ซึ่งเป็นที่เดียวที่มันจะทำงานได้
          </p>
          <p style="font-size: 0.95rem; line-height: 1.7; color: #6b7280; margin: 0;">
            ผลิตโดย <strong>Syngen Biotech</strong> จากไต้หวัน ผู้เชี่ยวชาญด้านโพรไบโอติกมากกว่า 20 ปี ด้วยทีมวิจัยกว่า 200 คนเบื้องหลังทุกล็อต
          </p>
        </div>
        <div style="flex: 1 1 280px;">
          <picture><source srcset="/images/blog/gut-brain-axis-probiotics/E.webp" type="image/webp" /><img src="/images/blog/gut-brain-axis-probiotics/E.jpg" alt="เทคโนโลยี Encapsulation 5 ชั้น ช่วยให้โพรไบโอติกรอดถึงลำไส้" style="width: 100%; border-radius: 20px;" /></picture>
        </div>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">เริ่มต้นที่รากฐาน</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 2rem;">
          ลำไส้ไม่ใช่ระบบรอง แต่เป็นรากฐานของเกือบทุกอย่าง — ทั้งอารมณ์ ภูมิคุ้มกัน พลังงาน เมตาบอลิซึม ไปจนถึงความคิดที่แจ่มชัด การเลือกโพรไบโอติกที่มีทั้งงานวิจัยและความสามารถในการรอดถึงลำไส้จึงไม่ใช่แค่ตามเทรนด์ แต่เป็นการให้สิ่งที่ร่างกายต้องการจริง
        </p>
        <blockquote style="border-left: 4px solid #5d6fcd; padding: 1.25rem 1.5rem; margin: 1.5rem 0; background: linear-gradient(135deg, #f5f7ff 0%, #eef1ff 100%); border-radius: 0 12px 12px 0; font-style: italic; font-size: 1.15rem; color: #4456a6;">
          "PROVE+ — พรูฟแล้วว่าดี Plus ในทุกความต้องการ"
        </blockquote>
      </div>

      <div style="position: relative; border-radius: 24px; overflow: hidden; min-height: 480px; display: flex; align-items: flex-end; background: #4456a6; color: white;">
        <picture><source srcset="/images/blog/gut-brain-axis-probiotics/F.webp" type="image/webp" /><img src="/images/blog/gut-brain-axis-probiotics/F.jpg" alt="ผลิตภัณฑ์ PROVE+ FLOWPRO" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block;" /></picture>
        <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(68,86,166,0.05) 0%, rgba(68,86,166,0.55) 55%, rgba(68,86,166,0.95) 100%);"></div>
        <div style="position: relative; padding: 3rem 2rem 2rem; text-align: center; width: 100%;">
          <h3 style="font-size: 1.35rem; font-weight: 600; margin-bottom: 1rem; color: white; text-shadow: 0 2px 12px rgba(0,0,0,0.25);">เริ่มดูแลลำไส้ของคุณได้เลย</h3>
          <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem;">
            <a href="https://shopee.co.th/proveplus" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">Shopee</a>
            <a href="https://www.tiktok.com/@proveplus" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">TikTok</a>
            <a href="https://www.lazada.co.th/shop/proveplus" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">Lazada</a>
          </div>
        </div>
      </div>
    `
  },
  {
    slug: 'is-the-gut-your-second-brain',
    title: 'Is the Gut Really the Second Brain? Why Probiotics Matter for Health and Mood',
    title_th: 'ลำไส้คือสมองที่สองจริงไหม? ทำไมโพรไบโอติกถึงสำคัญต่ออารมณ์และสุขภาพ',
    excerpt: 'Feeling stressed, tired, or mentally drained? The answer may lie in your gut — home to 70–80% of your immune system and the source of over 90% of your serotonin.',
    excerpt_th: 'รู้สึกเครียด เหนื่อยง่าย หรืออารมณ์แปรปรวนโดยไม่มีสาเหตุชัดเจน? คำตอบอาจอยู่ที่ลำไส้ ที่อยู่ของระบบภูมิคุ้มกัน 70–80% และแหล่งผลิตเซโรโทนินมากกว่า 90%',
    date: 'October 1, 2026',
    date_th: '1 ตุลาคม 2026',
    author: 'prove+ Team',
    readTime: '3 min read',
    readTime_th: 'อ่าน 3 นาที',
    image: '/images/blog/gut-brain-axis-probiotics/B.webp',
    imagePosition: '50% 15%',
    tags: ['Wellness', 'Gut Health', 'Gut-Brain Axis', 'Probiotics', 'Microbiome', 'FLOWPRO'],
    category: 'Wellness',
    layout: 'magazine',
    kicker: 'Feature · Gut Health',
    kicker_th: 'บทความพิเศษ · สุขภาพลำไส้',
    content: `
      <p class="mag-lede mag-dropcap">
        Have you ever wondered why you feel stressed, tired, or mentally drained? The answer may lie in your gut. The gut is often called the “second brain” due to its direct connection with the brain via the <strong>Gut-Brain Axis</strong>.
      </p>
      <p>
        The gut plays a key role in digestion, hosts <strong>70–80%</strong> of the immune system, and produces <strong>over 90%</strong> of serotonin, the “feel-good” hormone.
      </p>

      <div class="mag-stats mag-wide">
        <div class="mag-stat"><span class="mag-stat-num">70–80%</span><span class="mag-stat-label">of the immune system is hosted in the gut</span></div>
        <div class="mag-stat"><span class="mag-stat-num">90%+</span><span class="mag-stat-label">of serotonin, the “feel-good” hormone, is produced in the gut</span></div>
      </div>

      <figure class="mag-figure mag-figure--cinema mag-wide">
        <picture><source srcset="/images/blog/gut-brain-axis-probiotics/A.webp" type="image/webp" /><img src="/images/blog/gut-brain-axis-probiotics/A.jpg" alt="Glowing illustration of the brain linked to the intestine by a web of connections" width="2048" height="1449" loading="lazy" /></picture>
        <figcaption>The gut and the brain are in constant, two-way conversation through the gut-brain axis.</figcaption>
      </figure>

      <h2>The Power of the Gut</h2>
      <ol class="mag-list">
        <li><span class="mag-list-num" aria-hidden="true">01</span><h3>Gut-Brain Connection</h3><p>The gut communicates with the brain, influencing mood, stress, and cognitive function.</p></li>
        <li><span class="mag-list-num" aria-hidden="true">02</span><h3>Immune System</h3><p>A healthy gut supports immunity, protects against pathogens, and reduces inflammation.</p></li>
        <li><span class="mag-list-num" aria-hidden="true">03</span><h3>Mood &amp; Mental Health</h3><p>Gut health affects neurotransmitter production, helping improve mood and mental clarity.</p></li>
        <li><span class="mag-list-num" aria-hidden="true">04</span><h3>Metabolism &amp; Absorption</h3><p>Gut bacteria help break down food, produce vitamins, and regulate metabolism.</p></li>
        <li><span class="mag-list-num" aria-hidden="true">05</span><h3>Disease Prevention</h3><p>A balanced gut reduces the risk of chronic diseases such as diabetes and heart disease.</p></li>
      </ol>

      <figure class="mag-figure mag-wide">
        <picture><source srcset="/images/blog/gut-brain-axis-probiotics/C.webp" type="image/webp" /><img src="/images/blog/gut-brain-axis-probiotics/C.jpg" alt="Gut-brain axis diagram linking nutrient delivery, microbial balance, motility, and secretion to neurotransmitters, mood, anxiety, and stress" width="2048" height="1365" loading="lazy" /></picture>
        <figcaption>The gut-brain axis: microbial balance in the gut feeds into neurotransmitters, mood, and stress.</figcaption>
      </figure>

      <h2>Why Probiotics Matter</h2>
      <p>
        Probiotics help restore gut balance and promote <strong>SCFA</strong> production, which supports immunity and reduces inflammation.
      </p>
      <aside class="mag-note">
        <p class="mag-eyebrow">Quick definition</p>
        <p><strong>SCFAs (short-chain fatty acids)</strong> are compounds that gut bacteria produce when they ferment dietary fiber.</p>
      </aside>

      <blockquote class="mag-pullquote mag-wide">
        <p>The gut is often called the “second brain” due to its direct connection with the brain.</p>
      </blockquote>

      <section class="mag-spotlight mag-wide">
        <div class="mag-spotlight-text">
          <p class="mag-eyebrow">Product spotlight</p>
          <h2>What Makes FLOWPRO Different</h2>
          <p>FLOWPRO contains <em>Bacillus coagulans</em> BC198, a spore-forming probiotic resistant to heat and acid, combined with 5-layer encapsulation technology to ensure survivability.</p>
          <p>It is manufactured by <strong>Syngen Biotech</strong>, a trusted probiotic innovator from Taiwan with over 20 years of expertise and 200 in-house R&amp;D specialists.</p>
          <dl class="mag-facts">
            <div><dt>Strain</dt><dd><em>B. coagulans</em> BC198</dd></div>
            <div><dt>Protection</dt><dd>5-layer encapsulation</dd></div>
            <div><dt>Made by</dt><dd>Syngen Biotech, Taiwan</dd></div>
            <div><dt>Expertise</dt><dd>20+ years · 200 R&amp;D staff</dd></div>
          </dl>
        </div>
        <figure class="mag-figure">
          <picture><source srcset="/images/blog/gut-brain-axis-probiotics/E.webp" type="image/webp" /><img src="/images/blog/gut-brain-axis-probiotics/E.jpg" alt="Infographic explaining prove+ encapsulation technology and its German certificate" width="1080" height="1350" loading="lazy" /></picture>
          <figcaption>Encapsulation, explained: a protective coating helps probiotics survive storage and stomach acid to reach the gut. prove+ protects its probiotics with up to 5 layers, a technology certified in Germany.</figcaption>
        </figure>
      </section>

      <figure class="mag-figure mag-wide">
        <picture><source srcset="/images/blog/gut-brain-axis-probiotics/D.webp" type="image/webp" /><img src="/images/blog/gut-brain-axis-probiotics/D.jpg" alt="Infographic of seven things to check when buying a probiotic supplement" width="2048" height="1365" loading="lazy" /></picture>
        <figcaption>What to check when buying a probiotic: the strain, the microbe count, strain-specific research, survival to the gut, added prebiotics, a match for your needs, and a format you’ll take consistently.</figcaption>
      </figure>

      <div class="mag-ornament" aria-hidden="true">+</div>

      <h2>The Takeaway</h2>
      <p class="mag-end">
        Your gut is the foundation of your health. Choosing a high-quality probiotic is essential for long-term well-being.
      </p>

      <div class="mag-tagline mag-wide">
        <p>PROVE+ — Proof in every dose, plus in every need</p>
      </div>

      <section class="mag-cta mag-wide">
        <picture class="mag-cta-media"><source srcset="/images/blog/gut-brain-axis-probiotics/F.webp" type="image/webp" /><img src="/images/blog/gut-brain-axis-probiotics/F.jpg" alt="PROVE+ FLOWPRO probiotic boxes and sachets" width="1080" height="1350" loading="lazy" /></picture>
        <div class="mag-cta-body">
          <p class="mag-eyebrow">Where to buy</p>
          <p class="mag-cta-title">Start taking care of your gut here</p>
          <div class="mag-cta-links">
            <a href="https://shopee.co.th/proveplusthailand" target="_blank" rel="noopener noreferrer">Shopee <span>Prove+ Thailand</span></a>
            <a href="https://www.tiktok.com/@proveplus" target="_blank" rel="noopener noreferrer">TikTok <span>@proveplus</span></a>
            <a href="https://www.lazada.co.th/shop/nvjcwykx" target="_blank" rel="noopener noreferrer">Lazada <span>Prove+ Thailand</span></a>
          </div>
        </div>
      </section>
    `,
    content_th: `
      <p class="mag-lede">
        เคยสงสัยไหมว่าทำไมเราถึงรู้สึกเครียด เหนื่อยง่าย หรืออารมณ์แปรปรวนโดยไม่มีสาเหตุชัดเจน? คำตอบอาจไม่ได้อยู่ที่สมองเพียงอย่างเดียว แต่อยู่ที่ “ลำไส้” ของคุณ ลำไส้ถูกเรียกว่า “สมองที่สอง” เพราะมีการเชื่อมต่อกับสมองผ่านระบบ <strong>Gut-Brain Axis</strong> ซึ่งเป็นการสื่อสารสองทางระหว่างลำไส้และสมอง
      </p>
      <p>
        ลำไส้มีบทบาทสำคัญ เช่น การย่อยอาหาร การดูดซึมสารอาหาร เป็นที่อยู่ของระบบภูมิคุ้มกัน <strong>70–80%</strong> และผลิตเซโรโทนิน<strong>มากกว่า 90%</strong> ซึ่งเป็นฮอร์โมนแห่งความสุข
      </p>

      <div class="mag-stats mag-wide">
        <div class="mag-stat"><span class="mag-stat-num">70–80%</span><span class="mag-stat-label">ของระบบภูมิคุ้มกันอยู่ที่ลำไส้</span></div>
        <div class="mag-stat"><span class="mag-stat-num">90%+</span><span class="mag-stat-label">ของเซโรโทนิน ฮอร์โมนแห่งความสุข ผลิตที่ลำไส้</span></div>
      </div>

      <figure class="mag-figure mag-figure--cinema mag-wide">
        <picture><source srcset="/images/blog/gut-brain-axis-probiotics/A.webp" type="image/webp" /><img src="/images/blog/gut-brain-axis-probiotics/A.jpg" alt="ภาพสมองเชื่อมต่อกับลำไส้ด้วยเครือข่ายการสื่อสาร" width="2048" height="1449" loading="lazy" /></picture>
        <figcaption>ลำไส้และสมองสื่อสารกันตลอดเวลาแบบสองทาง ผ่านระบบ Gut-Brain Axis</figcaption>
      </figure>

      <h2>พลังของลำไส้</h2>
      <ol class="mag-list">
        <li><span class="mag-list-num" aria-hidden="true">01</span><h3>Gut-Brain Axis (ลำไส้กับสมอง)</h3><p>ลำไส้และสมองสื่อสารกันตลอดเวลา ส่งผลต่ออารมณ์ ความเครียด และการทำงานของสมอง</p></li>
        <li><span class="mag-list-num" aria-hidden="true">02</span><h3>ระบบภูมิคุ้มกัน</h3><p>ลำไส้ช่วยป้องกันเชื้อโรค เสริมภูมิคุ้มกัน และลดการอักเสบในร่างกาย</p></li>
        <li><span class="mag-list-num" aria-hidden="true">03</span><h3>อารมณ์และสุขภาพจิต</h3><p>ลำไส้มีบทบาทในการสร้างสารสื่อประสาท ช่วยให้อารมณ์สมดุล ลดความเครียด และช่วยให้สมองปลอดโปร่ง</p></li>
        <li><span class="mag-list-num" aria-hidden="true">04</span><h3>การดูดซึมและเมตาบอลิซึม</h3><p>ช่วยย่อยอาหาร สร้างวิตามิน และควบคุมน้ำหนัก</p></li>
        <li><span class="mag-list-num" aria-hidden="true">05</span><h3>การป้องกันโรค</h3><p>ลำไส้ที่ดีช่วยลดความเสี่ยงของโรคเรื้อรัง เช่น เบาหวาน โรคหัวใจ และการอักเสบ</p></li>
      </ol>

      <figure class="mag-figure mag-wide">
        <picture><source srcset="/images/blog/gut-brain-axis-probiotics/C.webp" type="image/webp" /><img src="/images/blog/gut-brain-axis-probiotics/C.jpg" alt="แผนภาพ Gut-Brain Axis แสดงความเชื่อมโยงระหว่างจุลินทรีย์ในลำไส้ สารสื่อประสาท อารมณ์ และความเครียด" width="2048" height="1365" loading="lazy" /></picture>
        <figcaption>Gut-Brain Axis: สมดุลของจุลินทรีย์ในลำไส้ส่งผลต่อสารสื่อประสาท อารมณ์ และความเครียด</figcaption>
      </figure>

      <h2>ทำไมโพรไบโอติกถึงสำคัญ</h2>
      <p>
        โพรไบโอติกช่วยปรับสมดุลลำไส้ และช่วยสร้าง <strong>SCFAs</strong> ซึ่งช่วยลดการอักเสบและเสริมภูมิคุ้มกัน
      </p>
      <aside class="mag-note">
        <p class="mag-eyebrow">รู้จักคำนี้</p>
        <p><strong>SCFAs (กรดไขมันสายสั้น)</strong> คือสารที่จุลินทรีย์ในลำไส้สร้างขึ้นเมื่อหมักย่อยใยอาหาร</p>
      </aside>

      <blockquote class="mag-pullquote mag-wide">
        <p>ลำไส้ถูกเรียกว่า “สมองที่สอง” เพราะมีการเชื่อมต่อกับสมองผ่านระบบ Gut-Brain Axis</p>
      </blockquote>

      <section class="mag-spotlight mag-wide">
        <div class="mag-spotlight-text">
          <p class="mag-eyebrow">ผลิตภัณฑ์แนะนำ</p>
          <h2>FLOWPRO แตกต่างอย่างไร</h2>
          <p>FLOWPRO ใช้ <em>Bacillus coagulans</em> BC198 ซึ่งเป็นโพรไบโอติกแบบสปอร์ ทนกรดและความร้อน พร้อมเทคโนโลยี 5-layer encapsulation ช่วยให้จุลินทรีย์รอดถึงลำไส้ ไม่ตายไปก่อน</p>
          <p>FLOWPRO ของ prove+ ผลิตโดย <strong>Syngen Biotech</strong> จากไต้หวัน ผู้เชี่ยวชาญโพรไบโอติกมากกว่า 20 ปี ด้วยทีม R&amp;D กว่า 200 คน</p>
          <dl class="mag-facts">
            <div><dt>สายพันธุ์</dt><dd><em>B. coagulans</em> BC198</dd></div>
            <div><dt>การปกป้อง</dt><dd>Encapsulation 5 ชั้น</dd></div>
            <div><dt>ผู้ผลิต</dt><dd>Syngen Biotech, ไต้หวัน</dd></div>
            <div><dt>ความเชี่ยวชาญ</dt><dd>20+ ปี · ทีม R&amp;D 200 คน</dd></div>
          </dl>
        </div>
        <figure class="mag-figure">
          <picture><source srcset="/images/blog/gut-brain-axis-probiotics/E.webp" type="image/webp" /><img src="/images/blog/gut-brain-axis-probiotics/E.jpg" alt="อินโฟกราฟิกอธิบายเทคโนโลยี Encapsulation ของ prove+ และใบรับรองจากเยอรมนี" width="1080" height="1350" loading="lazy" /></picture>
          <figcaption>Encapsulation คือการห่อหุ้มโพรไบโอติกด้วยสารเคลือบพิเศษ ช่วยให้รอดตั้งแต่การผลิต การเก็บรักษา และกรดในกระเพาะ จนถึงลำไส้ — prove+ ปกป้องจุลินทรีย์มากถึง 5 ชั้น ด้วยมาตรฐานจากเยอรมนี</figcaption>
        </figure>
      </section>

      <figure class="mag-figure mag-wide">
        <picture><source srcset="/images/blog/gut-brain-axis-probiotics/D.webp" type="image/webp" /><img src="/images/blog/gut-brain-axis-probiotics/D.jpg" alt="อินโฟกราฟิก 7 สิ่งที่ต้องดูเมื่อซื้ออาหารเสริมโพรไบโอติกส์" width="2048" height="1365" loading="lazy" /></picture>
        <figcaption>7 สิ่งที่ต้องดูเมื่อซื้ออาหารเสริมโพรไบโอติกส์: สายพันธุ์ ปริมาณจุลินทรีย์ งานวิจัยรองรับ การรอดถึงลำไส้ พรีไบโอติกส์ การเลือกตามปัญหา และรูปแบบที่กินต่อเนื่องได้สะดวก</figcaption>
      </figure>

      <div class="mag-ornament" aria-hidden="true">+</div>

      <h2>สรุป</h2>
      <p class="mag-end">
        ลำไส้คือพื้นฐานของสุขภาพทั้งหมด การเลือกโพรไบโอติกที่มีคุณภาพและน่าเชื่อถือจึงเป็นสิ่งสำคัญ
      </p>

      <div class="mag-tagline mag-wide">
        <p>PROVE+ — Proof in every dose, plus in every need</p>
        <p>พรูฟพลัส พรูฟแล้วว่าดี</p>
      </div>

      <section class="mag-cta mag-wide">
        <picture class="mag-cta-media"><source srcset="/images/blog/gut-brain-axis-probiotics/F.webp" type="image/webp" /><img src="/images/blog/gut-brain-axis-probiotics/F.jpg" alt="ผลิตภัณฑ์ PROVE+ FLOWPRO แบบกล่องและซอง" width="1080" height="1350" loading="lazy" /></picture>
        <div class="mag-cta-body">
          <p class="mag-eyebrow">ช่องทางสั่งซื้อ</p>
          <p class="mag-cta-title">เริ่มดูแลตัวเองได้แล้ววันนี้</p>
          <div class="mag-cta-links">
            <a href="https://shopee.co.th/proveplusthailand" target="_blank" rel="noopener noreferrer">Shopee <span>Prove+ Thailand</span></a>
            <a href="https://www.tiktok.com/@proveplus" target="_blank" rel="noopener noreferrer">TikTok <span>@proveplus</span></a>
            <a href="https://www.lazada.co.th/shop/nvjcwykx" target="_blank" rel="noopener noreferrer">Lazada <span>Prove+ Thailand</span></a>
          </div>
        </div>
      </section>
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
