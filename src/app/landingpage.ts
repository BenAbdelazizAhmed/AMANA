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
      <div class="brand" routerLink="/accueil">
        <img class="brandLogo" src="assets/a.png" alt="Amana logo">
      </div>

      <nav>
        <button routerLink="/accueil">الرئيسية</button>
        <button routerLink="/catalogue">شراء المواشي</button>
        <button routerLink="/comment-ca-marche">كيفاش نخدمو؟</button>
        <button routerLink="/conseils-fellah">نصائح</button>
        <button routerLink="/produits">المعدّات</button>
      </nav>

      <button class="navPrimary" routerLink="/contact">أطلب الآن</button>
    </header>

    <section id="home" class="hero">
      <div class="heroText">
        <div class="heroBadge">
          <span></span>
          Amana — شراء مواشي بطريقة واضحة
        </div>

        <h1>
          تحب تشري علوش، نعجة ولا بقرة؟
          <span>شوف العرض وابعث طلبك.</span>
        </h1>

        <p>
          صور، وزن، عمر، منطقة وسعر تقريبي. إنت تختار العرض،
          وبعدها نأكدو معاك التفاصيل قبل أي التزام.
        </p>

        <div class="heroActions">
          <button class="primaryBtn big" routerLink="/catalogue">
            شوف المواشي للبيع
          </button>

          <button class="secondaryBtn big" routerLink="/comment-ca-marche">
            كيفاش يتم الشراء؟
          </button>
        </div>

        <div class="simpleChoices">
          <button routerLink="/catalogue">🐑 نحب نشري كعبة</button>
          <button routerLink="/contact">📦 نحب كمية</button>
          <button routerLink="/contact">👀 نحب نسأل</button>
        </div>
      </div>

      <div class="heroVisual">
        <div class="animalHeroCard">
          <img [src]="animals[0].image" alt="Animal">

          <div class="heroAnimalInfo">
            <span class="pill">عرض متاح</span>
            <h3>{{ animals[0].name }}</h3>
            <p>{{ animals[0].weight }} · {{ animals[0].age }} · {{ animals[0].region }}</p>

            <div class="animalPrice">
              <div>
                <b>من {{ animals[0].price }} د.ت</b>
                <span>السعر يتأكد بعد الطلب</span>
              </div>

              <button (click)="selectAnimal(animals[0])">شوف العرض</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="trustStrip">
      <div><b>📸 صور واضحة</b><span>باش تشوف الحيوان قبل الطلب.</span></div>
      <div><b>⚖️ وزن وسعر</b><span>معلومات بسيطة ومفهومة.</span></div>
      <div><b>📩 طلب رسمي</b><span>ما فماش دفع مباشر.</span></div>
      <div><b>👨‍🌾 تواصل سهل</b><span>نأكدو التفاصيل معاك.</span></div>
    </section>

    <section class="section">
      <div class="sectionTitle">
        <small>كيفاش تخدم؟</small>
        <h2>3 خطوات بسيطة برشا.</h2>
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
            <small>اختار شنوة تحب</small>
            <h2>مواشي بالكعبة ولا بالجملة.</h2>
          </div>
        </div>

        <div class="categories">
          <button routerLink="/catalogue">🐑 علوش</button>
          <button routerLink="/catalogue">🐏 نعجة</button>
          <button routerLink="/catalogue">🐐 ماعز</button>
          <button routerLink="/catalogue">🐄 بقر</button>
          <button routerLink="/contact">📦 كمية</button>
        </div>
      </div>
    </section>

    <section id="animals" class="animalsSection">
      <div class="section inner">
        <div class="sectionHeader">
          <div>
            <small>عروض متاحة</small>
            <h2>شوف أمثلة من العروض.</h2>
            <p>الحريف يفهم بسرعة: صورة، وزن، عمر، منطقة وسعر تقريبي.</p>
          </div>

          <button class="darkBtn" routerLink="/catalogue">شوف كل العروض</button>
        </div>

        <div class="animals">
          <article class="animalCard" *ngFor="let a of visibleAnimals">
            <div class="imgBox">
              <img [src]="a.image" [alt]="a.name">
              <span>{{ a.badge }}</span>
            </div>

            <div class="cardBody">
              <h3>{{ a.name }}</h3>

              <div class="animalMiniInfo">
                <div><span>الوزن</span><b>{{ a.weight }}</b></div>
                <div><span>العمر</span><b>{{ a.age }}</b></div>
                <div><span>السعر</span><b>{{ a.price }} د.ت</b></div>
              </div>

              <div class="statusLine">
                <span>{{ a.region }}</span>
                <small>يتأكد بعد الطلب</small>
              </div>

              <button class="detailsBtn" (click)="selectAnimal(a)">شوف التفاصيل</button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="educationMini">
      <div class="educationText">
        <small>قيمة إضافية</small>
        <h2>نعاونوا الفلاح زادة بالمعلومة.</h2>
        <p>
          نصائح بسيطة على التغذية، النظافة، علامات المرض، ووقتاش يلزم بيطري.
        </p>

        <button class="primaryBtn" routerLink="/conseils-fellah">شوف النصائح</button>
      </div>

      <div class="educationCards">
        <div><b>🦠 أمراض</b><span>علامات الخطر.</span></div>
        <div><b>🌾 تغذية</b><span>أخطاء لازم تتجنبها.</span></div>
        <div><b>🛠️ معدات</b><span>لوازم تنجم تحتاجها.</span></div>
      </div>
    </section>

    <section class="section trustSection">
      <div class="trustText">
        <small>الثقة</small>
        <h2>قبل ما تشري، لازم تفهم العرض.</h2>
        <p>
          Amana تخلي الحريف يشوف المعلومات الأساسية قبل ما يبعث طلب.
        </p>

        <div class="trustList">
          <div>✅ صورة واضحة للحيوان</div>
          <div>✅ وزن، عمر، منطقة وسعر تقريبي</div>
          <div>✅ طلب رسمي بدون دفع مباشر</div>
          <div>✅ إمكانية سؤال أو طلب زيارة حسب التوفر</div>
        </div>
      </div>

      <div class="trackingBox">
        <h3>شنوّة يعمل الحريف؟</h3>

        <div class="track">
          <span>1</span>
          <div><b>يشوف العرض</b><p>صور ومعلومات بسيطة.</p></div>
        </div>

        <div class="track">
          <span>2</span>
          <div><b>يبعث طلب</b><p>اسمو، تليفونو، الولاية.</p></div>
        </div>

        <div class="track">
          <span>3</span>
          <div><b>نأكدو معاه</b><p>السعر والتوفر والتفاصيل.</p></div>
        </div>

        <button class="whiteBtn" routerLink="/contact">نحب نبعث طلب</button>
      </div>
    </section>

    <section class="cta">
      <h2>تحب تبدأ؟</h2>
      <p>شوف العروض، اختار المناسب، وابعث طلبك بطريقة واضحة.</p>

      <div>
        <button routerLink="/catalogue">شوف العروض</button>
        <button class="contact" routerLink="/contact">ابعث طلب</button>
      </div>
    </section>

    <footer class="footer">
      <div class="footerTop">
        <div>
          <img class="footerLogo" src="assets/a.png" alt="Amana logo">
          <p>
            Amana منصة تونسية تساعدك تشري مواشي بطريقة أوضح:
            عروض، معلومات، طلب رسمي، وتواصل قبل الشراء.
          </p>
        </div>

        <div>
          <h4>الموقع</h4>
          <a routerLink="/accueil">الرئيسية</a>
          <a routerLink="/catalogue">شراء المواشي</a>
          <a routerLink="/produits">معدات الفلاح</a>
          <a routerLink="/conseils-fellah">نصائح للفلاح</a>
        </div>

        <div>
          <h4>طلبات</h4>
          <a routerLink="/contact">نحب نشري</a>
          <a routerLink="/contact">نحب كمية</a>
          <a routerLink="/contact">نحب نسأل</a>
          <a routerLink="/comment-ca-marche">كيفاش تخدم؟</a>
        </div>

        <div>
          <h4>ثقة</h4>
          <p class="footerSmall">
            لا دفع مباشر من الصفحة. كل طلب يتم تأكيده مع الحريف قبل أي التزام.
          </p>
          <button routerLink="/contact">تواصل معنا</button>
        </div>
      </div>

      <div class="footerBottom">
        <span>© 2026 Amana</span>
        <span>شراء واضح · طلب رسمي · ثقة قبل القرار</span>
      </div>
    </footer>

    <div class="mobileBar">
      <button routerLink="/catalogue">🐑 العروض</button>
      <button routerLink="/contact">📩 طلب</button>
      <button routerLink="/comment-ca-marche">❓ الشرح</button>
    </div>

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
      --shadow: 0 24px 60px rgba(10,45,28,.14);
    }

    .page {
      min-height: 100vh;
      background: linear-gradient(180deg, #fff8ec, #fff 40%, #f5fbf7);
      overflow-x: hidden;
      padding-bottom: 0;
    }

    button {
      font-family: inherit;
      border: none;
      cursor: pointer;
      transition: .22s ease;
      font-weight: 950;
    }

    button:hover { transform: translateY(-2px); }

    .navbar {
      height: 88px;
      padding: 0 46px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(255,255,255,.94);
      backdrop-filter: blur(18px);
      border-bottom: 1px solid #e6eee3;
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .brand {
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    .brandLogo {
      width: 160px;
      height: 82px;
      object-fit: contain;
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
      padding: 11px 13px;
      border-radius: 999px;
    }

    nav button:hover {
      background: white;
      color: var(--green);
      transform: none;
      box-shadow: 0 8px 20px rgba(20,55,35,.08);
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
      background: white;
      border: 1px solid rgba(10,70,40,.18);
    }

    .big {
      padding: 18px 26px;
      font-size: 16px;
    }

    .hero {
      min-height: calc(100vh - 88px);
      padding: 42px 56px 58px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 54px;
      align-items: center;
      background:
        radial-gradient(circle at 12% 20%, rgba(24,160,88,.14), transparent 34%),
        radial-gradient(circle at 88% 12%, rgba(245,132,31,.12), transparent 30%),
        linear-gradient(135deg, #fff7e9, #fff 70%);
    }

    .heroText { text-align: right; }

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
    }

    .heroBadge span {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: var(--green2);
      animation: pulse 1.8s infinite;
    }

    @keyframes pulse {
      0%,100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.7); opacity: .45; }
    }

    .hero h1 {
      margin: 0;
      max-width: 820px;
      font-size: clamp(40px, 5vw, 68px);
      line-height: 1.05;
      letter-spacing: -1.8px;
      color: var(--dark);
      font-weight: 950;
    }

    .hero h1 span {
      display: block;
      color: var(--green);
    }

    .hero p {
      margin: 24px 0 30px;
      max-width: 650px;
      color: #2b4636;
      font-size: 18px;
      line-height: 1.8;
    }

    .heroActions,
    .simpleChoices {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .simpleChoices {
      margin-top: 18px;
    }

    .simpleChoices button {
      padding: 13px 16px;
      border-radius: 16px;
      background: white;
      color: var(--dark);
      border: 1px solid #e5ece3;
      box-shadow: 0 10px 22px rgba(20,55,35,.06);
    }

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
    }

    .heroAnimalInfo {
      position: absolute;
      left: 24px;
      right: 24px;
      bottom: 24px;
      padding: 24px;
      border-radius: 28px;
      background: rgba(255,255,255,.94);
      backdrop-filter: blur(14px);
      text-align: right;
    }

    .pill {
      display: inline-block;
      padding: 7px 12px;
      border-radius: 999px;
      background: #e9f7ee;
      color: var(--green);
      font-size: 12px;
      font-weight: 950;
      margin-bottom: 12px;
    }

    .heroAnimalInfo h3 {
      margin: 0 0 7px;
      font-size: 25px;
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
      font-size: 29px;
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
    }

    .trustStrip {
      max-width: 1180px;
      margin: -35px auto 12px;
      padding: 0 18px;
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 10px;
      position: relative;
      z-index: 5;
    }

    .trustStrip div,
    .step,
    .valueGrid div,
    .educationCards div,
    .animalCard,
    .fearGrid div,
    .bulkCard {
      background: white;
      border: 1px solid #e5ece3;
      box-shadow: 0 14px 34px rgba(20,55,35,.09);
      text-align: right;
    }

    .trustStrip div {
      border-radius: 22px;
      padding: 17px;
      min-height: 104px;
    }

    .trustStrip b {
      display: block;
      margin-bottom: 6px;
      color: var(--dark);
    }

    .trustStrip span {
      color: var(--muted);
      font-size: 13px;
      line-height: 1.6;
    }

    .section,
    .valueSection {
      max-width: 1320px;
      margin: 0 auto;
      padding: 64px 30px;
    }

    .sectionTitle {
      max-width: 780px;
      margin: 0 auto 42px;
      text-align: center;
    }

    small {
      color: var(--green);
      font-size: 13px;
      font-weight: 950;
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
      letter-spacing: -1.1px;
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

    .steps,
    .valueGrid {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 18px;
    }

    .step,
    .valueGrid div {
      border-radius: 26px;
      padding: 24px;
      position: relative;
      overflow: hidden;
    }

    .step strong {
      position: absolute;
      top: 14px;
      left: 18px;
      font-size: 48px;
      color: rgba(15,107,62,.08);
      font-weight: 950;
    }

    .stepIcon,
    .valueGrid span {
      width: 58px;
      height: 58px;
      display: grid;
      place-items: center;
      border-radius: 20px;
      background: var(--cream);
      font-size: 28px;
      margin-bottom: 16px;
    }

    .step h3,
    .valueGrid h3 {
      margin: 0 0 10px;
      font-size: 21px;
    }

    .step p,
    .valueGrid p {
      margin: 0;
      color: var(--muted);
      line-height: 1.6;
      font-size: 14px;
    }

    .categorySection {
      background: #f7fbf7;
    }

    .centerHeader {
      justify-content: center !important;
      text-align: center !important;
    }

    .sectionHeader {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 24px;
      margin-bottom: 30px;
      text-align: right;
    }

    .categories {
      display: grid;
      grid-template-columns: repeat(5,1fr);
      gap: 14px;
    }

    .categories button {
      padding: 22px;
      border-radius: 24px;
      background: white;
      color: var(--dark);
      border: 1px solid var(--line);
      box-shadow: 0 12px 28px rgba(35,65,45,.08);
      font-size: 18px;
    }

    .animalsSection {
      background: linear-gradient(180deg,#f5fbf7,#fdfaf4);
    }

    .animals {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 18px;
    }

    .animalCard {
      border-radius: 24px;
      overflow: hidden;
      transition: .25s;
    }

    .animalCard:hover {
      transform: translateY(-8px);
    }

    .imgBox {
      height: 190px;
      position: relative;
      overflow: hidden;
    }

    .imgBox img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

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
      grid-template-columns: repeat(3,1fr);
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

    .detailsBtn,
    .darkBtn {
      width: 100%;
      padding: 14px;
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
      box-shadow: 0 14px 34px rgba(35,65,45,.08);
    }

    .educationCards {
      display: grid;
      grid-template-columns: repeat(3,1fr);
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
      grid-template-columns: 1.05fr .95fr;
      gap: 44px;
      align-items: center;
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

    .trackingBox {
      padding: 32px;
      border-radius: 34px;
      background: linear-gradient(180deg,#0c5030,#07351f);
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
      font-size: 20px;
      flex-shrink: 0;
      font-weight: 950;
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

    .bulkCard {
      border-radius: 26px;
      padding: 24px;
      text-align: center;
    }

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

    .bulkFacts {
      margin: 22px 0;
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 10px;
    }

    .bulkFacts div {
      padding: 14px;
      border-radius: 18px;
      background: #f7fbf7;
      border: 1px solid var(--line);
    }

    .full {
      width: 100%;
      padding: 16px;
    }

    .fearGrid {
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 22px;
    }

    .fearGrid div {
      border-radius: 26px;
      padding: 26px;
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

    .cta {
      max-width: 1180px;
      margin: 45px auto 80px;
      padding: 60px 30px;
      border-radius: 36px;
      text-align: center;
      color: white;
      background:
        linear-gradient(135deg,rgba(5,50,31,.96),rgba(14,120,66,.83)),
        url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=80');
      background-size: cover;
      background-position: center;
      box-shadow: var(--shadow);
    }

    .cta h2 {
      color: white;
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
      padding: 62px 56px 26px;
      background:
        radial-gradient(circle at 18% 10%, rgba(21,164,90,.24), transparent 30%),
        linear-gradient(180deg,#083923,#03180f);
      color: white;
    }

    .footerTop {
      display: grid;
      grid-template-columns: 1.5fr .7fr .7fr .8fr;
      gap: 38px;
      padding-bottom: 34px;
    }

    .footerLogo {
      width: 210px;
      height: 88px;
      object-fit: contain;
    }

    .footer p {
      max-width: 500px;
      line-height: 1.85;
      color: rgba(255,255,255,.68);
    }

    .footer h4 {
      margin: 0 0 16px;
      color: white;
      font-size: 18px;
    }

    .footer a {
      display: block;
      color: rgba(255,255,255,.72);
      margin-bottom: 11px;
      text-decoration: none;
      cursor: pointer;
      font-weight: 750;
    }

    .footer a:hover {
      color: white;
    }

    .footerSmall {
      font-size: 14px;
      margin-bottom: 16px;
    }

    .footer button {
      padding: 14px 20px;
      border-radius: 16px;
      background: var(--orange);
      color: white;
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

    .mobileBar {
      display: none;
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
      .simpleChoices {
        justify-content: center;
      }

      .animals,
      .steps,
      .categories,
      .trustStrip,
      .fearGrid,
      .valueGrid,
      .educationCards {
        grid-template-columns: repeat(2,1fr);
      }

      .footerTop {
        grid-template-columns: repeat(2,1fr);
      }
    }

    @media (max-width: 720px) {
      .page {
        padding-bottom: 78px;
      }

      .navbar {
        height: 74px;
        padding: 10px 16px;
      }

      .brandLogo {
        width: 132px;
        height: 58px;
      }

      .navPrimary {
        padding: 12px 15px;
        font-size: 13px;
      }

      .hero {
        padding: 28px 18px 48px;
        min-height: auto;
        gap: 28px;
      }

      .hero h1 {
        font-size: 34px;
        letter-spacing: -1px;
      }

      .hero p {
        font-size: 16px;
        line-height: 1.75;
      }

      .heroActions,
      .simpleChoices {
        flex-direction: column;
      }

      .heroActions button,
      .simpleChoices button {
        width: 100%;
      }

      .animalHeroCard img {
        height: 390px;
      }

      .heroAnimalInfo {
        left: 14px;
        right: 14px;
        bottom: 14px;
        padding: 18px;
      }

      .animalPrice {
        flex-direction: column;
        align-items: stretch;
      }

      .section,
      .valueSection {
        padding: 50px 18px;
      }

      .sectionHeader {
        display: block;
      }

      .animals,
      .steps,
      .trustStrip,
      .fearGrid,
      .bulkFacts,
      .categories,
      .valueGrid,
      .educationCards,
      .footerTop {
        grid-template-columns: 1fr;
      }

      .trustStrip {
        margin-top: 22px;
      }

      .educationMini,
      .cta {
        margin-left: 18px;
        margin-right: 18px;
        padding: 28px 20px;
      }

      .imgBox {
        height: 230px;
      }

      .footer {
        padding: 44px 20px 28px;
      }

      .footerLogo {
        width: 165px;
        height: 68px;
      }

      .footerBottom {
        display: grid;
        gap: 6px;
      }

      .mobileBar {
        position: fixed;
        right: 12px;
        left: 12px;
        bottom: 12px;
        z-index: 200;
        display: grid;
        grid-template-columns: repeat(3,1fr);
        gap: 8px;
        padding: 10px;
        border-radius: 24px;
        background: rgba(255,255,255,.94);
        backdrop-filter: blur(18px);
        border: 1px solid #dfe8dc;
        box-shadow: 0 18px 40px rgba(5,45,28,.18);
      }

      .mobileBar button {
        padding: 12px 8px;
        border-radius: 16px;
        background: #0f6b3e;
        color: white;
        font-size: 13px;
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
      title: 'شوف العروض',
      text: 'تشوف الصور، الوزن، العمر، المنطقة والسعر.'
    },
    {
      icon: '🐑',
      title: 'اختار المناسب',
      text: 'علوش، نعجة، بقرة، كعبة ولا كمية.'
    },
    {
      icon: '📩',
      title: 'ابعث طلب',
      text: 'تخلي اسمك، تليفونك والولاية.'
    },
    {
      icon: '✅',
      title: 'نأكدو معاك',
      text: 'نراجعو التوفر والسعر قبل القرار.'
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
      badge: 'متاح'
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
      badge: 'سعر مناسب'
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
      badge: 'زيارة ممكنة'
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
      badge: 'عرض خاص'
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

  selectAnimal(animal: any) {
    this.router.navigate(['/animal', animal.id]);
  }

  showToast(message: string) {
    this.toast = message;
    setTimeout(() => this.toast = '', 2200);
  }
}