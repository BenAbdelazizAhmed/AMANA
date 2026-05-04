import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-connexion-requise',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <div class="page">

    <header class="navbar">
      <div class="brand" routerLink="/accueil">
        <img class="brandLogo" src="/assets/logo-amana.png" alt="Amana logo">
        <div>
          <h1>Amana</h1>
          <p>أمانة في الشراء والتربية</p>
        </div>
      </div>

      <button class="backBtn" routerLink="/catalogue">
        الرجوع للكتالوج
      </button>
    </header>

    <main class="content">
      <section class="card">

        <div class="icon">🔐</div>

        <span class="badge">Connexion requise</span>

        <h2>
          لازم تدخل لحسابك قبل ما
          {{ mode === 'reserver' ? 'تحجز الحيوان' : 'تشري الحيوان' }}
        </h2>

        <p>
          باش نربطو الحيوان بحسابك، ونحطّولك العقد، الفاتورة، الصور والمتابعة
          في espace client متاعك.
        </p>

        <div class="why">
          <div>
            <b>🐑 الحيوان يتسجّل باسمك</b>
            <span>باش تلقاه في صفحة "حيواناتي".</span>
          </div>

          <div>
            <b>📄 الوثائق تتحفظ</b>
            <span>عقد، فاتورة، ووصل دفع.</span>
          </div>

          <div>
            <b>📸 المتابعة تبدأ</b>
            <span>صور، وزن، وحالة صحية.</span>
          </div>
        </div>

        <div class="actions">
          <button class="primary" (click)="goLogin()">
            عندي حساب · تسجيل الدخول
          </button>

          <button class="secondary" (click)="goRegister()">
            إنشاء حساب جديد
          </button>
        </div>

        <button class="linkBtn" routerLink="/animal/1">
          نرجع لتفاصيل الحيوان
        </button>

      </section>
    </main>

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
      --muted: #667568;
      --line: #e5ece3;
      --orange: #f5841f;
      --shadow: 0 24px 70px rgba(20,55,35,.14);
    }

    .page {
      min-height: 100vh;
      direction: rtl;
      color: var(--dark);
      background:
        radial-gradient(circle at 20% 0%, rgba(24,160,88,.16), transparent 32%),
        linear-gradient(180deg, #fff8ec, #ffffff 45%, #f6fbf7);
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
      margin-top: 5px;
      color: var(--muted);
      font-size: 12px;
      font-weight: 900;
    }

    button {
      border: none;
      cursor: pointer;
      font-family: inherit;
      font-weight: 950;
      transition: .2s;
    }

    button:hover {
      transform: translateY(-2px);
    }

    .backBtn {
      height: 44px;
      padding: 0 18px;
      border-radius: 14px;
      background: white;
      color: var(--dark);
      border: 1px solid var(--line);
    }

    .content {
      min-height: calc(100vh - 84px);
      display: grid;
      place-items: center;
      padding: 40px 18px;
    }

    .card {
      width: min(100%, 760px);
      background: white;
      border: 1px solid var(--line);
      border-radius: 34px;
      padding: 42px;
      text-align: center;
      box-shadow: var(--shadow);
    }

    .icon {
      width: 76px;
      height: 76px;
      border-radius: 26px;
      background: #fff6e8;
      display: grid;
      place-items: center;
      font-size: 36px;
      margin: 0 auto 18px;
    }

    .badge {
      display: inline-block;
      background: #eaf7ef;
      color: var(--green);
      padding: 8px 14px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 950;
      margin-bottom: 16px;
    }

    h2 {
      font-size: clamp(30px, 4vw, 46px);
      line-height: 1.15;
      letter-spacing: -1.2px;
      color: var(--dark);
    }

    p {
      margin: 16px auto 26px;
      max-width: 620px;
      color: var(--muted);
      font-size: 17px;
      line-height: 1.8;
    }

    .why {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin: 28px 0;
      text-align: right;
    }

    .why div {
      background: #f7faf7;
      border: 1px solid var(--line);
      border-radius: 20px;
      padding: 18px;
    }

    .why b {
      display: block;
      margin-bottom: 8px;
      color: var(--dark);
    }

    .why span {
      color: var(--muted);
      font-size: 13px;
      line-height: 1.5;
    }

    .actions {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 10px;
    }

    .primary,
    .secondary {
      height: 54px;
      border-radius: 17px;
      font-size: 15px;
    }

    .primary {
      background: linear-gradient(135deg, var(--green2), var(--green));
      color: white;
      box-shadow: 0 16px 30px rgba(15,107,62,.22);
    }

    .secondary {
      background: var(--orange);
      color: white;
      box-shadow: 0 16px 30px rgba(245,132,31,.18);
    }

    .linkBtn {
      margin-top: 18px;
      background: transparent;
      color: var(--green);
      font-size: 14px;
    }

    @media (max-width: 720px) {
      .navbar {
        height: auto;
        padding: 14px 18px;
      }

      .brandLogo {
        width: 50px;
        height: 50px;
      }

      .backBtn {
        display: none;
      }

      .card {
        padding: 28px 20px;
        border-radius: 26px;
      }

      .why,
      .actions {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ConnexionRequiseComponent {
  animalId = '1';
  mode: 'reserver' | 'acheter' = 'reserver';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.animalId = this.route.snapshot.queryParamMap.get('animal') || '1';
    this.mode = (this.route.snapshot.queryParamMap.get('mode') as any) || 'reserver';
  }

  goLogin() {
    this.router.navigate(['/login'], {
      queryParams: {
        redirect: this.mode === 'reserver'
          ? `/checkout/reserver/${this.animalId}`
          : `/checkout/acheter/${this.animalId}`
      }
    });
  }

  goRegister() {
    this.router.navigate(['/register'], {
      queryParams: {
        redirect: this.mode === 'reserver'
          ? `/checkout/reserver/${this.animalId}`
          : `/checkout/acheter/${this.animalId}`
      }
    });
  }
}