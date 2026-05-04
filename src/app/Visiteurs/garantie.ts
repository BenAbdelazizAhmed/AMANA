import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comment-ca-marche',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <div class="page">

    <header class="navbar">
      <div class="brand" routerLink="/accueil">
        <img class="brandLogo" src="assets/a.png" alt="Amana logo">
      </div>

      <nav>
        <a routerLink="/accueil">الرئيسية</a>
        <a routerLink="/catalogue">الحيوانات</a>
        <a class="active" (click)="scrollTo('steps')">كيفاش تخدم؟</a>
        <a (click)="scrollTo('garanties')">الثقة</a>
        <a (click)="scrollTo('faq')">الأسئلة</a>
      </nav>

      <button type="button" routerLink="/catalogue" class="navBtn">شوف العروض</button>
    </header>

    <section class="hero">
      <div class="heroContent">
        <span class="eyebrow">🐑 Amana رقم 1 في تونس لشراء المواشي</span>

        <h1>
          كيفاش تشري من Amana؟
          <span>كعبة ولا جملة، بأسعار واضحة.</span>
        </h1>

        <p>
          Amana توفرلك علوش، نعجة، ماعز ولا بقر بعروض مختارة وأسعار منافسة.
          تشوف الصور والمعلومات، تختار اللي يناسبك، تنجم تطلب زيارة قبل الشراء،
          وAmana تتصل بيك باش تثبّت السعر والموعد والتفاصيل.
        </p>

        <div class="heroActions">
          <button type="button" routerLink="/catalogue" class="primary">شوف الحيوانات المتاحة</button>
          <button type="button" class="secondary" (click)="scrollTo('steps')">إفهم الخطوات</button>
        </div>

        <div class="heroStats">
          <button type="button" routerLink="/catalogue">
            <b>كعبة</b>
            <span>حيوان واحد</span>
          </button>
          <button type="button" routerLink="/catalogue">
            <b>جملة</b>
            <span>أرخص حسب الكمية</span>
          </button>
          <button type="button" routerLink="/catalogue">
            <b>زيارة</b>
            <span>قبل الشراء</span>
          </button>
        </div>
      </div>

      <div class="heroVisual">
        <img src="https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=1200&q=85" alt="Mouton">

        <button type="button" routerLink="/catalogue" class="glassCard top">
          <span>💰 سعر واضح</span>
          <b>كعبة ولا جملة</b>
        </button>

        <button type="button" routerLink="/catalogue" class="glassCard bottom">
          <span>👀 زيارة متاحة</span>
          <b>شوف الحيوان قبل القرار</b>
        </button>
      </div>
    </section>

    <section class="section intro">
      <div>
        <small>شنوّة الفكرة؟</small>
        <h2>Amana تسهّل عليك شراء المواشي من غير تدوير ولا تعب.</h2>
      </div>

      <p>
        عوض ما تضيع وقتك في السوق وتسأل برشة عباد، تدخل للكتالوج،
        تلقى عروض واضحة بالصور والسعر والوزن والمنطقة. تختار كعبة ولا جملة،
        وAmana تتصل بيك باش تكمل معاك التفاصيل بطريقة منظمة وواضحة.
      </p>
    </section>

    <section class="section winSection">
      <div class="sectionTitle">
        <small>لشكون الخدمة؟</small>
        <h2>Amana تخدم الحريف العادي والتاجر في نفس الوقت.</h2>
      </div>

      <div class="winGrid">
        <div class="winCard client">
          <div class="icon">👤</div>
          <h3>تحب تشري بالكعبة؟</h3>
          <p>
            كانك تحب علوش، نعجة، ماعز ولا بقر، تنجم تشوف العروض، تقارن السعر،
            وتطلب زيارة قبل ما تشري.
          </p>

          <ul>
            <li>صور ومعلومات واضحة</li>
            <li>سعر ظاهر من الأول</li>
            <li>إمكانية زيارة قبل الشراء</li>
            <li>Amana تتصل بيك للتأكيد</li>
            <li>تجربة أسهل من السوق العادي</li>
          </ul>
        </div>

        <div class="winCard mawachi">
          <div class="icon">📦</div>
          <h3>تحب تشري بالجملة؟</h3>
          <p>
            كانك تاجر، عندك مناسبة، مطعم، ولا تحب كمية، Amana تعاونك تلقى سعر أفضل
            حسب العدد والمنطقة.
          </p>

          <ul>
            <li>طلب كمية بسرعة</li>
            <li>سعر جملة حسب العدد</li>
            <li>عروض مختارة ومفهومة</li>
            <li>تنسيق في الموعد والتفاصيل</li>
            <li>طلب خاص للكميات الكبيرة</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section relation">
      <div class="sectionTitle">
        <small>الدور متاع Amana</small>
        <h2>كل خطوة منظمة باش تشري وأنت فاهم وواثق.</h2>
      </div>

      <div class="roles">
        <div class="role">
          <i>🔎</i>
          <h3>تتفرّج</h3>
          <p>تشوف العروض في الكتالوج: صورة، وزن، عمر، سعر ومنطقة.</p>
        </div>

        <div class="arrow">←</div>

        <div class="role main">
          <i>🏢</i>
          <h3>Amana</h3>
          <p>تنظم الطلب، تتصل بيك، وتثبت السعر والزيارة أو الشراء.</p>
        </div>

        <div class="arrow">←</div>

        <div class="role">
          <i>🐑</i>
          <h3>العرض</h3>
          <p>تختار الحيوان أو الكمية اللي تناسبك حسب حاجتك.</p>
        </div>

        <div class="arrow">←</div>

        <div class="role">
          <i>✅</i>
          <h3>القرار</h3>
          <p>تزور قبل الشراء ولا تكمل الطلب بعد ما تتأكد من التفاصيل.</p>
        </div>
      </div>
    </section>

    <section class="section stepsSection" id="steps">
      <div class="sectionTitle">
        <small>الخطوات</small>
        <h2>كيفاش تخدم Amana خطوة بخطوة؟</h2>
      </div>

      <div class="timeline">
        <div class="step" *ngFor="let s of steps; let i = index">
          <div class="stepNumber">0{{ i + 1 }}</div>
          <div class="stepIcon">{{ s.icon }}</div>
          <div>
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section guaranteesPremium" id="garanties">
      <div class="sectionTitle">
        <small>الثقة والوضوح</small>
        <h2>علاش الحريف يثق في Amana؟</h2>
        <p>
          خاطر التجربة مبنية على معلومات واضحة، سعر ظاهر، صور، إمكانية زيارة،
          وتنسيق مباشر من Amana باش ما تبقاش وحدك في القرار.
        </p>
      </div>

      <div class="guaranteeLayout">
        <div class="guaranteeMain">
          <span>🛡️ ثقة قبل الشراء</span>
          <h3>ما تشريش وأنت موش فاهم.</h3>
          <p>
            Amana تخليك تشوف العرض بوضوح: النوع، الوزن، العمر، المنطقة، السعر،
            وإمكانية زيارة الحيوان قبل القرار. وبعد الطلب، نتصلو بيك باش نثبتو التفاصيل.
          </p>

          <div class="proofList">
            <div>📸 صور واضحة</div>
            <div>💰 سعر مفهوم</div>
            <div>👀 زيارة متاحة</div>
            <div>📞 اتصال للتأكيد</div>
          </div>
        </div>

        <div class="guaranteeCards">
          <div class="gCard" *ngFor="let g of guarantees">
            <i>{{ g.icon }}</i>
            <h3>{{ g.title }}</h3>
            <p>{{ g.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section tracking">
      <div class="phoneMockup">
        <div class="phoneHeader">
          <span></span>
          <b>عرض Amana</b>
          <small>#A102</small>
        </div>

        <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=900&q=85" alt="Animal">

        <div class="phoneBody">
          <h3>علوش سيدي بوزيد</h3>
          <p>عرض مختار · زيارة متاحة</p>

          <div class="trackItem">
            <span>⚖️</span>
            <div>
              <b>الوزن</b>
              <small>42 kg</small>
            </div>
          </div>

          <div class="trackItem">
            <span>💰</span>
            <div>
              <b>السعر</b>
              <small>850 د.ت · جملة عند الطلب</small>
            </div>
          </div>

          <div class="trackItem">
            <span>📍</span>
            <div>
              <b>المنطقة</b>
              <small>سيدي بوزيد</small>
            </div>
          </div>
        </div>
      </div>

      <div class="trackingText">
        <small>شنوّة تلقى في العرض؟</small>
        <h2>كل المعلومات اللي تعاونك تقرر بسرعة.</h2>
        <p>
          الحريف يحب يشوف قبل ما يشري. لذلك كل عرض في Amana لازم يكون واضح:
          صور، وزن، عمر، سعر، منطقة، وهل تنجم تزور قبل الشراء.
        </p>

        <div class="trackingList">
          <div>📸 صور واضحة</div>
          <div>⚖️ وزن وعمر</div>
          <div>💰 سعر ظاهر</div>
          <div>📍 منطقة العرض</div>
          <div>👀 زيارة قبل الشراء</div>
          <div>📦 سعر جملة</div>
        </div>
      </div>
    </section>

    <section class="section problem">
      <div class="sectionTitle">
        <small>التنسيق</small>
        <h2>شنوّة يصير بعد ما تبعث طلب؟</h2>
        <p>
          الهدف موش تعمّر formulaire وخلاص. الهدف إنو Amana ترجعلك، تثبّت التفاصيل،
          وتعاونك تكمل القرار بطريقة واضحة.
        </p>
      </div>

      <div class="problemGrid">
        <div class="problemCard">
          <span>01</span>
          <h3>نستقبلو طلبك</h3>
          <p>تبعث اسمك، رقمك، النوع، الكمية، والمنطقة اللي تناسبك.</p>
        </div>

        <div class="problemCard">
          <span>02</span>
          <h3>نتصلو بيك</h3>
          <p>Amana تكلمك باش تثبت السعر، الكمية، والموعد المناسب.</p>
        </div>

        <div class="problemCard">
          <span>03</span>
          <h3>تزور ولا تكمل الشراء</h3>
          <p>تنجم تطلب زيارة قبل القرار أو تكمل الطلب حسب الاتفاق.</p>
        </div>
      </div>
    </section>

    <section class="section exitOptions">
      <div class="sectionTitle">
        <small>اختار حسب حاجتك</small>
        <h2>كعبة، جملة، ولا زيارة قبل الشراء.</h2>
      </div>

      <div class="options">
        <button type="button" routerLink="/catalogue" class="option">
          <div>🐑</div>
          <h3>شراء بالكعبة</h3>
          <p>مناسب للحريف اللي يحب حيوان واحد بسعر واضح.</p>
        </button>

        <button type="button" routerLink="/catalogue" class="option">
          <div>📦</div>
          <h3>شراء بالجملة</h3>
          <p>مناسب للتجار، المناسبات، المطاعم، ولا العائلات الكبيرة.</p>
        </button>

        <button type="button" routerLink="/catalogue" class="option">
          <div>👀</div>
          <h3>زيارة قبل الشراء</h3>
          <p>تشوف الحيوان على عينك قبل ما تقرر وتشري بثقة.</p>
        </button>
      </div>
    </section>

    <section class="section faqSection" id="faq">
      <div class="sectionTitle">
        <small>FAQ</small>
        <h2>أسئلة تتعاود برشة</h2>
      </div>

      <div class="faq">
        <div class="faqItem" *ngFor="let f of faqs; let i = index">
          <button type="button" (click)="toggleFaq(i)">
            <span>{{ f.q }}</span>
            <b>{{ activeFaq === i ? '−' : '+' }}</b>
          </button>

          <p *ngIf="activeFaq === i">{{ f.a }}</p>
        </div>
      </div>
    </section>

    <section class="finalCta">
      <div>
        <span>🐑 مستعد تشوف العروض؟</span>
        <h2>ادخل للكتالوج واختار كعبة ولا جملة.</h2>
        <p>
          شوف السعر، قارن، وابعث طلبك. Amana تتصل بيك باش تثبت التفاصيل.
        </p>
      </div>

      <button type="button" routerLink="/catalogue">شوف الحيوانات المتاحة</button>
    </section>

  </div>
  `,
  styles: [`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :host {
      display: block;
      font-family: Inter, system-ui, Arial, sans-serif;
      color: #10251a;
      --green: #0f6b3e;
      --dark: #052d1c;
      --light: #e9f7ee;
      --cream: #fff6e8;
      --orange: #f5841f;
      --muted: #68776d;
      --line: #e4ece2;
      --shadow: 0 24px 60px rgba(20, 55, 35, .13);
    }

    .page {
      min-height: 100vh;
      background:
        radial-gradient(circle at top left, rgba(15,107,62,.13), transparent 30%),
        linear-gradient(180deg, #fff8ec, #ffffff 42%, #f6fbf7);
      overflow-x: hidden;
      direction: rtl;
    }

    .navbar {
      height: 82px;
      padding: 0 70px;
      background: rgba(255,255,255,.92);
      backdrop-filter: blur(16px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid var(--line);
      position: sticky;
      top: 0;
      z-index: 99;
      direction: rtl;
    }

    .brand {
      display: flex;
      align-items: center;
      cursor: pointer;
      min-width: 180px;
    }

    .brandLogo {
      width: 150px;
      height: 90px;
      object-fit: contain;
      display: block;
      transform: scale(1.05);
      transform-origin: right center;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 26px;
    }

    nav a {
      color: #263c2f;
      text-decoration: none;
      font-size: 14px;
      font-weight: 900;
      cursor: pointer;
    }

    nav .active {
      color: var(--green);
    }

    button {
      font-family: inherit;
      border: none;
      cursor: pointer;
      font-weight: 950;
      transition: .2s;
    }

    button:hover {
      transform: translateY(-2px);
    }

    .navBtn,
    .primary {
      background: linear-gradient(135deg, #13a458, #0b6737);
      color: white;
      border-radius: 15px;
      padding: 14px 22px;
      box-shadow: 0 16px 28px rgba(15,107,62,.22);
    }

    .secondary {
      background: white;
      color: var(--dark);
      border-radius: 15px;
      padding: 14px 22px;
      box-shadow: inset 0 0 0 1px #dce8dc;
    }

    .hero {
      max-width: 1400px;
      margin: 0 auto;
      padding: 62px 70px 48px;
      display: grid;
      grid-template-columns: 1.05fr .9fr;
      gap: 70px;
      align-items: center;
    }

    .heroContent {
      text-align: right;
    }

    .eyebrow {
      display: inline-flex;
      background: #ecf8ef;
      color: var(--green);
      padding: 11px 18px;
      border-radius: 100px;
      font-weight: 950;
      margin-bottom: 22px;
    }

    .hero h1 {
      font-size: clamp(42px, 5.4vw, 70px);
      line-height: 1.04;
      letter-spacing: -2px;
      color: var(--dark);
      font-weight: 950;
    }

    .hero h1 span {
      color: var(--green);
      display: block;
    }

    .hero p {
      max-width: 680px;
      color: #2d4938;
      font-size: 18px;
      line-height: 1.85;
      margin: 24px 0 30px;
    }

    .heroActions {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    .heroStats {
      margin-top: 34px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
      max-width: 560px;
    }

    .heroStats button {
      background: white;
      border: 1px solid var(--line);
      border-radius: 20px;
      padding: 18px;
      box-shadow: 0 14px 34px rgba(35,65,45,.07);
      text-align: center;
      color: inherit;
    }

    .heroStats b {
      display: block;
      color: var(--green);
      font-size: 28px;
    }

    .heroStats span {
      color: var(--muted);
      font-size: 13px;
      font-weight: 800;
    }

    .heroVisual {
      position: relative;
      height: 540px;
      border-radius: 38px;
      overflow: hidden;
      box-shadow: var(--shadow);
    }

    .heroVisual img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .heroVisual::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent, rgba(0,0,0,.35));
    }

    .glassCard {
      position: absolute;
      z-index: 2;
      background: rgba(255,255,255,.9);
      backdrop-filter: blur(14px);
      border-radius: 20px;
      padding: 16px 18px;
      box-shadow: 0 18px 40px rgba(0,0,0,.15);
      text-align: right;
      color: inherit;
    }

    .glassCard span {
      display: block;
      color: var(--muted);
      font-size: 13px;
      font-weight: 900;
      margin-bottom: 5px;
    }

    .glassCard b {
      color: var(--dark);
    }

    .glassCard.top {
      top: 26px;
      left: 26px;
    }

    .glassCard.bottom {
      right: 26px;
      bottom: 26px;
    }

    .section {
      max-width: 1320px;
      margin: 0 auto;
      padding: 78px 30px;
    }

    small {
      color: var(--green);
      font-weight: 950;
      text-transform: uppercase;
      letter-spacing: .7px;
    }

    .sectionTitle {
      text-align: center;
      max-width: 780px;
      margin: 0 auto 54px;
    }

    .sectionTitle h2,
    .intro h2,
    .trackingText h2,
    .finalCta h2 {
      color: var(--dark);
      font-size: clamp(34px, 4vw, 48px);
      line-height: 1.14;
      letter-spacing: -1.5px;
      margin-top: 8px;
    }

    .sectionTitle p {
      color: var(--muted);
      line-height: 1.8;
      font-size: 17px;
      margin-top: 14px;
    }

    .intro {
      display: grid;
      grid-template-columns: .8fr 1fr;
      gap: 50px;
      align-items: center;
      background: white;
      border-radius: 34px;
      box-shadow: var(--shadow);
      padding: 52px;
      margin-top: 26px;
    }

    .intro p {
      color: #314939;
      font-size: 20px;
      line-height: 1.85;
    }

    .winGrid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 26px;
    }

    .winCard {
      background: white;
      border: 1px solid var(--line);
      border-radius: 30px;
      padding: 34px;
      box-shadow: var(--shadow);
      position: relative;
      overflow: hidden;
    }

    .winCard::before {
      content: '';
      position: absolute;
      inset: 0 0 auto;
      height: 6px;
    }

    .winCard.client::before { background: var(--green); }
    .winCard.mawachi::before { background: var(--orange); }

    .icon {
      width: 64px;
      height: 64px;
      border-radius: 22px;
      background: var(--light);
      display: grid;
      place-items: center;
      font-size: 30px;
      margin-bottom: 22px;
    }

    .winCard h3 {
      color: var(--dark);
      font-size: 27px;
      margin-bottom: 14px;
    }

    .winCard p {
      color: var(--muted);
      line-height: 1.75;
      margin-bottom: 22px;
    }

    .winCard ul {
      display: grid;
      gap: 12px;
      list-style: none;
    }

    .winCard li {
      background: #f7fbf7;
      padding: 13px 15px;
      border-radius: 15px;
      color: #20382a;
      font-weight: 850;
    }

    .winCard li::before {
      content: '✓ ';
      color: var(--green);
      font-weight: 950;
    }

    .roles {
      display: grid;
      grid-template-columns: 1fr 40px 1fr 40px 1fr 40px 1fr;
      gap: 10px;
      align-items: center;
    }

    .role {
      background: white;
      border: 1px solid var(--line);
      border-radius: 26px;
      padding: 26px;
      text-align: center;
      box-shadow: 0 16px 35px rgba(35,65,45,.08);
      min-height: 240px;
    }

    .role.main {
      background: linear-gradient(180deg, #0d6a3d, #07351f);
      color: white;
    }

    .role i {
      width: 60px;
      height: 60px;
      border-radius: 20px;
      display: grid;
      place-items: center;
      background: var(--light);
      margin: 0 auto 18px;
      font-style: normal;
      font-size: 30px;
    }

    .role.main i { background: rgba(255,255,255,.15); }

    .role h3 {
      margin-bottom: 10px;
      font-size: 22px;
    }

    .role p {
      color: var(--muted);
      line-height: 1.65;
    }

    .role.main p { color: rgba(255,255,255,.78); }

    .arrow {
      color: #9aaa9f;
      font-size: 34px;
      text-align: center;
      font-weight: 900;
    }

    .stepsSection {
      background: linear-gradient(180deg, #f5fbf7, #fffaf1);
      max-width: none;
    }

    .timeline {
      max-width: 1050px;
      margin: auto;
      display: grid;
      gap: 18px;
    }

    .step {
      background: white;
      border: 1px solid var(--line);
      border-radius: 24px;
      padding: 24px;
      display: grid;
      grid-template-columns: 80px 70px 1fr;
      gap: 20px;
      align-items: center;
      box-shadow: 0 14px 35px rgba(35,65,45,.07);
    }

    .stepNumber {
      color: rgba(15,107,62,.22);
      font-size: 38px;
      font-weight: 950;
    }

    .stepIcon {
      width: 64px;
      height: 64px;
      border-radius: 22px;
      background: var(--cream);
      display: grid;
      place-items: center;
      font-size: 30px;
    }

    .step h3 {
      color: var(--dark);
      margin-bottom: 8px;
      font-size: 23px;
    }

    .step p {
      color: var(--muted);
      line-height: 1.65;
    }

    .guaranteesPremium {
      max-width: none;
      background:
        radial-gradient(circle at top left, rgba(15,107,62,.12), transparent 34%),
        linear-gradient(180deg, #f5fbf7, #ffffff);
    }

    .guaranteeLayout {
      max-width: 1320px;
      margin: auto;
      display: grid;
      grid-template-columns: .9fr 1.3fr;
      gap: 28px;
      align-items: stretch;
    }

    .guaranteeMain {
      background:
        linear-gradient(135deg, rgba(5,45,28,.96), rgba(13,106,61,.88)),
        url('https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=85');
      background-size: cover;
      background-position: center;
      color: white;
      border-radius: 32px;
      padding: 36px;
      box-shadow: var(--shadow);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      min-height: 520px;
    }

    .guaranteeMain span {
      display: inline-block;
      width: fit-content;
      background: rgba(255,255,255,.16);
      border: 1px solid rgba(255,255,255,.18);
      border-radius: 100px;
      padding: 9px 14px;
      font-weight: 950;
      margin-bottom: 18px;
    }

    .guaranteeMain h3 {
      font-size: 34px;
      line-height: 1.15;
      margin-bottom: 14px;
    }

    .guaranteeMain p {
      color: rgba(255,255,255,.78);
      line-height: 1.8;
      font-size: 16px;
    }

    .proofList {
      margin-top: 24px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .proofList div {
      background: rgba(255,255,255,.13);
      border: 1px solid rgba(255,255,255,.13);
      border-radius: 16px;
      padding: 13px;
      font-weight: 900;
    }

    .guaranteeCards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 18px;
    }

    .gCard {
      background: white;
      border: 1px solid var(--line);
      border-radius: 24px;
      padding: 24px;
      box-shadow: 0 15px 34px rgba(35,65,45,.07);
    }

    .gCard i {
      width: 50px;
      height: 50px;
      border-radius: 18px;
      background: var(--light);
      display: grid;
      place-items: center;
      font-style: normal;
      font-size: 24px;
      margin-bottom: 16px;
    }

    .gCard h3 {
      color: var(--dark);
      margin-bottom: 8px;
    }

    .gCard p {
      color: var(--muted);
      line-height: 1.6;
    }

    .tracking {
      display: grid;
      grid-template-columns: .8fr 1fr;
      gap: 60px;
      align-items: center;
    }

    .phoneMockup {
      max-width: 390px;
      margin: auto;
      background: #071d13;
      padding: 14px;
      border-radius: 42px;
      box-shadow: 0 30px 70px rgba(0,0,0,.22);
    }

    .phoneHeader {
      color: white;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 14px;
    }

    .phoneHeader span {
      width: 46px;
      height: 6px;
      border-radius: 99px;
      background: rgba(255,255,255,.2);
    }

    .phoneMockup img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 30px;
      display: block;
    }

    .phoneBody {
      background: white;
      margin-top: 12px;
      border-radius: 30px;
      padding: 22px;
    }

    .phoneBody h3 {
      color: var(--dark);
      font-size: 22px;
    }

    .phoneBody > p {
      color: var(--muted);
      margin: 6px 0 18px;
    }

    .trackItem {
      display: flex;
      gap: 12px;
      align-items: center;
      background: #f6faf7;
      border-radius: 18px;
      padding: 13px;
      margin-bottom: 11px;
    }

    .trackItem span {
      width: 42px;
      height: 42px;
      border-radius: 14px;
      background: var(--light);
      display: grid;
      place-items: center;
    }

    .trackItem b,
    .trackItem small {
      display: block;
    }

    .trackItem small {
      color: var(--muted);
      margin-top: 3px;
    }

    .trackingText p {
      color: var(--muted);
      font-size: 18px;
      line-height: 1.8;
      margin: 18px 0 26px;
    }

    .trackingList {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
    }

    .trackingList div {
      background: white;
      border: 1px solid var(--line);
      border-radius: 18px;
      padding: 16px;
      font-weight: 900;
      box-shadow: 0 12px 25px rgba(35,65,45,.06);
    }

    .problem {
      background: var(--dark);
      color: white;
      max-width: none;
    }

    .problem .sectionTitle h2,
    .problem .sectionTitle small {
      color: white;
    }

    .problem .sectionTitle p {
      color: rgba(255,255,255,.72);
    }

    .problemGrid {
      max-width: 1180px;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 22px;
    }

    .problemCard {
      background: rgba(255,255,255,.08);
      border: 1px solid rgba(255,255,255,.12);
      border-radius: 26px;
      padding: 28px;
      backdrop-filter: blur(12px);
    }

    .problemCard span {
      color: var(--orange);
      font-size: 42px;
      font-weight: 950;
    }

    .problemCard h3 {
      font-size: 23px;
      margin: 18px 0 10px;
    }

    .problemCard p {
      color: rgba(255,255,255,.72);
      line-height: 1.7;
    }

    .options {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .option {
      background: white;
      border: 1px solid var(--line);
      border-radius: 28px;
      padding: 34px;
      text-align: center;
      box-shadow: var(--shadow);
      color: inherit;
    }

    .option div {
      width: 76px;
      height: 76px;
      border-radius: 26px;
      display: grid;
      place-items: center;
      background: var(--cream);
      font-size: 34px;
      margin: 0 auto 20px;
    }

    .option h3 {
      color: var(--dark);
      font-size: 25px;
      margin-bottom: 10px;
    }

    .option p {
      color: var(--muted);
      line-height: 1.7;
    }

    .faq {
      max-width: 900px;
      margin: auto;
      display: grid;
      gap: 14px;
    }

    .faqItem {
      background: white;
      border: 1px solid var(--line);
      border-radius: 22px;
      overflow: hidden;
      box-shadow: 0 13px 30px rgba(35,65,45,.06);
    }

    .faqItem button {
      width: 100%;
      background: white;
      padding: 22px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--dark);
      font-size: 17px;
      text-align: right;
    }

    .faqItem b {
      font-size: 28px;
      color: var(--green);
    }

    .faqItem p {
      padding: 0 24px 24px;
      color: var(--muted);
      line-height: 1.75;
    }

    .finalCta {
      max-width: 1200px;
      margin: 40px auto 90px;
      padding: 54px;
      border-radius: 34px;
      background:
        linear-gradient(135deg, rgba(5,45,28,.96), rgba(13,106,61,.84)),
        url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85');
      background-size: cover;
      background-position: center;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 30px;
      box-shadow: var(--shadow);
    }

    .finalCta span {
      color: #dff7e7;
      font-weight: 950;
    }

    .finalCta h2 {
      color: white;
      max-width: 760px;
      margin: 10px 0;
    }

    .finalCta p {
      color: rgba(255,255,255,.78);
      max-width: 700px;
      line-height: 1.75;
    }

    .finalCta button {
      background: var(--orange);
      color: white;
      border-radius: 18px;
      padding: 18px 28px;
      white-space: nowrap;
    }

    @media (max-width: 1120px) {
      nav { display: none; }

      .hero,
      .intro,
      .winGrid,
      .guaranteeLayout,
      .tracking {
        grid-template-columns: 1fr;
      }

      .roles {
        grid-template-columns: 1fr;
      }

      .arrow { transform: rotate(90deg); }

      .problemGrid,
      .options {
        grid-template-columns: 1fr;
      }

      .finalCta {
        flex-direction: column;
        align-items: flex-start;
      }
    }

    @media (max-width: 760px) {
      .navbar {
        height: auto;
        padding: 14px 16px;
      }

      .brandLogo {
        width: 145px;
        height: 56px;
      }

      .navBtn { display: none; }

      .hero {
        padding: 42px 18px;
      }

      .hero h1 { letter-spacing: -1.2px; }

      .heroStats,
      .guaranteeCards,
      .proofList,
      .trackingList {
        grid-template-columns: 1fr;
      }

      .heroActions {
        flex-direction: column;
      }

      .heroActions button {
        width: 100%;
      }

      .heroVisual {
        height: 430px;
        border-radius: 28px;
      }

      .section { padding: 58px 18px; }

      .intro {
        padding: 28px;
        margin: 18px;
      }

      .step {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .stepIcon { margin: auto; }

      .winCard,
      .option,
      .problemCard {
        padding: 24px;
      }

      .finalCta {
        margin: 20px 18px 60px;
        padding: 32px;
      }

      .finalCta button { width: 100%; }
    }
  `]
})
export class CommentCaMarcheComponent {
  activeFaq = 0;

  steps = [
    {
      icon: '🔎',
      title: 'تتفرّج في العروض',
      text: 'تشوف الحيوانات المتاحة بالصور، الوزن، العمر، السعر والمنطقة.'
    },
    {
      icon: '🐑',
      title: 'تختار كعبة ولا جملة',
      text: 'تنجم تختار حيوان واحد أو كمية، والسعر يتحسن حسب العدد.'
    },
    {
      icon: '👀',
      title: 'تطلب زيارة أو شراء',
      text: 'كان تحب تتأكد، تطلب زيارة وتشوف الحيوان قبل ما تقرر.'
    },
    {
      icon: '📞',
      title: 'Amana تتصل بيك',
      text: 'نثبتو معاك السعر، الموعد، الكمية، وكل التفاصيل المهمة.'
    },
    {
      icon: '✅',
      title: 'تكمل القرار بثقة',
      text: 'بعد ما تفهم كل شي، تقرر تشري بالكعبة أو بالجملة حسب حاجتك.'
    }
  ];

  guarantees = [
    {
      icon: '🏆',
      title: 'Amana رقم 1',
      text: 'شركة تونسية تركز على شراء المواشي بالكعبة ولا بالجملة بطريقة أوضح وأسهل.'
    },
    {
      icon: '📸',
      title: 'صور ومعلومات',
      text: 'كل عرض فيه معلومات تساعدك تقارن وتقرر: نوع، وزن، عمر، سعر ومنطقة.'
    },
    {
      icon: '💰',
      title: 'أسعار واضحة',
      text: 'السعر ظاهر من الأول، وسعر الجملة يتم تحديده حسب الكمية والمنطقة.'
    },
    {
      icon: '👀',
      title: 'زيارة قبل الشراء',
      text: 'تنجم تشوف الحيوان على عينك قبل ما تكمل قرار الشراء.'
    },
    {
      icon: '📞',
      title: 'تنسيق Amana',
      text: 'نستقبل طلبك، نتصلو بيك، ونثبتو معاك التفاصيل المهمة.'
    },
    {
      icon: '📦',
      title: 'كعبة ولا جملة',
      text: 'تنجم تشري حيوان واحد أو كمية للتجارة والمناسبات بسعر أفضل.'
    }
  ];

  faqs = [
    {
      q: 'شنوّة Amana بالضبط؟',
      a: 'Amana شركة تونسية توفر عروض مواشي مختارة بالكعبة ولا بالجملة، بأسعار واضحة وإمكانية زيارة قبل الشراء.'
    },
    {
      q: 'نجم نشري حيوان واحد فقط؟',
      a: 'إي، تنجم تشري بالكعبة. تدخل للكتالوج، تختار الحيوان، وتبعث طلبك.'
    },
    {
      q: 'نجم نشري بالجملة؟',
      a: 'إي، تنجم تطلب كمية. كل ما تزيد الكمية، تنجم تلقى سعر أفضل حسب النوع والمنطقة.'
    },
    {
      q: 'كيفاش نعرف السعر؟',
      a: 'السعر بالكعبة يكون ظاهر في العرض. أما الجملة يتم تثبيتو حسب الكمية والمنطقة بعد ما تبعث طلبك.'
    },
    {
      q: 'نجم نشوف الحيوان قبل ما نشري؟',
      a: 'إي، في العروض اللي فيها زيارة متاحة، تنجم تطلب زيارة قبل ما تقرر.'
    },
    {
      q: 'شنوّة يصير بعد ما نبعت الطلب؟',
      a: 'Amana تتصل بيك باش تثبت السعر، الكمية، الموعد، وهل تحب زيارة ولا شراء مباشر.'
    }
  ];

  toggleFaq(index: number) {
    this.activeFaq = this.activeFaq === index ? -1 : index;
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
