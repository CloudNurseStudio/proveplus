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
    image: '/images/blog/prove-plus-launch/F.jpg',
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
          <img src="/images/blog/prove-plus-launch/A1.jpg" alt="Prove+ booth at launch event" style="width: 100%; border-radius: 16px; object-fit: cover; aspect-ratio: 1/1;" />
          <img src="/images/blog/prove-plus-launch/A2.jpg" alt="Fan messages at the event" style="width: 100%; border-radius: 16px; object-fit: cover; aspect-ratio: 1/1;" />
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
        <img src="/images/blog/prove-plus-launch/C.jpg" alt="PROVE+ ALLERPRO and FLOWPRO products" style="width: 100%; border-radius: 16px; margin-bottom: 0.5rem;" />
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
        <img src="/images/blog/prove-plus-launch/B.jpg" alt="Prove+ leadership team" style="width: 100%; border-radius: 16px; margin-bottom: 0.5rem;" />
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af;">STANDARD x Union Medical (Thailand) — From Partners to Family</p>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">Inspiring Wellness Through Brand Ambassadors</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 1.5rem;">
          The event was honored by the presence of <strong>Nichkhun Horvejkul</strong> and <strong>Nachjaree Horvejkul (Cherreen)</strong> as brand ambassadors. They shared their perspectives on health and inspired audiences to embrace a wellness lifestyle, starting from simple everyday habits.
        </p>
        <img src="/images/blog/prove-plus-launch/D.jpg" alt="Nichkhun and Cherreen at the launch event" style="width: 100%; border-radius: 16px; margin-bottom: 0.5rem;" />
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
        <img src="/images/blog/prove-plus-launch/E.jpg" alt="Full team at the Prove+ launch event" style="width: 100%; border-radius: 16px; margin-bottom: 0.5rem;" />
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af;">The Prove+ family — The Next Generation of Probiotics</p>
      </div>

      <div style="background: linear-gradient(135deg, #4456a6 0%, #5d6fcd 100%); border-radius: 20px; padding: 2rem; text-align: center; color: white;">
        <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: white;">Stay Connected with Prove+</h3>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem;">
          <a href="https://www.facebook.com/proveplus" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px); transition: background 0.2s;">Facebook</a>
          <a href="https://twitter.com/proveplus" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">X (Twitter)</a>
          <a href="https://www.instagram.com/proveplus_th/" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">Instagram</a>
          <a href="https://www.tiktok.com/@proveplus" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">TikTok</a>
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
          <img src="/images/blog/prove-plus-launch/A1.jpg" alt="บูธ Prove+ ในงานเปิดตัว" style="width: 100%; border-radius: 16px; object-fit: cover; aspect-ratio: 1/1;" />
          <img src="/images/blog/prove-plus-launch/A2.jpg" alt="ข้อความจากแฟนๆ ในงาน" style="width: 100%; border-radius: 16px; object-fit: cover; aspect-ratio: 1/1;" />
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
        <img src="/images/blog/prove-plus-launch/C.jpg" alt="ผลิตภัณฑ์ PROVE+ ALLERPRO และ FLOWPRO" style="width: 100%; border-radius: 16px; margin-bottom: 0.5rem;" />
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
        <img src="/images/blog/prove-plus-launch/B.jpg" alt="ทีมผู้บริหาร Prove+" style="width: 100%; border-radius: 16px; margin-bottom: 0.5rem;" />
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af;">STANDARD x Union Medical (Thailand) — From Partners to Family</p>
      </div>

      <div style="margin-bottom: 3rem;">
        <h2 style="font-size: 1.75rem; font-weight: 600; color: #4456a6; margin-bottom: 1rem;">แรงบันดาลใจด้านสุขภาพ จากพรีเซนเตอร์</h2>
        <p style="font-size: 1.125rem; line-height: 1.8; color: #4b5563; margin-bottom: 1.5rem;">
          ภายในงาน ได้รับเกียรติจาก <strong>นิชคุณ หรเวชกุล</strong> และ <strong>ณัฐจารี หรเวชกุล (เชอรีน)</strong> ในฐานะพรีเซนเตอร์ของแบรนด์ ทั้งสองได้ร่วมแบ่งปันแนวคิดการดูแลสุขภาพ และสร้างแรงบันดาลใจในการเริ่มต้น Wellness Lifestyle จากเรื่องใกล้ตัว
        </p>
        <img src="/images/blog/prove-plus-launch/D.jpg" alt="นิชคุณ และ เชอรีน ในงานเปิดตัว" style="width: 100%; border-radius: 16px; margin-bottom: 0.5rem;" />
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
        <img src="/images/blog/prove-plus-launch/E.jpg" alt="ทีม Prove+ ทั้งหมดในงานเปิดตัว" style="width: 100%; border-radius: 16px; margin-bottom: 0.5rem;" />
        <p style="text-align: center; font-size: 0.85rem; color: #9ca3af;">ครอบครัว Prove+ — The Next Generation of Probiotics</p>
      </div>

      <div style="background: linear-gradient(135deg, #4456a6 0%, #5d6fcd 100%); border-radius: 20px; padding: 2rem; text-align: center; color: white;">
        <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 1rem; color: white;">ติดตาม Prove+ ได้ที่</h3>
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem;">
          <a href="https://www.facebook.com/proveplus" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">Facebook</a>
          <a href="https://twitter.com/proveplus" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">X (Twitter)</a>
          <a href="https://www.instagram.com/proveplus_th/" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">Instagram</a>
          <a href="https://www.tiktok.com/@proveplus" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,255,255,0.15); padding: 0.6rem 1.25rem; border-radius: 50px; color: white; text-decoration: none; font-size: 0.9rem; font-weight: 500; backdrop-filter: blur(4px);">TikTok</a>
        </div>
      </div>
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
