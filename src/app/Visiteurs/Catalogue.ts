import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

type BuyMode = 'ALL' | 'UNIT' | 'BULK';
type AnimalType = 'MOUTON' | 'BREBIS' | 'GOAT' | 'COW';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
  <div class="page">

    <header class="navbar">
      <div class="brand" routerLink="/accueil">
        <img class="brandLogo" src="/assets/a.png" alt="Amana logo">
        <div>
          <h1>Amana</h1>
          <p>مواشي مختارة من Amana</p>
        </div>
      </div>

      <nav>
        <a routerLink="/accueil">الرئيسية</a>
        <a class="active">العروض</a>
        <a routerLink="/comment-ca-marche">كيفاش تخدم؟</a>
        <a routerLink="/garanties">الثقة</a>
        <a routerLink="/contact">طلب رسمي</a>
      </nav>

      <div class="navActions">
        <button class="ghost" routerLink="/accueil">الرئيسية</button>
        <button class="dark" routerLink="/contact">قدّم طلب</button>
      </div>
    </header>

    <main>

      <section class="hero">
        <div class="heroText">
          <span class="eyebrow">كتالوج عروض Amana</span>

          <h2>إختار العرض المناسب، وAmana تتكفل بالباقي.</h2>

          <p>
            شوف عروض المواشي المتاحة من Amana، قارن النوع والوزن والسعر التقريبي،
            وابعث طلب رسمي قبل الشراء. كل عرض يكون يا بالكعبة يا بالجملة.
          </p>

          <div class="heroActions">
            <button class="primaryHero" (click)="scrollTo('catalogue')">
              شوف العروض
            </button>

            <button class="secondaryHero" (click)="buyMode='BULK'; scrollTo('catalogue')">
              عروض الجملة
            </button>
          </div>

          <div class="heroProof">
            <span>🏢 عروض من Amana</span>
            <span>💰 سعر تقريبي واضح</span>
            <span>📩 طلب رسمي قبل الشراء</span>
          </div>
        </div>

        <div class="heroVisual">
          <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=85" alt="مواشي">

          <div class="visualCard">
            <span>واضح ومنظم</span>
            <h3>إختار العرض، وبعدها قدّم طلب.</h3>
            <p>لا دفع مباشر. يتم تأكيد السعر والتوفر بعد مراجعة الطلب.</p>
          </div>
        </div>
      </section>

      <section class="trustStrip">
        <div><b>🏢 من Amana</b><span>عروض مختارة ومراجعة من الشركة.</span></div>
        <div><b>💰 سعر واضح</b><span>السعر كتقدير أولي قبل التأكيد.</span></div>
        <div><b>🐑 كعبة أو جملة</b><span>كل عرض عندو طريقة شراء واضحة.</span></div>
        <div><b>👀 زيارة</b><span>إمكانية الزيارة حسب توفر العرض.</span></div>
      </section>

      <section class="smartBar">
        <button [class.active]="buyMode === 'ALL'" (click)="buyMode='ALL'">الكل</button>
        <button [class.active]="buyMode === 'UNIT'" (click)="buyMode='UNIT'">بالكعبة</button>
        <button [class.active]="buyMode === 'BULK'" (click)="buyMode='BULK'">بالجملة</button>

        <input [(ngModel)]="searchText" placeholder="لوّج بالاسم، النوع أو الكود...">
      </section>

      <section id="catalogue" class="catalogueLayout">

        <aside class="filters">
          <div class="filterHead">
            <div>
              <h3>فلترة العروض</h3>
              <p>اختار النوع، الميزانية، والترتيب</p>
            </div>
            <button (click)="resetFilters()">إعادة</button>
          </div>

          <label>
            نوع الحيوان
            <select [(ngModel)]="typeFilter">
              <option value="ALL">كل الأنواع</option>
              <option value="MOUTON">علوش</option>
              <option value="BREBIS">نعجة</option>
              <option value="GOAT">ماعز</option>
              <option value="COW">بقر</option>
            </select>
          </label>

          <label>
            الميزانية
            <select [(ngModel)]="budgetFilter">
              <option value="ALL">كل الأسعار</option>
              <option value="LOW">أقل من 1,000 د.ت</option>
              <option value="MID">بين 1,000 و 5,000 د.ت</option>
              <option value="HIGH">أكثر من 5,000 د.ت</option>
            </select>
          </label>

          <label>
            الترتيب
            <select [(ngModel)]="sortFilter">
              <option value="RECOMMENDED">الأكثر توصية</option>
              <option value="PRICE_ASC">السعر من الأقل للأكثر</option>
              <option value="PRICE_DESC">السعر من الأكثر للأقل</option>
              <option value="WEIGHT_DESC">أثقل وزن</option>
            </select>
          </label>

          <div class="advisor">
            <span>📩 محتار؟</span>
            <h4>قدّم طلب واضح</h4>
            <p>اكتب النوع والكمية والميزانية، وAmana تراجع الطلب معاك.</p>
            <button routerLink="/contact">قدّم طلب رسمي</button>
          </div>
        </aside>

        <section class="results">
          <div class="resultsHead">
            <div>
              <span class="miniLabel">النتائج</span>
              <h3>{{ filteredAnimals.length }} عرض متاح</h3>
              <p>كل عرض فيه صورة، سعر تقريبي، وزن، عمر، وطريقة شراء واضحة.</p>
            </div>

            <button class="compareBtn" (click)="showToast('ميزة المقارنة قريبًا ⚖️')">
              قارن العروض
            </button>
          </div>

          <div class="typeChoice">
            <button
              *ngFor="let t of animalTypes"
              [class.active]="typeFilter === t.value"
              (click)="typeFilter = t.value"
            >
              <span>{{ t.icon }}</span>
              {{ t.label }}
            </button>
          </div>

          <div class="empty" *ngIf="filteredAnimals.length === 0">
            <h3>ما لقيناش عروض</h3>
            <p>جرّب تبدّل النوع، طريقة الشراء، أو الميزانية.</p>
            <button (click)="resetFilters()">إعادة الفلاتر</button>
          </div>

          <div class="grid">
            <article class="animalCard" *ngFor="let a of filteredAnimals">

              <div class="image">
                <img [src]="a.image" [alt]="a.name">

                <div class="badges">
                  <span>{{ a.typeLabel }}</span>
                  <span class="status">{{ a.saleLabel }}</span>
                </div>

                <button
                  class="favorite"
                  [class.liked]="a.liked"
                  (click)="toggleLike(a)"
                >
                  {{ a.liked ? '♥' : '♡' }}
                </button>
              </div>

              <div class="body">
                <div class="topLine">
                  <div>
                    <h4>{{ a.name }}</h4>
                    <p>{{ a.code }} · عرض Amana</p>
                  </div>

                  <b class="price">من {{ a.price }} د.ت</b>
                </div>

                <div class="data">
                  <div><small>الوزن</small><b>{{ a.weight }}</b></div>
                  <div><small>العمر</small><b>{{ a.age }}</b></div>
                  <div><small>الشراء</small><b class="green">{{ a.saleLabel }}</b></div>
                </div>

                <div class="modes">
                  <span *ngIf="a.unitAvailable">🐑 هذا العرض بالكعبة</span>
                  <span *ngIf="a.bulkAvailable">📦 هذا العرض بالجملة</span>
                  <span *ngIf="a.visitAvailable">👀 زيارة حسب التوفر</span>
                </div>

                <div class="proofs">
                  <span>🏢 عرض Amana</span>
                  <span>💰 سعر تقريبي</span>
                  <span>📩 طلب رسمي</span>
                </div>

                <div class="cardActions">
                  <button class="details" (click)="goDetails(a.id)">التفاصيل</button>
                  <button class="reserve" (click)="goDetails(a.id)">قدّم طلب</button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </section>

      <section class="explain">
        <div>
          <span>علاش Amana؟</span>
          <h2>باش تشري مواشي بطريقة أوضح وأسهل.</h2>
          <p>
            Amana توفر عروض مواشي واضحة: النوع، الوزن، العمر، السعر التقريبي،
            وطريقة الشراء. تختار العرض، تبعث طلب رسمي، وبعدها يتم تأكيد التفاصيل.
          </p>
        </div>

        <div class="explainCards">
          <div>🐑 بالكعبة</div>
          <div>📦 بالجملة</div>
          <div>👀 زيارة حسب التوفر</div>
        </div>
      </section>

    </main>

    <div class="toast" *ngIf="toast">{{ toast }}</div>
  </div>
  `,
  styles: [`
    * { box-sizing: border-box; margin: 0; padding: 0; }

    :host {
      display: block;
      font-family: Inter, system-ui, Arial, sans-serif;
      --dark: #062d1c;
      --green: #0f6b3e;
      --green2: #18a058;
      --muted: #657468;
      --line: #e4ece3;
      --soft: #f7faf7;
      --orange: #f5841f;
      --shadow: 0 24px 70px rgba(20,55,35,.12);
      color: var(--dark);
    }

    .page {
      min-height: 100vh;
      direction: rtl;
      background:
        radial-gradient(circle at 10% 0%, rgba(15,107,62,.12), transparent 32%),
        linear-gradient(180deg, #fff8ec, #fff 42%, #f7fbf7);
    }

    .navbar {
      height: 84px;
      padding: 0 46px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(255,255,255,.92);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--line);
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
    }

    .brandLogo {
      width: 58px;
      height: 58px;
      object-fit: contain;
      border-radius: 18px;
    }

    .brand h1 {
      font-size: 28px;
      line-height: 1;
      letter-spacing: -.8px;
    }

    .brand p {
      color: var(--muted);
      font-size: 12px;
      font-weight: 900;
      margin-top: 5px;
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

    nav a {
      text-decoration: none;
      color: #263d2e;
      font-size: 14px;
      font-weight: 900;
      padding: 11px 14px;
      border-radius: 999px;
      cursor: pointer;
    }

    nav a:hover,
    nav .active {
      background: white;
      color: var(--green);
      box-shadow: 0 8px 20px rgba(20,55,35,.08);
    }

    button, input, select { font-family: inherit; }

    button {
      border: none;
      cursor: pointer;
      font-weight: 950;
      transition: .2s;
    }

    button:hover { transform: translateY(-2px); }

    .navActions {
      display: flex;
      gap: 10px;
    }

    .ghost, .dark {
      height: 44px;
      padding: 0 18px;
      border-radius: 14px;
    }

    .ghost {
      background: white;
      color: var(--dark);
      border: 1px solid var(--line);
    }

    .dark {
      background: linear-gradient(135deg, var(--green2), var(--green));
      color: white;
      box-shadow: 0 14px 28px rgba(15,107,62,.22);
    }

    main {
      width: min(100%, 1460px);
      margin: auto;
      padding: 28px 18px 80px;
    }

    .hero {
      display: grid;
      grid-template-columns: 1.1fr 430px;
      gap: 24px;
      align-items: stretch;
      margin-bottom: 22px;
    }

    .heroText {
      background: white;
      border: 1px solid var(--line);
      border-radius: 34px;
      padding: 46px;
      box-shadow: var(--shadow);
      text-align: right;
    }

    .eyebrow, .miniLabel, .explain span {
      display: inline-block;
      background: #eaf7ef;
      color: var(--green);
      padding: 8px 13px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 950;
      margin-bottom: 14px;
    }

    .hero h2 {
      font-size: clamp(38px, 5vw, 62px);
      line-height: 1.08;
      letter-spacing: -1.8px;
      max-width: 820px;
    }

    .hero p {
      margin-top: 20px;
      color: var(--muted);
      font-size: 18px;
      line-height: 1.85;
      max-width: 720px;
    }

    .heroActions {
      margin-top: 28px;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .primaryHero,
    .secondaryHero {
      height: 54px;
      padding: 0 26px;
      border-radius: 17px;
    }

    .primaryHero {
      background: linear-gradient(135deg, var(--green2), var(--green));
      color: white;
      box-shadow: 0 16px 32px rgba(15,107,62,.22);
    }

    .secondaryHero {
      background: white;
      color: var(--dark);
      border: 1px solid var(--line);
    }

    .heroProof {
      margin-top: 22px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .heroProof span {
      background: #f7faf7;
      border: 1px solid var(--line);
      color: #31513c;
      padding: 10px 13px;
      border-radius: 999px;
      font-size: 13px;
      font-weight: 900;
    }

    .heroVisual {
      position: relative;
      border-radius: 34px;
      overflow: hidden;
      min-height: 450px;
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
      background: linear-gradient(180deg, transparent, rgba(0,0,0,.45));
    }

    .visualCard {
      position: absolute;
      z-index: 2;
      left: 22px;
      right: 22px;
      bottom: 22px;
      background: rgba(255,255,255,.92);
      backdrop-filter: blur(14px);
      border-radius: 24px;
      padding: 20px;
      text-align: right;
    }

    .visualCard span {
      color: var(--green);
      font-size: 12px;
      font-weight: 950;
    }

    .visualCard h3 {
      margin-top: 8px;
      font-size: 24px;
    }

    .visualCard p {
      color: var(--muted);
      margin-top: 7px;
      font-size: 13px;
      line-height: 1.6;
    }

    .trustStrip {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 14px;
      margin: 22px 0;
    }

    .trustStrip div {
      background: white;
      border: 1px solid var(--line);
      border-radius: 22px;
      padding: 20px;
      box-shadow: 0 14px 32px rgba(20,55,35,.07);
      text-align: right;
    }

    .trustStrip b {
      display: block;
      margin-bottom: 7px;
    }

    .trustStrip span {
      color: var(--muted);
      font-size: 13px;
      line-height: 1.5;
    }

    .smartBar {
      margin: 22px 0;
      background: white;
      border: 1px solid var(--line);
      border-radius: 24px;
      padding: 14px;
      display: grid;
      grid-template-columns: auto auto auto 1fr;
      gap: 10px;
      box-shadow: var(--shadow);
    }

    .smartBar button {
      height: 46px;
      border-radius: 14px;
      padding: 0 18px;
      background: #f7faf7;
      color: var(--dark);
    }

    .smartBar button.active {
      background: var(--green);
      color: white;
    }

    .smartBar input {
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 0 14px;
      outline: none;
      text-align: right;
      min-width: 0;
    }

    .catalogueLayout {
      display: grid;
      grid-template-columns: 290px minmax(0, 1fr);
      gap: 22px;
      align-items: start;
    }

    .filters {
      position: sticky;
      top: 104px;
      background: white;
      border: 1px solid var(--line);
      border-radius: 28px;
      padding: 22px;
      box-shadow: var(--shadow);
    }

    .filterHead {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      align-items: flex-start;
      margin-bottom: 20px;
    }

    .filterHead h3 { font-size: 22px; }

    .filterHead p {
      color: var(--muted);
      font-size: 12px;
      margin-top: 4px;
      font-weight: 800;
    }

    .filterHead button {
      background: transparent;
      color: var(--green);
      font-size: 12px;
    }

    .filters label {
      display: grid;
      gap: 8px;
      color: #334155;
      font-size: 13px;
      font-weight: 950;
      margin-bottom: 14px;
    }

    .filters select {
      height: 48px;
      border: 1px solid var(--line);
      border-radius: 15px;
      background: var(--soft);
      padding: 0 12px;
      outline: none;
      font-weight: 850;
      color: var(--dark);
    }

    .advisor {
      margin-top: 22px;
      border-radius: 22px;
      padding: 20px;
      background: linear-gradient(135deg, rgba(5,45,28,.96), rgba(13,106,61,.86));
      color: white;
    }

    .advisor span {
      font-size: 12px;
      font-weight: 950;
      color: #dff7e7;
    }

    .advisor h4 {
      margin-top: 8px;
      font-size: 20px;
    }

    .advisor p {
      color: rgba(255,255,255,.75);
      line-height: 1.65;
      font-size: 13px;
      margin: 8px 0 14px;
    }

    .advisor button {
      width: 100%;
      height: 44px;
      border-radius: 14px;
      background: white;
      color: var(--dark);
    }

    .resultsHead {
      display: flex;
      justify-content: space-between;
      gap: 18px;
      align-items: flex-end;
      margin-bottom: 14px;
    }

    .resultsHead h3 {
      font-size: 32px;
      letter-spacing: -1px;
    }

    .resultsHead p {
      color: var(--muted);
      margin-top: 7px;
      line-height: 1.5;
    }

    .compareBtn {
      height: 48px;
      border-radius: 15px;
      background: white;
      border: 1px solid var(--line);
      color: var(--dark);
      padding: 0 18px;
      box-shadow: 0 12px 30px rgba(20,55,35,.05);
    }

    .typeChoice {
      margin-bottom: 18px;
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .typeChoice button {
      min-height: 44px;
      padding: 0 16px;
      border-radius: 14px;
      background: white;
      border: 1px solid var(--line);
      color: var(--dark);
      font-size: 14px;
    }

    .typeChoice button span { margin-left: 6px; }

    .typeChoice button.active {
      background: linear-gradient(135deg, var(--green2), var(--green));
      color: white;
      border-color: transparent;
      box-shadow: 0 14px 28px rgba(15,107,62,.18);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
    }

    .animalCard {
      background: white;
      border: 1px solid var(--line);
      border-radius: 28px;
      overflow: hidden;
      box-shadow: 0 18px 45px rgba(20,55,35,.08);
      transition: .25s;
    }

    .animalCard:hover {
      transform: translateY(-6px);
      box-shadow: 0 28px 70px rgba(20,55,35,.14);
    }

    .image {
      height: 230px;
      position: relative;
      overflow: hidden;
      background: #ddd;
    }

    .image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: .45s;
    }

    .animalCard:hover .image img { transform: scale(1.06); }

    .badges {
      position: absolute;
      top: 14px;
      right: 14px;
      left: 62px;
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .badges span {
      background: rgba(5,45,28,.88);
      color: white;
      border-radius: 999px;
      padding: 7px 10px;
      font-size: 11px;
      font-weight: 950;
      backdrop-filter: blur(8px);
    }

    .badges .status {
      background: rgba(15,107,62,.9);
    }

    .favorite {
      position: absolute;
      top: 14px;
      left: 14px;
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: rgba(255,255,255,.94);
      font-size: 22px;
      color: var(--green);
      box-shadow: 0 12px 28px rgba(0,0,0,.13);
    }

    .favorite.liked {
      background: #ffe8e8;
      color: #d92020;
    }

    .body {
      padding: 18px;
      text-align: right;
    }

    .topLine {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      align-items: flex-start;
    }

    .topLine h4 {
      font-size: 20px;
      letter-spacing: -.5px;
      line-height: 1.2;
    }

    .topLine p {
      color: var(--muted);
      font-size: 12px;
      margin-top: 6px;
      line-height: 1.45;
    }

    .price {
      color: var(--green);
      font-size: 18px;
      white-space: nowrap;
    }

    .data {
      margin-top: 16px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    .data div {
      background: var(--soft);
      border: 1px solid var(--line);
      border-radius: 15px;
      padding: 11px;
    }

    .data small {
      display: block;
      color: var(--muted);
      font-size: 11px;
      font-weight: 900;
      margin-bottom: 5px;
    }

    .data b { font-size: 13px; }

    .green { color: var(--green); }

    .modes {
      margin-top: 12px;
      display: grid;
      gap: 8px;
    }

    .modes span {
      background: #fff8ec;
      border: 1px solid #f4e5ca;
      border-radius: 14px;
      padding: 10px;
      font-size: 12px;
      font-weight: 900;
      color: #5b3b14;
    }

    .proofs {
      display: flex;
      gap: 7px;
      flex-wrap: wrap;
      margin-top: 12px;
    }

    .proofs span {
      background: #fbfdfb;
      border: 1px solid var(--line);
      color: #334155;
      border-radius: 999px;
      padding: 7px 9px;
      font-size: 11px;
      font-weight: 850;
    }

    .cardActions {
      margin-top: 14px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }

    .details, .reserve {
      height: 46px;
      border-radius: 15px;
    }

    .details {
      background: white;
      color: var(--dark);
      border: 1px solid var(--line);
    }

    .reserve {
      background: linear-gradient(135deg, var(--green2), var(--green));
      color: white;
    }

    .empty {
      background: white;
      border: 1px solid var(--line);
      border-radius: 26px;
      padding: 40px;
      text-align: center;
      box-shadow: var(--shadow);
    }

    .empty p {
      color: var(--muted);
      margin: 10px 0 18px;
    }

    .empty button {
      background: var(--dark);
      color: white;
      border-radius: 14px;
      padding: 13px 18px;
    }

    .explain {
      margin-top: 28px;
      background: linear-gradient(135deg, rgba(5,45,28,.96), rgba(13,106,61,.84));
      color: white;
      border-radius: 34px;
      padding: 40px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      align-items: center;
      box-shadow: var(--shadow);
      text-align: right;
    }

    .explain span {
      background: rgba(255,255,255,.14);
      color: white;
    }

    .explain h2 {
      font-size: 36px;
      line-height: 1.15;
      letter-spacing: -1px;
    }

    .explain p {
      color: rgba(255,255,255,.75);
      line-height: 1.8;
      margin-top: 14px;
    }

    .explainCards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }

    .explainCards div {
      background: rgba(255,255,255,.12);
      border: 1px solid rgba(255,255,255,.14);
      border-radius: 18px;
      padding: 18px;
      font-weight: 950;
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
      z-index: 100;
      font-weight: 900;
    }

    @media (max-width: 1250px) {
      nav { display: none; }

      .hero,
      .catalogueLayout,
      .explain {
        grid-template-columns: 1fr;
      }

      .filters {
        position: static;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 14px;
      }

      .filterHead, .advisor {
        grid-column: 1 / -1;
      }

      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 760px) {
      .navbar {
        height: auto;
        padding: 14px 16px;
      }

      .brandLogo {
        width: 50px;
        height: 50px;
      }

      .brand h1 {
        font-size: 22px;
      }

      .brand p,
      .navActions .ghost {
        display: none;
      }

      main {
        padding: 16px 10px 50px;
      }

      .heroText, .explain {
        padding: 24px;
        border-radius: 24px;
      }

      .heroVisual {
        min-height: 320px;
        border-radius: 24px;
      }

      .heroActions {
        flex-direction: column;
      }

      .heroActions button {
        width: 100%;
      }

      .smartBar {
        grid-template-columns: 1fr;
      }

      .smartBar button,
      .smartBar input {
        height: 46px;
        width: 100%;
      }

      .trustStrip,
      .filters,
      .grid,
      .data,
      .cardActions,
      .explainCards {
        grid-template-columns: 1fr;
      }

      .typeChoice button {
        width: 100%;
      }

      .resultsHead {
        flex-direction: column;
        align-items: flex-start;
      }

      .compareBtn {
        width: 100%;
      }

      .topLine {
        flex-direction: column;
      }

      .price {
        white-space: normal;
      }
    }
  `]
})
export class CatalogueComponent {
  constructor(private router: Router) {}

  searchText = '';
  buyMode: BuyMode = 'ALL';
  typeFilter: 'ALL' | AnimalType = 'ALL';
  budgetFilter = 'ALL';
  sortFilter = 'RECOMMENDED';
  toast = '';

  animalTypes: { value: 'ALL' | AnimalType; label: string; icon: string }[] = [
    { value: 'ALL', label: 'الكل', icon: '🌿' },
    { value: 'MOUTON', label: 'علوش', icon: '🐑' },
    { value: 'BREBIS', label: 'نعجة', icon: '🐏' },
    { value: 'GOAT', label: 'ماعز', icon: '🐐' },
    { value: 'COW', label: 'بقر', icon: '🐄' }
  ];

  animals = [
    {
      id: 1,
      name: 'علوش بربري',
      code: '#A102',
      type: 'MOUTON' as AnimalType,
      typeLabel: 'علوش',
      weight: '45 kg',
      weightValue: 45,
      age: '8 أشهر',
      priceValue: 850,
      price: 850,
      saleLabel: 'بالكعبة',
      unitAvailable: true,
      bulkAvailable: false,
      visitAvailable: true,
      liked: false,
      image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=1000&q=85'
    },
    {
      id: 2,
      name: 'نعجة بربرية',
      code: '#B205',
      type: 'BREBIS' as AnimalType,
      typeLabel: 'نعجة',
      weight: '38 kg',
      weightValue: 38,
      age: '7 أشهر',
      priceValue: 760,
      price: 760,
      saleLabel: 'بالكعبة',
      unitAvailable: true,
      bulkAvailable: false,
      visitAvailable: true,
      liked: false,
      image: 'https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?auto=format&fit=crop&w=1000&q=85'
    },
    {
      id: 3,
      name: 'ماعز أسود',
      code: '#G101',
      type: 'GOAT' as AnimalType,
      typeLabel: 'ماعز',
      weight: '32 kg',
      weightValue: 32,
      age: '10 أشهر',
      priceValue: 690,
      price: 690,
      saleLabel: 'بالكعبة',
      unitAvailable: true,
      bulkAvailable: false,
      visitAvailable: true,
      liked: false,
      image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=1000&q=85'
    },
    {
      id: 4,
      name: 'Lot 5 علّوشات',
      code: '#L500',
      type: 'MOUTON' as AnimalType,
      typeLabel: 'علوش',
      weight: '43 kg moyenne',
      weightValue: 43,
      age: '8 أشهر moyenne',
      priceValue: 4200,
      price: 4200,
      saleLabel: 'بالجملة',
      unitAvailable: false,
      bulkAvailable: true,
      visitAvailable: true,
      liked: false,
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1000&q=85'
    },
    {
      id: 5,
      name: 'بقرة حلوب',
      code: '#C309',
      type: 'COW' as AnimalType,
      typeLabel: 'بقر',
      weight: '420 kg',
      weightValue: 420,
      age: '3 سنوات',
      priceValue: 5200,
      price: 5200,
      saleLabel: 'بالكعبة',
      unitAvailable: true,
      bulkAvailable: false,
      visitAvailable: true,
      liked: false,
      image: 'https://images.unsplash.com/photo-1507103011901-e954d6ec0988?auto=format&fit=crop&w=1000&q=85'
    },
    {
      id: 6,
      name: 'Lot 12 ماعز',
      code: '#G012',
      type: 'GOAT' as AnimalType,
      typeLabel: 'ماعز',
      weight: '30 kg moyenne',
      weightValue: 30,
      age: '9 أشهر moyenne',
      priceValue: 7800,
      price: 7800,
      saleLabel: 'بالجملة',
      unitAvailable: false,
      bulkAvailable: true,
      visitAvailable: true,
      liked: false,
      image: 'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1000&q=85'
    },
    {
      id: 7,
      name: 'Lot 3 بقر',
      code: '#C003',
      type: 'COW' as AnimalType,
      typeLabel: 'بقر',
      weight: '390 kg moyenne',
      weightValue: 390,
      age: '2.5 سنوات moyenne',
      priceValue: 14500,
      price: 14500,
      saleLabel: 'بالجملة',
      unitAvailable: false,
      bulkAvailable: true,
      visitAvailable: true,
      liked: false,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85'
    }
  ];

  get filteredAnimals() {
    const search = this.searchText.toLowerCase().trim();

    let result = this.animals.filter(a => {
      const matchSearch =
        !search ||
        a.name.toLowerCase().includes(search) ||
        a.typeLabel.toLowerCase().includes(search) ||
        a.code.toLowerCase().includes(search) ||
        a.saleLabel.toLowerCase().includes(search);

      const matchType =
        this.typeFilter === 'ALL' || a.type === this.typeFilter;

      const matchBuyMode =
        this.buyMode === 'ALL' ||
        (this.buyMode === 'UNIT' && a.unitAvailable) ||
        (this.buyMode === 'BULK' && a.bulkAvailable);

      const matchBudget =
        this.budgetFilter === 'ALL' ||
        (this.budgetFilter === 'LOW' && a.priceValue < 1000) ||
        (this.budgetFilter === 'MID' && a.priceValue >= 1000 && a.priceValue <= 5000) ||
        (this.budgetFilter === 'HIGH' && a.priceValue > 5000);

      return matchSearch && matchType && matchBuyMode && matchBudget;
    });

    if (this.sortFilter === 'PRICE_ASC') {
      result = [...result].sort((a, b) => a.priceValue - b.priceValue);
    }

    if (this.sortFilter === 'PRICE_DESC') {
      result = [...result].sort((a, b) => b.priceValue - a.priceValue);
    }

    if (this.sortFilter === 'WEIGHT_DESC') {
      result = [...result].sort((a, b) => b.weightValue - a.weightValue);
    }

    return result;
  }

  resetFilters() {
    this.searchText = '';
    this.buyMode = 'ALL';
    this.typeFilter = 'ALL';
    this.budgetFilter = 'ALL';
    this.sortFilter = 'RECOMMENDED';
    this.showToast('تمت إعادة الفلاتر ✅');
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

  goDetails(id: number) {
    this.router.navigate(['/animal', id]);
  }

  showToast(message: string) {
    this.toast = message;
    setTimeout(() => this.toast = '', 2200);
  }
}