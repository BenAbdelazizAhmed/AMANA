import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

type AnimalType = 'Mouton' | 'Brebis' | 'Goat' | 'Cow';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <div class="page" dir="rtl">

    <header class="navbar">
      <div class="brand" (click)="scrollTo('home')">
        <img class="brandLogo" src="assets/a.png" alt="Amana logo">
      </div>

      <nav>
        <button (click)="scrollTo('home')">الرئيسية</button>
        <button routerLink="/catalogue">العروض</button>
        <button routerLink="/comment-ca-marche">كيفاش تخدم؟</button>
        <button routerLink="/conseils-fellah">نصائح للفلاح</button>
        <button routerLink="/produits">المعدّات</button>
        <button routerLink="/contact">طلب رسمي</button>
      </nav>

      <div class="actions">
        <button class="navSecondary" routerLink="/comment-ca-marche">إفهم الفكرة</button>
        <button class="navPrimary" routerLink="/catalogue">شوف العروض</button>
      </div>
    </header>

    <section id="home" class="hero">
      <div class="heroText">
        <div class="heroBadge">
          <span></span>
          Amana — شراء المواشي بطريقة أوضح في تونس
        </div>

        <h1>
          إشري مواشي في تونس
          <span>بوضوح، ثقة، وطلب رسمي.</span>
        </h1>

        <p>
          علوش، نعجة، ماعز ولا بقرة: تشوف الصور، الوزن، العمر، المنطقة والسعر التقريبي.
          تبعث طلب رسمي، وبعدها نأكدو معاك التفاصيل قبل أي التزام.
        </p>

        <div class="heroActions">
          <button class="primaryBtn big" routerLink="/catalogue">
            شوف العروض المتاحة
          </button>

          <button class="secondaryBtn big" routerLink="/comment-ca-marche">
            كيفاش تخدم؟
          </button>

          <button class="secondaryBtn big" routerLink="/contact">
            أطلب مساعدة
          </button>
        </div>

        <div class="quickChoice">
          <button routerLink="/catalogue">🐑 بالكعبة</button>
          <button routerLink="/catalogue">📦 بالجملة</button>
          <button routerLink="/contact">👀 طلب زيارة</button>
          <button routerLink="/conseils-fellah">📚 نصائح للفلاح</button>
        </div>

        <div class="proofLine">
          <div>✅ صور ومواصفات واضحة</div>
          <div>⚖️ وزن وسعر تقريبي</div>
          <div>👨‍🌾 مصدر معروف</div>
          <div>📩 لا دفع مباشر</div>
        </div>
      </div>

      <div class="heroVisual">
        <div class="floatingCard top">
          <b>👀 زيارة متاحة</b>
          <span>حسب العرض والمنطقة</span>
        </div>

        <div class="floatingCard bottom">
          <b>📦 جملة</b>
          <span>عرض حسب الكمية</span>
        </div>

        <div class="animalHeroCard">
          <img [src]="animals[0].image" alt="Animal">

          <div class="heroAnimalInfo">
            <div class="animalStatus">
              <span>عرض متاح</span>
              <small>مختار من Amana</small>
            </div>

            <h3>{{ animals[0].name }}</h3>
            <p>{{ animals[0].weight }} · {{ animals[0].age }} · {{ animals[0].region }}</p>

            <div class="animalPrice">
              <div>
                <b>من {{ animals[0].price }} د.ت</b>
                <span>يتأكد بعد مراجعة الطلب</span>
              </div>

              <button (click)="selectAnimal(animals[0])">التفاصيل</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="trustStrip">
      <div><b>🐑 عروض مختارة</b><span>مواشي بالكعبة ولا بالجملة.</span></div>
      <div><b>👀 زيارة قبل الشراء</b><span>حسب توفر العرض والمنطقة.</span></div>
      <div><b>💰 أسعار واضحة</b><span>السعر كتقدير أولي قبل التأكيد.</span></div>
      <div><b>📩 طلب منظم</b><span>تخلي معلوماتك ونراجعو التفاصيل.</span></div>
    </section>

    <section class="valueSection">
      <div class="sectionTitle">
        <small>علاش Amana؟</small>
        <h2>موش إعلان وخلاص. تجربة شراء منظمة.</h2>
        <p>
          الهدف إنك ما تشريش على العمى: تشوف المعلومات، تقارن، تبعث طلب،
          وبعدها يصير التأكيد حسب التوفر والمنطقة.
        </p>
      </div>

      <div class="valueGrid">
        <div>
          <span>📸</span>
          <h3>صور حقيقية</h3>
          <p>كل عرض لازم يكون فيه صور واضحة للحيوان.</p>
        </div>

        <div>
          <span>⚖️</span>
          <h3>مواصفات مفهومة</h3>
          <p>وزن، عمر، نوع، منطقة وسعر تقريبي.</p>
        </div>

        <div>
          <span>👀</span>
          <h3>زيارة ممكنة</h3>
          <p>حسب المنطقة والتوفر، تنجم تطلب زيارة قبل القرار.</p>
        </div>

        <div>
          <span>📩</span>
          <h3>طلب رسمي</h3>
          <p>ما فماش دفع مباشر. نراجعو التفاصيل قبل أي التزام.</p>
        </div>
      </div>
    </section>

    <section id="how" class="section">
      <div class="sectionTitle">
        <small>كيفاش تخدم؟</small>
        <h2>تشوف العرض، تبعث طلب، وبعدها تقرر.</h2>
        <p>لا دفع مباشر. نراجعو التفاصيل معاك قبل أي قرار.</p>
      </div>

      <div class="steps">
        <div class="step" *ngFor="let s of steps; let i = index">
          <strong>0{{ i + 1 }}</strong>
          <div class="stepIcon">{{ s.icon }}</div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </div>
      </div>
    </section>

    <section class="categorySection">
      <div class="section inner">
        <div class="sectionHeader centerHeader">
          <div>
            <small>اختار حسب حاجتك</small>
            <h2>أنواع مختلفة في بلاصة واحدة.</h2>
            <p>علوش، نعجة، ماعز، بقر، وطلبات جملة حسب التوفر.</p>
          </div>
        </div>

        <div class="categories">
          <button routerLink="/catalogue">🐑 علوش</button>
          <button routerLink="/catalogue">🐏 نعجة</button>
          <button routerLink="/catalogue">🐐 ماعز</button>
          <button routerLink="/catalogue">🐄 بقر</button>
          <button routerLink="/catalogue">📦 جملة</button>
        </div>
      </div>
    </section>

    <section id="animals" class="animalsSection">
      <div class="section inner">
        <div class="sectionHeader">
          <div>
            <small>العروض المتاحة</small>
            <h2>قارن العروض بسهولة.</h2>
            <p>صورة، وزن، عمر، منطقة وسعر تقريبي قبل إرسال الطلب.</p>
          </div>

          <button class="darkBtn" routerLink="/catalogue">
            شوف كل العروض
          </button>
        </div>

        <div class="animals">
          <article class="animalCard" *ngFor="let a of visibleAnimals">
            <div class="imgBox">
              <img [src]="a.image" [alt]="a.name">
              <span>{{ a.badge }}</span>

              <button class="heart" [class.liked]="a.liked" (click)="toggleLike(a)">
                {{ a.liked ? '♥' : '♡' }}
              </button>
            </div>

            <div class="cardBody">
              <h3>{{ a.name }}</h3>

              <div class="animalMiniInfo">
                <div><span>الوزن</span><b>{{ a.weight }}</b></div>
                <div><span>العمر</span><b>{{ a.age }}</b></div>
                <div><span>السعر</span><b>من {{ a.price }} د.ت</b></div>
              </div>

              <div class="statusLine">
                <span>{{ a.region }}</span>
                <small>قابل للتأكيد</small>
              </div>

              <button class="detailsBtn" (click)="selectAnimal(a)">
                شوف التفاصيل
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="educationMini">
      <div class="educationText">
        <small>معلومة تفيدك</small>
        <h2>مش كان بيع. زادة نعاونوا الفلاح يتعلّم.</h2>
        <p>
          في صفحة النصائح تلقى معلومات على التغذية، النظافة، علامات المرض،
          ووقتاش يلزم تتصل ببيطري.
        </p>

        <button class="primaryBtn" routerLink="/conseils-fellah">
          شوف نصائح للفلاح
        </button>
      </div>

      <div class="educationCards">
        <div><b>🦠 أمراض شائعة</b><span>علامات الخطر وشنوّة تعمل أولًا.</span></div>
        <div><b>🌾 تغذية</b><span>أخطاء العلف والماء وكيفاش تتجنبها.</span></div>
        <div><b>🧼 نظافة</b><span>الرطوبة والاكتظاظ ومشاكل الحوافر.</span></div>
      </div>
    </section>

    <section id="trust" class="section trustSection">
      <div class="trustText">
        <small>الأمان والثقة</small>
        <h2>الثقة قبل الشراء.</h2>

        <p>
          Amana تعتمد على عروض واضحة، معلومات أساسية، وطلب رسمي قبل أي التزام.
        </p>

        <div class="trustList">
          <div>✅ وزن، عمر، منطقة وسعر تقريبي</div>
          <div>✅ إمكانية طلب زيارة قبل الشراء</div>
          <div>✅ لا يوجد دفع مباشر من الصفحة</div>
          <div>✅ تأكيد التفاصيل قبل القرار</div>
        </div>

        <button class="primaryBtn trustBtn" routerLink="/comment-ca-marche">
          شوف كيفاش تخدم
        </button>
      </div>

      <div class="trackingBox">
        <h3>شنوّة يهم الحريف؟</h3>

        <div class="track">
          <span>📸</span>
          <div><b>صور واضحة</b><p>باش يعرف شنوّة يشري.</p></div>
        </div>

        <div class="track">
          <span>⚖️</span>
          <div><b>مواصفات</b><p>وزن، عمر، نوع ومنطقة.</p></div>
        </div>

        <div class="track">
          <span>📩</span>
          <div><b>طلب رسمي</b><p>بدون دفع مباشر.</p></div>
        </div>

        <button class="whiteBtn" routerLink="/contact">
          قدّم طلب
        </button>
      </div>
    </section>

    <section class="section bulkSection">
      <div class="simText">
        <small>للشراء بالجملة</small>
        <h2>تحتاج كمية؟</h2>
        <p>
          قدّم طلب فيه النوع والكمية والمنطقة، ويتم إعداد عرض حسب التوفر.
        </p>
      </div>

      <div class="bulkCard">
        <div class="bulkIcon">📦</div>
        <h3>طلب جملة</h3>
        <p>مناسب للتجار، المطاعم، المناسبات والعائلات.</p>

        <div class="bulkFacts">
          <div><b>5+</b><span>كمية صغيرة</span></div>
          <div><b>10+</b><span>طلب متوسط</span></div>
          <div><b>20+</b><span>عرض خاص</span></div>
        </div>

        <button class="primaryBtn full" routerLink="/contact">
          أطلب عرض جملة
        </button>
      </div>
    </section>

    <section id="faq" class="section fears">
      <div class="sectionTitle">
        <small>أسئلة مهمة</small>
        <h2>قبل ما تبعث طلب.</h2>
      </div>

      <div class="fearGrid">
        <div>
          <span>سؤال</span>
          <h3>هل الشراء مباشر؟</h3>
          <p>لا. الموقع يستقبل الطلبات، والتأكيد يتم بعد مراجعة التفاصيل.</p>
        </div>

        <div>
          <span>سؤال</span>
          <h3>هل السعر نهائي؟</h3>
          <p>السعر تقريبي، ويتأكد حسب الحيوان، الكمية والمنطقة.</p>
        </div>

        <div>
          <span>سؤال</span>
          <h3>هل نجم نطلب زيارة؟</h3>
          <p>إي، حسب توفر العرض والمنطقة.</p>
        </div>
      </div>
    </section>

    <section class="cta">
      <h2>ابدأ من العروض المتاحة.</h2>
      <p>
        اختار العرض، شوف التفاصيل، وقدّم طلب رسمي قبل الشراء.
      </p>

      <div>
        <button routerLink="/catalogue">شوف العروض</button>
        <button class="contact" routerLink="/contact">قدّم طلب</button>
      </div>
    </section>

    <footer class="footer">
      <div class="footerGrid">
        <div>
          <div class="footerBrand">
            <img class="footerLogo" src="assets/a.png" alt="Amana logo">
          </div>

          <p>
            Amana منصة تونسية لشراء المواشي بالكعبة ولا بالجملة،
            بعروض واضحة وتجربة منظمة قبل قرار الشراء.
          </p>
        </div>

        <div>
          <h4>روابط</h4>
          <a routerLink="/catalogue">العروض</a>
          <a routerLink="/comment-ca-marche">كيفاش تخدم؟</a>
          <a routerLink="/conseils-fellah">نصائح للفلاح</a>
          <a routerLink="/produits">المعدّات</a>
          <a routerLink="/contact">طلب رسمي</a>
        </div>

        <div>
          <h4>طلبات</h4>
          <a routerLink="/contact">شراء بالكعبة</a>
          <a routerLink="/contact">شراء بالجملة</a>
          <a routerLink="/contact">طلب زيارة</a>
          <a routerLink="/contact">طلب مساعدة</a>
        </div>
      </div>

      <div class="footerBottom">
        <span>© 2026 Amana</span>
        <span>عروض واضحة · طلب رسمي · قرار بثقة</span>
      </div>
    </footer>

    <div class="toast" *ngIf="toast">{{ toast }}</div>
  </div>
  `,
  styles: [`
    * { box-sizing: border-box; }

    :host {
      display: block;
      font-family: Inter, system-ui, Arial, sans-serif;
      color: #10251a;
      --green: #0f6b3e;
      --green2: #18a058;
      --dark: #062d1c;
      --cream: #fff6e7;
      --muted: #657468;
      --line: #e4ece3;
      --orange: #f5841f;
      --shadow: 0 24px 60px rgba(10, 45, 28, .14);
    }

    .page {
      min-height: 100vh;
      background: linear-gradient(180deg, #fff8ec, #ffffff 38%, #f5fbf7);
      overflow-x: hidden;
    }

    .navbar {
      height: 92px;
      padding: 0 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(255, 255, 255, .92);
      backdrop-filter: blur(18px);
      border-bottom: 1px solid #e6eee3;
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .brand {
      display: flex;
      align-items: center;
      cursor: pointer;
      min-width: 190px;
    }

    .brandLogo {
      width: 170px;
      height: 130px;
      object-fit: contain;
      display: block;
      transform: scale(1.08);
      transform-origin: right center;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 7px;
      background: #f8fbf6;
      border: 1px solid #e8eee3;
      border-radius: 999px;
    }

    nav button {
      background: transparent;
      color: #263d2e;
      font-size: 13px;
      font-weight: 900;
      padding: 11px 12px;
      border-radius: 999px;
      border: none;
      cursor: pointer;
    }

    nav button:hover {
      background: white;
      box-shadow: 0 8px 20px rgba(20,55,35,.08);
      transform: none;
      color: var(--green);
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    button {
      font-family: inherit;
      border: none;
      cursor: pointer;
      transition: .22s ease;
      font-weight: 950;
    }

    button:hover { transform: translateY(-2px); }

    .navSecondary {
      padding: 13px 18px;
      border-radius: 15px;
      background: white;
      color: var(--dark);
      border: 1px solid #dfe8dc;
    }

    .navPrimary,
    .primaryBtn {
      padding: 14px 22px;
      border-radius: 16px;
      color: white;
      background: linear-gradient(135deg, #18a058, #0b6737);
      box-shadow: 0 16px 32px rgba(15,107,62,.25);
    }

    .secondaryBtn {
      padding: 14px 22px;
      border-radius: 16px;
      color: var(--dark);
      background: rgba(255,255,255,.78);
      border: 1px solid rgba(10,70,40,.22);
    }

    .big {
      padding: 18px 26px;
      font-size: 15px;
    }

    .hero {
      min-height: calc(100vh - 92px);
      padding: 42px 56px 58px;
      display: grid;
      grid-template-columns: 1.02fr .98fr;
      gap: 54px;
      align-items: center;
      background:
        radial-gradient(circle at 12% 20%, rgba(24,160,88,.14), transparent 34%),
        radial-gradient(circle at 88% 12%, rgba(245,132,31,.12), transparent 30%),
        linear-gradient(135deg, #fff7e9, #fff 70%);
    }

    .heroText {
      text-align: right;
      direction: rtl;
    }

    .heroBadge {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      padding: 11px 18px;
      border-radius: 999px;
      background: #eaf8ef;
      color: var(--green);
      font-size: 14px;
      font-weight: 950;
      margin-bottom: 22px;
      line-height: 1.6;
    }

    .heroBadge span {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: var(--green2);
      animation: pulse 1.8s infinite;
      flex-shrink: 0;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.7); opacity: .45; }
    }

    .hero h1 {
      margin: 0;
      max-width: 800px;
      font-size: clamp(42px, 5.4vw, 70px);
      line-height: 1.04;
      letter-spacing: -2px;
      color: var(--dark);
      font-weight: 950;
    }

    .hero h1 span {
      display: block;
      color: var(--green);
    }

    .hero p {
      margin: 24px 0 30px;
      max-width: 660px;
      color: #2b4636;
      font-size: 18px;
      line-height: 1.8;
    }

    .heroActions,
    .quickChoice,
    .proofLine {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      justify-content: flex-start;
    }

    .quickChoice { margin-top: 20px; }

    .quickChoice button {
      padding: 14px 18px;
      border-radius: 16px;
      background: white;
      color: var(--dark);
      border: 1px solid #e5ece3;
      box-shadow: 0 10px 22px rgba(20,55,35,.06);
    }

    .quickChoice button:hover {
      background: #eaf8ef;
      color: var(--green);
    }

    .proofLine { margin-top: 22px; }

    .proofLine div {
      padding: 10px 13px;
      border-radius: 999px;
      background: white;
      border: 1px solid #e5ece3;
      color: #31513c;
      font-size: 13px;
      font-weight: 900;
      box-shadow: 0 10px 22px rgba(20,55,35,.06);
    }

    .heroVisual { position: relative; }

    .animalHeroCard {
      position: relative;
      border-radius: 38px;
      overflow: hidden;
      box-shadow: var(--shadow);
      background: white;
    }

    .animalHeroCard img {
      width: 100%;
      height: 520px;
      object-fit: cover;
      display: block;
      transition: .65s;
    }

    .animalHeroCard:hover img { transform: scale(1.06); }

    .heroAnimalInfo {
      position: absolute;
      left: 28px;
      right: 28px;
      bottom: 28px;
      padding: 24px;
      border-radius: 28px;
      background: rgba(255,255,255,.94);
      backdrop-filter: blur(14px);
      text-align: right;
      direction: rtl;
    }

    .animalStatus {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      align-items: center;
      margin-bottom: 15px;
    }

    .animalStatus span {
      padding: 7px 12px;
      border-radius: 999px;
      background: #e9f7ee;
      color: var(--green);
      font-size: 12px;
      font-weight: 950;
    }

    .animalStatus small {
      color: var(--muted);
      font-weight: 850;
    }

    .heroAnimalInfo h3 {
      margin: 0 0 7px;
      font-size: 25px;
      letter-spacing: -.5px;
    }

    .heroAnimalInfo p {
      margin: 0;
      font-size: 14px;
      color: var(--muted);
    }

    .animalPrice {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 12px;
      margin-top: 18px;
    }

    .animalPrice b {
      display: block;
      color: var(--green);
      font-size: 30px;
      line-height: 1;
    }

    .animalPrice span {
      color: var(--muted);
      font-size: 12px;
      font-weight: 800;
    }

    .animalPrice button {
      padding: 14px 18px;
      border-radius: 15px;
      background: var(--orange);
      color: white;
      white-space: nowrap;
    }

    .floatingCard {
      position: absolute;
      z-index: 2;
      padding: 14px 16px;
      border-radius: 19px;
      background: white;
      box-shadow: var(--shadow);
      display: grid;
      gap: 3px;
      animation: float 3s ease-in-out infinite;
      text-align: right;
    }

    .floatingCard b {
      color: var(--dark);
      font-size: 14px;
    }

    .floatingCard span {
      color: var(--muted);
      font-size: 12px;
      font-weight: 800;
    }

    .floatingCard.top { top: -26px; left: -22px; }
    .floatingCard.bottom { bottom: 130px; left: -42px; animation-delay: .7s; }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    .trustStrip {
      max-width: 1180px;
      margin: -35px auto 12px;
      padding: 0 18px;
      position: relative;
      z-index: 5;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      direction: rtl;
    }

    .trustStrip div,
    .valueGrid div,
    .educationCards div {
      background: white;
      border: 1px solid #e5ece3;
      box-shadow: 0 14px 34px rgba(20,55,35,.09);
      text-align: right;
    }

    .trustStrip div {
      min-height: 104px;
      border-radius: 22px;
      padding: 17px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .trustStrip b {
      display: block;
      margin-bottom: 6px;
      color: var(--dark);
      line-height: 1.3;
      font-size: 14px;
    }

    .trustStrip span {
      color: var(--muted);
      font-size: 12.5px;
      line-height: 1.55;
    }

    .section,
    .valueSection {
      max-width: 1320px;
      margin: 0 auto;
      padding: 60px 30px;
    }

    .sectionTitle {
      max-width: 780px;
      margin: 0 auto 42px;
      text-align: center;
      direction: rtl;
    }

    small {
      color: var(--green);
      font-size: 13px;
      font-weight: 950;
      text-transform: uppercase;
      letter-spacing: .7px;
    }

    .sectionTitle h2,
    .sectionHeader h2,
    .trustSection h2,
    .bulkSection h2,
    .cta h2,
    .educationText h2 {
      margin: 8px 0 0;
      color: var(--dark);
      font-size: clamp(30px, 4vw, 44px);
      line-height: 1.13;
      letter-spacing: -1.3px;
    }

    .sectionTitle p,
    .sectionHeader p,
    .trustSection p,
    .bulkSection p,
    .educationText p {
      color: var(--muted);
      font-size: 16px;
      line-height: 1.7;
    }

    .valueGrid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
    }

    .valueGrid div {
      border-radius: 26px;
      padding: 24px;
    }

    .valueGrid span {
      width: 58px;
      height: 58px;
      display: grid;
      place-items: center;
      border-radius: 20px;
      background: var(--cream);
      font-size: 28px;
      margin-bottom: 14px;
    }

    .valueGrid h3 {
      margin: 0 0 10px;
      font-size: 22px;
    }

    .valueGrid p {
      margin: 0;
      color: var(--muted);
      line-height: 1.7;
    }

    .steps {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      direction: rtl;
    }

    .step,
    .bulkCard {
      background: white;
      border: 1px solid #edf1e9;
      border-radius: 26px;
      padding: 24px;
      box-shadow: 0 14px 34px rgba(35,65,45,.08);
      text-align: right;
    }

    .step {
      position: relative;
      overflow: hidden;
    }

    .step strong {
      position: absolute;
      top: 16px;
      left: 18px;
      font-size: 48px;
      color: rgba(15,107,62,.08);
      font-weight: 950;
    }

    .stepIcon {
      width: 58px;
      height: 58px;
      display: grid;
      place-items: center;
      border-radius: 20px;
      background: var(--cream);
      font-size: 28px;
      margin-bottom: 16px;
    }

    .step h3 {
      margin: 0 0 10px;
      font-size: 21px;
    }

    .step p {
      margin: 0;
      color: var(--muted);
      line-height: 1.6;
      font-size: 14px;
    }

    .categorySection { background: #f7fbf7; }

    .centerHeader {
      justify-content: center !important;
      text-align: center !important;
    }

    .categories {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 14px;
      direction: rtl;
    }

    .categories button {
      padding: 22px;
      border-radius: 24px;
      background: white;
      color: var(--dark);
      border: 1px solid var(--line);
      box-shadow: 0 12px 28px rgba(35,65,45,.08);
      font-size: 19px;
    }

    .categories button:hover {
      background: #eaf8ef;
      color: var(--green);
    }

    .animalsSection {
      background: linear-gradient(180deg, #f5fbf7, #fdfaf4);
    }

    .inner {
      padding-top: 76px;
      padding-bottom: 76px;
    }

    .sectionHeader {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 24px;
      margin-bottom: 30px;
      direction: rtl;
      text-align: right;
    }

    .sectionHeader > div { max-width: 760px; }

    .darkBtn {
      padding: 15px 22px;
      border-radius: 16px;
      background: var(--dark);
      color: white;
      box-shadow: 0 16px 30px rgba(5,45,28,.18);
      white-space: nowrap;
    }

    .animals {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      direction: rtl;
    }

    .animalCard {
      background: white;
      border-radius: 24px;
      overflow: hidden;
      border: 1px solid #edf1e9;
      box-shadow: 0 14px 30px rgba(35,65,45,.09);
      transition: .25s;
    }

    .animalCard:hover {
      transform: translateY(-8px);
      box-shadow: 0 26px 54px rgba(35,65,45,.15);
    }

    .imgBox {
      height: 188px;
      position: relative;
      overflow: hidden;
    }

    .imgBox img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: .55s;
    }

    .animalCard:hover .imgBox img { transform: scale(1.07); }

    .imgBox span {
      position: absolute;
      right: 12px;
      top: 12px;
      background: var(--green);
      color: white;
      border-radius: 999px;
      padding: 7px 11px;
      font-size: 11px;
      font-weight: 950;
    }

    .heart {
      position: absolute;
      left: 12px;
      top: 12px;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: rgba(255,255,255,.94);
      color: var(--green);
      font-size: 21px;
    }

    .heart.liked {
      background: #ffe8e8;
      color: #d92020;
    }

    .cardBody {
      padding: 17px;
      text-align: right;
    }

    .cardBody h3 {
      margin: 0 0 14px;
      font-size: 18px;
      min-height: 44px;
    }

    .animalMiniInfo {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
      margin-bottom: 12px;
    }

    .animalMiniInfo div {
      background: #f5faf6;
      border-radius: 14px;
      padding: 10px 8px;
    }

    .animalMiniInfo span {
      display: block;
      color: var(--muted);
      font-size: 11px;
      font-weight: 800;
      margin-bottom: 4px;
    }

    .animalMiniInfo b {
      color: var(--dark);
      font-size: 13px;
    }

    .statusLine {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #e9f7ee;
      color: var(--green);
      border-radius: 14px;
      padding: 10px 12px;
      margin-bottom: 12px;
      font-weight: 900;
      font-size: 12px;
    }

    .statusLine small { color: var(--muted); }

    .detailsBtn {
      width: 100%;
      padding: 13px;
      border-radius: 15px;
      background: var(--dark);
      color: white;
    }

    .educationMini {
      max-width: 1180px;
      margin: 40px auto;
      padding: 34px;
      border-radius: 34px;
      background: #fffaf1;
      border: 1px solid #f2e2c8;
      display: grid;
      grid-template-columns: .9fr 1.1fr;
      gap: 24px;
      align-items: center;
      direction: rtl;
      box-shadow: 0 14px 34px rgba(35,65,45,.08);
    }

    .educationText {
      text-align: right;
    }

    .educationText p {
      margin-bottom: 18px;
    }

    .educationCards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }

    .educationCards div {
      border-radius: 22px;
      padding: 20px;
    }

    .educationCards b {
      display: block;
      margin-bottom: 8px;
      color: var(--dark);
    }

    .educationCards span {
      color: var(--muted);
      line-height: 1.6;
      font-size: 13px;
      font-weight: 850;
    }

    .trustSection,
    .bulkSection {
      display: grid;
      grid-template-columns: 1.08fr .82fr;
      gap: 44px;
      align-items: center;
      direction: rtl;
      text-align: right;
    }

    .trustList {
      display: grid;
      gap: 12px;
      margin-top: 24px;
    }

    .trustList div {
      padding: 15px 17px;
      border-radius: 18px;
      background: white;
      box-shadow: 0 10px 24px rgba(35,65,45,.07);
      font-weight: 900;
      font-size: 14px;
    }

    .trustBtn { margin-top: 18px; }

    .trackingBox {
      padding: 32px;
      border-radius: 34px;
      background: linear-gradient(180deg, #0c5030, #07351f);
      color: white;
      box-shadow: var(--shadow);
    }

    .trackingBox h3 {
      margin: 0 0 20px;
      font-size: 30px;
    }

    .track {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 16px;
      border-radius: 19px;
      background: rgba(255,255,255,.12);
      margin-bottom: 14px;
    }

    .track span {
      width: 45px;
      height: 45px;
      display: grid;
      place-items: center;
      border-radius: 15px;
      background: rgba(255,255,255,.16);
      font-size: 22px;
      flex-shrink: 0;
    }

    .track b,
    .track p { margin: 0; }

    .track p {
      margin-top: 4px;
      color: rgba(255,255,255,.72);
      font-size: 13px;
    }

    .whiteBtn {
      width: 100%;
      padding: 16px;
      border-radius: 16px;
      background: white;
      color: var(--dark);
      margin-top: 8px;
    }

    .bulkCard { text-align: center; }

    .bulkIcon {
      width: 70px;
      height: 70px;
      margin: 0 auto 16px;
      border-radius: 24px;
      background: var(--cream);
      display: grid;
      place-items: center;
      font-size: 34px;
    }

    .bulkCard h3 {
      font-size: 27px;
      margin-bottom: 10px;
    }

    .bulkCard p {
      color: var(--muted);
      line-height: 1.7;
    }

    .bulkFacts {
      margin: 22px 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    .bulkFacts div {
      padding: 14px;
      border-radius: 18px;
      background: #f7fbf7;
      border: 1px solid var(--line);
    }

    .bulkFacts b {
      display: block;
      color: var(--green);
      font-size: 24px;
    }

    .bulkFacts span {
      color: var(--muted);
      font-size: 12px;
      font-weight: 800;
    }

    .full {
      width: 100%;
      padding: 16px;
    }

    .fearGrid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 22px;
      direction: rtl;
    }

    .fearGrid div {
      padding: 26px;
      border-radius: 26px;
      background: white;
      border: 1px solid #edf1e9;
      box-shadow: 0 16px 35px rgba(35,65,45,.08);
      text-align: right;
    }

    .fearGrid span {
      display: inline-block;
      margin-bottom: 14px;
      padding: 8px 13px;
      border-radius: 999px;
      background: #fff4e7;
      color: var(--orange);
      font-size: 12px;
      font-weight: 950;
    }

    .fearGrid h3 {
      margin: 0 0 12px;
      color: var(--dark);
      font-size: 21px;
      line-height: 1.25;
    }

    .fearGrid p {
      margin: 0;
      color: var(--muted);
      line-height: 1.7;
      font-size: 14px;
    }

    .cta {
      max-width: 1180px;
      margin: 45px auto 80px;
      padding: 60px 30px;
      border-radius: 36px;
      text-align: center;
      color: white;
      direction: rtl;
      background:
        linear-gradient(135deg, rgba(5,50,31,.96), rgba(14,120,66,.83)),
        url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=80');
      background-size: cover;
      background-position: center;
      box-shadow: var(--shadow);
    }

    .cta h2 {
      color: white;
      max-width: 760px;
      margin: auto;
    }

    .cta p {
      margin: 18px auto 28px;
      max-width: 660px;
      color: rgba(255,255,255,.86);
      font-size: 17px;
      line-height: 1.7;
    }

    .cta button {
      margin: 5px;
      padding: 18px 28px;
      border-radius: 17px;
      background: var(--orange);
      color: white;
      font-size: 16px;
    }

    .cta .contact {
      background: rgba(255,255,255,.16);
      border: 1px solid rgba(255,255,255,.32);
    }

    .footer {
      padding: 58px 56px 26px;
      background:
        radial-gradient(circle at 15% 10%, rgba(21,164,90,.22), transparent 28%),
        linear-gradient(180deg, #083923, #03180f);
      color: white;
      direction: rtl;
    }

    .footerGrid {
      display: grid;
      grid-template-columns: 1.5fr .7fr .7fr;
      gap: 44px;
      padding-bottom: 34px;
    }

    .footerBrand {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }

    .footerLogo {
      width: 220px;
      height: 88px;
      object-fit: contain;
      display: block;
    }

    .footer p {
      max-width: 500px;
      line-height: 1.8;
      color: rgba(255,255,255,.68);
    }

    .footer h4 { margin: 0 0 16px; }

    .footer a {
      display: block;
      color: rgba(255,255,255,.7);
      margin-bottom: 10px;
      text-decoration: none;
      cursor: pointer;
    }

    .footerBottom {
      border-top: 1px solid rgba(255,255,255,.1);
      padding-top: 20px;
      display: flex;
      justify-content: space-between;
      color: rgba(255,255,255,.55);
      font-size: 13px;
      gap: 14px;
      flex-wrap: wrap;
    }

    .toast {
      position: fixed;
      right: 24px;
      bottom: 24px;
      background: var(--dark);
      color: white;
      padding: 15px 20px;
      border-radius: 16px;
      box-shadow: var(--shadow);
      z-index: 120;
      font-weight: 900;
    }

    @media (max-width: 1120px) {
      nav { display: none; }

      .hero,
      .trustSection,
      .bulkSection,
      .educationMini {
        grid-template-columns: 1fr;
      }

      .heroText {
        text-align: center;
      }

      .hero p,
      .hero h1 {
        margin-left: auto;
        margin-right: auto;
      }

      .heroActions,
      .proofLine,
      .quickChoice {
        justify-content: center;
      }

      .animals,
      .steps,
      .categories,
      .trustStrip,
      .fearGrid,
      .valueGrid,
      .educationCards {
        grid-template-columns: repeat(2, 1fr);
      }

      .footerGrid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 720px) {
      .navbar {
        height: auto;
        padding: 14px 18px;
      }

      .actions { display: none; }

      .brand { min-width: 150px; }

      .brandLogo {
        width: 155px;
        height: 58px;
        transform: scale(1.08);
      }

      .hero {
        padding: 34px 18px 60px;
        min-height: auto;
      }

      .hero h1 {
        font-size: 37px;
        letter-spacing: -1px;
      }

      .hero p { font-size: 16px; }

      .heroActions,
      .quickChoice {
        flex-direction: column;
      }

      .heroActions button,
      .quickChoice button {
        width: 100%;
      }

      .proofLine div {
        width: 100%;
        text-align: center;
      }

      .animalHeroCard img { height: 410px; }

      .floatingCard { display: none; }

      .animalPrice {
        flex-direction: column;
        align-items: stretch;
      }

      .section,
      .valueSection {
        padding: 54px 18px;
      }

      .educationMini {
        margin: 28px 18px;
        padding: 24px;
      }

      .sectionHeader { display: block; }

      .darkBtn {
        width: 100%;
        margin-top: 18px;
      }

      .animals,
      .steps,
      .trustStrip,
      .fearGrid,
      .bulkFacts,
      .categories,
      .valueGrid,
      .educationCards {
        grid-template-columns: 1fr;
      }

      .trustStrip { margin-top: 24px; }

      .imgBox { height: 230px; }

      .cta {
        margin: 35px 18px 60px;
        padding: 44px 20px;
      }

      .footer {
        padding: 44px 20px 24px;
      }

      .footerLogo {
        width: 170px;
        height: 70px;
      }
    }
  `]
})
export class AccueilComponent {
  constructor(private router: Router) {}

  toast = '';
  visibleCount = 4;

  steps = [
    {
      icon: '🔎',
      title: 'شوف العرض',
      text: 'صور، وزن، عمر، منطقة وسعر تقريبي.'
    },
    {
      icon: '🐑',
      title: 'اختار المناسب',
      text: 'كعبة، جملة، أو زيارة قبل الشراء.'
    },
    {
      icon: '📩',
      title: 'ابعث طلب',
      text: 'طلب رسمي بدون دفع مباشر.'
    },
    {
      icon: '✅',
      title: 'أكد التفاصيل',
      text: 'نراجعو التوفر والسعر والمنطقة، وبعدها تقرر براحتك.'
    }
  ];

  animals = [
    {
      id: 1,
      type: 'Mouton' as AnimalType,
      name: 'علوش سيدي بوزيد',
      image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=900&q=80',
      weight: '42 kg',
      age: '8 أشهر',
      region: 'سيدي بوزيد',
      price: 850,
      badge: 'عرض متاح',
      liked: false
    },
    {
      id: 2,
      type: 'Brebis' as AnimalType,
      name: 'نعجة بربرية',
      image: 'https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?auto=format&fit=crop&w=900&q=80',
      weight: '38 kg',
      age: '7 أشهر',
      region: 'القيروان',
      price: 760,
      badge: 'سعر مناسب',
      liked: false
    },
    {
      id: 3,
      type: 'Goat' as AnimalType,
      name: 'ماعز من باجة',
      image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=900&q=80',
      weight: '32 kg',
      age: '10 أشهر',
      region: 'باجة',
      price: 690,
      badge: 'زيارة متاحة',
      liked: false
    },
    {
      id: 4,
      type: 'Cow' as AnimalType,
      name: 'بقرة حلوب',
      image: 'https://images.unsplash.com/photo-1507103011901-e954d6ec0988?auto=format&fit=crop&w=900&q=80',
      weight: '420 kg',
      age: '3 سنوات',
      region: 'نابل',
      price: 5200,
      badge: 'عرض خاص',
      liked: false
    }
  ];

  get visibleAnimals() {
    return this.animals.slice(0, this.visibleCount);
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  toggleLike(animal: any) {
    animal.liked = !animal.liked;
    this.showToast(animal.liked ? 'تزاد للمفضلة ❤️' : 'تنحّى من المفضلة');
  }

  selectAnimal(animal: any) {
    this.router.navigate(['/animal', animal.id]);
  }

  showToast(message: string) {
    this.toast = message;
    setTimeout(() => this.toast = '', 2200);
  }
}
