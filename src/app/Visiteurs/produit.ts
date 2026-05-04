import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type Category =
  | 'all'
  | 'feeding'
  | 'water'
  | 'cattle'
  | 'security'
  | 'health'
  | 'transport'
  | 'storage';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <div class="page" dir="rtl">

    <header class="navbar">
      <div class="brand" routerLink="/accueil">
        <img src="assets/a.png" alt="Amana logo">
      </div>

      <nav>
        <button routerLink="/accueil">الرئيسية</button>
        <button routerLink="/catalogue">عروض المواشي</button>
        <button class="active" routerLink="/produits">معدات الفلاح</button>
        <button routerLink="/conseils-fellah">نصائح للفلاح</button>
        <button routerLink="/comment-ca-marche">كيفاش تخدم؟</button>
        <button routerLink="/contact">طلب رسمي</button>
      </nav>

      <button class="navCta" routerLink="/contact">أطلب عرض</button>
    </header>

    <section class="hero">
      <div class="heroText">
        <div class="badge">
          <span></span>
          معدات تربية المواشي في تونس
        </div>

        <h1>
          لوازم ومعدّات للعلوش والبقر
          <b>تطلبها حسب حاجتك والكمية.</b>
        </h1>

        <p>
          معالف، مشارب، حواجز، معدات بقر، نقل، تخزين ورعاية.
          اختار المنتج، شوف التفاصيل، وبعدها ابعث طلب رسمي باش نأكدو معاك السعر والتوفر.
        </p>

        <div class="heroActions">
          <button class="primary" (click)="scrollTo('products')">
            شوف المنتجات
          </button>

          <button class="secondary" routerLink="/contact">
            أطلب عرض حسب الكمية
          </button>
        </div>

        <div class="heroStats">
          <div>
            <b>+30</b>
            <span>نوع معدات</span>
          </div>

          <div>
            <b>🐑🐄</b>
            <span>للعلوش والبقر</span>
          </div>

          <div>
            <b>📩</b>
            <span>طلب بدون دفع مباشر</span>
          </div>
        </div>
      </div>

      <div class="heroVisual">
        <div class="floatCard top">
          <b>📦 طلب جملة</b>
          <span>للضيعات والتجار</span>
        </div>

        <div class="mainProduct">
          <img [src]="featured.image" [alt]="featured.name">

          <div class="productOverlay">
            <span>{{ featured.badge }}</span>
            <h3>{{ featured.name }}</h3>
            <p>{{ featured.short }}</p>

            <div class="priceLine">
              <div>
                <b>من {{ featured.price }} د.ت</b>
                <small>السعر يتأكد بعد الطلب</small>
              </div>

              <button (click)="openProduct(featured)">
                شوف التفاصيل
              </button>
            </div>
          </div>
        </div>

        <div class="floatCard bottom">
          <b>✅ موردين محليين</b>
          <span>التوفر حسب الولاية والكمية</span>
        </div>
      </div>
    </section>

    <section class="trustStrip">
      <div>
        <b>🛠️ معدات عملية</b>
        <span>مناسبة للفلاح، المربي، الضيعة والتاجر.</span>
      </div>

      <div>
        <b>🐑 للعلوش والماعز</b>
        <span>معالف، مشارب، حواجز، نقل وتخزين.</span>
      </div>

      <div>
        <b>🐄 للبقر والضيعات</b>
        <span>Cornadis، حلب، مشارب، تنظيم ورعاية.</span>
      </div>

      <div>
        <b>📩 طلب واضح</b>
        <span>تختار المنتج، تبعث الطلب، ونأكدو التفاصيل.</span>
      </div>
    </section>

    <section class="beforeBuy">
      <div class="sectionHead center">
        <small>قبل ما تطلب</small>
        <h2>اختار المعدّة حسب حاجتك، موش عشوائي.</h2>
        <p>
          باش نعاونك تختار صح، فكّر في نوع الحيوان، عدد الرؤوس، المساحة، والكمية المطلوبة.
        </p>
      </div>

      <div class="beforeGrid">
        <div>
          <span>🐑</span>
          <h3>نوع الحيوان</h3>
          <p>علوش، نعجة، ماعز ولا بقر؟ كل نوع يلزمو معدات مناسبة.</p>
        </div>

        <div>
          <span>🔢</span>
          <h3>عدد الرؤوس</h3>
          <p>الكمية تحدد حجم المعلف، المشرب، والحواجز اللازمة.</p>
        </div>

        <div>
          <span>📍</span>
          <h3>الولاية</h3>
          <p>التوفر والتوصيل يتغير حسب المنطقة.</p>
        </div>

        <div>
          <span>📦</span>
          <h3>قطعة ولا جملة؟</h3>
          <p>تنجم تطلب منتج واحد أو تجهيز كامل للضيعة.</p>
        </div>
      </div>
    </section>

    <section id="products" class="section">
      <div class="sectionHead">
        <div>
          <small>Catalogue équipements</small>
          <h2>معدات واضحة حسب الاستعمال.</h2>
          <p>
            اختار الصنف، شوف المنتجات، وبعدها ابعث طلب باش نأكدو السعر والتوفر.
          </p>
        </div>

        <button class="darkBtn" routerLink="/contact">
          إسأل على منتج موش موجود
        </button>
      </div>

      <div class="filters">
        <button
          *ngFor="let c of categories"
          [class.selected]="selectedCategory === c.key"
          (click)="selectCategory(c.key)">
          {{ c.icon }} {{ c.label }}
        </button>
      </div>

      <div class="productsGrid">
        <article class="productCard" *ngFor="let p of filteredProducts">
          <div class="imgBox">
            <img [src]="p.image" [alt]="p.name">
            <span>{{ p.badge }}</span>
          </div>

          <div class="cardBody">
            <div class="topLine">
              <span class="categoryTag">{{ p.categoryLabel }}</span>
              <small>{{ p.supplier }}</small>
            </div>

            <h3>{{ p.name }}</h3>
            <p>{{ p.short }}</p>

            <div class="features">
              <span *ngFor="let f of p.features">{{ f }}</span>
            </div>

            <div class="cardBottom">
              <div>
                <small>السعر التقريبي</small>
                <b>من {{ p.price }} د.ت</b>
              </div>

              <button (click)="openProduct(p)">
                شوف التفاصيل
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="supplierSection">
      <div class="supplierText">
        <small>كيفاش يصير الطلب؟</small>
        <h2>صفحة طلب معدات، موش دفع مباشر.</h2>
        <p>
          تختار المنتج، تحدد الكمية والولاية، وبعدها نتواصلو معاك باش نأكدو
          السعر، التوفر، والتوصيل حسب المنطقة.
        </p>

        <button routerLink="/contact">
          أبعث طلب معدات
        </button>
      </div>

      <div class="supplierGrid">
        <div>
          <span>01</span>
          <b>اختار المنتج</b>
          <p>معلف، مشرب، حواجز، معدات حلب، نقل أو تخزين.</p>
        </div>

        <div>
          <span>02</span>
          <b>حدّد الكمية والولاية</b>
          <p>قطعة واحدة، كمية صغيرة، أو تجهيز كامل للضيعة.</p>
        </div>

        <div>
          <span>03</span>
          <b>نأكدو العرض</b>
          <p>نراجعو التوفر والسعر قبل أي التزام.</p>
        </div>
      </div>
    </section>

    <section class="why">
      <div class="sectionHead center">
        <small>علاش الصفحة مفيدة؟</small>
        <h2>تخدم اللي يربي واللي يجهز ضيعة.</h2>
      </div>

      <div class="whyGrid">
        <div>
          <span>🐑</span>
          <h3>للمواشي الصغيرة</h3>
          <p>معالف، مشارب، أقفاص نقل، حواجز وسياج.</p>
        </div>

        <div>
          <span>🐄</span>
          <h3>للبقر والضيعات</h3>
          <p>Cornadis، معدات حلب، خزانات، مشارب كبيرة.</p>
        </div>

        <div>
          <span>📦</span>
          <h3>للجملة والتجهيز</h3>
          <p>طلبات معدات للضيعات، التجار، الأسواق والمربين.</p>
        </div>
      </div>
    </section>

    <section class="bulk">
      <div>
        <small>طلب تجهيز</small>
        <h2>عندك ضيعة وتحب تجهّزها؟</h2>
        <p>
          أبعثلنا شنوّة يلزمك: عدد المعالف، المشرب، الحواجز، نوع الحيوانات،
          الكمية والولاية. نحضّرولك عرض منظم حسب التوفر.
        </p>
      </div>

      <button routerLink="/contact">
        أطلب عرض تجهيز
      </button>
    </section>

    <section class="faq section">
      <div class="sectionHead center">
        <small>أسئلة مهمة</small>
        <h2>قبل ما تطلب المعدّة.</h2>
      </div>

      <div class="faqGrid">
        <div>
          <h3>هل السعر نهائي؟</h3>
          <p>لا، السعر تقريبي ويتأكد حسب الكمية، الولاية، والتوفر.</p>
        </div>

        <div>
          <h3>هل يلزم ندفع من الموقع؟</h3>
          <p>لا. تبعث طلب فقط، وبعدها يصير التأكيد معاك قبل أي التزام.</p>
        </div>

        <div>
          <h3>هل نجم نطلب منتج موش موجود؟</h3>
          <p>إي، ابعثلنا شنوّة تحب ونشوفو إمكانية توفيره.</p>
        </div>
      </div>
    </section>

    <section class="cta">
      <h2>لقيت المعدّة المناسبة؟</h2>
      <p>ابعث طلب رسمي، ونراجعو معاك السعر، الكمية، التوفر والتوصيل.</p>

      <div>
        <button routerLink="/contact">أطلب هذا المنتج</button>
        <button class="ghost" routerLink="/accueil">رجوع للرئيسية</button>
      </div>
    </section>

    <footer class="footer">
      <div>
        <img src="assets/a.png" alt="Amana logo">
        <p>
          Amana منصة تونسية تجمع بين عروض المواشي والمعدّات الضرورية للفلاح والمربي.
        </p>
      </div>

      <div>
        <h4>روابط</h4>
        <a routerLink="/accueil">الرئيسية</a>
        <a routerLink="/catalogue">عروض المواشي</a>
        <a routerLink="/conseils-fellah">نصائح للفلاح</a>
        <a routerLink="/contact">طلب رسمي</a>
      </div>

      <div>
        <h4>معدات</h4>
        <a (click)="selectCategory('feeding')">أكل ومعالف</a>
        <a (click)="selectCategory('water')">ماء ومشارب</a>
        <a (click)="selectCategory('cattle')">معدات بقر</a>
        <a (click)="selectCategory('security')">حماية وتنظيم</a>
      </div>
    </footer>

    <div class="modal" *ngIf="selectedProduct" (click)="closeModal()">
      <div class="modalCard" (click)="$event.stopPropagation()">
        <button class="close" (click)="closeModal()">×</button>

        <img [src]="selectedProduct.image" [alt]="selectedProduct.name">

        <div class="modalBody">
          <span>{{ selectedProduct.badge }}</span>

          <h2>{{ selectedProduct.name }}</h2>
          <p>{{ selectedProduct.description }}</p>

          <div class="modalInfo">
            <div>
              <small>الصنف</small>
              <b>{{ selectedProduct.categoryLabel }}</b>
            </div>

            <div>
              <small>التوفر</small>
              <b>{{ selectedProduct.supplier }}</b>
            </div>
          </div>

          <div class="modalFeatures">
            <div *ngFor="let f of selectedProduct.features">✅ {{ f }}</div>
          </div>

          <div class="modalPrice">
            <b>من {{ selectedProduct.price }} د.ت</b>
            <small>السعر والتوفر يتأكدو بعد مراجعة الطلب</small>
          </div>

          <button routerLink="/contact">
            أطلب هذا المنتج
          </button>
        </div>
      </div>
    </div>

  </div>
  `,
  styles: [`
    * { box-sizing: border-box; }

    :host {
      display: block;
      font-family: Inter, system-ui, Arial, sans-serif;
      --green: #0f6b3e;
      --green2: #18a058;
      --dark: #062d1c;
      --cream: #fff6e7;
      --muted: #657468;
      --line: #e4ece3;
      --orange: #f5841f;
      --shadow: 0 24px 60px rgba(10,45,28,.14);
      color: var(--dark);
    }

    .page {
      min-height: 100vh;
      background:
        radial-gradient(circle at 10% 10%, rgba(24,160,88,.12), transparent 30%),
        radial-gradient(circle at 90% 0%, rgba(245,132,31,.12), transparent 30%),
        linear-gradient(180deg, #fff8ec, #ffffff 40%, #f5fbf7);
      overflow-x: hidden;
    }

    .navbar {
      height: 92px;
      padding: 0 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(255,255,255,.92);
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

    .brand img {
      width: 170px;
      height: 90px;
      object-fit: contain;
    }

    nav {
      display: flex;
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
      font-weight: 950;
      padding: 11px 12px;
      border-radius: 999px;
      border: none;
      cursor: pointer;
    }

    nav button.active,
    nav button:hover {
      background: white;
      color: var(--green);
      box-shadow: 0 8px 20px rgba(20,55,35,.08);
      transform: none;
    }

    button {
      font-family: inherit;
      border: none;
      cursor: pointer;
      transition: .22s ease;
      font-weight: 950;
    }

    button:hover {
      transform: translateY(-2px);
    }

    .navCta,
    .primary {
      padding: 15px 23px;
      border-radius: 16px;
      color: white;
      background: linear-gradient(135deg, #18a058, #0b6737);
      box-shadow: 0 16px 32px rgba(15,107,62,.25);
    }

    .secondary {
      padding: 15px 23px;
      border-radius: 16px;
      color: var(--dark);
      background: white;
      border: 1px solid var(--line);
    }

    .hero {
      min-height: calc(100vh - 92px);
      padding: 52px 56px 68px;
      display: grid;
      grid-template-columns: 1.03fr .97fr;
      gap: 56px;
      align-items: center;
    }

    .heroText {
      text-align: right;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      padding: 11px 18px;
      border-radius: 999px;
      background: #eaf8ef;
      color: var(--green);
      font-weight: 950;
      margin-bottom: 22px;
      line-height: 1.5;
    }

    .badge span {
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: var(--green2);
      animation: pulse 1.7s infinite;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.7); opacity: .45; }
    }

    .hero h1 {
      margin: 0;
      max-width: 780px;
      font-size: clamp(42px, 5.4vw, 72px);
      line-height: 1.04;
      letter-spacing: -2px;
      font-weight: 950;
      color: var(--dark);
    }

    .hero h1 b {
      display: block;
      color: var(--green);
    }

    .hero p {
      max-width: 640px;
      margin: 24px 0 30px;
      color: #2b4636;
      font-size: 18px;
      line-height: 1.8;
    }

    .heroActions {
      display: flex;
      gap: 13px;
      flex-wrap: wrap;
    }

    .heroStats {
      margin-top: 28px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      max-width: 580px;
    }

    .heroStats div {
      background: white;
      border: 1px solid var(--line);
      border-radius: 22px;
      padding: 18px;
      box-shadow: 0 12px 28px rgba(35,65,45,.08);
    }

    .heroStats b {
      display: block;
      color: var(--green);
      font-size: 30px;
      line-height: 1;
      margin-bottom: 8px;
    }

    .heroStats span {
      color: var(--muted);
      font-size: 13px;
      font-weight: 850;
    }

    .heroVisual {
      position: relative;
    }

    .mainProduct {
      height: 560px;
      border-radius: 40px;
      overflow: hidden;
      position: relative;
      background: white;
      box-shadow: var(--shadow);
    }

    .mainProduct img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: .7s;
    }

    .mainProduct:hover img {
      transform: scale(1.06);
    }

    .productOverlay {
      position: absolute;
      left: 28px;
      right: 28px;
      bottom: 28px;
      padding: 25px;
      border-radius: 30px;
      background: rgba(255,255,255,.94);
      backdrop-filter: blur(14px);
      text-align: right;
    }

    .productOverlay > span,
    .categoryTag {
      display: inline-block;
      background: #eaf8ef;
      color: var(--green);
      padding: 7px 12px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 950;
    }

    .productOverlay h3 {
      margin: 14px 0 7px;
      font-size: 28px;
    }

    .productOverlay p {
      margin: 0;
      color: var(--muted);
      line-height: 1.6;
    }

    .priceLine {
      margin-top: 18px;
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 12px;
    }

    .priceLine b {
      display: block;
      color: var(--green);
      font-size: 28px;
      line-height: 1;
    }

    .priceLine small {
      color: var(--muted);
      font-weight: 800;
    }

    .priceLine button {
      padding: 13px 18px;
      border-radius: 15px;
      background: var(--orange);
      color: white;
      white-space: nowrap;
    }

    .floatCard {
      position: absolute;
      z-index: 2;
      background: white;
      padding: 16px 18px;
      border-radius: 20px;
      box-shadow: var(--shadow);
      display: grid;
      gap: 4px;
      text-align: right;
      animation: float 3s ease-in-out infinite;
    }

    .floatCard span {
      color: var(--muted);
      font-size: 12px;
      font-weight: 800;
    }

    .floatCard.top {
      top: -20px;
      right: -18px;
    }

    .floatCard.bottom {
      bottom: 135px;
      left: -24px;
      animation-delay: .7s;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    .trustStrip {
      max-width: 1180px;
      margin: -35px auto 20px;
      padding: 0 18px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      position: relative;
      z-index: 5;
    }

    .trustStrip div {
      background: white;
      border: 1px solid var(--line);
      border-radius: 24px;
      padding: 20px;
      box-shadow: 0 14px 34px rgba(20,55,35,.09);
      text-align: right;
    }

    .trustStrip b {
      display: block;
      margin-bottom: 7px;
      line-height: 1.4;
    }

    .trustStrip span {
      color: var(--muted);
      font-size: 13px;
      line-height: 1.6;
    }

    .beforeBuy,
    .section {
      max-width: 1320px;
      margin: auto;
      padding: 80px 30px;
    }

    .beforeGrid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
      margin-top: 30px;
    }

    .beforeGrid div {
      background: white;
      border: 1px solid var(--line);
      border-radius: 26px;
      padding: 24px;
      box-shadow: 0 14px 34px rgba(35,65,45,.08);
      text-align: right;
    }

    .beforeGrid span {
      width: 58px;
      height: 58px;
      display: grid;
      place-items: center;
      border-radius: 20px;
      background: var(--cream);
      font-size: 28px;
      margin-bottom: 14px;
    }

    .beforeGrid h3 {
      margin: 0 0 10px;
      font-size: 22px;
    }

    .beforeGrid p {
      margin: 0;
      color: var(--muted);
      line-height: 1.7;
    }

    .sectionHead {
      display: flex;
      justify-content: space-between;
      align-items: end;
      gap: 22px;
      margin-bottom: 30px;
      text-align: right;
    }

    .sectionHead.center {
      display: block;
      text-align: center;
      max-width: 780px;
      margin-left: auto;
      margin-right: auto;
    }

    small {
      color: var(--green);
      font-weight: 950;
    }

    .sectionHead h2,
    .supplierSection h2,
    .why h2,
    .bulk h2,
    .cta h2 {
      margin: 8px 0;
      font-size: clamp(30px, 4vw, 46px);
      line-height: 1.12;
      letter-spacing: -1.2px;
      color: var(--dark);
    }

    .sectionHead p,
    .supplierSection p,
    .bulk p {
      color: var(--muted);
      font-size: 16px;
      line-height: 1.7;
    }

    .darkBtn {
      padding: 15px 22px;
      border-radius: 16px;
      background: var(--dark);
      color: white;
      box-shadow: 0 16px 30px rgba(5,45,28,.18);
      white-space: nowrap;
    }

    .filters {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 30px;
    }

    .filters button {
      padding: 14px 18px;
      border-radius: 999px;
      background: white;
      border: 1px solid var(--line);
      color: var(--dark);
      box-shadow: 0 8px 20px rgba(35,65,45,.05);
    }

    .filters button.selected,
    .filters button:hover {
      background: var(--green);
      color: white;
    }

    .productsGrid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 22px;
    }

    .productCard {
      background: white;
      border-radius: 28px;
      overflow: hidden;
      border: 1px solid #edf1e9;
      box-shadow: 0 14px 32px rgba(35,65,45,.09);
      transition: .25s;
    }

    .productCard:hover {
      transform: translateY(-8px);
      box-shadow: 0 26px 54px rgba(35,65,45,.15);
    }

    .imgBox {
      height: 235px;
      position: relative;
      overflow: hidden;
      background: #edf3ec;
    }

    .imgBox img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: .55s;
    }

    .productCard:hover .imgBox img {
      transform: scale(1.07);
    }

    .imgBox > span {
      position: absolute;
      right: 14px;
      top: 14px;
      background: var(--green);
      color: white;
      padding: 7px 12px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 950;
    }

    .cardBody {
      padding: 22px;
      text-align: right;
    }

    .topLine {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: 12px;
    }

    .topLine small {
      color: var(--muted);
      font-size: 12px;
    }

    .cardBody h3 {
      margin: 0 0 8px;
      font-size: 23px;
      line-height: 1.3;
    }

    .cardBody p {
      color: var(--muted);
      line-height: 1.65;
      margin: 0 0 16px;
      min-height: 52px;
    }

    .features {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 18px;
    }

    .features span {
      background: #f5faf6;
      border: 1px solid var(--line);
      color: #31513c;
      border-radius: 999px;
      padding: 7px 10px;
      font-size: 12px;
      font-weight: 850;
    }

    .cardBottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 18px;
      border-top: 1px solid #edf1e9;
      gap: 12px;
    }

    .cardBottom small {
      display: block;
      color: var(--muted);
      font-size: 12px;
    }

    .cardBottom b {
      color: var(--green);
      font-size: 22px;
    }

    .cardBottom button {
      padding: 13px 18px;
      border-radius: 15px;
      color: white;
      background: var(--dark);
    }

    .supplierSection {
      max-width: 1180px;
      margin: 30px auto;
      padding: 56px;
      border-radius: 38px;
      background:
        linear-gradient(135deg, rgba(5,50,31,.96), rgba(14,120,66,.86)),
        url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=80');
      background-size: cover;
      background-position: center;
      display: grid;
      grid-template-columns: 1fr .95fr;
      gap: 38px;
      align-items: center;
      box-shadow: var(--shadow);
      color: white;
    }

    .supplierSection small,
    .supplierSection h2 {
      color: white;
    }

    .supplierSection p {
      color: rgba(255,255,255,.78);
    }

    .supplierText button,
    .bulk button,
    .cta button {
      padding: 17px 26px;
      border-radius: 17px;
      background: var(--orange);
      color: white;
      font-size: 16px;
    }

    .supplierGrid {
      display: grid;
      gap: 14px;
    }

    .supplierGrid div {
      background: rgba(255,255,255,.13);
      border: 1px solid rgba(255,255,255,.2);
      border-radius: 22px;
      padding: 18px;
      display: grid;
      gap: 6px;
      text-align: right;
    }

    .supplierGrid span {
      color: rgba(255,255,255,.5);
      font-size: 28px;
      font-weight: 950;
    }

    .supplierGrid p {
      margin: 0;
      color: rgba(255,255,255,.72);
      font-size: 13px;
    }

    .why {
      max-width: 1320px;
      margin: auto;
      padding: 80px 30px;
    }

    .whyGrid {
      margin-top: 32px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 22px;
    }

    .whyGrid div {
      padding: 28px;
      border-radius: 28px;
      background: white;
      border: 1px solid var(--line);
      box-shadow: 0 16px 35px rgba(35,65,45,.08);
      text-align: right;
    }

    .whyGrid span {
      font-size: 40px;
    }

    .whyGrid h3 {
      margin: 12px 0 10px;
      font-size: 23px;
    }

    .whyGrid p {
      margin: 0;
      color: var(--muted);
      line-height: 1.7;
    }

    .bulk {
      max-width: 1180px;
      margin: 0 auto 40px;
      padding: 45px;
      border-radius: 34px;
      background: #fff4e6;
      border: 1px solid #ffe0bd;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 28px;
      text-align: right;
    }

    .bulk p {
      max-width: 760px;
    }

    .faqGrid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 22px;
    }

    .faqGrid div {
      background: white;
      border: 1px solid var(--line);
      border-radius: 26px;
      padding: 26px;
      box-shadow: 0 16px 35px rgba(35,65,45,.08);
      text-align: right;
    }

    .faqGrid h3 {
      margin: 0 0 12px;
      font-size: 22px;
    }

    .faqGrid p {
      margin: 0;
      color: var(--muted);
      line-height: 1.7;
    }

    .cta {
      max-width: 1180px;
      margin: 20px auto 80px;
      padding: 60px 30px;
      border-radius: 38px;
      background: linear-gradient(135deg, #0b3b24, #107344);
      text-align: center;
      color: white;
      box-shadow: var(--shadow);
    }

    .cta h2 {
      color: white;
    }

    .cta p {
      color: rgba(255,255,255,.78);
      font-size: 17px;
      margin-bottom: 26px;
    }

    .cta .ghost {
      background: rgba(255,255,255,.14);
      color: white;
      border: 1px solid rgba(255,255,255,.25);
      margin-right: 8px;
    }

    .footer {
      padding: 56px;
      background:
        radial-gradient(circle at 15% 10%, rgba(21,164,90,.22), transparent 28%),
        linear-gradient(180deg, #083923, #03180f);
      color: white;
      display: grid;
      grid-template-columns: 1.5fr .7fr .7fr;
      gap: 44px;
    }

    .footer img {
      width: 210px;
      height: 90px;
      object-fit: contain;
    }

    .footer p {
      max-width: 520px;
      color: rgba(255,255,255,.68);
      line-height: 1.8;
    }

    .footer h4 {
      margin: 0 0 16px;
    }

    .footer a {
      display: block;
      color: rgba(255,255,255,.7);
      margin-bottom: 10px;
      text-decoration: none;
      cursor: pointer;
    }

    .modal {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,.58);
      display: grid;
      place-items: center;
      padding: 20px;
      z-index: 200;
    }

    .modalCard {
      width: min(950px, 100%);
      max-height: 92vh;
      overflow: auto;
      background: white;
      border-radius: 34px;
      position: relative;
      display: grid;
      grid-template-columns: .95fr 1.05fr;
      box-shadow: var(--shadow);
    }

    .close {
      position: absolute;
      top: 15px;
      left: 15px;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: white;
      color: var(--dark);
      font-size: 28px;
      z-index: 2;
      box-shadow: 0 10px 25px rgba(0,0,0,.15);
    }

    .modalCard > img {
      width: 100%;
      height: 100%;
      min-height: 500px;
      object-fit: cover;
    }

    .modalBody {
      padding: 34px;
      text-align: right;
    }

    .modalBody > span {
      display: inline-block;
      background: #eaf8ef;
      color: var(--green);
      padding: 8px 13px;
      border-radius: 999px;
      font-weight: 950;
      font-size: 12px;
    }

    .modalBody h2 {
      margin: 16px 0 10px;
      font-size: 34px;
      line-height: 1.2;
    }

    .modalBody p {
      color: var(--muted);
      line-height: 1.8;
    }

    .modalInfo {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin: 18px 0;
    }

    .modalInfo div {
      padding: 15px;
      border-radius: 18px;
      background: #f7fbf7;
      border: 1px solid var(--line);
    }

    .modalInfo small {
      display: block;
      color: var(--muted);
      margin-bottom: 6px;
    }

    .modalFeatures {
      display: grid;
      gap: 10px;
      margin: 20px 0;
    }

    .modalFeatures div {
      background: #f7fbf7;
      border: 1px solid var(--line);
      padding: 13px;
      border-radius: 15px;
      font-weight: 850;
    }

    .modalPrice {
      margin: 20px 0;
      padding: 18px;
      border-radius: 20px;
      background: var(--cream);
    }

    .modalPrice b {
      display: block;
      color: var(--green);
      font-size: 30px;
    }

    .modalPrice small {
      color: var(--muted);
    }

    .modalBody button {
      width: 100%;
      padding: 17px;
      border-radius: 17px;
      background: var(--green);
      color: white;
      font-size: 16px;
    }

    @media (max-width: 1080px) {
      nav {
        display: none;
      }

      .hero,
      .supplierSection {
        grid-template-columns: 1fr;
      }

      .productsGrid,
      .whyGrid,
      .faqGrid,
      .beforeGrid {
        grid-template-columns: repeat(2, 1fr);
      }

      .trustStrip {
        grid-template-columns: repeat(2, 1fr);
      }

      .bulk {
        display: block;
      }

      .bulk button {
        margin-top: 18px;
        width: 100%;
      }
    }

    @media (max-width: 720px) {
      .navbar {
        height: auto;
        padding: 14px 18px;
      }

      .brand img {
        width: 145px;
        height: 65px;
      }

      .navCta {
        display: none;
      }

      .hero {
        padding: 38px 18px 58px;
        min-height: auto;
      }

      .hero h1 {
        font-size: 38px;
        letter-spacing: -1px;
      }

      .hero p {
        font-size: 16px;
      }

      .heroActions {
        flex-direction: column;
      }

      .heroActions button {
        width: 100%;
      }

      .heroStats {
        grid-template-columns: 1fr;
      }

      .mainProduct {
        height: 470px;
      }

      .productOverlay {
        left: 18px;
        right: 18px;
        bottom: 18px;
        padding: 20px;
      }

      .priceLine {
        flex-direction: column;
        align-items: stretch;
      }

      .floatCard {
        display: none;
      }

      .trustStrip,
      .productsGrid,
      .whyGrid,
      .faqGrid,
      .footer,
      .beforeGrid {
        grid-template-columns: 1fr;
      }

      .section,
      .why,
      .beforeBuy {
        padding: 58px 18px;
      }

      .sectionHead {
        display: block;
      }

      .darkBtn {
        margin-top: 18px;
        width: 100%;
      }

      .filters button {
        width: 100%;
      }

      .supplierSection,
      .bulk,
      .cta {
        margin-left: 18px;
        margin-right: 18px;
        padding: 36px 22px;
      }

      .modalCard {
        grid-template-columns: 1fr;
      }

      .modalCard > img {
        min-height: 280px;
      }

      .modalInfo {
        grid-template-columns: 1fr;
      }

      .footer {
        padding: 42px 22px;
      }
    }
  `]
})
export class ProduitsComponent {
  selectedCategory: Category = 'all';
  selectedProduct: any = null;

  categories: { key: Category; label: string; icon: string }[] = [
    { key: 'all', label: 'كل المنتجات', icon: '⭐' },
    { key: 'feeding', label: 'معالف وأكل', icon: '🌾' },
    { key: 'water', label: 'مشارب وماء', icon: '💧' },
    { key: 'cattle', label: 'معدات بقر', icon: '🐄' },
    { key: 'security', label: 'حواجز وحماية', icon: '🛡️' },
    { key: 'health', label: 'رعاية وصحة', icon: '💊' },
    { key: 'transport', label: 'نقل', icon: '🚚' },
    { key: 'storage', label: 'تخزين', icon: '📦' }
  ];

  products = [
    {
      id: 1,
      category: 'feeding',
      categoryLabel: 'معالف وأكل',
      name: 'معلف حديد للعلوش والبقر',
      short: 'ينظم الأكل وينقص التبذير داخل الضيعة.',
      description: 'معلف حديد قوي يصلح للعلوش، النعاج والبقر. يساعد الفلاح على تنظيم الأكل، تقليل التبذير، وتسهيل الخدمة اليومية داخل الضيعة.',
      price: 180,
      badge: 'مطلوب برشا',
      supplier: 'حسب التوفر',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1200&q=80',
      features: ['للعلوش', 'للبقر', 'حديد', 'ينقص التبذير']
    },
    {
      id: 2,
      category: 'water',
      categoryLabel: 'مشارب وماء',
      name: 'مشرب ماء أوتوماتيك',
      short: 'مشرب ماء عملي للمواشي والبقر.',
      description: 'مشرب أوتوماتيك يساعد على توفير الماء بطريقة أنظف وأسهل. مناسب للعلوش، النعاج، الأبقار والضيعات الصغيرة والمتوسطة.',
      price: 95,
      badge: 'عملي',
      supplier: 'حسب المنطقة',
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80',
      features: ['ماء نظيف', 'سهل التركيب', 'للضيعة', 'اقتصادي']
    },
    {
      id: 3,
      category: 'cattle',
      categoryLabel: 'معدات بقر',
      name: 'Cornadis للبقر',
      short: 'لتثبيت وتنظيم البقر وقت الأكل والرعاية.',
      description: 'Cornadis من أهم معدات تربية الأبقار. يساعد في تثبيت البقر وقت الأكل، الفحص، الرعاية، وتنظيم الإسطبل بطريقة احترافية.',
      price: 520,
      badge: 'للبقر',
      supplier: 'حسب الطلب',
      image: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1200&q=80',
      features: ['للبقر', 'إسطبل', 'احترافي', 'تنظيم']
    },
    {
      id: 4,
      category: 'security',
      categoryLabel: 'حواجز وحماية',
      name: 'سياج معدني للضيعة',
      short: 'يحمي المساحة وينظم حركة القطيع.',
      description: 'سياج معدني مناسب لتقسيم الضيعة، حماية المواشي، وتنظيم الحركة. يصلح للعلوش، الماعز، النعاج والبقر حسب النوع والحجم.',
      price: 260,
      badge: 'حماية',
      supplier: 'حسب المقاس',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
      features: ['حماية', 'تقسيم', 'للضيعات', 'معدني']
    },
    {
      id: 5,
      category: 'health',
      categoryLabel: 'رعاية وصحة',
      name: 'Kit رعاية المواشي',
      short: 'أدوات أساسية للمتابعة والرعاية اليومية.',
      description: 'Kit فيه أدوات أساسية تساعد المربي في المتابعة اليومية، التنظيف، والرعاية الأولية. مناسب للفلاحين والمربين الجدد.',
      price: 120,
      badge: 'رعاية',
      supplier: 'حسب التوفر',
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?auto=format&fit=crop&w=1200&q=80',
      features: ['رعاية', 'متابعة', 'سهل الاستعمال', 'أساسي']
    },
    {
      id: 6,
      category: 'storage',
      categoryLabel: 'تخزين',
      name: 'خزان ماء للضيعة',
      short: 'حل مهم لتوفير الماء في الضيعة.',
      description: 'خزان ماء عملي للضيعات، يستعمل للشرب، التنظيف وتنظيم الخدمة اليومية. مناسب خاصة للمناطق التي تحتاج تخزين ماء.',
      price: 450,
      badge: 'ضروري',
      supplier: 'حسب السعة',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80',
      features: ['تخزين ماء', 'للضيعة', 'استعمال يومي', 'سعات مختلفة']
    },
    {
      id: 7,
      category: 'transport',
      categoryLabel: 'نقل',
      name: 'قفص نقل للحيوانات',
      short: 'لنقل العلوش أو الحيوانات الصغيرة بأمان.',
      description: 'قفص نقل معدني يساعد على نقل الحيوانات بطريقة منظمة وآمنة، خاصة بين الضيعات، الأسواق، أو عند الشراء والبيع.',
      price: 340,
      badge: 'نقل',
      supplier: 'حسب الحجم',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
      features: ['نقل', 'آمن', 'معدني', 'للعلوش']
    },
    {
      id: 8,
      category: 'cattle',
      categoryLabel: 'معدات بقر',
      name: 'معدات حلب الأبقار',
      short: 'حلول للحلب وتنظيم إنتاج الحليب.',
      description: 'معدات حلب موجهة لمربي الأبقار، تساعد على تنظيم الحلب، تحسين النظافة، وربح الوقت في الضيعات الصغيرة والمتوسطة.',
      price: 980,
      badge: 'حليب',
      supplier: 'حسب التوفر',
      image: 'https://images.unsplash.com/photo-1594761051656-153faa2857fe?auto=format&fit=crop&w=1200&q=80',
      features: ['بقر حلوب', 'حليب', 'احترافي', 'ضيعات']
    },
    {
      id: 9,
      category: 'storage',
      categoryLabel: 'تخزين',
      name: 'صندوق تخزين علف',
      short: 'يحافظ على العلف وينظم التخزين.',
      description: 'صندوق تخزين يحمي العلف من الرطوبة والتلف، ويساعد على تنظيم الأعلاف داخل الضيعة أو المخزن.',
      price: 210,
      badge: 'تخزين',
      supplier: 'حسب التوفر',
      image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1200&q=80',
      features: ['علف', 'تخزين', 'نظافة', 'حماية']
    }
  ];

  get featured() {
    return this.products[0];
  }

  get filteredProducts() {
    if (this.selectedCategory === 'all') {
      return this.products;
    }

    return this.products.filter(product => product.category === this.selectedCategory);
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;

    setTimeout(() => {
      document.getElementById('products')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 50);
  }

  openProduct(product: any) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}