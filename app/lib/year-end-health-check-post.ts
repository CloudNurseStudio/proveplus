import type { BlogPost } from './blog-data';

const slug = 'year-end-health-check-probiotics';
const imageDir = `/images/blog/${slug}`;

const products = [
  { name: 'FlowPro', path: 'flowpro' },
  { name: 'AllerPro', path: 'allerpro' },
  { name: 'LumiPro', path: 'lumipro' },
  { name: 'BLOOMPRO', path: 'bloompro' },
];

const shops = [
  { name: 'Shopee', url: 'https://shopee.co.th/proveplusthailand' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@proveplus' },
  { name: 'Lazada', url: 'https://www.lazada.co.th/shop/prove-th/' },
];

const sources = [
  {
    title: 'Allergy and the gastrointestinal system',
    citation: 'Vighi, G., Marcucci, F., Sensi, L., Di Cara, G., &amp; Frati, F. (2008). Clinical &amp; Experimental Immunology, 153(Suppl 1), 3–6.',
    url: 'https://doi.org/10.1111/j.1365-2249.2008.03713.x',
  },
  {
    title: 'Alcohol and Gut-Derived Inflammation',
    citation: 'Bishehsari, F., Magno, E., Swanson, G., et al. (2017). Alcohol Research: Current Reviews, 38(2), 163–171.',
    url: 'https://arcr.niaaa.nih.gov/sites/default/files/2021-02/alcohol-and-gut-derived-inflammation.pdf',
  },
  {
    title: 'Recommended Amount of Sleep for a Healthy Adult',
    citation: 'Watson, N. F., Badr, M. S., Belenky, D. G., et al. (2015). Sleep, 38(6), 843–844.',
    url: 'https://doi.org/10.5665/sleep.4716',
  },
];

const figure = (file: string, alt: string) => `
  <figure class="not-prose my-8 overflow-hidden rounded-2xl shadow-lg">
    <picture>
      <source srcset="${imageDir}/${file}.webp" type="image/webp" />
      <img class="block h-auto w-full" src="${imageDir}/${file}.jpg" width="1439" height="810" loading="lazy" decoding="async" alt="${alt}" />
    </picture>
  </figure>`;

const list = (items: string[]) => items.map((item) => `<li>${item}</li>`).join('');
const ref = (index: number) => `<sup><a href="#year-end-ref-${index + 1}">[${index + 1}]</a></sup>`;

interface ChecklistArea {
  title: string;
  checks: string[];
  context: string;
  tips: string;
}

const areasTh: ChecklistArea[] = [
  {
    title: 'ลำไส้และระบบขับถ่าย',
    checks: [
      'ท้องผูก หรือขับถ่ายไม่เป็นเวลา',
      'ท้องอืด แน่นท้อง มีลมในท้องบ่อย',
      'ถ่ายเหลวหรือท้องเสียง่ายเมื่อกินอาหารนอกบ้าน',
      'เพิ่งกินยาปฏิชีวนะในปีนี้',
      'กินผักผลไม้น้อย ดื่มน้ำน้อย',
    ],
    context: `ช่วงปีใหม่ที่มีงานเลี้ยงบ่อย ลำไส้มักทำงานหนัก แอลกอฮอล์ในปริมาณมากอาจรบกวนสมดุลจุลินทรีย์และผนังลำไส้ได้ ${ref(1)}`,
    tips: 'กินผัก ผลไม้ และธัญพืชให้มากขึ้น ดื่มน้ำให้เพียงพอ ลดอาหารทอดและแอลกอฮอล์',
  },
  {
    title: 'ภูมิแพ้และภูมิคุ้มกัน',
    checks: [
      'จาม คัดจมูก น้ำมูกไหลตอนเช้า',
      'คันตา คันจมูก เมื่อเจอฝุ่นหรืออากาศเปลี่ยน',
      'เป็นหวัดบ่อยกว่า 3 ครั้งในปีนี้',
      'อาการแย่ลงช่วงที่ค่าฝุ่น PM2.5 สูง',
      'นอนไม่สนิทเพราะหายใจไม่สะดวก',
    ],
    context: 'ช่วงหน้าหนาวของไทย ค่าฝุ่น PM2.5 มักสูงขึ้นในหลายพื้นที่ คนที่เป็นภูมิแพ้จึงอาจมีอาการกำเริบได้ง่าย',
    tips: 'เช็คค่าฝุ่นก่อนออกจากบ้าน ใส่หน้ากากที่กันฝุ่นได้ และทำความสะอาดที่นอนสม่ำเสมอ',
  },
  {
    title: 'ผิวพรรณตามวัย',
    checks: [
      'ผิวแห้ง ลอก หรือคันในหน้าหนาว',
      'ผิวดูหมองคล้ำ ไม่สดใสเหมือนต้นปี',
      'เริ่มเห็นริ้วรอยหรือผิวหย่อนคล้อยมากขึ้น',
      'นอนน้อยกว่า 7 ชั่วโมงต่อคืนเป็นประจำ',
      'ออกแดดบ่อยโดยไม่ทากันแดด',
    ],
    context: `การนอนไม่พอและความเครียดสะสมทั้งปีอาจสะท้อนให้เห็นที่ผิว ผู้ใหญ่ควรนอนอย่างน้อย 7 ชั่วโมงต่อคืน ${ref(2)}`,
    tips: 'ทามอยส์เจอไรเซอร์หลังอาบน้ำ ทากันแดดทุกวันแม้อากาศเย็น ดื่มน้ำให้พอ และพักผ่อนให้เพียงพอ',
  },
  {
    title: 'สุขภาพน้องสาว (สำหรับผู้หญิง)',
    checks: [
      'ตกขาวมีกลิ่นหรือสีผิดปกติ',
      'คันหรือระคายเคืองบริเวณจุดซ่อนเร้นบ่อย',
      'แสบหรือปวดเวลาปัสสาวะ',
      'กลั้นปัสสาวะนาน ๆ เพราะงานยุ่งหรือเดินทาง',
      'เข้าสู่วัยทอง มีอาการร้อนวูบวาบหรือผิวแห้ง',
    ],
    context: 'ช่วงสิ้นปีที่งานยุ่งหรือเดินทางบ่อย อาจทำให้ละเลยอาการที่ควรใส่ใจ หากตกขาวผิดปกติ คัน หรือแสบเวลาปัสสาวะ ควรปรึกษาแพทย์เพื่อหาสาเหตุ',
    tips: 'ใส่ชุดชั้นในที่ระบายอากาศได้ดี และหาเวลาเข้าห้องน้ำระหว่างวันเพื่อเลี่ยงการกลั้นปัสสาวะนาน',
  },
];

const areasEn: ChecklistArea[] = [
  {
    title: 'Gut and digestion',
    checks: [
      'Constipation or irregular bowel movements',
      'Frequent bloating, fullness or gas',
      'Loose stools or an upset stomach when eating out',
      'Took antibiotics this year',
      'Eat few vegetables and fruit, or drink little water',
    ],
    context: `With frequent New Year parties, your gut works hard. Drinking a lot of alcohol can upset gut bacteria and the gut lining. ${ref(1)}`,
    tips: 'Eat more vegetables, fruit and whole grains. Drink enough water and cut down on fried food and alcohol.',
  },
  {
    title: 'Allergy and immunity',
    checks: [
      'Sneezing, blocked or runny nose in the morning',
      'Itchy eyes or nose with dust or weather changes',
      'Caught a cold more than 3 times this year',
      'Symptoms get worse when PM2.5 is high',
      'Poor sleep because of breathing problems',
    ],
    context: 'In Thailand’s cool season, PM2.5 levels often rise in many areas, so people with allergies may notice more symptoms.',
    tips: 'Check the air quality before going out, wear a mask that filters fine particles, and clean your bedding regularly.',
  },
  {
    title: 'Skin and aging',
    checks: [
      'Dry, flaky or itchy skin in the cool season',
      'Skin looks dull compared with the start of the year',
      'More fine lines or less firm skin',
      'Usually sleep less than 7 hours a night',
      'Often in the sun without sunscreen',
    ],
    context: `Poor sleep and a year of accumulated stress may show on your skin. Adults should sleep at least 7 hours a night. ${ref(2)}`,
    tips: 'Use moisturiser after showering, wear sunscreen every day even when it is cool, drink enough water, and get enough rest.',
  },
  {
    title: 'Intimate health (for women)',
    checks: [
      'Discharge with an unusual smell or colour',
      'Frequent itching or irritation',
      'Burning or pain when urinating',
      'Putting off urination for a long time because of work or travel',
      'Entering menopause, with hot flushes or dry skin',
    ],
    context: 'Year-end travel and work can make it easy to overlook symptoms. If you notice unusual discharge, itching or pain when urinating, see a healthcare professional to find the cause.',
    tips: 'Wear breathable underwear and make time for bathroom breaks rather than holding urine for long periods.',
  },
];

const areaStyles = [
  'border-blue-200 bg-blue-50',
  'border-amber-200 bg-amber-50',
  'border-pink-200 bg-pink-50',
  'border-rose-200 bg-rose-50',
];

const checklist = (areas: ChecklistArea[], tipsLabel: string) => `
  <div class="grid gap-4 sm:grid-cols-2">
    ${areas.map((area, index) => `
      <section class="rounded-2xl border p-5 ${areaStyles[index]}">
        <h3 class="!mt-0">${index + 1}. ${area.title}</h3>
        <ul>${list(area.checks)}</ul>
        <p>${area.context}</p>
        <p class="!mb-0"><strong>${tipsLabel}</strong> ${area.tips}</p>
      </section>
    `).join('')}
  </div>`;

const productTable = (areas: ChecklistArea[], resultLabel: string, productLabel: string) => `
  <div class="not-prose overflow-hidden rounded-2xl border border-indigo-100">
    <table class="w-full table-fixed border-collapse text-left text-sm leading-relaxed text-slate-700 sm:text-base">
      <thead class="bg-[#4456a6] text-white">
        <tr><th class="px-4 py-3" scope="col">${resultLabel}</th><th class="px-4 py-3" scope="col">${productLabel}</th></tr>
      </thead>
      <tbody class="divide-y divide-indigo-100">
        ${products.map((product, index) => `
          <tr class="odd:bg-indigo-50/60">
            <th class="px-4 py-3 font-medium" scope="row">${areas[index].title}</th>
            <td class="px-4 py-3"><a class="font-semibold text-[#4456a6] underline underline-offset-4 hover:text-indigo-800" href="/products/${product.path}/">${product.name}</a></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>`;

const faq = (entries: [question: string, answer: string][]) => `
  <div class="grid gap-3">
    ${entries.map(([question, answer]) => `
      <details class="rounded-xl border border-indigo-100 bg-indigo-50/50 px-4 py-3">
        <summary class="cursor-pointer font-semibold text-[#4456a6]">${question}</summary>
        <p class="!mb-0 !mt-3">${answer}</p>
      </details>
    `).join('')}
  </div>`;

const references = (heading: string) => `
  <section class="mt-10 border-t border-indigo-100">
    <h2>${heading}</h2>
    <ol class="text-sm">
      ${sources.map((source, index) => `
        <li id="year-end-ref-${index + 1}">
          <a href="${source.url}">${source.title}</a>. ${source.citation}
        </li>
      `).join('')}
    </ol>
  </section>`;

const intro = (heading: string, paragraphs: string[]) => `
  <section class="rounded-2xl bg-gradient-to-br from-indigo-50 to-amber-50 p-5 sm:p-7">
    <h2 class="!mt-0">${heading}</h2>
    ${paragraphs.map((paragraph) => `<p class="last:!mb-0">${paragraph}</p>`).join('')}
  </section>`;

const shopLinks = (heading: string, tagline: string) => `
  <aside class="not-prose my-8 rounded-2xl bg-[#4456a6] p-6 text-center text-white sm:p-8">
    <h3 class="m-0 text-xl font-semibold sm:text-2xl">${heading}</h3>
    <p class="mt-2 text-sm sm:text-base">${tagline}</p>
    <div class="mt-4 flex flex-wrap justify-center gap-2.5">
      ${shops.map(({ name, url }) => `
        <a class="rounded-full border border-white/50 px-4 py-2 font-semibold text-white hover:bg-white/15"
          href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>
      `).join('')}
      <span class="rounded-full border border-white/35 px-4 py-2">LINE MyShop: Prove+</span>
    </div>
  </aside>`;

const contentTh = `
  ${intro('บทนำ', [
    'ช่วงสิ้นปี หลายคนทบทวนงาน ทบทวนเงิน ทบทวนเป้าหมาย แต่มักลืมทบทวน “ร่างกาย” ของตัวเอง ทั้งที่ตลอด 12 เดือนที่ผ่านมา ร่างกายทำงานหนักไม่ต่างจากเรา ทั้งความเครียด การนอนน้อย อาหารไม่เป็นเวลา และฝุ่นควัน',
    'ยิ่งช่วงธันวาคมถึงมกราคม มีทั้งงานเลี้ยงปีใหม่ อากาศเย็นและแห้ง และค่าฝุ่น PM2.5 ที่มักสูงขึ้น ร่างกายจึงยิ่งต้องการการดูแลเป็นพิเศษ',
    'บทความนี้ชวนคุณเช็คสุขภาพส่งท้ายปีผ่าน 4 ด้านที่สำรวจได้เองที่บ้าน พร้อมวิธีดูแลเพื่อเริ่มต้นปีใหม่',
  ])}

  <h2>ทำไมต้องเช็คสุขภาพช่วงส่งท้ายปี?</h2>
  <ul>${list([
    '<strong>ปีนี้เราใช้ร่างกายไปเยอะ</strong> ความเครียดสะสมและการนอนน้อยส่งผลต่อลำไส้ ภูมิคุ้มกัน และผิว',
    '<strong>ช่วงปลายปีมีปัจจัยเสี่ยงเพิ่ม</strong> ทั้งงานเลี้ยง แอลกอฮอล์ อาหารมัน ๆ หวาน ๆ อากาศแห้ง และฝุ่น',
    '<strong>เป็นจุดเริ่มต้นที่ดี</strong> การรู้ว่าร่างกายส่วนไหนส่งสัญญาณ ช่วยให้ตั้งเป้าหมายสุขภาพปีหน้าได้ตรงจุด',
  ])}</ul>
  <p class="rounded-xl border-l-4 border-indigo-400 bg-indigo-50 p-4"><strong>รู้หรือไม่?</strong> เนื้อเยื่อน้ำเหลืองที่เกี่ยวข้องกับลำไส้เป็นส่วนสำคัญของระบบภูมิคุ้มกัน ${ref(0)}</p>

  <h2>เช็กลิสต์สุขภาพส่งท้ายปี 4 ด้าน</h2>
  <p>ลองอ่านแต่ละข้อ แล้วนับว่าตรงกับตัวเองกี่ข้อ ถ้าตรงตั้งแต่ 2 ข้อขึ้นไปในด้านใด ลองใช้ด้านนั้นเป็นจุดเริ่มต้นในการดูแลตัวเอง</p>
  ${figure('checklist', 'เช็กลิสต์เช็คสุขภาพส่งท้ายปี 4 ด้าน ลำไส้ ภูมิแพ้ ผิว และสุขภาพจุดซ่อนเร้น')}
  ${checklist(areasTh, 'วิธีดูแล:')}
  <p class="rounded-xl bg-amber-50 p-4"><strong>หมายเหตุ:</strong> เช็กลิสต์นี้ใช้สำรวจตัวเองเบื้องต้นเท่านั้น ไม่ใช่การวินิจฉัยโรค หากมีอาการรุนแรง เป็นต่อเนื่อง หรือไม่แน่ใจ ควรพบแพทย์</p>

  <h2>5 นิสัยง่าย ๆ ที่ช่วยทุกด้านพร้อมกัน</h2>
  <ol>${list([
    '<strong>นอนให้พอ</strong> อย่างน้อย 7 ชั่วโมงต่อคืน',
    '<strong>กินให้หลากหลาย</strong> ผัก ผลไม้ ธัญพืช และอาหารหมัก',
    '<strong>ขยับร่างกายสม่ำเสมอ</strong> เริ่มจากกิจกรรมที่ทำได้และเหมาะกับตัวเอง',
    '<strong>ลดเครียด</strong> หาเวลาพักจริง ๆ ในวันหยุดยาว',
    '<strong>ตรวจสุขภาพตามวัยและความเสี่ยง</strong> ปรึกษาโรงพยาบาลหรือคลินิกเรื่องการตรวจที่เหมาะกับคุณ',
  ])}</ol>
  ${figure('healthy-habits', '5 นิสัยดูแลสุขภาพรับปีใหม่')}

  <h2>รู้จักโพรไบโอติก Prove+ ทั้ง 4 สูตร</h2>
  <p>เริ่มปรับพฤติกรรมจากด้านที่ร่างกายส่งสัญญาณมากที่สุด ตารางนี้แสดงแนวทางการดูแลที่แต่ละสูตรออกแบบมาเพื่อเสริมในชีวิตประจำวัน</p>
  ${productTable(areasTh, 'ด้านที่สนใจ', 'สูตร Prove+')}
  <p>โพรไบโอติก Prove+ ผลิตโดย Syngen Biotech ประเทศไต้หวัน ด้วยเทคโนโลยีเคลือบ 5 ชั้น อ่านเพิ่มเติมเกี่ยวกับ <a href="/blog/sg105-gut-skin-axis-probiotic-skin/">LumiPro และ Gut–Skin Axis</a> หรือทำความรู้จัก <a href="/blog/bloompro-probiotic-womens-health-launch/">BLOOMPRO ที่มี LR1 แครนเบอร์รี่ และ CELABIO®</a></p>
  ${figure('proveplus-family', 'โปสเตอร์ปีใหม่พร้อมกล่องโพรไบโอติก Prove+ ครบ 4 สูตร FlowPro AllerPro LumiPro และ BLOOMPRO')}

  <h2>คำถามที่พบบ่อย</h2>
  ${faq([
    ['ทานโพรไบโอติกหลายสูตรพร้อมกันได้ไหม?', 'ตรวจส่วนผสมและคำแนะนำบนฉลากก่อนทานร่วมกัน หากมีโรคประจำตัว ตั้งครรภ์ หรือทานยาประจำ ควรปรึกษาแพทย์หรือเภสัชกร'],
    ['ช่วงงานเลี้ยงปีใหม่ ทานโพรไบโอติกได้ไหม?', 'ทานตามคำแนะนำบนฉลากได้ หากกำลังใช้ยาปฏิชีวนะ ให้ถามเภสัชกรว่าควรเว้นระยะจากยาเท่าไร และควรจำกัดการดื่มแอลกอฮอล์เพื่อดูแลลำไส้'],
    ['ต้องทานนานแค่ไหนถึงจะเห็นผล?', 'ระยะเวลาและผลที่ได้รับแตกต่างกันตามแต่ละคนและแต่ละสูตร ควรปฏิบัติตามฉลาก ควบคู่กับการกินอาหารที่หลากหลายและพักผ่อนให้เพียงพอ'],
    ['ทานโพรไบโอติกแทนการตรวจสุขภาพได้ไหม?', 'ควรตรวจสุขภาพกับแพทย์ตามวัยและความเสี่ยง โพรไบโอติกเป็นผลิตภัณฑ์เสริมอาหารและใช้แทนการตรวจสุขภาพไม่ได้'],
  ])}

  <h2>สรุป</h2>
  <p>เช็คสุขภาพส่งท้ายปีไม่ต้องยุ่งยาก แค่เช็ค 4 ด้าน ลำไส้ ภูมิแพ้ ผิว และน้องสาว แล้วเลือกดูแลด้านที่ร่างกายส่งสัญญาณมากที่สุด เริ่มจากการนอนให้พอ กินให้หลากหลาย และสังเกตอาการของตัวเอง เพื่อให้ปีใหม่เป็นปีที่ร่างกายพร้อมกว่าเดิม</p>
  ${shopLinks('สั่งซื้อ Prove+ ได้แล้ววันนี้', 'พรูฟพลัส พรูฟแล้วว่าดี')}
  <p class="text-sm"><em>ผลิตภัณฑ์เสริมอาหารไม่มีผลในการป้องกันหรือรักษาโรค ควรกินอาหารหลากหลาย ครบ 5 หมู่ ในสัดส่วนที่เหมาะสมเป็นประจำ</em></p>
  ${references('อ้างอิง')}
`;

const contentEn = `
  ${intro('Introduction', [
    'At the end of the year, most of us review our work, our money and our goals. But we often forget to review our body. Over the past 12 months, it has worked as hard as we have, through stress, short nights, irregular meals and air pollution.',
    'December and January bring even more pressure: New Year parties, cool and dry air, and PM2.5 levels that often rise. This is when your body needs extra care.',
    'This article walks you through a year-end health check in 4 simple areas you can check at home, with tips for each one, so you can start the new year in better shape.',
  ])}

  <h2>Why review your body at the end of the year?</h2>
  <ul>${list([
    '<strong>You used your body a lot this year.</strong> Built-up stress and poor sleep affect your gut, immunity and skin.',
    '<strong>The end of the year adds new risks.</strong> Parties, alcohol, rich food, dry air and dust.',
    '<strong>It is a good starting point.</strong> Noticing which areas need attention helps you set clear health goals for next year.',
  ])}</ul>
  <p class="rounded-xl border-l-4 border-indigo-400 bg-indigo-50 p-4"><strong>Did you know?</strong> Gut-associated lymphoid tissue is an important part of the immune system. ${ref(0)}</p>

  <h2>The 4-area year-end checklist</h2>
  <p>Read each list and count how many points apply to you. If 2 or more points apply in one area, you can use it as a starting point for your health goals.</p>
  ${figure('checklist', 'Year-end checklist for gut, allergy, skin and intimate health')}
  ${checklist(areasEn, 'What to do:')}
  <p class="rounded-xl bg-amber-50 p-4"><strong>Note:</strong> This checklist is for self-review only. It is not a diagnosis. If your symptoms are severe, persist, or you are not sure what is causing them, see a healthcare professional.</p>

  <h2>5 simple habits that help every area</h2>
  <ol>${list([
    '<strong>Sleep enough:</strong> Aim for at least 7 hours a night.',
    '<strong>Eat a wide variety:</strong> Include vegetables, fruit, whole grains and fermented foods.',
    '<strong>Move regularly:</strong> Start with activity that fits your ability and routine.',
    '<strong>Reduce stress:</strong> Set aside time to rest during the holiday.',
    '<strong>Get age- and risk-appropriate checkups:</strong> Ask a hospital or clinic which screening is appropriate for you.',
  ])}</ol>
  ${figure('healthy-habits', 'Five healthy habits for the new year')}

  <h2>Meet the four Prove+ probiotic formulas</h2>
  <p>Start with habits that address the area where you noticed the most signs. The table shows the daily wellness focus of each Prove+ formula.</p>
  ${productTable(areasEn, 'Area of interest', 'Prove+ formula')}
  <p>Prove+ probiotics are made by Syngen Biotech in Taiwan using 5-layer encapsulation. Learn more about <a href="/blog/sg105-gut-skin-axis-probiotic-skin/">LumiPro and the gut–skin axis</a>, or meet <a href="/blog/bloompro-probiotic-womens-health-launch/">BLOOMPRO, with LR1, cranberry and CELABIO®</a>.</p>
  ${figure('proveplus-family', 'New Year poster featuring all four Prove+ formulas: FlowPro, AllerPro, LumiPro and BLOOMPRO')}

  <h2>Frequently asked questions</h2>
  ${faq([
    ['Can I take more than one Prove+ probiotic at the same time?', 'Check the ingredients and label directions before combining formulas. If you have a medical condition, are pregnant or take regular medicine, ask a doctor or pharmacist first.'],
    ['Can I take probiotics during New Year parties?', 'Follow the product label. If you take antibiotics, ask a pharmacist how far apart to take them, and limit alcohol to help look after your gut.'],
    ['How long before I see results?', 'The timing and effects can vary by person and formula. Follow the label directions, eat a varied diet and get enough rest.'],
    ['Can probiotics replace a checkup?', 'Keep up with checkups appropriate to your age and risk. Probiotics are dietary supplements and cannot replace a checkup.'],
  ])}

  <h2>Conclusion</h2>
  <p>A year-end health check does not have to be hard. Check four areas: gut, allergy, skin and intimate health. Focus first on the area where you noticed the most signs, then build from small habits such as sleeping enough and eating a varied diet.</p>
  ${shopLinks('Shop Prove+ today', 'Proof in every dose, plus in every need')}
  <p class="text-sm"><em>This dietary supplement is not intended to diagnose, treat, cure or prevent any disease.</em></p>
  ${references('References')}
`;

export const yearEndHealthCheckPost: BlogPost = {
  slug,
  title: 'Year-End Health Check: How Is Your Body Really Doing?',
  title_th: 'เช็คสุขภาพส่งท้ายปี ร่างกายเราไหวแค่ไหน?',
  excerpt: 'A year-end health check in 4 areas: gut, allergy, skin and intimate health. Simple self-checks and tips, plus a guide to the Prove+ probiotic range.',
  excerpt_th: 'เช็คสุขภาพส่งท้ายปี 4 ด้าน ลำไส้ ภูมิแพ้ ผิว และสุขภาพน้องสาว พร้อมวิธีดูแลก่อนปีใหม่และทำความรู้จักโพรไบโอติก Prove+',
  content: contentEn,
  content_th: contentTh,
  date: 'November 26, 2026',
  date_th: '26 พฤศจิกายน 2026',
  author: 'Prove+',
  image: `${imageDir}/cover.webp`,
  thumbnail: `${imageDir}/thumbnail.webp`,
  listingImage: `${imageDir}/blog-card.webp`,
  readTime: '7 min read',
  readTime_th: 'อ่าน 7 นาที',
  tags: ['Health Tips', 'Year-End Health Check', 'Probiotics'],
  category: 'Health Tips',
};
