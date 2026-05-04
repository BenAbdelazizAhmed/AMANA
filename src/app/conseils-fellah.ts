import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type AnimalFilter = 'all' | 'mouton' | 'brebis' | 'vache' | 'chevre';
type TopicFilter = 'all' | 'maladie' | 'nutrition' | 'hygiene' | 'urgence' | 'prevention';

@Component({
  selector: 'app-acceuil',
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
        <button routerLink="/catalogue">العروض</button>
        <button class="active">نصائح للفلاح</button>
        <button routerLink="/contact">إسألنا</button>
      </nav>

      <button class="navCta" routerLink="/contact">طلب مساعدة</button>
    </header>

    <section class="hero">
      <div class="heroText">
        <div class="badge">
          <span></span>
          دليل الفلاح — معلومات عملية للمواشي
        </div>

        <h1>
          تعرف على صحة القطيع
          <b>قبل ما تخسر الوقت والفلوس.</b>
        </h1>

        <p>
          صفحة تعليمية للفلاح: أمراض شائعة، علامات الخطر، شنوّة تعمل أولًا،
          شنوّة ما تعملش، تغذية، نظافة، تلقيح، وعناية يومية بالعلوش، النعجة، البقرة والماعز.
        </p>

        <div class="heroActions">
          <button class="primary" (click)="scrollTo('diseases')">شوف الأمراض</button>
          <button class="secondary" (click)="scrollTo('daily')">برنامج يومي</button>
        </div>

        <div class="warningBox">
          ⚠️ المعلومات للتثقيف والمساعدة فقط. أي حيوان عندو حرارة قوية، نفوق مفاجئ،
          إسهال شديد، انتفاخ، صعوبة تنفّس، أو مرض ينتشر في القطيع: اتصل ببيطري فورًا.
        </div>
      </div>

      <div class="heroCard">
        <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=1200&q=80" alt="Livestock">
        <div class="heroOverlay">
          <h3>علامات الخطر السريعة</h3>
          <div>🌡️ حرارة أو خمول شديد</div>
          <div>🐑 الحيوان ما ياكلش</div>
          <div>💨 صعوبة في التنفس</div>
          <div>🦶 عرج أو جرح في الحافر</div>
          <div>⚠️ مرض ينتشر بين برشا حيوانات</div>
        </div>
      </div>
    </section>

    <section class="quickStats">
      <div>
        <b>01</b>
        <span>راقب الأكل والماء يوميًا</span>
      </div>
      <div>
        <b>02</b>
        <span>اعزل الحيوان المريض مباشرة</span>
      </div>
      <div>
        <b>03</b>
        <span>نظافة المكان تقلل الأمراض</span>
      </div>
      <div>
        <b>04</b>
        <span>التلقيح حسب نصيحة البيطري</span>
      </div>
    </section>

    <section class="section">
      <div class="sectionHead">
        <small>فلترة سريعة</small>
        <h2>اختار الحيوان والموضوع.</h2>
      </div>

      <div class="filters">
        <button *ngFor="let a of animalFilters"
          [class.selected]="selectedAnimal === a.key"
          (click)="selectedAnimal = a.key">
          {{ a.icon }} {{ a.label }}
        </button>
      </div>

      <div class="filters second">
        <button *ngFor="let t of topicFilters"
          [class.selected]="selectedTopic === t.key"
          (click)="selectedTopic = t.key">
          {{ t.icon }} {{ t.label }}
        </button>
      </div>
    </section>

    <section id="diseases" class="section diseaseSection">
      <div class="sectionHead">
        <small>أمراض وعلامات</small>
        <h2>أمراض شائعة يلزم الفلاح يعرفها.</h2>
        <p>شوف العلامات، الخطر، وشنوّة تعمل أولًا بطريقة آمنة.</p>
      </div>

      <div class="diseaseGrid">
        <article class="diseaseCard" *ngFor="let d of filteredDiseases">
          <div class="cardTop">
            <span>{{ d.icon }}</span>
            <div>
              <small>{{ d.animalLabel }} · {{ d.topicLabel }}</small>
              <h3>{{ d.name }}</h3>
            </div>
          </div>

          <p>{{ d.summary }}</p>

          <div class="infoBlock">
            <b>الأعراض:</b>
            <ul>
              <li *ngFor="let s of d.symptoms">{{ s }}</li>
            </ul>
          </div>

          <div class="infoBlock green">
            <b>شنوّة تعمل أولًا:</b>
            <ul>
              <li *ngFor="let f of d.firstAid">{{ f }}</li>
            </ul>
          </div>

          <div class="danger">
            <b>اتصل بالبيطري إذا:</b>
            <span>{{ d.callVet }}</span>
          </div>
        </article>
      </div>
    </section>

    <section id="daily" class="section dailySection">
      <div class="sectionHead center">
        <small>برنامج يومي</small>
        <h2>Routine بسيطة تنقص المشاكل.</h2>
      </div>

      <div class="routineGrid">
        <div *ngFor="let r of routine">
          <span>{{ r.icon }}</span>
          <h3>{{ r.title }}</h3>
          <p>{{ r.text }}</p>
        </div>
      </div>
    </section>

    <section class="section nutrition">
      <div class="nutritionText">
        <small>تغذية وماء</small>
        <h2>أكثر أخطاء تعمل أمراض.</h2>
        <p>
          التغيير المفاجئ في العلف، الماء الوسخ، الرطوبة، والاكتظاظ ينجموا يعملوا مشاكل هضم،
          نقص نمو، وانتشار أمراض. التغيير في الأكل لازم يكون تدريجي.
        </p>
      </div>

      <div class="tipsList">
        <div>✅ بدّل العلف تدريجيًا، موش مرة واحدة.</div>
        <div>✅ الماء لازم يكون نظيف ومتوفر.</div>
        <div>✅ أبعد العلف عن الرطوبة والعفن.</div>
        <div>✅ الحيوان الجديد يتحط في quarantaine قبل ما يدخل للقطيع.</div>
        <div>✅ ما تستعملش دواء عشوائي بلا بيطري.</div>
      </div>
    </section>

    <section class="section emergency">
      <div>
        <small>حالات استعجالية</small>
        <h2>وقتاش ما تستناش؟</h2>
        <p>
          الحالات هذي تنجم تتطور بسرعة وتضر القطيع كامل.
        </p>
      </div>

      <div class="emergencyGrid">
        <div>⚠️ نفوق مفاجئ أو أكثر من حيوان مريض</div>
        <div>⚠️ انتفاخ قوي في البطن</div>
        <div>⚠️ صعوبة تنفس أو سيلان شديد</div>
        <div>⚠️ إسهال دموي أو جفاف</div>
        <div>⚠️ عرج شديد مع تورم أو رائحة كريهة</div>
        <div>⚠️ تقرحات في الفم أو الأرجل وانتشار سريع</div>
      </div>
    </section>

    <section class="section faq">
      <div class="sectionHead center">
        <small>أسئلة الفلاح</small>
        <h2>إجابات مختصرة ومفيدة.</h2>
      </div>

      <div class="faqGrid">
        <div *ngFor="let q of faqs">
          <h3>{{ q.q }}</h3>
          <p>{{ q.a }}</p>
        </div>
      </div>
    </section>

    <section class="cta">
      <h2>تحب صفحة أقوى؟</h2>
      <p>
        نجموا نزيدو نظام بحث، fiches PDF، calendrier تلقيح، وformulaire يسأل الفلاح على الأعراض ويعطيه توجيه أولي.
      </p>

      <button routerLink="/contact">إسألنا على حالة</button>
    </section>

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
      --red: #b42318;
      --shadow: 0 24px 60px rgba(10,45,28,.14);
      color: var(--dark);
    }

    .page {
      min-height: 100vh;
      background:
        radial-gradient(circle at 10% 10%, rgba(24,160,88,.12), transparent 30%),
        linear-gradient(180deg, #fff8ec, #fff 42%, #f5fbf7);
      overflow-x: hidden;
    }

    .navbar {
      height: 92px;
      padding: 0 56px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: rgba(255,255,255,.93);
      backdrop-filter: blur(18px);
      border-bottom: 1px solid #e6eee3;
      position: sticky;
      top: 0;
      z-index: 50;
    }

    .brand img {
      width: 170px;
      height: 90px;
      object-fit: contain;
      cursor: pointer;
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
      font-size: 14px;
      font-weight: 900;
      padding: 11px 14px;
      border-radius: 999px;
      border: none;
      cursor: pointer;
    }

    nav button.active,
    nav button:hover {
      background: white;
      color: var(--green);
      box-shadow: 0 8px 20px rgba(20,55,35,.08);
    }

    button {
      font-family: inherit;
      border: none;
      cursor: pointer;
      transition: .22s ease;
      font-weight: 950;
    }

    button:hover { transform: translateY(-2px); }

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
      padding: 52px 56px;
      display: grid;
      grid-template-columns: 1.05fr .95fr;
      gap: 54px;
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
      font-size: 14px;
      font-weight: 950;
      margin-bottom: 22px;
    }

    .badge span {
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
      max-width: 790px;
      font-size: clamp(42px, 5.4vw, 72px);
      line-height: 1.04;
      letter-spacing: -2px;
      font-weight: 950;
    }

    .hero h1 b {
      display: block;
      color: var(--green);
    }

    .hero p {
      max-width: 660px;
      margin: 24px 0 30px;
      color: #2b4636;
      font-size: 18px;
      line-height: 1.85;
    }

    .heroActions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .warningBox {
      margin-top: 24px;
      max-width: 700px;
      background: #fff4e6;
      border: 1px solid #ffd9a8;
      color: #7a3d00;
      padding: 16px 18px;
      border-radius: 20px;
      line-height: 1.8;
      font-weight: 850;
    }

    .heroCard {
      position: relative;
      height: 560px;
      border-radius: 38px;
      overflow: hidden;
      box-shadow: var(--shadow);
      background: white;
    }

    .heroCard img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: .6s;
    }

    .heroCard:hover img {
      transform: scale(1.05);
    }

    .heroOverlay {
      position: absolute;
      left: 28px;
      right: 28px;
      bottom: 28px;
      padding: 24px;
      border-radius: 28px;
      background: rgba(255,255,255,.95);
      backdrop-filter: blur(14px);
      display: grid;
      gap: 10px;
      text-align: right;
    }

    .heroOverlay h3 {
      margin: 0 0 6px;
      font-size: 25px;
    }

    .heroOverlay div {
      padding: 10px 12px;
      border-radius: 14px;
      background: #f7fbf7;
      font-weight: 900;
      color: #244331;
    }

    .quickStats {
      max-width: 1180px;
      margin: -34px auto 20px;
      padding: 0 18px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 12px;
      position: relative;
      z-index: 3;
    }

    .quickStats div {
      background: white;
      border: 1px solid var(--line);
      border-radius: 24px;
      padding: 20px;
      box-shadow: 0 14px 34px rgba(20,55,35,.09);
      text-align: right;
    }

    .quickStats b {
      display: block;
      color: rgba(15,107,62,.22);
      font-size: 32px;
      line-height: 1;
      margin-bottom: 8px;
    }

    .quickStats span {
      color: var(--dark);
      font-weight: 950;
      line-height: 1.5;
    }

    .section {
      max-width: 1320px;
      margin: auto;
      padding: 70px 30px;
    }

    .sectionHead {
      text-align: right;
      margin-bottom: 28px;
    }

    .sectionHead.center {
      text-align: center;
    }

    small {
      color: var(--green);
      font-size: 13px;
      font-weight: 950;
      text-transform: uppercase;
      letter-spacing: .7px;
    }

    .sectionHead h2,
    .nutrition h2,
    .emergency h2,
    .cta h2 {
      margin: 8px 0;
      font-size: clamp(30px, 4vw, 46px);
      line-height: 1.13;
      letter-spacing: -1.2px;
      color: var(--dark);
    }

    .sectionHead p,
    .nutrition p,
    .emergency p {
      color: var(--muted);
      font-size: 16px;
      line-height: 1.8;
    }

    .filters {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 12px;
    }

    .filters.second {
      margin-bottom: 0;
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

    .diseaseSection {
      background: linear-gradient(180deg, #f5fbf7, #fffaf1);
      max-width: none;
      padding-left: max(30px, calc((100vw - 1320px) / 2 + 30px));
      padding-right: max(30px, calc((100vw - 1320px) / 2 + 30px));
    }

    .diseaseGrid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 22px;
    }

    .diseaseCard {
      background: white;
      border: 1px solid #edf1e9;
      border-radius: 28px;
      padding: 24px;
      box-shadow: 0 14px 32px rgba(35,65,45,.09);
      text-align: right;
      transition: .25s;
    }

    .diseaseCard:hover {
      transform: translateY(-7px);
      box-shadow: 0 26px 54px rgba(35,65,45,.15);
    }

    .cardTop {
      display: flex;
      gap: 14px;
      align-items: center;
      margin-bottom: 14px;
    }

    .cardTop > span {
      width: 58px;
      height: 58px;
      display: grid;
      place-items: center;
      border-radius: 20px;
      background: var(--cream);
      font-size: 28px;
      flex-shrink: 0;
    }

    .cardTop h3 {
      margin: 4px 0 0;
      font-size: 23px;
      line-height: 1.25;
    }

    .diseaseCard > p {
      color: var(--muted);
      line-height: 1.75;
      margin-bottom: 18px;
    }

    .infoBlock {
      padding: 15px;
      border-radius: 18px;
      background: #fff7ed;
      border: 1px solid #ffdfb9;
      margin-bottom: 12px;
    }

    .infoBlock.green {
      background: #f1fbf4;
      border-color: #d8efdf;
    }

    .infoBlock b {
      display: block;
      margin-bottom: 8px;
      color: var(--dark);
    }

    ul {
      margin: 0;
      padding-right: 20px;
      color: #34483c;
      line-height: 1.8;
    }

    .danger {
      padding: 15px;
      border-radius: 18px;
      background: #fff1f0;
      border: 1px solid #ffd0cc;
      color: var(--red);
      display: grid;
      gap: 6px;
      line-height: 1.6;
    }

    .dailySection {
      background: white;
    }

    .routineGrid,
    .faqGrid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
    }

    .routineGrid div,
    .faqGrid div {
      background: white;
      border: 1px solid var(--line);
      border-radius: 26px;
      padding: 24px;
      box-shadow: 0 14px 34px rgba(35,65,45,.08);
      text-align: right;
    }

    .routineGrid span {
      width: 58px;
      height: 58px;
      display: grid;
      place-items: center;
      border-radius: 20px;
      background: #eaf8ef;
      font-size: 28px;
      margin-bottom: 14px;
    }

    .routineGrid h3,
    .faqGrid h3 {
      margin: 0 0 10px;
      font-size: 22px;
    }

    .routineGrid p,
    .faqGrid p {
      margin: 0;
      color: var(--muted);
      line-height: 1.75;
    }

    .nutrition {
      display: grid;
      grid-template-columns: .9fr 1.1fr;
      gap: 36px;
      align-items: center;
      text-align: right;
    }

    .tipsList {
      display: grid;
      gap: 12px;
    }

    .tipsList div {
      background: white;
      border: 1px solid var(--line);
      border-radius: 18px;
      padding: 16px 18px;
      box-shadow: 0 10px 24px rgba(35,65,45,.07);
      font-weight: 900;
      line-height: 1.6;
    }

    .emergency {
      background: linear-gradient(135deg, #0c5030, #07351f);
      color: white;
      border-radius: 38px;
      margin-top: 30px;
      margin-bottom: 30px;
      display: grid;
      grid-template-columns: .8fr 1.2fr;
      gap: 30px;
      align-items: center;
      box-shadow: var(--shadow);
    }

    .emergency small,
    .emergency h2 {
      color: white;
    }

    .emergency p {
      color: rgba(255,255,255,.78);
    }

    .emergencyGrid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .emergencyGrid div {
      background: rgba(255,255,255,.12);
      border: 1px solid rgba(255,255,255,.18);
      color: white;
      padding: 16px;
      border-radius: 18px;
      font-weight: 900;
      line-height: 1.5;
    }

    .faq {
      background: #fffaf1;
      max-width: none;
      padding-left: max(30px, calc((100vw - 1320px) / 2 + 30px));
      padding-right: max(30px, calc((100vw - 1320px) / 2 + 30px));
    }

    .faqGrid {
      grid-template-columns: repeat(3, 1fr);
    }

    .cta {
      max-width: 1180px;
      margin: 50px auto 80px;
      padding: 60px 30px;
      border-radius: 38px;
      text-align: center;
      color: white;
      background:
        linear-gradient(135deg, rgba(5,50,31,.96), rgba(14,120,66,.84)),
        url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=80');
      background-size: cover;
      background-position: center;
      box-shadow: var(--shadow);
    }

    .cta h2 {
      color: white;
      max-width: 800px;
      margin: auto;
    }

    .cta p {
      max-width: 760px;
      margin: 18px auto 28px;
      color: rgba(255,255,255,.82);
      line-height: 1.8;
      font-size: 17px;
    }

    .cta button {
      padding: 18px 30px;
      border-radius: 18px;
      background: var(--orange);
      color: white;
      font-size: 16px;
    }

    @media (max-width: 1100px) {
      nav { display: none; }

      .hero,
      .nutrition,
      .emergency {
        grid-template-columns: 1fr;
      }

      .quickStats,
      .diseaseGrid,
      .routineGrid,
      .faqGrid {
        grid-template-columns: repeat(2, 1fr);
      }

      .heroText,
      .sectionHead {
        text-align: center;
      }

      .heroActions,
      .filters {
        justify-content: center;
      }

      .hero p {
        margin-left: auto;
        margin-right: auto;
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

      .navCta { display: none; }

      .hero {
        padding: 36px 18px 58px;
      }

      .hero h1 {
        font-size: 38px;
        letter-spacing: -1px;
      }

      .heroActions {
        flex-direction: column;
      }

      .heroActions button,
      .filters button {
        width: 100%;
      }

      .heroCard {
        height: 470px;
      }

      .quickStats,
      .diseaseGrid,
      .routineGrid,
      .faqGrid,
      .emergencyGrid {
        grid-template-columns: 1fr;
      }

      .section,
      .diseaseSection,
      .faq {
        padding: 54px 18px;
      }

      .emergency,
      .cta {
        margin-left: 18px;
        margin-right: 18px;
        padding: 38px 22px;
      }
    }
  `]
})
export class ConseilsFellahComponent {
  selectedAnimal: AnimalFilter = 'all';
  selectedTopic: TopicFilter = 'all';

  animalFilters = [
    { key: 'all' as AnimalFilter, label: 'الكل', icon: '⭐' },
    { key: 'mouton' as AnimalFilter, label: 'علوش', icon: '🐑' },
    { key: 'brebis' as AnimalFilter, label: 'نعجة', icon: '🐏' },
    { key: 'vache' as AnimalFilter, label: 'بقرة', icon: '🐄' },
    { key: 'chevre' as AnimalFilter, label: 'ماعز', icon: '🐐' }
  ];

  topicFilters = [
    { key: 'all' as TopicFilter, label: 'كل المواضيع', icon: '📚' },
    { key: 'maladie' as TopicFilter, label: 'أمراض', icon: '🦠' },
    { key: 'nutrition' as TopicFilter, label: 'تغذية', icon: '🌾' },
    { key: 'hygiene' as TopicFilter, label: 'نظافة', icon: '🧼' },
    { key: 'urgence' as TopicFilter, label: 'استعجالي', icon: '🚨' },
    { key: 'prevention' as TopicFilter, label: 'وقاية', icon: '🛡️' }
  ];

  diseases = [
    {
      animal: 'mouton',
      animalLabel: 'علوش / نعجة / ماعز',
      topic: 'maladie',
      topicLabel: 'مرض',
      icon: '🦶',
      name: 'تعفن الحافر / العرج',
      summary: 'مشكلة شائعة تزيد مع الرطوبة والوسخ. أول علامة غالبًا عرج وصعوبة في المشي.',
      symptoms: ['عرج أو الحيوان ما يحبش يوقف', 'رائحة كريهة في الحافر', 'تورم أو وسخ بين الظلفين', 'نقص في الأكل والحركة'],
      firstAid: ['اعزل الحيوان في مكان ناشف', 'نظف المكان وخلي الأرضية جافة', 'ما تقصّش الحافر بعنف', 'استدعي بيطري إذا الحالة قوية'],
      callVet: 'كان العرج شديد، فما تورم، رائحة قوية، قيح، أو أكثر من حيوان مرض.'
    },
    {
      animal: 'vache',
      animalLabel: 'بقرة',
      topic: 'maladie',
      topicLabel: 'ضرع وحليب',
      icon: '🥛',
      name: 'Mastite / التهاب الضرع',
      summary: 'تصير كي تدخل ميكروبات عبر قناة الحلمة. مهمة خاصة عند الأبقار الحلوب.',
      symptoms: ['الضرع سخون أو منتفخ', 'الحليب يتبدل: كتل، لون غريب، نقص كمية', 'ألم وقت الحلب', 'خمول أو حرارة'],
      firstAid: ['اعزل الحليب المصاب ولا تخلطوش', 'نظف اليدين والمعدات', 'حافظ على نظافة مكان الحلب', 'اتصل ببيطري لتحديد العلاج'],
      callVet: 'كان الحليب تبدل، الضرع منتفخ، الحيوان عندو حرارة، أو الحالة تتكرر.'
    },
    {
      animal: 'all',
      animalLabel: 'كل المجترات',
      topic: 'urgence',
      topicLabel: 'استعجالي',
      icon: '🎈',
      name: 'انتفاخ الكرش / Bloat',
      summary: 'حالة خطيرة تنجم تقتل بسرعة، خاصة بعد أكل كمية كبيرة أو تغيير مفاجئ في العلف.',
      symptoms: ['انتفاخ خاصة في الجهة اليسار', 'صعوبة تنفس', 'قلق وحركة غير طبيعية', 'الحيوان يطيح أو يضعف'],
      firstAid: ['امنع الأكل فورًا', 'خلي الحيوان واقف وهادئ', 'ما تعطيش خلطات عشوائية', 'اتصل ببيطري فورًا'],
      callVet: 'فورًا، خاصة كان الانتفاخ واضح أو الحيوان يتنفس بصعوبة.'
    },
    {
      animal: 'all',
      animalLabel: 'علوش / بقر / ماعز',
      topic: 'maladie',
      topicLabel: 'مرض معدي',
      icon: '🦠',
      name: 'الحمى القلاعية FMD',
      summary: 'مرض معدي جدًا يصيب الحيوانات ذات الظلف المشقوق. يلزم تبليغ/بيطري ومراقبة القطيع.',
      symptoms: ['تقرحات في الفم أو اللثة', 'سيلان لعاب', 'عرج وتقرحات في الأرجل', 'حرارة ونقص أكل'],
      firstAid: ['اعزل الحيوان', 'أوقف دخول وخروج الحيوانات', 'نظف وعقم المعدات', 'اتصل بالبيطري/السلطات البيطرية'],
      callVet: 'فورًا إذا ظهرت تقرحات فم/أرجل أو المرض ينتشر بين الحيوانات.'
    },
    {
      animal: 'mouton',
      animalLabel: 'علوش / ماعز',
      topic: 'maladie',
      topicLabel: 'تنفسي',
      icon: '🤧',
      name: 'PPR / طاعون المجترات الصغيرة',
      summary: 'مرض خطير يصيب خاصة الأغنام والماعز. الوقاية والتلقيح حسب البرنامج البيطري مهمين.',
      symptoms: ['حرارة وخمول', 'سيلان من العين والأنف', 'إسهال', 'تقرحات فم ونقص أكل'],
      firstAid: ['اعزل الحالات المشكوك فيها', 'نظف المكان والمعدات', 'ما تدخلش حيوانات جديدة للقطيع', 'اتصل ببيطري بسرعة'],
      callVet: 'فورًا، خاصة مع انتشار سريع أو نفوق.'
    },
    {
      animal: 'all',
      animalLabel: 'بقر / علوش / ماعز',
      topic: 'prevention',
      topicLabel: 'وقاية',
      icon: '🧪',
      name: 'Brucellose / الحمى المالطية',
      summary: 'مرض مهم لأنه ينجم ينتقل للإنسان. يلزم حذر مع الإجهاض، الولادة، الحليب النيء.',
      symptoms: ['إجهاض متكرر', 'ضعف خصوبة', 'مشاكل بعد الولادة', 'أحيانًا بدون أعراض واضحة'],
      firstAid: ['استعمل قفازات وقت الولادة أو الإجهاض', 'لا تشرب حليب نيء', 'اعزل الحيوان المشكوك فيه', 'اتصل ببيطري للفحص'],
      callVet: 'إذا صار إجهاض مفاجئ أو متكرر، أو شكيت في مرض ينتقل للإنسان.'
    },
    {
      animal: 'all',
      animalLabel: 'كل الحيوانات',
      topic: 'nutrition',
      topicLabel: 'تغذية',
      icon: '🌾',
      name: 'مشاكل الهضم من تغيير العلف',
      summary: 'تغيير العلف فجأة يسبب نفخة، إسهال، نقص شهية ومشاكل في الكرش.',
      symptoms: ['إسهال', 'نفخة', 'نقص أكل', 'خمول'],
      firstAid: ['رجّع النظام القديم تدريجيًا إذا أمكن', 'وفّر ماء نظيف', 'غيّر العلف على أيام وليس في نهار واحد', 'راقب القطيع'],
      callVet: 'إذا الإسهال شديد، فيه دم، الحيوان ضعيف، أو فما جفاف.'
    },
    {
      animal: 'all',
      animalLabel: 'كل الحيوانات',
      topic: 'hygiene',
      topicLabel: 'نظافة',
      icon: '🧼',
      name: 'الرطوبة والاكتظاظ',
      summary: 'الرطوبة والازدحام يرفعوا خطر أمراض الأرجل والتنفس والطفيليات.',
      symptoms: ['رائحة قوية في المكان', 'سعال أو سيلان', 'حوافر وسخة', 'انتشار مشاكل جلدية'],
      firstAid: ['نشف الأرضية', 'نقص الاكتظاظ', 'بدّل الفرشة بانتظام', 'هوّي المكان بدون تيارات برد قوية'],
      callVet: 'إذا المشاكل تنتشر أو تظهر حرارة/سعال قوي/نفوق.'
    }
  ];

  routine = [
    {
      icon: '👀',
      title: 'مراقبة صباحية',
      text: 'شوف شكون ما ياكلش، شكون منعزل، شكون يعرج، وشكون يتنفس بصعوبة.'
    },
    {
      icon: '💧',
      title: 'ماء نظيف',
      text: 'الماء الوسخ ينجم يعمل مشاكل هضم ونقص إنتاج. نظف المشارب بانتظام.'
    },
    {
      icon: '🌾',
      title: 'علف منظم',
      text: 'بدّل الأكل تدريجيًا، وخزّن العلف بعيد على الرطوبة والعفن.'
    },
    {
      icon: '🧼',
      title: 'نظافة وجفاف',
      text: 'الرطوبة عدوّ الحافر والتنفس. الأرضية الجافة تقلل المشاكل.'
    }
  ];

  faqs = [
    {
      q: 'نعطي دواء وحدي؟',
      a: 'لا، خاصة antibiotique أو حقن. الغلط في الدواء أو الجرعة ينجم يضر الحيوان ويخلي العلاج أصعب.'
    },
    {
      q: 'شنوّة نعمل كي نشري حيوان جديد؟',
      a: 'خليه في quarantaine مدة، راقب الأكل والتنفس والحركة، وما تخلطوش مباشرة مع القطيع.'
    },
    {
      q: 'الحيوان ما ياكلش، عادي؟',
      a: 'نقص الأكل علامة مهمة. إذا معاه حرارة، نفخة، إسهال، عرج أو خمول، اتصل ببيطري.'
    },
    {
      q: 'التلقيح وحدو يكفي؟',
      a: 'لا. التلقيح مهم، أما يلزمو نظافة، عزل الحالات، ماء نظيف، وبرنامج مع البيطري.'
    },
    {
      q: 'كيفاش نعرف المرض معدي؟',
      a: 'إذا أكثر من حيوان عندهم نفس الأعراض، أو المرض ينتشر بسرعة، اعتبره خطر واعزل واتصل ببيطري.'
    },
    {
      q: 'الحليب النيء آمن؟',
      a: 'الحليب النيء ينجم ينقل أمراض. الأفضل الغلي أو البسترة، خاصة مع الشك في brucellose أو mastite.'
    }
  ];

  get filteredDiseases() {
    return this.diseases.filter(d => {
      const animalOk =
        this.selectedAnimal === 'all' ||
        d.animal === this.selectedAnimal ||
        d.animal === 'all';

      const topicOk =
        this.selectedTopic === 'all' ||
        d.topic === this.selectedTopic;

      return animalOk && topicOk;
    });
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}