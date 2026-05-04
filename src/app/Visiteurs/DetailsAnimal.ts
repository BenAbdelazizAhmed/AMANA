import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
 import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-animal-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
  <div class="page">

    <header class="navbar">
      <div class="brand" routerLink="/accueil">
        <img class="brandLogo" src="/assets/logo-amana.png" alt="Amana logo">
        <div>
          <h1>Amana</h1>
          <p>مواشي مختارة من Amana</p>
        </div>
      </div>

      <nav>
        <a routerLink="/accueil">الرئيسية</a>
        <a routerLink="/catalogue">العروض</a>
        <a routerLink="/comment-ca-marche">كيفاش تخدم؟</a>
        <a routerLink="/garanties">الثقة</a>
        <a class="active">تفاصيل العرض</a>
      </nav>

      <button type="button" class="account" routerLink="/catalogue">
        رجوع للكتالوج
      </button>
    </header>

    <main class="detailsPage">

      <section class="productHero">

        <div class="galleryCard">
          <img class="mainPhoto" [src]="selectedImage" alt="animal">

          <div class="photoBadges">
            <span>🏢 عرض Amana</span>
            <span>👀 زيارة حسب التوفر</span>
          </div>

          <div class="thumbs">
            <img
              *ngFor="let img of animal.images"
              [src]="img"
              [class.active]="img === selectedImage"
              (click)="selectedImage = img"
              alt="animal thumbnail"
            >
          </div>
        </div>

        <aside class="buyCard">
          <span class="code">{{ animal.code }}</span>

          <h1>{{ animal.name }}</h1>

          <p class="shortDesc">
            {{ animal.type }} · عرض مختار من Amana · {{ animal.saleType }}
          </p>

          <div class="price">
            <small>السعر التقريبي</small>
            <strong>من {{ animal.unitPrice }} د.ت</strong>
            <p>السعر النهائي يتأكد بعد مراجعة الطلب والتوفر.</p>
          </div>

          <div class="quickInfo">
            <div><small>الوزن</small><b>{{ animal.weight }}</b></div>
            <div><small>العمر</small><b>{{ animal.age }}</b></div>
            <div><small>طريقة الشراء</small><b>{{ animal.saleType }}</b></div>
          </div>

          <div class="smartAnalysis">
            <div>
              <span>🔥 تقييم العرض</span>
              <b>{{ animalScore }}/10</b>
            </div>

            <p>
              {{ animalScore >= 8
                ? 'عرض مناسب للمقارنة والتأكيد قبل الشراء. قدّم طلب مراجعة باش تتأكد من السعر والتوفر.'
                : 'عرض مقبول، ننصحوك تبعث طلب مراجعة قبل القرار النهائي.' }}
            </p>
          </div>

          <button type="button" class="mainAction" (click)="openRequestModal()">
            📩 إرسال طلب مراجعة العرض
          </button>

          <button type="button" class="secondaryAction" routerLink="/catalogue">
            شوف عروض أخرى
          </button>

          <p class="note">
            الطلب ليس شراءً نهائيًا. بعد الإرسال، يتم مراجعة التفاصيل والتواصل معك لتأكيد التوفر والسعر.
          </p>
        </aside>

      </section>

      <section class="shortInfo">
        <div>
          <span>🐑</span>
          <h3>نوع العرض</h3>
          <p>{{ animal.type }} · {{ animal.race }}</p>
        </div>

        <div>
          <span>👀</span>
          <h3>زيارة قبل الشراء</h3>
          <p>تنجم تطلب زيارة حسب توفر العرض.</p>
        </div>

        <div>
          <span>📩</span>
          <h3>طلب رسمي</h3>
          <p>ترسل معلوماتك ونراجعو العرض قبل أي قرار.</p>
        </div>
      </section>

      <section class="nextSteps">
        <div>
          <b>1</b>
          <h3>تعمّر الطلب</h3>
          <p>تدخل اسمك ورقمك وملاحظتك.</p>
        </div>

        <div>
          <b>2</b>
          <h3>نراجعو التفاصيل</h3>
          <p>نتثبتو من التوفر والسعر النهائي.</p>
        </div>

        <div>
          <b>3</b>
          <h3>تقرر براحتك</h3>
          <p>زيارة، شراء، أو طلب كمية حسب حاجتك.</p>
        </div>
      </section>

    </main>

    <div class="modalOverlay" *ngIf="requestOpen" (click)="closeRequestModal()">
      <div class="requestModal" (click)="$event.stopPropagation()">

        <button type="button" class="closeBtn" (click)="closeRequestModal()">×</button>

        <div class="modalHeader">
          <span>📩 طلب مراجعة العرض</span>
          <h2>{{ animal.name }}</h2>
          <p>عمّر معلوماتك، وسيتم إرسال الطلب رسميًا لفريق Amana.</p>
        </div>

        <div class="modalGrid">
          <div class="selectedAnimal">
            <img [src]="selectedImage" alt="animal">
            <div>
              <b>{{ animal.code }}</b>
              <p>{{ animal.weight }} · {{ animal.age }} · من {{ animal.unitPrice }} د.ت</p>
              <p>{{ animal.saleType }} · عرض Amana</p>
            </div>
          </div>

          <div>
            <form class="requestForm" (ngSubmit)="submitRequest()" #form="ngForm">
              <label>
                الاسم الكامل
                <input
                  [(ngModel)]="request.name"
                  name="name"
                  placeholder="مثال: أحمد بن علي"
                  required
                >
              </label>

              <label>
                رقم الهاتف
                <input
                  [(ngModel)]="request.phone"
                  name="phone"
                  placeholder="مثال: 50 123 456"
                  required
                >
              </label>

              <label class="full">
                ملاحظة اختيارية
                <textarea
                  [(ngModel)]="request.message"
                  name="message"
                  placeholder="مثال: نحب نعرف السعر النهائي وإمكانية الزيارة..."
                ></textarea>
              </label>

              <button class="submitBtn full" type="submit" [disabled]="form.invalid">
                📩 إرسال الطلب
              </button>

              <p class="formNote full">
                الطلب يصل مباشرة لفريق Amana عبر WhatsApp للمراجعة والمتابعة.
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>

    <div class="modalOverlay" *ngIf="successOpen">
      <div class="successModal">
        <div class="successIcon">✅</div>
        <h2>تم تجهيز الطلب</h2>
        <p>سيتم فتح WhatsApp لإرسال الطلب رسميًا لفريق Amana.</p>
        <button type="button" (click)="successOpen = false">فهمت</button>
      </div>
    </div>

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
      --orange: #f5841f;
      --muted: #667568;
      --line: #e5ece3;
      --soft: #f7faf7;
      --cream: #fff6e8;
      --shadow: 0 18px 46px rgba(20,55,35,.11);
    }

    .page {
      min-height: 100vh;
      color: var(--dark);
      direction: rtl;
      background:
        radial-gradient(circle at top left, rgba(15,107,62,.10), transparent 30%),
        linear-gradient(180deg, #fff8ec, #fff 38%, #f7fbf7);
    }

    .navbar {
      height: 78px;
      padding: 0 42px;
      background: rgba(255,255,255,.92);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--line);
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .brand {
      display: flex;
      gap: 12px;
      align-items: center;
      cursor: pointer;
    }

    .brandLogo {
      width: 52px;
      height: 52px;
      object-fit: contain;
      border-radius: 16px;
    }

    .brand h1 {
      font-size: 25px;
      line-height: 1;
      letter-spacing: -.6px;
    }

    .brand p {
      margin-top: 5px;
      color: var(--muted);
      font-size: 11px;
      font-weight: 900;
    }

    nav {
      display: flex;
      align-items: center;
      gap: 5px;
      padding: 6px;
      background: #f8fbf6;
      border: 1px solid #e8eee3;
      border-radius: 999px;
    }

    nav a {
      text-decoration: none;
      color: #263d2e;
      font-size: 13px;
      font-weight: 900;
      padding: 10px 13px;
      border-radius: 999px;
      cursor: pointer;
    }

    nav a:hover,
    nav .active {
      background: white;
      color: var(--green);
      box-shadow: 0 8px 20px rgba(20,55,35,.08);
    }

    button, input, textarea {
      font-family: inherit;
    }

    button {
      border: none;
      cursor: pointer;
      font-weight: 950;
      transition: .2s;
    }

    button:hover {
      transform: translateY(-2px);
    }

    button:disabled {
      opacity: .55;
      cursor: not-allowed;
      transform: none;
    }

    .account {
      height: 42px;
      padding: 0 16px;
      border-radius: 14px;
      background: linear-gradient(135deg, var(--green2), var(--green));
      color: white;
      box-shadow: 0 12px 24px rgba(15,107,62,.2);
    }

    .detailsPage {
      width: min(100%, 1400px);
      margin: auto;
      padding: 22px 18px 55px;
    }

    .productHero {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 390px;
      gap: 18px;
      align-items: start;
    }

    .galleryCard,
    .buyCard,
    .shortInfo,
    .nextSteps {
      background: white;
      border: 1px solid var(--line);
      border-radius: 28px;
      box-shadow: var(--shadow);
    }

    .galleryCard {
      padding: 12px;
      position: relative;
    }

    .mainPhoto {
      width: 100%;
      height: 470px;
      object-fit: cover;
      border-radius: 23px;
      display: block;
    }

    .photoBadges {
      position: absolute;
      top: 26px;
      right: 26px;
      display: flex;
      gap: 9px;
      flex-wrap: wrap;
    }

    .photoBadges span {
      background: rgba(5,45,28,.88);
      color: white;
      padding: 8px 12px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 950;
      backdrop-filter: blur(10px);
    }

    .thumbs {
      margin-top: 10px;
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 8px;
    }

    .thumbs img {
      width: 100%;
      height: 62px;
      object-fit: cover;
      border-radius: 14px;
      cursor: pointer;
      opacity: .62;
      border: 3px solid transparent;
      transition: .2s;
    }

    .thumbs img.active,
    .thumbs img:hover {
      opacity: 1;
      border-color: var(--green);
    }

    .buyCard {
      padding: 22px;
      position: sticky;
      top: 96px;
    }

    .code {
      display: inline-block;
      background: #eaf7ef;
      color: var(--green);
      padding: 7px 12px;
      border-radius: 999px;
      font-size: 11px;
      font-weight: 950;
    }

    .buyCard h1 {
      margin-top: 15px;
      font-size: 32px;
      line-height: 1.05;
      letter-spacing: -1.2px;
    }

    .shortDesc {
      margin-top: 10px;
      color: var(--muted);
      line-height: 1.65;
      font-size: 13px;
      font-weight: 800;
    }

    .price {
      margin-top: 18px;
      padding: 16px;
      border-radius: 21px;
      background: linear-gradient(145deg, #f8fafc, #edf8f1);
      border: 1px solid var(--line);
    }

    .price small {
      color: var(--muted);
      font-weight: 900;
      font-size: 12px;
    }

    .price strong {
      display: block;
      color: var(--green);
      font-size: 34px;
      margin: 4px 0;
    }

    .price p {
      color: var(--muted);
      font-size: 12px;
      font-weight: 800;
    }

    .quickInfo {
      margin-top: 12px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;
    }

    .quickInfo div {
      background: var(--soft);
      border: 1px solid var(--line);
      border-radius: 16px;
      padding: 11px;
    }

    .quickInfo small {
      display: block;
      color: var(--muted);
      font-size: 10px;
      font-weight: 900;
      margin-bottom: 4px;
    }

    .quickInfo b {
      font-size: 12px;
    }

    .smartAnalysis {
      margin-top: 12px;
      padding: 14px;
      border-radius: 19px;
      background: linear-gradient(135deg, #fff8ec, #edf8f1);
      border: 1px solid var(--line);
    }

    .smartAnalysis div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .smartAnalysis span {
      color: var(--green);
      font-size: 12px;
      font-weight: 950;
    }

    .smartAnalysis b {
      font-size: 26px;
      color: var(--orange);
    }

    .smartAnalysis p {
      margin-top: 7px;
      color: var(--muted);
      font-size: 12px;
      line-height: 1.6;
      font-weight: 800;
    }

    .mainAction,
    .secondaryAction {
      width: 100%;
      height: 50px;
      border-radius: 16px;
      margin-top: 10px;
      font-size: 14px;
    }

    .mainAction {
      background: linear-gradient(135deg, var(--green2), var(--green));
      color: white;
      box-shadow: 0 14px 26px rgba(15,107,62,.18);
    }

    .secondaryAction {
      background: white;
      color: var(--dark);
      border: 1px solid var(--line);
    }

    .note {
      margin-top: 10px;
      text-align: center;
      color: var(--muted);
      font-size: 11px;
      font-weight: 800;
      line-height: 1.5;
    }

    .shortInfo,
    .nextSteps {
      margin-top: 18px;
      padding: 16px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }

    .shortInfo div,
    .nextSteps div {
      background: var(--soft);
      border: 1px solid var(--line);
      border-radius: 20px;
      padding: 16px;
    }

    .shortInfo span {
      width: 42px;
      height: 42px;
      border-radius: 15px;
      background: var(--cream);
      display: grid;
      place-items: center;
      font-size: 22px;
      margin-bottom: 10px;
    }

    .shortInfo h3,
    .nextSteps h3 {
      margin-bottom: 6px;
      font-size: 17px;
    }

    .shortInfo p,
    .nextSteps p {
      color: var(--muted);
      line-height: 1.55;
      font-size: 13px;
    }

    .nextSteps b {
      width: 38px;
      height: 38px;
      border-radius: 13px;
      background: var(--green);
      color: white;
      display: grid;
      place-items: center;
      margin-bottom: 10px;
    }

    .modalOverlay {
      position: fixed;
      inset: 0;
      background: rgba(3, 24, 15, .58);
      backdrop-filter: blur(9px);
      display: grid;
      place-items: center;
      z-index: 200;
      padding: 18px;
    }

    .requestModal {
      width: min(96vw, 820px);
      background: white;
      border-radius: 28px;
      padding: 24px;
      box-shadow: 0 30px 90px rgba(0,0,0,.25);
      position: relative;
      animation: pop .22s ease;
    }

    .successModal {
      width: min(100%, 500px);
      background: white;
      border-radius: 28px;
      padding: 24px;
      box-shadow: 0 30px 90px rgba(0,0,0,.25);
      text-align: center;
      animation: pop .22s ease;
    }

    @keyframes pop {
      from { transform: scale(.95) translateY(10px); opacity: 0; }
      to { transform: scale(1) translateY(0); opacity: 1; }
    }

    .closeBtn {
      position: absolute;
      left: 18px;
      top: 18px;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: #f1f5f9;
      color: var(--dark);
      font-size: 23px;
    }

    .modalHeader span {
      display: inline-block;
      background: #e8f8ee;
      color: var(--green);
      padding: 7px 13px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 950;
      margin-bottom: 10px;
    }

    .modalHeader h2 {
      font-size: 26px;
      line-height: 1.15;
    }

    .modalHeader p {
      color: var(--muted);
      margin-top: 7px;
      line-height: 1.6;
      font-size: 14px;
    }

    .modalGrid {
      margin-top: 16px;
      display: grid;
      grid-template-columns: 260px 1fr;
      gap: 16px;
    }

    .selectedAnimal {
      background: #f8faf9;
      border: 1px solid var(--line);
      border-radius: 18px;
      padding: 10px;
    }

    .selectedAnimal img {
      width: 100%;
      height: 170px;
      object-fit: cover;
      border-radius: 16px;
      margin-bottom: 10px;
    }

    .selectedAnimal p {
      margin-top: 5px;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.5;
    }

    .requestForm {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }

    .requestForm label {
      display: grid;
      gap: 6px;
      font-weight: 950;
      color: #20382a;
      font-size: 13px;
    }

    .requestForm input,
    .requestForm textarea {
      width: 100%;
      border: 1px solid var(--line);
      background: #f8faf9;
      border-radius: 14px;
      padding: 12px 13px;
      outline: none;
      font-size: 13px;
    }

    .requestForm textarea {
      min-height: 98px;
      resize: vertical;
    }

    .requestForm .full,
    .submitBtn.full,
    .formNote.full {
      grid-column: 1 / -1;
    }

    .submitBtn {
      height: 50px;
      border-radius: 15px;
      background: linear-gradient(135deg, var(--green2), var(--green));
      color: white;
      box-shadow: 0 14px 28px rgba(15,107,62,.22);
      margin-top: 4px;
    }

    .formNote {
      color: var(--muted);
      font-size: 12px;
      font-weight: 850;
      line-height: 1.6;
      text-align: center;
    }

    .successIcon {
      width: 66px;
      height: 66px;
      border-radius: 22px;
      background: #dcfce7;
      display: grid;
      place-items: center;
      font-size: 32px;
      margin: 0 auto 14px;
    }

    .successModal h2 {
      font-size: 28px;
    }

    .successModal p {
      color: var(--muted);
      margin: 10px 0 18px;
      line-height: 1.6;
    }

    .successModal button {
      height: 48px;
      padding: 0 28px;
      border-radius: 15px;
      background: var(--green);
      color: white;
    }

    .toast {
      position: fixed;
      bottom: 24px;
      left: 24px;
      background: var(--dark);
      color: white;
      padding: 14px 18px;
      border-radius: 15px;
      box-shadow: var(--shadow);
      z-index: 250;
      font-weight: 900;
    }

    @media (max-width: 1100px) {
      nav { display: none; }

      .productHero {
        grid-template-columns: 1fr;
      }

      .buyCard {
        position: static;
      }
    }

    @media (max-width: 720px) {
      .navbar {
        height: auto;
        padding: 14px 16px;
      }

      .brandLogo {
        width: 50px;
        height: 50px;
      }

      .brand p,
      .account {
        display: none;
      }

      .detailsPage {
        padding: 16px 10px 45px;
      }

      .galleryCard,
      .buyCard,
      .shortInfo,
      .nextSteps,
      .requestModal,
      .successModal {
        border-radius: 22px;
      }

      .mainPhoto {
        height: 330px;
      }

      .thumbs {
        grid-template-columns: repeat(3, 1fr);
      }

      .thumbs img {
        height: 76px;
      }

      .shortInfo,
      .nextSteps,
      .quickInfo,
      .modalGrid,
      .requestForm {
        grid-template-columns: 1fr;
      }

      .requestForm .full,
      .submitBtn.full,
      .formNote.full {
        grid-column: auto;
      }

      .buyCard h1 {
        font-size: 28px;
      }

      .price strong {
        font-size: 32px;
      }
    }
  `]
})
export class AnimalDetailsComponent {
  requestOpen = false;
  successOpen = false;
  toast = '';

  request = {
    type: 'طلب مراجعة العرض',
    name: '',
    phone: '',
    message: ''
  };

  animal = {
    code: '#A102',
    name: 'علوش بربري',
    icon: '🐑',
    type: 'علوش',
    race: 'Barbarine',
    saleType: 'بالكعبة',
    unitPrice: 850,
    weight: '45 kg',
    age: '8 أشهر',
    images: [
      'https://images.unsplash.com/photo-1484557985045-edf25e08da73?auto=format&fit=crop&w=1400&q=90',
      'https://images.unsplash.com/photo-1511117833895-4b473c0b85d6?auto=format&fit=crop&w=1400&q=90',
      'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1400&q=90',
      'https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=1400&q=90',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=90',
      'https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=1400&q=90',
      'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1400&q=90',
      'https://images.unsplash.com/photo-1507103011901-e954d6ec0988?auto=format&fit=crop&w=1400&q=90'
    ]
  };

  selectedImage = this.animal.images[0];

  get animalScore() {
    const weight = parseInt(this.animal.weight, 10);
    let score = 7;

    if (weight >= 40) score += 1;
    if (this.animal.unitPrice <= 900) score += 1;
    if (this.animal.saleType) score += 1;

    return Math.min(score, 10);
  }

  openRequestModal() {
    this.request.type = 'طلب مراجعة العرض';
    this.request.message = `سلام، نحب نطلب مراجعة العرض: ${this.animal.name} (${this.animal.code}).`;
    this.requestOpen = true;
  }

  closeRequestModal() {
    this.requestOpen = false;
  }


submitRequest() {
  if (!this.request.name.trim() || !this.request.phone.trim()) {
    this.toast = 'عمّر الاسم ورقم الهاتف';
    setTimeout(() => this.toast = '', 2200);
    return;
  }

  const templateParams = {
    animal: this.animal.name,
    code: this.animal.code,
    name: this.request.name,
    phone: this.request.phone,
    message: this.request.message || 'بدون ملاحظة'
  };

  emailjs.send(
    'service_nhqjy4i',   // 🔴 عوّضها من EmailJS
    'template_ucfefn9',  // 🔴 عوّضها من EmailJS
    templateParams,
    'wgn-CkN_aQcdg671Z'          // 🔴 Public Key
  ).then(() => {

    this.requestOpen = false;
    this.successOpen = true;

    this.request = {
      type: '',
      name: '',
      phone: '',
      message: ''
    };

  }).catch((error) => {
    console.error(error); // مهم debugging
    this.toast = 'صار مشكل في الإرسال';
    setTimeout(() => this.toast = '', 2200);
  });
}
}