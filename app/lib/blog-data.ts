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
            <a href="https://shopee.co.th/proveplusthailand" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">Shopee</a>
            <a href="https://www.tiktok.com/@proveplus" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">TikTok</a>
            <a href="https://www.lazada.co.th/shop/prove-th/" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">Lazada</a>
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
            <a href="https://shopee.co.th/proveplusthailand" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">Shopee</a>
            <a href="https://www.tiktok.com/@proveplus" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">TikTok</a>
            <a href="https://www.lazada.co.th/shop/prove-th/" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">Lazada</a>
          </div>
        </div>
      </div>
    `
  },
  {
    slug: 'sg105-gut-skin-axis-probiotic-skin',
    title: 'What Is the Gut-Skin Axis? Why Healthy Skin Starts in Your Gut – and Meet SG105',
    title_th: 'Gut-Skin Axis คืออะไร? ทำไมผิวดีเริ่มต้นที่ลำไส้ พร้อมรู้จัก SG105 โพรไบโอติกเพื่อผิวตามวัย',
    excerpt:
      'Discover the gut-skin axis and meet SG105, a unique probiotic strain from Syngen, Taiwan, studied for antioxidant activity and healthy skin aging.',
    excerpt_th:
      'ทำความรู้จัก Gut-Skin Axis และ SG105 โพรไบโอติกสายพันธุ์เฉพาะจาก Syngen ไต้หวัน ที่ถูกศึกษาเรื่องอนุมูลอิสระและการดูแลผิวตามวัย',
    date: 'October 2026',
    date_th: 'ตุลาคม 2026',
    author: 'prove+ Wellness Editorial Team',
    readTime: '8 min read',
    readTime_th: 'อ่าน 8 นาที',
    image: '/images/blog/sg105-gut-skin-axis-probiotic-skin/A.webp',
    tags: ['Beauty & Wellness', 'Gut-Skin Axis', 'SG105', 'LumiPro', 'Skin Health'],
    category: 'Beauty & Wellness',
    content: `
      <div style="margin-bottom: 2.5rem; padding: 1.5rem 1.75rem; border-radius: 22px; background: linear-gradient(135deg, #fff4f8 0%, #f4f2ff 100%); border: 1px solid #f1dce8;">
        <p style="margin: 0; color: #5b4778; font-size: 1.1rem; line-height: 1.8;"><strong>A practical guide to the gut-skin axis, oxidative stress and SG105</strong> — because healthy-looking skin is supported by both your skincare routine and what happens inside your body.</p>
      </div>

      <p style="font-size: 1.15rem; line-height: 1.9; color: #374151;">Have you noticed that when you sleep less, feel stressed or eat poorly, your skin looks dull and dry — even though you use the same skincare every day? Skin health does not depend only on what you put on your face. It is also shaped by what happens inside your body, especially in your gut.</p>
      <p style="font-size: 1.15rem; line-height: 1.9; color: #374151;">Scientists call this connection the <strong>gut-skin axis</strong>: two-way communication between gut microbes and the skin through the immune system, microbial metabolites and nutrient absorption [1][2]. This article explains how the gut affects the skin, what drives skin aging, and what research shows about SG105, a unique probiotic strain from Syngen, Taiwan.</p>

      <section style="margin: 3rem 0;">
        <h2 style="font-size: 1.85rem; color: #4456a6; margin-bottom: 1rem;">The Gut-Skin Axis: How Your Gut “Talks” to Your Skin</h2>
        <p style="line-height: 1.85; color: #4b5563;">The relationship is not a single pathway. It is a network connecting the gut microbiome, immune signals, the gut barrier and the nutrients that reach the skin.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin: 1.5rem 0 2rem;">
          <div style="padding: 1.25rem; border-radius: 18px; background: #f7f8ff; border: 1px solid #e4e7fb;"><strong style="color: #4456a6;">1. Immunity and inflammation</strong><p style="margin: .6rem 0 0; line-height: 1.7; color: #596273;">When gut bacteria fall out of balance (dysbiosis), the body can develop ongoing low-grade inflammation, which research links to many skin problems [2].</p></div>
          <div style="padding: 1.25rem; border-radius: 18px; background: #fff8f3; border: 1px solid #f7e5d8;"><strong style="color: #b16d3f;">2. What good bacteria produce</strong><p style="margin: .6rem 0 0; line-height: 1.7; color: #596273;">Beneficial bacteria produce short-chain fatty acids (SCFAs) and other compounds that support the gut barrier. These compounds enter the bloodstream and can affect the skin [2].</p></div>
          <div style="padding: 1.25rem; border-radius: 18px; background: #fff4f8; border: 1px solid #f2dce7;"><strong style="color: #c34c83;">3. Two similar barriers</strong><p style="margin: .6rem 0 0; line-height: 1.7; color: #596273;">The gut and the skin protect the body in similar ways. When the gut barrier is weak, the skin barrier is often affected too [1][2].</p></div>
          <div style="padding: 1.25rem; border-radius: 18px; background: #f4fbfa; border: 1px solid #dcefeb;"><strong style="color: #3f877c;">4. Nutrients for your skin</strong><p style="margin: .6rem 0 0; line-height: 1.7; color: #596273;">The vitamins and antioxidants your skin needs are absorbed through the gut. A balanced gut helps your body use them well.</p></div>
        </div>
        <figure style="margin: 2rem 0 0; text-align: center;"><picture><source srcset="/images/blog/sg105-gut-skin-axis-probiotic-skin/C.webp" type="image/webp" /><img src="/images/blog/sg105-gut-skin-axis-probiotic-skin/C.jpg" alt="Gut-skin axis: how the gut and skin communicate" style="width: 100%; max-height: 720px; object-fit: contain; border-radius: 20px;" /></picture><figcaption style="margin-top: .65rem; color: #8b93a3; font-size: .9rem;">The gut and the skin are connected through immunity, the gut barrier and microbial metabolites.</figcaption></figure>
      </section>

      <section style="margin: 3rem 0;">
        <h2 style="font-size: 1.85rem; color: #4456a6; margin-bottom: 1rem;">What Causes Skin Aging? Meet “Free Radicals”</h2>
        <p style="line-height: 1.85; color: #4b5563;">As we age, sun exposure, PM2.5 pollution, stress and poor sleep can create more <strong>free radicals</strong>. They can damage collagen, skin lipids and cell DNA. This is called oxidative stress and is one of the factors associated with wrinkles, sagging and dull skin [3].</p>
        <p style="line-height: 1.85; color: #4b5563;">The body has its own antioxidant enzymes, such as SOD (superoxide dismutase) and catalase, but this defence can weaken with age [3]. Aging (senescent) cells can also build up in the skin over time [4]. Blood sugar matters too: high blood sugar drives glycation, which makes collagen stiffer and more brittle, so skin loses elasticity [5].</p>
      </section>

      <section style="margin: 3rem 0; padding: 2rem; border-radius: 24px; background: linear-gradient(135deg, #fff1f7 0%, #f8f3ff 100%);">
        <h2 style="font-size: 1.85rem; color: #a84979; margin: 0 0 1rem;">What Is SG105?</h2>
        <p style="line-height: 1.85; color: #4b5563;">SG105 is the probiotic strain <strong>Bifidobacterium animalis subsp. lactis SG105</strong>, selected and developed by Syngen Biotech in Taiwan, a probiotic specialist with more than 20 years of experience.</p>
        <p style="line-height: 1.85; color: #4b5563; margin-bottom: 0;">Why does the strain code matter? Probiotic benefits are strain-specific. Two strains of <em>Bifidobacterium lactis</em> can act differently, so it is important to check both the strain name and its code [6].</p>
        <figure style="margin: 2rem 0 0; text-align: center;"><picture><source srcset="/images/blog/sg105-gut-skin-axis-probiotic-skin/B.webp" type="image/webp" /><img src="/images/blog/sg105-gut-skin-axis-probiotic-skin/B.jpg" alt="SG105 probiotic strain infographic" style="width: 100%; max-height: 700px; object-fit: contain; border-radius: 20px;" /></picture><figcaption style="margin-top: .65rem; color: #8b93a3; font-size: .9rem;">SG105 is a strain-specific probiotic developed by Syngen Biotech, Taiwan.</figcaption></figure>
      </section>

      <section style="margin: 3rem 0;">
        <h2 style="font-size: 1.85rem; color: #4456a6; margin-bottom: 1rem;">What the Research on SG105 Shows</h2>
        <p style="line-height: 1.85; color: #4b5563;">In cell studies, SG105 reduced SA-β-gal, a marker associated with aging cells [4][7]. In a study where aging mice received SG105 for 13 weeks, researchers found the following changes [7]:</p>
        <div style="overflow-x: auto; margin: 1.5rem 0; border: 1px solid #e5e7eb; border-radius: 16px;">
          <table style="width: 100%; min-width: 620px; border-collapse: collapse; font-size: .96rem;">
            <thead><tr style="background: #4456a6; color: white;"><th style="padding: .9rem 1rem; text-align: left; color: #ffffff !important; background: #4456a6; font-weight: 700;">Marker</th><th style="padding: .9rem 1rem; text-align: left; color: #ffffff !important; background: #4456a6; font-weight: 700;">What it means</th><th style="padding: .9rem 1rem; text-align: right; color: #ffffff !important; background: #4456a6; font-weight: 700;">Result</th></tr></thead>
            <tbody>
              <tr><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;"><strong>TBARS (brain)</strong></td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;">Fat damage from free radicals</td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb; text-align: right; color: #b14778; font-weight: 700;">37% lower</td></tr>
              <tr style="background: #fafbff;"><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;"><strong>8-OHdG (brain)</strong></td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;">DNA damage from free radicals</td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb; text-align: right; color: #b14778; font-weight: 700;">42% lower</td></tr>
              <tr><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;"><strong>SOD</strong></td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;">Antioxidant enzyme</td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb; text-align: right; color: #3f877c; font-weight: 700;">49% higher</td></tr>
              <tr style="background: #fafbff;"><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;"><strong>Catalase</strong></td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;">Antioxidant enzyme</td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb; text-align: right; color: #3f877c; font-weight: 700;">31% higher</td></tr>
              <tr><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;"><strong>Blood sugar</strong></td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;">Linked to glycation</td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb; text-align: right; color: #b14778; font-weight: 700;">23% lower</td></tr>
              <tr style="background: #fafbff;"><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;"><strong>HDL</strong></td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;">“Good” cholesterol</td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb; text-align: right; color: #3f877c; font-weight: 700;">29% higher</td></tr>
            </tbody>
          </table>
        </div>
        <p style="line-height: 1.85; color: #4b5563;">The mice given SG105 also had better fur and skin condition than the control group [7]. SG105 was also reported to remain stable at 100 billion CFU per gram for 24 months at 25°C [7].</p>
        <div style="padding: 1rem 1.25rem; border-left: 4px solid #d18aa8; background: #fff8fb; border-radius: 0 12px 12px 0; color: #6b4a5a; line-height: 1.75;"><strong>Important note:</strong> these are laboratory and animal-study results from Syngen Biotech. They are early evidence that helps explain how SG105 may work; they are not results from human trials.</div>
        <figure style="margin: 2rem 0 0; text-align: center;"><picture><source srcset="/images/blog/sg105-gut-skin-axis-probiotic-skin/D.webp" type="image/webp" /><img src="/images/blog/sg105-gut-skin-axis-probiotic-skin/D.jpg" alt="SG105 research metrics infographic" style="width: 100%; max-height: 700px; object-fit: contain; border-radius: 20px;" /></picture><figcaption style="margin-top: .65rem; color: #8b93a3; font-size: .9rem;">Research metrics from the source material: 13-week aging-mice study.</figcaption></figure>
      </section>

      <section style="margin: 3rem 0;">
        <h2 style="font-size: 1.85rem; color: #4456a6; margin-bottom: 1rem;">More Than a Probiotic: Premium Ingredients for Skin</h2>
        <div style="display: grid; gap: 1rem;">
          <div style="padding: 1.25rem 1.5rem; border-radius: 18px; background: #fffaf2; border: 1px solid #f2e3c5;"><h3 style="margin: 0 0 .5rem; color: #a3712c;">Japanese rice extract PHYTOCERA®</h3><p style="margin: 0; line-height: 1.8; color: #596273;">Ceramides are lipids that help build the skin barrier and hold in moisture, but they decrease with age. Human studies found that orally consumed rice glucosylceramides reduced transepidermal water loss (TEWL) [8][9].</p></div>
          <div style="padding: 1.25rem 1.5rem; border-radius: 18px; background: #fff5f8; border: 1px solid #f0d8e1;"><h3 style="margin: 0 0 .5rem; color: #a84979;">Bird’s nest extract</h3><p style="margin: 0; line-height: 1.8; color: #596273;">Bird’s nest contains sialic acid, which is involved in cell renewal. A recent 90-day study in volunteers reported improved skin moisture [10].</p></div>
          <div style="padding: 1.25rem 1.5rem; border-radius: 18px; background: #f5fbf4; border: 1px solid #dcebd7;"><h3 style="margin: 0 0 .5rem; color: #4d8660;">Vitamin C</h3><p style="margin: 0; line-height: 1.8; color: #596273;">Vitamin C is an antioxidant, and the body needs it to make collagen [11].</p></div>
        </div>
      </section>

      <section style="margin: 3rem 0; padding: 2rem; border-radius: 24px; background: linear-gradient(135deg, #f4f5ff 0%, #fff4f8 100%);">
        <h2 style="font-size: 1.85rem; color: #4456a6; margin: 0 0 1rem;">What Makes LumiPro Different?</h2>
        <p style="line-height: 1.85; color: #4b5563;">LumiPro by Prove+ combines SG105 with skin-supporting ingredients in one convenient sachet:</p>
        <ul style="margin: 0; padding-left: 1.25rem; color: #4b5563; line-height: 1.9;">
          <li>SG105 as the hero strain, plus four more probiotic strains including <strong>Bacillus coagulans BC198</strong>, and two prebiotics (synbiotics).</li>
          <li>PHYTOCERA® Japanese rice extract, bird’s nest extract and vitamin C for support from within.</li>
          <li>Five-layer encapsulation technology designed to help probiotics survive stomach acid and reach the gut; registered in Germany.</li>
          <li>Yogurt-flavoured fine granules — tear the sachet and take it without water.</li>
          <li>Made by Syngen Biotech in Taiwan to GMP PIC/S, ISO 22000 and NSF standards.</li>
        </ul>
      </section>

      <section style="margin: 3rem 0; display: flex; flex-wrap: wrap; gap: 2rem; align-items: center;">
        <div style="flex: 1 1 280px;"><h2 style="font-size: 1.85rem; color: #4456a6; margin: 0 0 1rem;">How to Take LumiPro for Best Results</h2><p style="line-height: 1.85; color: #4b5563;">Take <strong>one sachet a day on an empty stomach</strong>, for example 30 minutes before breakfast, when stomach acid is lower and more bacteria may survive. Most importantly, take it consistently every day.</p></div>
        <div style="flex: 1 1 280px;"><picture><source srcset="/images/blog/sg105-gut-skin-axis-probiotic-skin/E.webp" type="image/webp" /><img src="/images/blog/sg105-gut-skin-axis-probiotic-skin/E.jpg" alt="Daily lifestyle tips for gut and skin support" style="width: 100%; border-radius: 20px;" /></picture></div>
      </section>

      <section style="margin: 3rem 0;">
        <h2 style="font-size: 1.85rem; color: #4456a6; margin-bottom: 1.25rem;">Frequently Asked Questions</h2>
        <div style="display: grid; gap: 1rem;">
          <div><h3 style="margin: 0 0 .35rem; color: #a84979; font-size: 1.2rem;">How is SG105 different from other probiotics?</h3><p style="margin: 0; line-height: 1.8; color: #596273;">Many probiotics are studied for digestion. SG105 has been studied for free radicals and cell aging, which connect to the skin through the gut-skin axis [7].</p></div>
          <div><h3 style="margin: 0 0 .35rem; color: #a84979; font-size: 1.2rem;">How long before I see a difference in my skin?</h3><p style="margin: 0; line-height: 1.8; color: #596273;">Skin renews itself in about four weeks, and this can take longer as we age. The source article suggests taking LumiPro daily for at least 2–3 months and observing your own results. Results vary from person to person.</p></div>
          <div><h3 style="margin: 0 0 .35rem; color: #a84979; font-size: 1.2rem;">Can LumiPro replace sunscreen or skincare?</h3><p style="margin: 0; line-height: 1.8; color: #596273;">No. LumiPro supports your skin from within, but your skin still needs outside protection. Use sunscreen daily, sleep enough and drink enough water.</p></div>
          <div><h3 style="margin: 0 0 .35rem; color: #a84979; font-size: 1.2rem;">Who can take LumiPro?</h3><p style="margin: 0; line-height: 1.8; color: #596273;">Adults and children aged three and above. Pregnant women and people with medical conditions should ask a doctor first. It is not recommended for people with a cow’s-milk allergy because it contains milk ingredients.</p></div>
          <div><h3 style="margin: 0 0 .35rem; color: #a84979; font-size: 1.2rem;">Can I take it with FlowPro or AllerPro?</h3><p style="margin: 0; line-height: 1.8; color: #596273;">It can be taken with other supplements. Take it at least two hours apart from antibiotics.</p></div>
        </div>
      </section>

      <section style="margin: 3rem 0;">
        <h2 style="font-size: 1.85rem; color: #4456a6; margin-bottom: 1rem;">The Takeaway</h2>
        <p style="font-size: 1.15rem; line-height: 1.9; color: #374151;">Healthy skin starts with a balanced gut, so caring for skin as we age works best from both outside and inside. LumiPro by Prove+ combines SG105, a unique strain studied for antioxidant activity, with Japanese rice extract and bird’s nest to support your skin from within every day.</p>
        <blockquote style="border-left: 4px solid #d27fa4; padding: 1.25rem 1.5rem; margin: 1.5rem 0; background: linear-gradient(135deg, #fff5f8 0%, #f5f3ff 100%); border-radius: 0 14px 14px 0; font-size: 1.15rem; color: #a84979;">PROVE+ — Proof in every dose, plus in every need</blockquote>
      </section>

      <div style="margin: 3rem 0; display: flex; flex-wrap: wrap; gap: 1.5rem; align-items: center; padding: 1.5rem; border-radius: 24px; background: linear-gradient(135deg, #fff0f7 0%, #f5f3ff 100%);"><div style="flex: 1 1 220px; text-align: center;"><img src="/images/products/lumipro/lumipro-product.png" alt="LumiPro SG105 yogurt-flavoured probiotic from Prove+" style="width: 100%; max-width: 360px; max-height: 360px; object-fit: contain; border-radius: 20px;" /></div><div style="flex: 1 1 280px;"><h3 style="margin: 0 0 .6rem; color: #4456a6;">Meet LumiPro</h3><p style="margin: 0 0 1rem; line-height: 1.8; color: #596273;">A yogurt-flavoured synbiotic with SG105 and skin-supporting ingredients in one easy daily sachet.</p><a href="/products/lumipro" style="display: inline-flex; padding: .7rem 1.2rem; border-radius: 999px; background: #4456a6; color: white; text-decoration: none; font-weight: 700;">Explore LumiPro</a></div></div>
     <div style="margin: 3rem 0; padding: 2rem; text-align: center; border-radius: 24px; background: #4456a6; color: white;"><h3 style="margin: 0 0 1.2rem; color: white;">Start caring for your skin from within</h3><div style="display: flex; flex-wrap: wrap; justify-content: center; gap: .75rem;"><a href="https://shopee.co.th/proveplusthailand" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none; padding: .6rem 1.2rem; border: 1px solid rgba(255,255,255,.45); border-radius: 999px;">Shopee</a><a href="https://www.tiktok.com/@proveplus" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none; padding: .6rem 1.2rem; border: 1px solid rgba(255,255,255,.45); border-radius: 999px;">TikTok</a><a href="https://www.lazada.co.th/shop/prove-th/" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none; padding: .6rem 1.2rem; border: 1px solid rgba(255,255,255,.45); border-radius: 999px;">Lazada</a></div></div>

      <div style="margin-top: 2.5rem; padding: 1rem 1.25rem; border-radius: 12px; background: #f8f8f8; color: #6b7280; font-size: .9rem; line-height: 1.75;">This dietary supplement is not intended to diagnose, treat, cure or prevent any disease.</div>
      <details style="margin-top: 2.5rem; color: #6b7280;"><summary style="cursor: pointer; font-weight: 700; color: #4456a6;">References</summary><ol style="line-height: 1.75; padding-left: 1.3rem;"><li>Salem, I., Ramser, A., Isham, N., &amp; Ghannoum, M.A. (2018). The Gut Microbiome as a Major Regulator of the Gut-Skin Axis. <em>Frontiers in Microbiology</em>, 9, 1459.</li><li>De Pessemier, B. et al. (2021). Gut–Skin Axis: Current Knowledge of the Interrelationship between Microbial Dysbiosis and Skin Conditions. <em>Microorganisms</em>, 9(2), 353.</li><li>Rinnerthaler, M. et al. (2015). Oxidative Stress in Aging Human Skin. <em>Biomolecules</em>, 5(2), 545–589.</li><li>Wang, A.S. &amp; Dreesen, O. (2018). Biomarkers of Cellular Senescence and Skin Aging. <em>Frontiers in Genetics</em>, 9, 247.</li><li>Gkogkolou, P. &amp; Böhm, M. (2012). Advanced glycation end products: Key players in skin aging? <em>Dermato-Endocrinology</em>, 4(3), 259–270.</li><li>Hill, C. et al. (2014). Expert consensus document on the scope and appropriate use of the term probiotic. <em>Nature Reviews Gastroenterology &amp; Hepatology</em>, 11(8), 506–514.</li><li>Syngen Biotech (Taiwan). Bifidobacterium animalis subsp. lactis SG105 in vitro, in vivo and stability data. Manufacturer technical data.</li><li>Uchiyama, T. et al. (2008). Oral Intake of Glucosylceramide. <em>Journal of Health Science</em>, 54(5), 559–566.</li><li>Takara, T. et al. (2021). Oryza Ceramide® and facial skin dehydration in Japanese subjects. <em>Functional Foods in Health and Disease</em>, 11(8), 385–407.</li><li>Zhang, W. et al. (2026). Dietary edible bird’s nest improves skin hydration. <em>Journal of Functional Foods</em>, 140.</li><li>Pullar, J.M., Carr, A.C. &amp; Vissers, M.C.M. (2017). The Roles of Vitamin C in Skin Health. <em>Nutrients</em>, 9(8), 866.</li></ol></details>
    `,
    content_th: `
      <div style="margin-bottom: 2.5rem; padding: 1.5rem 1.75rem; border-radius: 22px; background: linear-gradient(135deg, #fff4f8 0%, #f4f2ff 100%); border: 1px solid #f1dce8;"><p style="margin: 0; color: #5b4778; font-size: 1.1rem; line-height: 1.8;"><strong>บทความนี้จะพาไปรู้จัก Gut-Skin Axis อนุมูลอิสระ และ SG105</strong> — เพราะผิวที่ดูสุขภาพดีได้รับการดูแลทั้งจากสกินแคร์ภายนอกและสิ่งที่เกิดขึ้นภายในร่างกาย</p></div>

      <p style="font-size: 1.15rem; line-height: 1.9; color: #374151;">เคยสังเกตไหมว่าช่วงที่นอนน้อย เครียด หรือกินอาหารไม่ค่อยดี ผิวมักดูหมอง แห้ง และไม่สดใสเหมือนเดิม ทั้งที่ยังใช้สกินแคร์ตัวเดิมทุกวัน? สุขภาพผิวไม่ได้ขึ้นอยู่กับสิ่งที่ทาจากภายนอกเพียงอย่างเดียว แต่ยังเกี่ยวข้องกับสิ่งที่เกิดขึ้นภายในร่างกาย โดยเฉพาะที่ <strong>ลำไส้</strong></p>
      <p style="font-size: 1.15rem; line-height: 1.9; color: #374151;">นักวิจัยเรียกความเชื่อมโยงนี้ว่า <strong>Gut-Skin Axis หรือแกนลำไส้-ผิว</strong> ซึ่งเป็นการสื่อสารระหว่างจุลินทรีย์ในลำไส้กับผิวหนังผ่านระบบภูมิคุ้มกัน สารที่จุลินทรีย์ผลิต และการดูดซึมสารอาหาร [1][2] บทความนี้จะอธิบายว่าลำไส้ส่งผลต่อผิวอย่างไร ผิวแก่ตามวัยเกิดจากอะไร และงานวิจัยของ SG105 โพรไบโอติกสายพันธุ์เฉพาะจาก Syngen ไต้หวัน มีข้อมูลอะไรบ้าง</p>

      <section style="margin: 3rem 0;"><h2 style="font-size: 1.85rem; color: #4456a6; margin-bottom: 1rem;">Gut-Skin Axis: ลำไส้ “คุย” กับผิวได้อย่างไร</h2><p style="line-height: 1.85; color: #4b5563;">ความสัมพันธ์นี้ไม่ได้เกิดจากเส้นทางเดียว แต่เป็นเครือข่ายที่เชื่อมโยงจุลินทรีย์ในลำไส้ สัญญาณภูมิคุ้มกัน เกราะป้องกันลำไส้ และสารอาหารที่ไปถึงผิว</p><div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin: 1.5rem 0 2rem;"><div style="padding: 1.25rem; border-radius: 18px; background: #f7f8ff; border: 1px solid #e4e7fb;"><strong style="color: #4456a6;">1. ระบบภูมิคุ้มกันและการอักเสบ</strong><p style="margin: .6rem 0 0; line-height: 1.7; color: #596273;">เมื่อจุลินทรีย์ในลำไส้เสียสมดุล (dysbiosis) ร่างกายอาจเกิดการอักเสบระดับต่ำอย่างต่อเนื่อง ซึ่งงานวิจัยพบว่าเกี่ยวข้องกับปัญหาผิวหลายอย่าง [2]</p></div><div style="padding: 1.25rem; border-radius: 18px; background: #fff8f3; border: 1px solid #f7e5d8;"><strong style="color: #b16d3f;">2. สารที่จุลินทรีย์ดีผลิต</strong><p style="margin: .6rem 0 0; line-height: 1.7; color: #596273;">จุลินทรีย์ดีผลิตกรดไขมันสายสั้น (SCFAs) และสารอื่น ๆ ที่ช่วยเสริมเกราะป้องกันของลำไส้ สารเหล่านี้เข้าสู่กระแสเลือดและมีผลต่อผิวได้ [2]</p></div><div style="padding: 1.25rem; border-radius: 18px; background: #fff4f8; border: 1px solid #f2dce7;"><strong style="color: #c34c83;">3. เกราะป้องกันที่ทำงานคล้ายกัน</strong><p style="margin: .6rem 0 0; line-height: 1.7; color: #596273;">ทั้งลำไส้และผิวมีเกราะป้องกันที่คล้ายกัน เมื่อเกราะในลำไส้อ่อนแอ เกราะของผิวก็มักได้รับผลกระทบตามไปด้วย [1][2]</p></div><div style="padding: 1.25rem; border-radius: 18px; background: #f4fbfa; border: 1px solid #dcefeb;"><strong style="color: #3f877c;">4. การดูดซึมสารอาหารเพื่อผิว</strong><p style="margin: .6rem 0 0; line-height: 1.7; color: #596273;">วิตามินและสารต้านอนุมูลอิสระที่ผิวต้องการต้องถูกดูดซึมผ่านลำไส้ ลำไส้ที่สมดุลจึงช่วยให้ร่างกายใช้สารอาหารเหล่านี้ได้ดีขึ้น</p></div></div><figure style="margin: 2rem 0 0; text-align: center;"><picture><source srcset="/images/blog/sg105-gut-skin-axis-probiotic-skin/C.webp" type="image/webp" /><img src="/images/blog/sg105-gut-skin-axis-probiotic-skin/C.jpg" alt="ภาพอธิบายความเชื่อมโยงระหว่างลำไส้กับผิว" style="width: 100%; max-height: 720px; object-fit: contain; border-radius: 20px;" /></picture><figcaption style="margin-top: .65rem; color: #8b93a3; font-size: .9rem;">ลำไส้และผิวเชื่อมโยงกันผ่านภูมิคุ้มกัน เกราะป้องกัน และสารที่จุลินทรีย์ผลิต</figcaption></figure></section>

      <section style="margin: 3rem 0;"><h2 style="font-size: 1.85rem; color: #4456a6; margin-bottom: 1rem;">ผิวแก่ตามวัยเกิดจากอะไร? รู้จัก “อนุมูลอิสระ”</h2><p style="line-height: 1.85; color: #4b5563;">เมื่ออายุมากขึ้น แสงแดด ฝุ่น PM2.5 ความเครียด และการพักผ่อนไม่พออาจทำให้เกิด <strong>อนุมูลอิสระ</strong> มากขึ้น อนุมูลอิสระทำลายคอลลาเจน ไขมันในผิว และ DNA ของเซลล์ ภาวะนี้เรียกว่า oxidative stress และเป็นหนึ่งในปัจจัยที่เกี่ยวข้องกับริ้วรอย ผิวหย่อนคล้อย และผิวหมอง [3]</p><p style="line-height: 1.85; color: #4b5563;">ร่างกายมีเอนไซม์ต้านอนุมูลอิสระของตัวเอง เช่น SOD (superoxide dismutase) และ catalase แต่ระบบนี้อาจทำงานได้น้อยลงตามอายุ [3] นอกจากนี้ เซลล์ที่เสื่อมสภาพ (senescent cells) ยังสะสมในผิวมากขึ้นเมื่อเราอายุมากขึ้น [4] น้ำตาลในเลือดก็เป็นอีกปัจจัย เพราะน้ำตาลที่สูงเกินไปทำให้เกิด glycation ซึ่งทำให้คอลลาเจนแข็งและเปราะ ผิวจึงสูญเสียความยืดหยุ่น [5]</p></section>

      <section style="margin: 3rem 0; padding: 2rem; border-radius: 24px; background: linear-gradient(135deg, #fff1f7 0%, #f8f3ff 100%);"><h2 style="font-size: 1.85rem; color: #a84979; margin: 0 0 1rem;">SG105 คืออะไร?</h2><p style="line-height: 1.85; color: #4b5563;">SG105 คือโพรไบโอติกสายพันธุ์ <strong>Bifidobacterium animalis subsp. lactis SG105</strong> ที่คัดเลือกและพัฒนาโดย Syngen Biotech ประเทศไต้หวัน ผู้เชี่ยวชาญด้านโพรไบโอติกมากกว่า 20 ปี</p><p style="line-height: 1.85; color: #4b5563; margin-bottom: 0;">ทำไมรหัสสายพันธุ์จึงสำคัญ? เพราะประโยชน์ของโพรไบโอติกเป็นแบบ “เฉพาะสายพันธุ์” Bifidobacterium lactis ต่างสายพันธุ์อาจให้ผลไม่เหมือนกัน การเลือกโพรไบโอติกจึงควรดูทั้งชื่อสายพันธุ์และรหัส [6]</p></section>

      <section style="margin: 3rem 0;"><h2 style="font-size: 1.85rem; color: #4456a6; margin-bottom: 1rem;">ผลการศึกษาของ SG105</h2><p style="line-height: 1.85; color: #4b5563;">ในการศึกษาระดับเซลล์ SG105 ช่วยลดค่า SA-β-gal ซึ่งเป็นตัวบ่งชี้ของเซลล์ที่เสื่อมสภาพ [4][7] และในการศึกษาในหนูสูงวัยที่ได้รับ SG105 เป็นเวลา 13 สัปดาห์ พบผลดังนี้ [7]</p><div style="overflow-x: auto; margin: 1.5rem 0; border: 1px solid #e5e7eb; border-radius: 16px;"><table style="width: 100%; min-width: 620px; border-collapse: collapse; font-size: .96rem;"><thead><tr style="background: #4456a6; color: white;"><th style="padding: .9rem 1rem; text-align: left; color: #ffffff !important; background: #4456a6; font-weight: 700;">ตัวชี้วัด</th><th style="padding: .9rem 1rem; text-align: left; color: #ffffff !important; background: #4456a6; font-weight: 700;">หมายถึง</th><th style="padding: .9rem 1rem; text-align: right; color: #ffffff !important; background: #4456a6; font-weight: 700;">ผลที่พบ</th></tr></thead><tbody><tr><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;"><strong>TBARS (ในสมอง)</strong></td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;">การทำลายไขมันจากอนุมูลอิสระ</td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb; text-align: right; color: #b14778; font-weight: 700;">ลดลง 37%</td></tr><tr style="background: #fafbff;"><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;"><strong>8-OHdG (ในสมอง)</strong></td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;">ความเสียหายของ DNA จากอนุมูลอิสระ</td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb; text-align: right; color: #b14778; font-weight: 700;">ลดลง 42%</td></tr><tr><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;"><strong>SOD</strong></td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;">เอนไซม์ต้านอนุมูลอิสระ</td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb; text-align: right; color: #3f877c; font-weight: 700;">เพิ่มขึ้น 49%</td></tr><tr style="background: #fafbff;"><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;"><strong>Catalase</strong></td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;">เอนไซม์ต้านอนุมูลอิสระ</td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb; text-align: right; color: #3f877c; font-weight: 700;">เพิ่มขึ้น 31%</td></tr><tr><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;"><strong>น้ำตาลในเลือด</strong></td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;">ปัจจัยที่เกี่ยวกับ glycation</td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb; text-align: right; color: #b14778; font-weight: 700;">ลดลง 23%</td></tr><tr style="background: #fafbff;"><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;"><strong>HDL</strong></td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb;">คอเลสเตอรอลชนิดดี</td><td style="padding: .85rem 1rem; border-top: 1px solid #e5e7eb; text-align: right; color: #3f877c; font-weight: 700;">เพิ่มขึ้น 29%</td></tr></tbody></table></div><p style="line-height: 1.85; color: #4b5563;">นอกจากนี้ หนูกลุ่มที่ได้รับ SG105 ยังมีลักษณะขนและผิวที่ดีกว่ากลุ่มควบคุม [7] และ SG105 มีข้อมูลความคงตัวที่ 100,000 ล้าน CFU/กรัม นาน 24 เดือนที่อุณหภูมิ 25°C [7]</p><div style="padding: 1rem 1.25rem; border-left: 4px solid #d18aa8; background: #fff8fb; border-radius: 0 12px 12px 0; color: #6b4a5a; line-height: 1.75;"><strong>หมายเหตุสำคัญ:</strong> ข้อมูลข้างต้นเป็นงานวิจัยในห้องปฏิบัติการและสัตว์ทดลองโดย Syngen Biotech เป็นหลักฐานเบื้องต้นเพื่อช่วยอธิบายกลไก ยังไม่ใช่ผลการทดลองในคน</div><figure style="margin: 2rem 0 0; text-align: center;"><picture><source srcset="/images/blog/sg105-gut-skin-axis-probiotic-skin/B.webp" type="image/webp" /><img src="/images/blog/sg105-gut-skin-axis-probiotic-skin/B.jpg" alt="อินโฟกราฟิกข้อมูลการศึกษาของโพรไบโอติก SG105" style="width: 100%; max-height: 700px; object-fit: contain; border-radius: 20px;" /></picture><figcaption style="margin-top: .65rem; color: #8b93a3; font-size: .9rem;">SG105: โพรไบโอติกสายพันธุ์เฉพาะสำหรับการดูแลลำไส้และผิวในชีวิตประจำวัน</figcaption></figure></section>

      <figure style="margin: 2rem 0 0; text-align: center;"><picture><source srcset="/images/blog/sg105-gut-skin-axis-probiotic-skin/D.webp" type="image/webp" /><img src="/images/blog/sg105-gut-skin-axis-probiotic-skin/D.jpg" alt="อินโฟกราฟิกผลการศึกษาของ SG105" style="width: 100%; max-height: 700px; object-fit: contain; border-radius: 20px;" /></picture><figcaption style="margin-top: .65rem; color: #8b93a3; font-size: .9rem;">อินโฟกราฟิกผลการศึกษาในหนูสูงวัยเป็นเวลา 13 สัปดาห์จากข้อมูลต้นฉบับ</figcaption></figure>
     <section style="margin: 3rem 0;"><h2 style="font-size: 1.85rem; color: #4456a6; margin-bottom: 1rem;">ไม่ใช่แค่โพรไบโอติก: สารสกัดพรีเมียมเพื่อผิว</h2><div style="display: grid; gap: 1rem;"><div style="padding: 1.25rem 1.5rem; border-radius: 18px; background: #fffaf2; border: 1px solid #f2e3c5;"><h3 style="margin: 0 0 .5rem; color: #a3712c;">สารสกัดข้าวญี่ปุ่น PHYTOCERA®</h3><p style="margin: 0; line-height: 1.8; color: #596273;">เซราไมด์คือไขมันที่ช่วยสร้างเกราะป้องกันผิวและกักเก็บความชุ่มชื้น แต่จะลดลงตามอายุ งานวิจัยในคนพบว่าการรับประทานกลูโคซิลเซราไมด์จากข้าวช่วยลดการสูญเสียน้ำผ่านผิว (TEWL) ได้ [8][9]</p></div><div style="padding: 1.25rem 1.5rem; border-radius: 18px; background: #fff5f8; border: 1px solid #f0d8e1;"><h3 style="margin: 0 0 .5rem; color: #a84979;">สารสกัดรังนก</h3><p style="margin: 0; line-height: 1.8; color: #596273;">รังนกมีกรดไซอะลิก (sialic acid) ซึ่งเกี่ยวข้องกับการฟื้นฟูเซลล์ งานวิจัยในอาสาสมัครที่รับประทานรังนกเป็นเวลา 90 วันรายงานว่าผิวมีความชุ่มชื้นเพิ่มขึ้น [10]</p></div><div style="padding: 1.25rem 1.5rem; border-radius: 18px; background: #f5fbf4; border: 1px solid #dcebd7;"><h3 style="margin: 0 0 .5rem; color: #4d8660;">วิตามินซี</h3><p style="margin: 0; line-height: 1.8; color: #596273;">วิตามินซีเป็นสารต้านอนุมูลอิสระ และร่างกายต้องใช้วิตามินซีในการสร้างคอลลาเจน [11]</p></div></div></section>

      <section style="margin: 3rem 0; padding: 2rem; border-radius: 24px; background: linear-gradient(135deg, #f4f5ff 0%, #fff4f8 100%);"><h2 style="font-size: 1.85rem; color: #4456a6; margin: 0 0 1rem;">LumiPro แตกต่างอย่างไร?</h2><p style="line-height: 1.85; color: #4b5563;">LumiPro จาก Prove+ รวม SG105 เข้ากับสารสกัดเพื่อผิวไว้ในซองเดียว:</p><ul style="margin: 0; padding-left: 1.25rem; color: #4b5563; line-height: 1.9;"><li>SG105 เป็นสายพันธุ์หลัก พร้อมโพรไบโอติกอีก 4 สายพันธุ์ รวมถึง <strong>Bacillus coagulans BC198</strong> และพรีไบโอติก 2 ชนิด (synbiotics)</li><li>PHYTOCERA® จากข้าวญี่ปุ่น + สารสกัดรังนก + วิตามินซี เพื่อช่วยดูแลผิวจากภายใน</li><li>เทคโนโลยี 5-layer encapsulation เคลือบ 5 ชั้น ช่วยให้โพรไบโอติกรอดผ่านกรดในกระเพาะไปถึงลำไส้ และได้รับการจดทะเบียนสิทธิบัตรจากเยอรมนี</li><li>เม็ดจิ๋วรสโยเกิร์ต ฉีกซองทานได้เลย ไม่ต้องดื่มน้ำตาม</li><li>ผลิตโดย Syngen Biotech ไต้หวัน ตามมาตรฐาน GMP PIC/S, ISO 22000 และ NSF</li></ul></section>

      <section style="margin: 3rem 0; display: flex; flex-wrap: wrap; gap: 2rem; align-items: center;"><div style="flex: 1 1 280px;"><h2 style="font-size: 1.85rem; color: #4456a6; margin: 0 0 1rem;">ทาน LumiPro อย่างไรให้ได้ผลดีที่สุด</h2><p style="line-height: 1.85; color: #4b5563;">ทาน <strong>วันละ 1 ซอง ตอนท้องว่าง</strong> เช่น 30 นาทีก่อนอาหารเช้า ซึ่งเป็นช่วงที่กรดในกระเพาะต่ำและจุลินทรีย์อาจรอดไปถึงลำไส้ได้มากขึ้น สิ่งสำคัญที่สุดคือทานให้สม่ำเสมอทุกวัน</p></div><div style="flex: 1 1 280px;"><picture><source srcset="/images/blog/sg105-gut-skin-axis-probiotic-skin/E.webp" type="image/webp" /><img src="/images/blog/sg105-gut-skin-axis-probiotic-skin/E.jpg" alt="คำแนะนำการดูแลลำไส้และผิวในชีวิตประจำวัน" style="width: 100%; border-radius: 20px;" /></picture></div></section>

      <section style="margin: 3rem 0;"><h2 style="font-size: 1.85rem; color: #4456a6; margin-bottom: 1.25rem;">คำถามที่พบบ่อย (FAQ)</h2><div style="display: grid; gap: 1rem;"><div><h3 style="margin: 0 0 .35rem; color: #a84979; font-size: 1.2rem;">SG105 ต่างจากโพรไบโอติกทั่วไปอย่างไร?</h3><p style="margin: 0; line-height: 1.8; color: #596273;">โพรไบโอติกส่วนใหญ่ถูกศึกษาด้านระบบขับถ่าย ส่วน SG105 ถูกศึกษาเรื่องอนุมูลอิสระและการเสื่อมของเซลล์ตามวัย ซึ่งเชื่อมโยงกับผิวผ่าน Gut-Skin Axis [7]</p></div><div><h3 style="margin: 0 0 .35rem; color: #a84979; font-size: 1.2rem;">ต้องทานนานแค่ไหนถึงจะเห็นความเปลี่ยนแปลงของผิว?</h3><p style="margin: 0; line-height: 1.8; color: #596273;">ผิวใช้เวลาผลัดเซลล์ใหม่ประมาณ 4 สัปดาห์ และอาจนานขึ้นเมื่ออายุมากขึ้น บทความต้นฉบับแนะนำให้ทานต่อเนื่องอย่างน้อย 2–3 เดือน แล้วสังเกตผลด้วยตัวเอง ทั้งนี้ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล</p></div><div><h3 style="margin: 0 0 .35rem; color: #a84979; font-size: 1.2rem;">ทาน LumiPro แทนครีมกันแดดหรือสกินแคร์ได้ไหม?</h3><p style="margin: 0; line-height: 1.8; color: #596273;">ไม่ได้ LumiPro ช่วยดูแลจากภายใน แต่ผิวยังต้องการการปกป้องจากภายนอก ควรทาครีมกันแดดทุกวัน นอนหลับให้พอ และดื่มน้ำให้เพียงพอ</p></div><div><h3 style="margin: 0 0 .35rem; color: #a84979; font-size: 1.2rem;">ใครทานได้บ้าง?</h3><p style="margin: 0; line-height: 1.8; color: #596273;">ผู้ใหญ่และเด็กอายุ 3 ปีขึ้นไป หญิงตั้งครรภ์หรือผู้มีโรคประจำตัวควรปรึกษาแพทย์ก่อน ผู้ที่แพ้นมวัวไม่แนะนำให้ทาน เพราะมีส่วนผสมจากนม</p></div><div><h3 style="margin: 0 0 .35rem; color: #a84979; font-size: 1.2rem;">ทานพร้อม FlowPro หรือ AllerPro ได้ไหม?</h3><p style="margin: 0; line-height: 1.8; color: #596273;">ทานร่วมกับอาหารเสริมอื่นได้ แต่ควรทานห่างจากยาปฏิชีวนะอย่างน้อย 2 ชั่วโมง</p></div></div></section>

      <section style="margin: 3rem 0;"><h2 style="font-size: 1.85rem; color: #4456a6; margin-bottom: 1rem;">สรุป</h2><p style="font-size: 1.15rem; line-height: 1.9; color: #374151;">ผิวที่ดีเริ่มต้นจากลำไส้ที่สมดุล การดูแลผิวตามวัยจึงควรทำทั้งจากภายนอกและภายใน LumiPro จาก Prove+ รวมโพรไบโอติกสายพันธุ์เฉพาะ SG105 ที่มีงานวิจัยด้านอนุมูลอิสระ เข้ากับสารสกัดข้าวญี่ปุ่นและรังนก เพื่อเป็นตัวช่วยดูแลผิวจากภายในในทุกวัน</p><blockquote style="border-left: 4px solid #d27fa4; padding: 1.25rem 1.5rem; margin: 1.5rem 0; background: linear-gradient(135deg, #fff5f8 0%, #f5f3ff 100%); border-radius: 0 14px 14px 0; font-size: 1.15rem; color: #a84979;">PROVE+ Proof in every dose, plus in every need<br /><span style="font-size: .95rem;">พรูฟพลัส พรูฟแล้วว่าดี</span></blockquote></section>

      <div style="margin: 3rem 0; display: flex; flex-wrap: wrap; gap: 1.5rem; align-items: center; padding: 1.5rem; border-radius: 24px; background: linear-gradient(135deg, #fff0f7 0%, #f5f3ff 100%);"><div style="flex: 1 1 220px; text-align: center;"><img src="/images/products/lumipro/lumipro-product.png" alt="LumiPro โพรไบโอติก SG105 รสโยเกิร์ตจาก Prove+" style="width: 100%; max-width: 360px; max-height: 360px; object-fit: contain; border-radius: 20px;" /></div><div style="flex: 1 1 280px;"><h3 style="margin: 0 0 .6rem; color: #4456a6;">รู้จัก LumiPro</h3><p style="margin: 0 0 1rem; line-height: 1.8; color: #596273;">ซินไบโอติกรสโยเกิร์ตที่รวม SG105 และสารสกัดเพื่อผิวไว้ในซองเดียว ทานง่ายในทุกวัน</p><a href="/products/lumipro" style="display: inline-flex; padding: .7rem 1.2rem; border-radius: 999px; background: #4456a6; color: white; text-decoration: none; font-weight: 700;">ดูรายละเอียด LumiPro</a></div></div>
     <div style="margin: 3rem 0; padding: 2rem; text-align: center; border-radius: 24px; background: #4456a6; color: white;"><h3 style="margin: 0 0 1.2rem; color: white;">เริ่มดูแลผิวจากภายในได้แล้ววันนี้</h3><div style="display: flex; flex-wrap: wrap; justify-content: center; gap: .75rem;"><a href="https://shopee.co.th/proveplusthailand" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none; padding: .6rem 1.2rem; border: 1px solid rgba(255,255,255,.45); border-radius: 999px;">Shopee</a><a href="https://www.tiktok.com/@proveplus" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none; padding: .6rem 1.2rem; border: 1px solid rgba(255,255,255,.45); border-radius: 999px;">TikTok</a><a href="https://www.lazada.co.th/shop/prove-th/" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none; padding: .6rem 1.2rem; border: 1px solid rgba(255,255,255,.45); border-radius: 999px;">Lazada</a></div></div>

      <div style="margin-top: 2.5rem; padding: 1rem 1.25rem; border-radius: 12px; background: #f8f8f8; color: #6b7280; font-size: .9rem; line-height: 1.75;">ผลิตภัณฑ์เสริมอาหารไม่มีผลในการป้องกันหรือรักษาโรค ควรกินอาหารหลากหลาย ครบ 5 หมู่ ในสัดส่วนที่เหมาะสมเป็นประจำ</div>
      <details style="margin-top: 2.5rem; color: #6b7280;"><summary style="cursor: pointer; font-weight: 700; color: #4456a6;">อ้างอิง</summary><ol style="line-height: 1.75; padding-left: 1.3rem;"><li>Salem, I., Ramser, A., Isham, N., &amp; Ghannoum, M.A. (2018). The Gut Microbiome as a Major Regulator of the Gut-Skin Axis. <em>Frontiers in Microbiology</em>, 9, 1459.</li><li>De Pessemier, B. et al. (2021). Gut–Skin Axis: Current Knowledge of the Interrelationship between Microbial Dysbiosis and Skin Conditions. <em>Microorganisms</em>, 9(2), 353.</li><li>Rinnerthaler, M. et al. (2015). Oxidative Stress in Aging Human Skin. <em>Biomolecules</em>, 5(2), 545–589.</li><li>Wang, A.S. &amp; Dreesen, O. (2018). Biomarkers of Cellular Senescence and Skin Aging. <em>Frontiers in Genetics</em>, 9, 247.</li><li>Gkogkolou, P. &amp; Böhm, M. (2012). Advanced glycation end products: Key players in skin aging? <em>Dermato-Endocrinology</em>, 4(3), 259–270.</li><li>Hill, C. et al. (2014). Expert consensus document on the scope and appropriate use of the term probiotic. <em>Nature Reviews Gastroenterology &amp; Hepatology</em>, 11(8), 506–514.</li><li>Syngen Biotech (Taiwan). Bifidobacterium animalis subsp. lactis SG105 in vitro, in vivo and stability data. Manufacturer technical data.</li><li>Uchiyama, T. et al. (2008). Oral Intake of Glucosylceramide. <em>Journal of Health Science</em>, 54(5), 559–566.</li><li>Takara, T. et al. (2021). Oryza Ceramide® and facial skin dehydration in Japanese subjects. <em>Functional Foods in Health and Disease</em>, 11(8), 385–407.</li><li>Zhang, W. et al. (2026). Dietary edible bird’s nest improves skin hydration. <em>Journal of Functional Foods</em>, 140.</li><li>Pullar, J.M., Carr, A.C. &amp; Vissers, M.C.M. (2017). The Roles of Vitamin C in Skin Health. <em>Nutrients</em>, 9(8), 866.</li></ol></details>
    `,
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
