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
        <button routerLink="/produits">منتجات للفلاح</button>
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
          Amana — مواشي ومنتجات فلاحية بطريقة أوضح في تونس
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
          <button class="primaryBtn big" routerLink="/catalogue">شوف العروض المتاحة</button>
          <button class="secondaryBtn big" routerLink="/contact">قدّم طلب رسمي</button>
        </div>

        <div class="quickChoice">
          <button routerLink="/catalogue">🐑 مواشي بالكعبة</button>
          <button routerLink="/catalogue">📦 طلب بالجملة</button>
          <button routerLink="/produits">🌾 منتجات للفلاح</button>
          <button routerLink="/contact">👀 طلب زيارة</button>
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

    <section id="how" class="section">
      <div class="sectionTitle">
        <small>كيفاش تخدم؟</small>
        <h2>تشوف العرض، تبعث طلب، وبعدها تقرر.</h2>
        <p>طريقة بسيطة وواضحة: ما فماش دفع مباشر، التفاصيل تتأكد قبل أي قرار.</p>
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

    <section id="animals" class="animalsSection">
      <div class="section inner">
        <div class="sectionHeader">
          <div>
            <small>العروض المتاحة</small>
            <h2>قارن المواشي بسهولة.</h2>
            <p>صورة، وزن، عمر، منطقة وسعر تقريبي قبل إرسال الطلب.</p>
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
                <div><span>السعر</span><b>من {{ a.price }} د.ت</b></div>
              </div>

              <div class="statusLine">
                <span>{{ a.region }}</span>
                <small>قابل للتأكيد</small>
              </div>

              <button class="detailsBtn" (click)="selectAnimal(a)">شوف التفاصيل</button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="productsSection">
      <div class="section inner">
        <div class="sectionHeader">
          <div>
            <small>منتجات للفلاح</small>
            <h2>منتجات مطلوبة تعطي قيمة للموقع وتجبد الحريف.</h2>
            <p>
              اخترنا أكثر حاجات يحتاجهم الفلاح: علف، سقي، تنظيف، وفيتامينات.
              صور واضحة، شرح بسيط، وطلب عبر صفحة التواصل.
            </p>
          </div>
          <button class="darkBtn" routerLink="/produits">شوف كل المنتجات</button>
        </div>

        <div class="productsGrid">
          <article class="productCard" *ngFor="let p of products">
            <div class="productImg">
              <img [src]="p.image" [alt]="p.name">
              <span>{{ p.badge }}</span>
            </div>

            <div class="productBody">
              <h3>{{ p.name }}</h3>
              <p>{{ p.text }}</p>

              <div class="productFooter">
                <b>{{ p.price }}</b>
                <button routerLink="/produits">التفاصيل</button>
              </div>
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
        <button class="primaryBtn" routerLink="/conseils-fellah">شوف نصائح للفلاح</button>
      </div>

      <div class="educationCards">
        <div><b>🦠 أمراض شائعة</b><span>علامات الخطر وشنوّة تعمل أولًا.</span></div>
        <div><b>🌾 تغذية</b><span>أخطاء العلف والماء وكيفاش تتجنبها.</span></div>
        <div><b>🧼 نظافة</b><span>الرطوبة والاكتظاظ ومشاكل الحوافر.</span></div>
      </div>
    </section>

    <section class="cta">
      <h2>ابدأ من العروض المتاحة.</h2>
      <p>اختار العرض، شوف التفاصيل، وقدّم طلب رسمي قبل الشراء.</p>
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
            Amana منصة تونسية لشراء المواشي والمنتجات الفلاحية،
            بعروض واضحة وتجربة منظمة قبل قرار الشراء.
          </p>
        </div>

        <div>
          <h4>روابط</h4>
          <a routerLink="/catalogue">العروض</a>
          <a routerLink="/comment-ca-marche">كيفاش تخدم؟</a>
          <a routerLink="/produits">منتجات للفلاح</a>
          <a routerLink="/conseils-fellah">نصائح للفلاح</a>
          <a routerLink="/contact">طلب رسمي</a>
        </div>

        <div>
          <h4>طلبات</h4>
          <a routerLink="/contact">شراء بالكعبة</a>
          <a routerLink="/contact">شراء بالجملة</a>
          <a routerLink="/contact">طلب منتج</a>
          <a routerLink="/contact">طلب زيارة</a>
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

    .section {
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
    .trustValueText h2,
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
    .trustValueText p,
    .educationText p {
      color: var(--muted);
      font-size: 16px;
      line-height: 1.7;
    }

    .steps {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      direction: rtl;
    }

    .step {
      background: white;
      border: 1px solid #edf1e9;
      border-radius: 26px;
      padding: 24px;
      box-shadow: 0 14px 34px rgba(35,65,45,.08);
      text-align: right;
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

    .animals,
    .productsGrid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      direction: rtl;
    }

    .animalCard,
    .productCard {
      background: white;
      border-radius: 24px;
      overflow: hidden;
      border: 1px solid #edf1e9;
      box-shadow: 0 14px 30px rgba(35,65,45,.09);
      transition: .25s;
    }

    .animalCard:hover,
    .productCard:hover {
      transform: translateY(-8px);
      box-shadow: 0 26px 54px rgba(35,65,45,.15);
    }

    .imgBox,
    .productImg {
      height: 210px;
      position: relative;
      overflow: hidden;
    }

    .imgBox img,
    .productImg img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: .55s;
    }

    .animalCard:hover .imgBox img,
    .productCard:hover .productImg img {
      transform: scale(1.07);
    }

    .imgBox span,
    .productImg span {
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

    .cardBody,
    .productBody {
      padding: 17px;
      text-align: right;
    }

    .cardBody h3,
    .productBody h3 {
      margin: 0 0 14px;
      font-size: 19px;
      color: var(--dark);
    }

    .productBody p {
      margin: 0 0 18px;
      color: var(--muted);
      line-height: 1.7;
      font-size: 14px;
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

    .statusLine,
    .productFooter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }

    .statusLine {
      background: #e9f7ee;
      color: var(--green);
      border-radius: 14px;
      padding: 10px 12px;
      margin-bottom: 12px;
      font-weight: 900;
      font-size: 12px;
    }

    .statusLine small { color: var(--muted); }

    .detailsBtn,
    .productFooter button {
      padding: 13px;
      border-radius: 15px;
      background: var(--dark);
      color: white;
    }

    .detailsBtn { width: 100%; }

    .productFooter b {
      color: var(--orange);
      font-size: 15px;
      white-space: nowrap;
    }

    .productFooter button {
      padding: 12px 15px;
      white-space: nowrap;
    }

    .productsSection {
      background:
        radial-gradient(circle at 85% 10%, rgba(245,132,31,.12), transparent 30%),
        linear-gradient(180deg, #fffaf1, #f5fbf7);
      border-top: 1px solid #eef0e7;
      border-bottom: 1px solid #eef0e7;
    }

    .trustValueSection {
      background: white;
    }

    .trustValueInner {
      display: grid;
      grid-template-columns: .95fr 1.05fr;
      gap: 34px;
      align-items: center;
      direction: rtl;
    }

    .trustValueText {
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
      background: #f7fbf7;
      box-shadow: 0 10px 24px rgba(35,65,45,.07);
      font-weight: 900;
      font-size: 14px;
    }

    .trustBtn { margin-top: 18px; }

    .trustCards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    .trustCards div,
    .educationCards div {
      background: white;
      border: 1px solid #e5ece3;
      box-shadow: 0 14px 34px rgba(20,55,35,.09);
      text-align: right;
      border-radius: 24px;
      padding: 22px;
    }

    .trustCards span {
      width: 58px;
      height: 58px;
      display: grid;
      place-items: center;
      border-radius: 20px;
      background: var(--cream);
      font-size: 28px;
      margin-bottom: 14px;
    }

    .trustCards h3 {
      margin: 0 0 10px;
      font-size: 20px;
      color: var(--dark);
    }

    .trustCards p {
      margin: 0;
      color: var(--muted);
      line-height: 1.7;
      font-size: 14px;
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

    .educationText { text-align: right; }
    .educationText p { margin-bottom: 18px; }

    .educationCards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
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
      .trustValueInner,
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
      .productsGrid,
      .trustCards,
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

      .section {
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
      .productsGrid,
      .trustCards,
      .educationCards {
        grid-template-columns: 1fr;
      }

      .imgBox,
      .productImg { height: 230px; }

      .productFooter {
        flex-direction: column;
        align-items: stretch;
      }

      .productFooter button { width: 100%; }

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
    { icon: '🔎', title: 'شوف العرض', text: 'صور، وزن، عمر، منطقة وسعر تقريبي.' },
    { icon: '🐑', title: 'اختار المناسب', text: 'كعبة، جملة، أو زيارة قبل الشراء.' },
    { icon: '📩', title: 'ابعث طلب', text: 'طلب رسمي بدون دفع مباشر.' },
    { icon: '✅', title: 'أكد التفاصيل', text: 'نراجعو التوفر والسعر والمنطقة، وبعدها تقرر براحتك.' }
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
      badge: 'عرض متاح'
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
      badge: 'زيارة متاحة'
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

  products = [
    {
      name: 'علف تسمين ممتاز',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80',
      text: 'أكثر حاجة يفتش عليها الفلاح: علف يعاون على النمو والتسمين.',
      badge: 'الأكثر طلبًا',
      price: 'حسب الكمية'
    },
    {
      name: 'مشرب ماء أوتوماتيك',
      image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=900&q=80',
      text: 'ينقص التعب ويخلي الماء متوفر للمواشي بطريقة منظمة.',
      badge: 'سقي',
      price: 'متوفر قريبًا'
    },
    {
      name: 'معدات تنظيف الحظيرة',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80',
      text: 'نظافة أكثر تعني أمراض أقل وحيوانات أحسن.',
      badge: 'وقاية',
      price: 'اختيارات متعددة'
    },
    {
      name: 'فيتامينات وعناية',
      image: 'https://images.unsplash.com/photo-1584467735871-829732b7718b?auto=format&fit=crop&w=900&q=80',
      text: 'منتجات تساعد على تقوية صحة القطيع والعناية اليومية.',
      badge: 'صحة',
      price: 'حسب النوع'
    }
  ];

  get visibleAnimals() {
    return this.animals.slice(0, this.visibleCount);
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  selectAnimal(animal: any) {
    this.router.navigate(['/animal', animal.id]);
  }

  showToast(message: string) {
    this.toast = message;
    setTimeout(() => this.toast = '', 2200);
  }
}
