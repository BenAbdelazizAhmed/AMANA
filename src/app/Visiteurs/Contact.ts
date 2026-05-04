import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

type RequestType = 'unit' | 'bulk' | 'visit' | 'partnership' | '';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
  <main class="page">

    <header class="navbar">
      <div class="brand" routerLink="/accueil">
        <img class="brandLogo" src="assets/a.png" alt="Amana logo">
      </div>

      <nav>
        <button routerLink="/accueil">الرئيسية</button>
        <button routerLink="/catalogue">الحيوانات</button>
        <button routerLink="/accueil" fragment="how">كيفاش تخدم؟</button>
        <button routerLink="/accueil" fragment="trust">الثقة</button>
        <button class="active">تواصل معنا</button>
      </nav>

      <div class="actions">
        <button class="navSecondary" routerLink="/catalogue">شوف العروض</button>
        <button class="navPrimary" (click)="scrollToForm()">طلب عرض سعر</button>
      </div>
    </header>

    <section class="contactHero">
      <div class="heroText">
        <div class="heroBadge">
          <span></span>
          خدمة حرفاء رسمية من Amana
        </div>

        <h1>
          خلّي طلبك،
          <span>وفريق Amana يراجع التفاصيل.</span>
        </h1>

        <p>
          إذا تحب تشري بالكعبة، بالجملة، تطلب زيارة، أو تتعامل معانا كمزوّد،
          عبي الطلب الرسمي وسيتم التواصل معك بعد مراجعة التفاصيل.
        </p>

        <div class="heroActions">
          <button class="primaryBtn big" (click)="scrollToForm()">
            تقديم طلب رسمي
          </button>

          <button class="secondaryBtn big" routerLink="/catalogue">
            مشاهدة الحيوانات
          </button>
        </div>

        <div class="proofLine">
          <div>✅ طلبات منظّمة</div>
          <div>📦 كعبة ولا جملة</div>
          <div>👀 زيارة قبل الشراء</div>
        </div>
      </div>

      <div class="officialCard">
        <span class="cardBadge">AMANA SERVICE</span>
        <h2>كيفاش يتم التعامل مع طلبك؟</h2>

        <div class="process">
          <div>
            <b>01</b>
            <p>تعمّر الطلب بالمعلومات اللازمة.</p>
          </div>
          <div>
            <b>02</b>
            <p>فريق Amana يراجع النوع، الكمية، والمنطقة.</p>
          </div>
          <div>
            <b>03</b>
            <p>يتم تأكيد العرض، السعر، وإمكانية الزيارة أو التسليم.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="trustStrip">
      <div>
        <b>🐑 شراء بالكعبة</b>
        <span>اختيار واضح حسب النوع، الوزن، السعر، والمنطقة.</span>
      </div>

      <div>
        <b>📦 شراء بالجملة</b>
        <span>طلبات كمية للتجار، المطاعم، المناسبات، أو العائلات.</span>
      </div>

      <div>
        <b>👀 زيارة قبل الشراء</b>
        <span>إمكانية التنسيق لزيارة قبل اتخاذ القرار النهائي.</span>
      </div>

      <div>
        <b>🤝 تعامل رسمي</b>
        <span>طلبات منظمة ومراجعة من فريق Amana.</span>
      </div>
    </section>

    <section id="requestForm" class="section requestSection">
      <div class="formIntro">
        <small>نموذج رسمي</small>
        <h2>قدّم طلبك لفريق Amana.</h2>
        <p>
          عبي المعلومات الأساسية فقط. كل ما يكون الطلب واضح، كل ما نجمنا نوجهوك
          لعرض مناسب بطريقة أسرع وأكثر احترافية.
        </p>

        <div class="sideInfo">
          <div>✅ لا يوجد دفع عبر هذا النموذج</div>
          <div>✅ الطلب لا يعني الشراء الإجباري</div>
          <div>✅ يتم تأكيد التفاصيل قبل أي خطوة</div>
        </div>
      </div>

      <form class="formCard" (ngSubmit)="submitForm()">
        <div class="formGrid">
          <label>
            الاسم الكامل
            <input
              type="text"
              name="name"
              [(ngModel)]="form.name"
              placeholder="مثال: Ahmed Ben Ali"
              required>
          </label>

          <label>
            رقم التواصل
            <input
              type="tel"
              name="phone"
              [(ngModel)]="form.phone"
              placeholder="+216 ..."
              required>
          </label>
        </div>

        <div class="formGrid">
          <label>
            نوع الطلب
            <select name="type" [(ngModel)]="form.type" required>
              <option value="">اختار نوع الطلب</option>
              <option value="unit">شراء بالكعبة</option>
              <option value="bulk">شراء بالجملة</option>
              <option value="visit">طلب زيارة قبل الشراء</option>
              <option value="partnership">شراكة / مزوّد</option>
            </select>
          </label>

          <label>
            الولاية / المنطقة
            <input
              type="text"
              name="region"
              [(ngModel)]="form.region"
              placeholder="مثال: تونس، سوسة، القيروان">
          </label>
        </div>

        <div class="formGrid">
          <label>
            النوع المطلوب
            <input
              type="text"
              name="animalType"
              [(ngModel)]="form.animalType"
              placeholder="علوش، نعجة، ماعز، بقر...">
          </label>

          <label>
            الكمية التقريبية
            <input
              type="text"
              name="quantity"
              [(ngModel)]="form.quantity"
              placeholder="مثال: 1 / 5 / 20">
          </label>
        </div>

        <label>
          تفاصيل إضافية
          <textarea
            name="message"
            [(ngModel)]="form.message"
            rows="5"
            placeholder="مثال: نحب علوش بين 40 و 50 كغ، والميزانية تقريبًا ..."></textarea>
        </label>

        <button class="submitBtn" type="submit">
          إرسال الطلب للمراجعة
        </button>

        <p class="formNote">
          بعد إرسال الطلب، يتم حفظ المعلومات ومراجعتها من طرف فريق Amana.
        </p>
      </form>
    </section>

    <section class="section companySection">
      <div class="companyCard">
        <small>معلومات الشركة</small>
        <h2>Amana تهدف لتنظيم شراء المواشي بطريقة أوضح.</h2>
        <p>
          نركز على وضوح العروض، المعلومات الأساسية، اختيار الحيوانات،
          وتسهيل التواصل بين الحريف والعروض المناسبة.
        </p>

        <div class="companyStats">
          <div><b>01</b><span>طلبات منظمة</span></div>
          <div><b>02</b><span>عروض واضحة</span></div>
          <div><b>03</b><span>متابعة قبل القرار</span></div>
        </div>
      </div>

      <div class="qualityCard">
        <h3>شنوّة يهمنا في كل طلب؟</h3>

        <div class="qualityItem">
          <span>⚖️</span>
          <div>
            <b>وضوح المواصفات</b>
            <p>النوع، الوزن، العمر، والمنطقة.</p>
          </div>
        </div>

        <div class="qualityItem">
          <span>💰</span>
          <div>
            <b>وضوح السعر</b>
            <p>سعر مفهوم للكعبة أو سعر جملة حسب الكمية.</p>
          </div>
        </div>

        <div class="qualityItem">
          <span>👀</span>
          <div>
            <b>الثقة قبل الشراء</b>
            <p>إمكانية تنسيق زيارة أو تأكيد التفاصيل قبل القرار.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <h2>جاهز تبدأ؟</h2>
      <p>
        قدّم طلب رسمي، أو شوف العروض المتاحة في الكتالوج واختار المناسب ليك.
      </p>

      <div>
        <button (click)="scrollToForm()">تقديم طلب</button>
        <button class="contact" routerLink="/catalogue">شوف الحيوانات</button>
      </div>
    </section>

    <footer class="footer">
      <div>
        <img class="footerLogo" src="assets/a.png" alt="Amana logo">
        <p>
          Amana منصة تونسية لشراء المواشي بالكعبة ولا بالجملة،
          بعروض واضحة وتجربة منظمة للحريف.
        </p>
      </div>

      <div>
        <h4>روابط</h4>
        <a routerLink="/accueil">الرئيسية</a>
        <a routerLink="/catalogue">الحيوانات</a>
        <a (click)="scrollToForm()">طلب عرض سعر</a>
      </div>

      <div>
        <h4>الشركة</h4>
        <a>contact@amana.tn</a>
        <a>تونس</a>
        <a>© 2026 Amana</a>
      </div>
    </footer>

    <div class="toast" *ngIf="toast">{{ toast }}</div>
  </main>
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
      min-width: 210px;
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
      font-size: 14px;
      font-weight: 900;
      padding: 11px 14px;
      border-radius: 999px;
      border: none;
      cursor: pointer;
      font-family: inherit;
    }

    nav button:hover,
    nav button.active {
      background: white;
      box-shadow: 0 8px 20px rgba(20,55,35,.08);
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    button, a {
      font-family: inherit;
      transition: .22s ease;
      font-weight: 950;
    }

    button {
      border: none;
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: inherit;
      cursor: pointer;
    }

    button:hover,
    a:hover {
      transform: translateY(-2px);
    }

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
      padding: 18px 28px;
      font-size: 15px;
    }

    .contactHero {
      min-height: calc(100vh - 92px);
      padding: 58px 56px 70px;
      display: grid;
      grid-template-columns: 1fr .78fr;
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

    .heroText h1 {
      margin: 0;
      max-width: 790px;
      font-size: clamp(42px, 5.3vw, 70px);
      line-height: 1.04;
      letter-spacing: -2px;
      color: var(--dark);
      font-weight: 950;
    }

    .heroText h1 span {
      display: block;
      color: var(--green);
    }

    .heroText p {
      margin: 24px 0 30px;
      max-width: 690px;
      color: #2b4636;
      font-size: 19px;
      line-height: 1.85;
    }

    .heroActions,
    .proofLine {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    .proofLine {
      margin-top: 24px;
    }

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

    .officialCard {
      background: linear-gradient(180deg, #0c5030, #07351f);
      color: white;
      border-radius: 36px;
      padding: 34px;
      box-shadow: var(--shadow);
      direction: rtl;
      text-align: right;
      position: relative;
      overflow: hidden;
    }

    .officialCard::before {
      content: '';
      position: absolute;
      width: 260px;
      height: 260px;
      border-radius: 50%;
      background: rgba(255,255,255,.08);
      top: -80px;
      left: -80px;
    }

    .officialCard > * {
      position: relative;
      z-index: 1;
    }

    .cardBadge {
      display: inline-flex;
      padding: 9px 14px;
      border-radius: 999px;
      background: rgba(255,255,255,.13);
      border: 1px solid rgba(255,255,255,.18);
      color: rgba(255,255,255,.88);
      font-size: 12px;
      font-weight: 950;
      margin-bottom: 20px;
      letter-spacing: .7px;
    }

    .officialCard h2 {
      margin: 0 0 24px;
      font-size: 34px;
      line-height: 1.2;
    }

    .process {
      display: grid;
      gap: 14px;
    }

    .process div {
      display: flex;
      gap: 14px;
      align-items: center;
      padding: 17px;
      border-radius: 20px;
      background: rgba(255,255,255,.11);
      border: 1px solid rgba(255,255,255,.11);
    }

    .process b {
      width: 44px;
      height: 44px;
      display: grid;
      place-items: center;
      border-radius: 15px;
      background: white;
      color: var(--dark);
      flex-shrink: 0;
    }

    .process p {
      margin: 0;
      color: rgba(255,255,255,.78);
      line-height: 1.6;
    }

    .trustStrip {
      max-width: 1180px;
      margin: -32px auto 12px;
      padding: 0 18px;
      position: relative;
      z-index: 5;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      direction: rtl;
    }

    .trustStrip div {
      min-height: 118px;
      background: white;
      border: 1px solid #e5ece3;
      border-radius: 22px;
      padding: 17px;
      box-shadow: 0 14px 34px rgba(20,55,35,.09);
      text-align: right;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .trustStrip b {
      margin-bottom: 6px;
      color: var(--dark);
      font-size: 14px;
    }

    .trustStrip span {
      color: var(--muted);
      font-size: 12.5px;
      line-height: 1.55;
    }

    .section {
      max-width: 1320px;
      margin: 0 auto;
      padding: 72px 30px;
    }

    small {
      color: var(--green);
      font-size: 13px;
      font-weight: 950;
      text-transform: uppercase;
      letter-spacing: .7px;
    }

    .requestSection,
    .companySection {
      display: grid;
      grid-template-columns: .78fr 1.22fr;
      gap: 38px;
      direction: rtl;
      align-items: start;
    }

    .formIntro,
    .companyCard,
    .qualityCard,
    .formCard {
      background: white;
      border: 1px solid #edf1e9;
      border-radius: 30px;
      box-shadow: 0 14px 34px rgba(35,65,45,.08);
      text-align: right;
    }

    .formIntro,
    .companyCard,
    .qualityCard {
      padding: 30px;
    }

    .formIntro h2,
    .companyCard h2,
    .cta h2 {
      margin: 8px 0 14px;
      color: var(--dark);
      font-size: clamp(32px, 4vw, 46px);
      line-height: 1.13;
      letter-spacing: -1.5px;
    }

    .formIntro p,
    .companyCard p {
      margin: 0;
      color: var(--muted);
      font-size: 17px;
      line-height: 1.8;
    }

    .sideInfo {
      margin-top: 24px;
      display: grid;
      gap: 12px;
    }

    .sideInfo div {
      padding: 14px 16px;
      background: #f7fbf7;
      border: 1px solid #e8eee3;
      border-radius: 16px;
      color: #24422e;
      font-weight: 900;
      line-height: 1.5;
    }

    .formCard {
      padding: 28px;
    }

    .formGrid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    label {
      display: block;
      margin-bottom: 16px;
      color: #253f2e;
      font-size: 14px;
      font-weight: 950;
    }

    input,
    select,
    textarea {
      width: 100%;
      margin-top: 8px;
      padding: 15px 16px;
      border: 1px solid #dfe8dc;
      border-radius: 16px;
      background: #fffdf8;
      color: var(--dark);
      outline: none;
      font-size: 15px;
      font-family: inherit;
      transition: .2s ease;
    }

    input:focus,
    select:focus,
    textarea:focus {
      border-color: var(--green2);
      box-shadow: 0 0 0 4px rgba(24,160,88,.13);
      background: white;
    }

    textarea {
      resize: vertical;
      min-height: 130px;
    }

    .submitBtn {
      width: 100%;
      padding: 17px;
      border-radius: 17px;
      color: white;
      background: linear-gradient(135deg, #18a058, #0b6737);
      box-shadow: 0 16px 32px rgba(15,107,62,.25);
      font-size: 15px;
    }

    .formNote {
      margin: 14px 0 0;
      text-align: center;
      color: var(--muted);
      font-size: 13px;
      font-weight: 850;
      line-height: 1.6;
    }

    .companySection {
      grid-template-columns: 1fr .85fr;
      align-items: stretch;
    }

    .companyStats {
      margin-top: 26px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
    }

    .companyStats div {
      padding: 18px 12px;
      border-radius: 18px;
      background: #f7fbf7;
      border: 1px solid #e8eee3;
      text-align: center;
    }

    .companyStats b {
      display: block;
      color: var(--green);
      font-size: 25px;
    }

    .companyStats span {
      color: var(--muted);
      font-size: 12px;
      font-weight: 900;
    }

    .qualityCard h3 {
      margin: 0 0 22px;
      font-size: 29px;
      color: var(--dark);
    }

    .qualityItem {
      display: flex;
      gap: 14px;
      padding: 17px;
      border-radius: 20px;
      background: #f7fbf7;
      border: 1px solid #e8eee3;
      margin-bottom: 14px;
    }

    .qualityItem span {
      width: 48px;
      height: 48px;
      display: grid;
      place-items: center;
      border-radius: 16px;
      background: #eaf8ef;
      flex-shrink: 0;
      font-size: 22px;
    }

    .qualityItem b,
    .qualityItem p {
      margin: 0;
    }

    .qualityItem b {
      color: var(--dark);
      font-size: 16px;
    }

    .qualityItem p {
      margin-top: 5px;
      color: var(--muted);
      font-size: 13px;
      line-height: 1.6;
    }

    .cta {
      max-width: 1180px;
      margin: 45px auto 80px;
      padding: 64px 30px;
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
      max-width: 700px;
      color: rgba(255,255,255,.86);
      font-size: 18px;
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
      padding: 58px 56px 34px;
      background:
        radial-gradient(circle at 15% 10%, rgba(21,164,90,.22), transparent 28%),
        linear-gradient(180deg, #083923, #03180f);
      color: white;
      direction: rtl;
      display: grid;
      grid-template-columns: 1.5fr .7fr .7fr;
      gap: 44px;
    }

    .footerLogo {
      width: 210px;
      height: 82px;
      object-fit: contain;
      display: block;
    }

    .footer p {
      max-width: 500px;
      line-height: 1.8;
      color: rgba(255,255,255,.68);
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

      .contactHero,
      .requestSection,
      .companySection {
        grid-template-columns: 1fr;
      }

      .heroText {
        text-align: center;
      }

      .heroText p,
      .heroText h1 {
        margin-left: auto;
        margin-right: auto;
      }

      .heroActions,
      .proofLine {
        justify-content: center;
      }

      .trustStrip {
        grid-template-columns: repeat(2, 1fr);
      }

      .footer {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 720px) {
      .navbar {
        height: auto;
        padding: 14px 18px;
      }

      .actions {
        display: none;
      }

      .brand {
        min-width: 150px;
      }

      .brandLogo {
        width: 155px;
        height: 58px;
        transform: scale(1.08);
      }

      .contactHero {
        padding: 34px 18px 60px;
        min-height: auto;
      }

      .heroText h1 {
        font-size: 37px;
        letter-spacing: -1px;
      }

      .heroText p {
        font-size: 16px;
      }

      .heroActions {
        flex-direction: column;
      }

      .heroActions button {
        width: 100%;
      }

      .proofLine div {
        width: 100%;
        text-align: center;
      }

      .officialCard {
        padding: 24px;
        border-radius: 26px;
      }

      .trustStrip,
      .formGrid,
      .companyStats {
        grid-template-columns: 1fr;
      }

      .trustStrip {
        margin-top: 24px;
      }

      .section {
        padding: 58px 18px;
      }

      .formCard,
      .formIntro,
      .companyCard,
      .qualityCard {
        padding: 22px;
        border-radius: 24px;
      }

      .cta {
        margin: 35px 18px 60px;
        padding: 44px 20px;
      }

      .cta button {
        width: 100%;
        margin: 6px 0;
      }

      .footer {
        padding: 44px 20px 28px;
      }
    }
  `]
})
export class ContactComponent {
  toast = '';

  form: {
    name: string;
    phone: string;
    type: RequestType;
    region: string;
    animalType: string;
    quantity: string;
    message: string;
  } = {
    name: '',
    phone: '',
    type: '',
    region: '',
    animalType: '',
    quantity: '',
    message: ''
  };

  submitForm() {
    if (!this.form.name || !this.form.phone || !this.form.type) {
      this.showToast('عبي الاسم، رقم التواصل، ونوع الطلب');
      return;
    }

    console.log('Demande officielle Amana:', this.form);

    this.showToast('تم إرسال الطلب للمراجعة ✅');

    this.form = {
      name: '',
      phone: '',
      type: '',
      region: '',
      animalType: '',
      quantity: '',
      message: ''
    };
  }

  scrollToForm() {
    document.getElementById('requestForm')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  showToast(message: string) {
    this.toast = message;
    setTimeout(() => this.toast = '', 2400);
  }
}