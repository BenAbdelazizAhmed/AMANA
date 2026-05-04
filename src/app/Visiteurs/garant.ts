import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <div class="page">

    <header class="navbar">
      <div class="brand" routerLink="/accueil">
        <div class="logo">🐑</div>
        <div>
          <h1>Mawachi</h1>
          <p>Garanties & confiance</p>
        </div>
      </div>

      <nav>
        <a routerLink="/accueil">Accueil</a>
        <a routerLink="/catalogue">Catalogue</a>
        <a routerLink="/comment-ca-marche">Comment ça marche</a>
        <a class="active">Garanties</a>
      </nav>

      <button routerLink="/catalogue">Voir les animaux</button>
    </header>

    <section class="hero">
      <div class="heroText">
        <span class="badge">🛡️ Garanties Mawachi</span>
        <h1>Votre achat est protégé par Mawachi, pas par un vendeur inconnu.</h1>
        <p>
          Mawachi reste votre interlocuteur unique : nous sélectionnons l’animal,
          organisons le suivi, fournissons les preuves et encadrons la livraison
          ou la revente selon le contrat.
        </p>

        <div class="heroActions">
          <button routerLink="/catalogue" class="primary">Voir les animaux →</button>
          <button routerLink="/comment-ca-marche" class="secondary">Comprendre le concept</button>
        </div>
      </div>

      <div class="heroCard">
        <div class="shield">🛡️</div>
        <h3>Pack confiance inclus</h3>

        <div class="check">📄 Contrat clair</div>
        <div class="check">📸 Photos datées</div>
        <div class="check">🩺 Suivi santé</div>
        <div class="check">💬 Support Mawachi</div>
        <div class="check">🚚 Livraison / revente encadrée</div>
      </div>
    </section>

    <section class="section">
      <div class="sectionHead">
        <span>Nos garanties principales</span>
        <h2>Tout ce qui rassure le client avant de payer</h2>
      </div>

      <div class="grid">
        <div class="card" *ngFor="let g of guarantees">
          <i>{{ g.icon }}</i>
          <h3>{{ g.title }}</h3>
          <p>{{ g.text }}</p>
        </div>
      </div>
    </section>

    <section class="section relation">
      <div class="relationText">
        <span>Relation protégée</span>
        <h2>Le client traite avec Mawachi, pas directement avec le partenaire terrain.</h2>
        <p>
          Pour protéger le modèle business, Mawachi garde la relation client.
          Le client ne reçoit pas les contacts directs des partenaires terrain.
          Toute demande, livraison, revente ou réclamation passe par Mawachi.
        </p>
      </div>

      <div class="relationFlow">
        <div>👤 Client</div>
        <b>→</b>
        <div class="main">🏢 Mawachi</div>
        <b>→</b>
        <div>🌿 Gestion terrain</div>
      </div>
    </section>

    <section class="section problem">
      <div class="sectionHead light">
        <span>En cas de problème</span>
        <h2>Une solution claire selon le contrat</h2>
        <p>
          Maladie, retard de croissance, problème de livraison ou changement de décision :
          Mawachi informe, vérifie et propose une solution.
        </p>
      </div>

      <div class="problemGrid">
        <div>
          <strong>01</strong>
          <h3>Notification immédiate</h3>
          <p>Le client est informé avec une explication claire.</p>
        </div>

        <div>
          <strong>02</strong>
          <h3>Vérification Mawachi</h3>
          <p>Notre équipe vérifie l’état réel de l’animal.</p>
        </div>

        <div>
          <strong>03</strong>
          <h3>Solution proposée</h3>
          <p>Remplacement, prolongation, compensation ou autre solution prévue.</p>
        </div>
      </div>
    </section>

    <section class="section delivery">
      <div>
        <span>Livraison</span>
        <h2>Livraison flexible selon la quantité</h2>
        <p>
          Pour encourager les achats groupés, la livraison peut devenir gratuite
          à partir d’un certain nombre d’animaux.
        </p>
      </div>

      <div class="deliveryRules">
        <div>
          <b>1 animal</b>
          <small>Frais selon région</small>
        </div>
        <div>
          <b>2 à 4 animaux</b>
          <small>Tarif réduit possible</small>
        </div>
        <div>
          <b>5+ animaux</b>
          <small>Livraison gratuite</small>
        </div>
      </div>
    </section>

    <section class="section faqSection">
      <div class="sectionHead">
        <span>FAQ garanties</span>
        <h2>Questions fréquentes</h2>
      </div>

      <div class="faq">
        <div class="faqItem" *ngFor="let f of faqs; let i = index">
          <button (click)="toggleFaq(i)">
            <span>{{ f.q }}</span>
            <b>{{ activeFaq === i ? '−' : '+' }}</b>
          </button>
          <p *ngIf="activeFaq === i">{{ f.a }}</p>
        </div>
      </div>
    </section>

    <section class="cta">
      <div>
        <span>🐑 Achat sécurisé</span>
        <h2>Choisissez un animal vérifié par Mawachi</h2>
        <p>Contrat, suivi, preuve de vie, support et sortie finale encadrée.</p>
      </div>

      <button routerLink="/catalogue">Voir les animaux disponibles →</button>
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
      --dark: #052d1c;
      --green: #0f6b3e;
      --green2: #13a458;
      --orange: #f5841f;
      --muted: #667568;
      --line: #e5ece3;
      --soft: #f7faf7;
      --cream: #fff6e8;
      --shadow: 0 22px 60px rgba(20,55,35,.12);
      color: var(--dark);
    }

    .page {
      min-height: 100vh;
      background:
        radial-gradient(circle at top left, rgba(15,107,62,.14), transparent 32%),
        linear-gradient(180deg, #fff8ec, #fff 40%, #f7fbf7);
    }

    .navbar {
      height: 82px;
      padding: 0 36px;
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
      gap: 12px;
      align-items: center;
      cursor: pointer;
    }

    .logo {
      width: 46px;
      height: 46px;
      border-radius: 16px;
      background: linear-gradient(135deg, var(--green2), var(--green));
      color: white;
      display: grid;
      place-items: center;
      font-size: 24px;
    }

    .brand h1 {
      font-size: 24px;
      line-height: 1;
    }

    .brand p {
      margin-top: 5px;
      color: var(--muted);
      font-size: 12px;
      font-weight: 800;
    }

    nav {
      display: flex;
      gap: 24px;
    }

    nav a {
      text-decoration: none;
      color: #395143;
      font-weight: 900;
      font-size: 14px;
      cursor: pointer;
    }

    nav .active {
      color: var(--green);
    }

    button {
      border: none;
      font-family: inherit;
      cursor: pointer;
      font-weight: 950;
      transition: .2s;
    }

    button:hover {
      transform: translateY(-2px);
    }

    .navbar button,
    .primary {
      background: linear-gradient(135deg, var(--green2), var(--green));
      color: white;
      height: 44px;
      padding: 0 18px;
      border-radius: 14px;
      box-shadow: 0 14px 28px rgba(15,107,62,.2);
    }

    .hero {
      max-width: 1380px;
      margin: auto;
      padding: 70px 18px 40px;
      display: grid;
      grid-template-columns: 1.1fr 430px;
      gap: 28px;
      align-items: center;
    }

    .heroText {
      background: white;
      border: 1px solid var(--line);
      border-radius: 34px;
      padding: 46px;
      box-shadow: var(--shadow);
    }

    .badge,
    .sectionHead span,
    .relationText span,
    .delivery span,
    .cta span {
      display: inline-block;
      background: #eaf7ef;
      color: var(--green);
      padding: 8px 13px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 950;
      margin-bottom: 14px;
    }

    .hero h1 {
      font-size: clamp(38px, 5vw, 64px);
      line-height: 1.05;
      letter-spacing: -2px;
      color: var(--dark);
    }

    .hero p {
      margin-top: 20px;
      color: var(--muted);
      font-size: 18px;
      line-height: 1.8;
      max-width: 760px;
    }

    .heroActions {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 28px;
    }

    .heroActions button {
      height: 52px;
      padding: 0 22px;
      border-radius: 16px;
    }

    .secondary {
      background: white;
      color: var(--dark);
      border: 1px solid var(--line);
    }

    .heroCard {
      min-height: 520px;
      border-radius: 34px;
      padding: 32px;
      color: white;
      background:
        linear-gradient(135deg, rgba(5,45,28,.96), rgba(13,106,61,.84)),
        url('https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=85');
      background-size: cover;
      background-position: center;
      box-shadow: var(--shadow);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }

    .shield {
      width: 70px;
      height: 70px;
      border-radius: 24px;
      display: grid;
      place-items: center;
      background: rgba(255,255,255,.16);
      font-size: 34px;
      margin-bottom: 22px;
    }

    .heroCard h3 {
      font-size: 31px;
      margin-bottom: 18px;
    }

    .check {
      background: rgba(255,255,255,.13);
      border: 1px solid rgba(255,255,255,.16);
      padding: 14px;
      border-radius: 16px;
      margin-top: 10px;
      font-weight: 900;
    }

    .section {
      max-width: 1380px;
      margin: 0 auto;
      padding: 70px 18px;
    }

    .sectionHead {
      text-align: center;
      max-width: 820px;
      margin: 0 auto 34px;
    }

    .sectionHead h2,
    .relationText h2,
    .delivery h2,
    .cta h2 {
      font-size: clamp(32px, 4vw, 48px);
      line-height: 1.15;
      letter-spacing: -1.4px;
      color: var(--dark);
    }

    .sectionHead p,
    .relationText p,
    .delivery p,
    .cta p {
      margin-top: 12px;
      color: var(--muted);
      line-height: 1.8;
      font-size: 17px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }

    .card {
      background: white;
      border: 1px solid var(--line);
      border-radius: 26px;
      padding: 24px;
      box-shadow: 0 14px 35px rgba(20,55,35,.08);
    }

    .card i {
      width: 54px;
      height: 54px;
      border-radius: 18px;
      background: var(--cream);
      display: grid;
      place-items: center;
      font-size: 26px;
      font-style: normal;
      margin-bottom: 16px;
    }

    .card h3 {
      margin-bottom: 10px;
      font-size: 20px;
    }

    .card p {
      color: var(--muted);
      line-height: 1.65;
      font-size: 14px;
    }

    .relation {
      display: grid;
      grid-template-columns: .9fr 1.1fr;
      gap: 28px;
      align-items: center;
      background: white;
      border: 1px solid var(--line);
      border-radius: 34px;
      box-shadow: var(--shadow);
      padding: 46px;
    }

    .relationFlow {
      display: grid;
      grid-template-columns: 1fr 40px 1fr 40px 1fr;
      gap: 10px;
      align-items: center;
    }

    .relationFlow div {
      min-height: 130px;
      background: var(--soft);
      border: 1px solid var(--line);
      border-radius: 24px;
      display: grid;
      place-items: center;
      text-align: center;
      padding: 18px;
      font-weight: 950;
      font-size: 20px;
    }

    .relationFlow .main {
      background: linear-gradient(135deg, var(--green2), var(--green));
      color: white;
    }

    .relationFlow b {
      color: var(--green);
      font-size: 32px;
      text-align: center;
    }

    .problem {
      max-width: none;
      background: var(--dark);
      color: white;
      margin-top: 40px;
    }

    .problem .sectionHead h2,
    .problem .sectionHead span {
      color: white;
    }

    .problem .sectionHead span {
      background: rgba(255,255,255,.14);
    }

    .problem .sectionHead p {
      color: rgba(255,255,255,.72);
    }

    .problemGrid {
      max-width: 1180px;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 18px;
    }

    .problemGrid div {
      background: rgba(255,255,255,.08);
      border: 1px solid rgba(255,255,255,.13);
      border-radius: 26px;
      padding: 28px;
    }

    .problemGrid strong {
      color: var(--orange);
      font-size: 42px;
    }

    .problemGrid h3 {
      margin: 16px 0 10px;
      font-size: 23px;
    }

    .problemGrid p {
      color: rgba(255,255,255,.72);
      line-height: 1.7;
    }

    .delivery {
      display: grid;
      grid-template-columns: .8fr 1.2fr;
      gap: 28px;
      align-items: center;
    }

    .deliveryRules {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 14px;
    }

    .deliveryRules div {
      background: white;
      border: 1px solid var(--line);
      border-radius: 24px;
      padding: 24px;
      box-shadow: 0 14px 35px rgba(20,55,35,.08);
    }

    .deliveryRules b {
      display: block;
      font-size: 22px;
      margin-bottom: 8px;
    }

    .deliveryRules small {
      color: var(--muted);
      font-weight: 800;
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
      box-shadow: 0 12px 28px rgba(20,55,35,.06);
    }

    .faqItem button {
      width: 100%;
      background: white;
      color: var(--dark);
      padding: 22px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      font-size: 17px;
    }

    .faqItem b {
      color: var(--green);
      font-size: 28px;
    }

    .faqItem p {
      padding: 0 22px 22px;
      color: var(--muted);
      line-height: 1.75;
    }

    .cta {
      max-width: 1180px;
      margin: 20px auto 70px;
      padding: 42px;
      border-radius: 34px;
      color: white;
      background:
        linear-gradient(135deg, rgba(5,45,28,.96), rgba(13,106,61,.84));
      display: grid;
      grid-template-columns: 1fr 280px;
      gap: 24px;
      align-items: center;
      box-shadow: var(--shadow);
    }

    .cta span {
      background: rgba(255,255,255,.14);
      color: white;
    }

    .cta h2 {
      color: white;
    }

    .cta p {
      color: rgba(255,255,255,.76);
    }

    .cta button {
      height: 56px;
      border-radius: 18px;
      background: var(--orange);
      color: white;
      font-size: 16px;
    }

    @media (max-width: 1100px) {
      nav {
        display: none;
      }

      .hero,
      .relation,
      .delivery,
      .cta {
        grid-template-columns: 1fr;
      }

      .grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .problemGrid,
      .deliveryRules {
        grid-template-columns: 1fr;
      }

      .relationFlow {
        grid-template-columns: 1fr;
      }

      .relationFlow b {
        transform: rotate(90deg);
      }
    }

    @media (max-width: 720px) {
      .navbar {
        height: auto;
        padding: 14px 16px;
      }

      .navbar button {
        display: none;
      }

      .hero {
        padding: 28px 10px;
      }

      .heroText,
      .relation,
      .cta {
        padding: 26px;
        border-radius: 24px;
      }

      .heroCard {
        min-height: 430px;
        border-radius: 24px;
      }

      .grid {
        grid-template-columns: 1fr;
      }

      .section {
        padding: 48px 10px;
      }

      .cta {
        margin-inline: 10px;
      }
    }
  `]
})
export class GarantiesMawachiComponent {
  activeFaq = 0;

  guarantees = [
    {
      icon: '📄',
      title: 'Contrat Mawachi',
      text: 'Le client signe avec Mawachi. Les conditions, prix, suivi et options finales sont clairs avant paiement.'
    },
    {
      icon: '📸',
      title: 'Preuves de vie',
      text: 'Photos datées, mises à jour de poids et suivi visible pour réduire la peur avant et après l’achat.'
    },
    {
      icon: '🩺',
      title: 'Santé contrôlée',
      text: 'Suivi sanitaire et certificat vétérinaire selon le dossier de l’animal.'
    },
    {
      icon: '🔒',
      title: 'Relation protégée',
      text: 'Mawachi reste l’interlocuteur unique pour éviter le contact direct client-partenaire.'
    },
    {
      icon: '💬',
      title: 'Support client',
      text: 'Le client peut demander des informations, suivre son dossier ou signaler un problème.'
    },
    {
      icon: '🚚',
      title: 'Livraison encadrée',
      text: 'Livraison selon région et quantité, avec possibilité de gratuité à partir de plusieurs animaux.'
    },
    {
      icon: '💰',
      title: 'Revente possible',
      text: 'Mawachi peut accompagner la revente avec commission de service.'
    },
    {
      icon: '🔄',
      title: 'Solution problème',
      text: 'En cas de maladie, retard ou anomalie, une solution est proposée selon le contrat.'
    }
  ];

  faqs = [
    {
      q: 'Pourquoi Mawachi ne montre pas le nom du partenaire terrain ?',
      a: 'Parce que la relation commerciale doit rester entre le client et Mawachi. Cela protège le service, la marge et la qualité du suivi.'
    },
    {
      q: 'Qu’est-ce que Mawachi garantit exactement ?',
      a: 'Mawachi garantit l’encadrement : contrat, suivi, preuves, support, gestion et sortie finale selon les conditions prévues.'
    },
    {
      q: 'Est-ce que la livraison est gratuite ?',
      a: 'Elle peut être gratuite à partir de 5 animaux. Pour une petite quantité, les frais dépendent de la région.'
    },
    {
      q: 'Si l’animal tombe malade, que se passe-t-il ?',
      a: 'Mawachi informe le client, vérifie la situation et applique la solution prévue dans le contrat.'
    },
    {
      q: 'Est-ce que je peux revendre mon animal ?',
      a: 'Oui. Mawachi peut accompagner la revente et prendre une commission de service.'
    }
  ];

  toggleFaq(index: number) {
    this.activeFaq = this.activeFaq === index ? -1 : index;
  }
}