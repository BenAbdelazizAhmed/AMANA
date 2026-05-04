import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page">

      <header class="navbar">
        <div class="logo">
          <div class="logo-icon">🐑</div>
          <div>
            <h2>Mawachi</h2>
            <p>Confiez votre animal</p>
          </div>
        </div>

        <nav>
          <a>Accueil</a>
          <a>Investir</a>
          <a class="active">Confier mon animal</a>
          <a>Comment ça marche</a>
          <a>Contact</a>
        </nav>

        <button class="btn-primary">Se connecter</button>
      </header>

      <section class="hero">
        <div class="hero-text">
          <span class="badge">Service d’élevage sécurisé</span>
          <h1>Confiez-nous votre animal, nous le faisons grandir pour vous</h1>
          <p>
            Vous avez une brebis, un mouton ou une vache ? Confiez-la à notre réseau
            de fellahs vérifiés. Nous assurons l’élevage, le suivi, la santé, les photos
            et la revente si vous le souhaitez.
          </p>

          <div class="hero-actions">
            <button class="btn-primary">Envoyer une demande</button>
            <button class="btn-outline">Voir comment ça marche</button>
          </div>
        </div>

        <div class="hero-card">
          <h3>Ce que vous recevez</h3>
          <ul>
            <li>📸 Photos régulières</li>
            <li>⚖️ Suivi du poids</li>
            <li>🩺 Contrôle santé</li>
            <li>📄 Contrat clair</li>
            <li>💰 Option revente</li>
          </ul>
        </div>
      </section>

      <section class="steps">
        <div>
          <span>1</span>
          <h3>Vous envoyez la demande</h3>
          <p>Type animal, poids, âge, photos et objectif.</p>
        </div>

        <div>
          <span>2</span>
          <h3>Nous validons l’animal</h3>
          <p>Notre équipe vérifie l’état et propose un plan.</p>
        </div>

        <div>
          <span>3</span>
          <h3>Élevage & suivi</h3>
          <p>Photos, poids, santé et rapports dans votre dashboard.</p>
        </div>

        <div>
          <span>4</span>
          <h3>Livraison ou revente</h3>
          <p>Vous choisissez la meilleure option à la fin.</p>
        </div>
      </section>

      <section class="form-section">
        <div class="form-info">
          <span class="badge">Demande gratuite</span>
          <h2>Déposer une demande</h2>
          <p>
            Remplissez les informations de votre animal. Notre équipe vous contacte
            pour validation, prix d’élevage et contrat.
          </p>

          <div class="trust-box">
            <h3>Garanties Mawachi</h3>
            <p>✅ Fellahs vérifiés</p>
            <p>✅ Suivi transparent</p>
            <p>✅ Rapport santé</p>
            <p>✅ Contrat signé</p>
          </div>
        </div>

        <form class="animal-form">
          <div class="grid">
            <label>
              Type animal
              <select [(ngModel)]="form.type" name="type">
                <option value="">Choisir</option>
                <option>نعجة / Brebis</option>
                <option>علوش / Mouton</option>
                <option>بقرة / Vache</option>
                <option>عجل / Veau</option>
                <option>ماعز / Chèvre</option>
              </select>
            </label>

            <label>
              Poids actuel
              <input [(ngModel)]="form.weight" name="weight" placeholder="ex: 45 kg">
            </label>

            <label>
              Âge approximatif
              <input [(ngModel)]="form.age" name="age" placeholder="ex: 8 mois">
            </label>

            <label>
              Sexe
              <select [(ngModel)]="form.gender" name="gender">
                <option value="">Choisir</option>
                <option>Mâle</option>
                <option>Femelle</option>
              </select>
            </label>

            <label>
              Localisation
              <input [(ngModel)]="form.location" name="location" placeholder="ex: Sousse">
            </label>

            <label>
              Objectif
              <select [(ngModel)]="form.goal" name="goal">
                <option value="">Choisir</option>
                <option>Élevage simple</option>
                <option>Engraissement</option>
                <option>Revente</option>
                <option>Livraison finale</option>
              </select>
            </label>
          </div>

          <label>
            Description / remarque
            <textarea
              [(ngModel)]="form.note"
              name="note"
              placeholder="Décrivez l’état de l’animal, alimentation, santé, objectif..."
            ></textarea>
          </label>

          <div class="upload">
            <div>
              <h4>Ajouter des photos</h4>
              <p>Photo de face, côté, et photo générale de l’animal.</p>
            </div>
            <button type="button">Importer photos</button>
          </div>

          <div class="summary">
            <h3>Résumé</h3>
            <p><b>Type:</b> {{ form.type || 'Non choisi' }}</p>
            <p><b>Poids:</b> {{ form.weight || 'Non rempli' }}</p>
            <p><b>Objectif:</b> {{ form.goal || 'Non choisi' }}</p>
          </div>

          <button type="button" class="submit" (click)="sendRequest()">
            Envoyer ma demande
          </button>
        </form>
      </section>

      <section class="pricing">
        <h2>Comment nous gagnons ?</h2>

        <div class="price-cards">
          <div>
            <h3>Frais d’élevage</h3>
            <p>Vous payez un montant mensuel pour nourriture, suivi et gestion.</p>
          </div>

          <div>
            <h3>Commission revente</h3>
            <p>Si vous choisissez la revente, Mawachi prend une petite commission.</p>
          </div>

          <div>
            <h3>Livraison</h3>
            <p>Livraison optionnelle selon la région et le type d’animal.</p>
          </div>
        </div>
      </section>

      <footer>
        <h2>Mawachi</h2>
        <p>Investir ou confier un animal, avec confiance et transparence.</p>
      </footer>

    </div>
  `,
  styles: [`
    * {
      box-sizing: border-box;
    }

    :host {
      display: block;
      font-family: Inter, Arial, sans-serif;
      color: #10251a;
      --green: #0f6b3e;
      --dark: #062f1d;
      --light: #e9f6ee;
      --cream: #fff7e7;
      --orange: #f5841f;
      --muted: #667568;
      --shadow: 0 20px 45px rgba(20, 55, 35, .12);
    }

    .page {
      min-height: 100vh;
      background: linear-gradient(180deg, #fffaf2, #ffffff 45%, #f5fbf6);
    }

    .navbar {
      height: 86px;
      padding: 0 70px;
      background: rgba(255,255,255,.95);
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e6eee3;
      position: sticky;
      top: 0;
      z-index: 20;
      backdrop-filter: blur(14px);
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .logo-icon {
      width: 48px;
      height: 48px;
      border-radius: 16px;
      background: linear-gradient(135deg, #128749, #0c5635);
      display: grid;
      place-items: center;
      color: white;
      font-size: 24px;
      box-shadow: 0 10px 20px rgba(18,135,73,.22);
    }

    .logo h2 {
      margin: 0;
      color: var(--dark);
      font-size: 26px;
      font-weight: 900;
    }

    .logo p {
      margin: 2px 0 0;
      color: var(--muted);
      font-size: 12px;
    }

    nav {
      display: flex;
      gap: 28px;
      font-weight: 800;
      font-size: 14px;
    }

    nav a {
      cursor: pointer;
      color: #21382b;
    }

    nav .active {
      color: var(--green);
      border-bottom: 3px solid var(--green);
      padding-bottom: 9px;
    }

    button {
      border: none;
      cursor: pointer;
      font-weight: 850;
      transition: .2s;
    }

    button:hover {
      transform: translateY(-1px);
    }

    .btn-primary {
      background: linear-gradient(135deg, #118144, #0c6335);
      color: white;
      border-radius: 14px;
      padding: 14px 22px;
      box-shadow: 0 12px 24px rgba(12,99,53,.22);
    }

    .btn-outline {
      background: white;
      color: var(--dark);
      border-radius: 14px;
      padding: 14px 22px;
      box-shadow: inset 0 0 0 1px #cdddcf;
    }

    .hero {
      min-height: 650px;
      padding: 85px 70px;
      display: grid;
      grid-template-columns: 1.2fr .8fr;
      gap: 50px;
      align-items: center;
      background:
        linear-gradient(90deg, rgba(255,250,242,.96), rgba(255,250,242,.78), rgba(255,250,242,.25)),
        url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=85');
      background-size: cover;
      background-position: center;
    }

    .badge {
      display: inline-block;
      background: #fff2cf;
      color: var(--green);
      padding: 11px 18px;
      border-radius: 999px;
      font-weight: 900;
      margin-bottom: 24px;
    }

    .hero h1 {
      margin: 0;
      max-width: 760px;
      font-size: 68px;
      line-height: 1.05;
      letter-spacing: -2.5px;
      color: var(--dark);
      font-weight: 950;
    }

    .hero p {
      max-width: 640px;
      color: #294535;
      font-size: 18px;
      line-height: 1.8;
      margin: 26px 0 32px;
    }

    .hero-actions {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
    }

    .hero-card {
      background: rgba(255,255,255,.92);
      padding: 34px;
      border-radius: 28px;
      box-shadow: var(--shadow);
      backdrop-filter: blur(12px);
    }

    .hero-card h3 {
      margin: 0 0 18px;
      font-size: 28px;
      color: var(--dark);
    }

    .hero-card ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 16px;
    }

    .hero-card li {
      background: var(--light);
      padding: 15px;
      border-radius: 16px;
      font-weight: 800;
    }

    .steps {
      max-width: 1300px;
      margin: -45px auto 0;
      background: white;
      border-radius: 28px;
      box-shadow: var(--shadow);
      padding: 32px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 22px;
      position: relative;
      z-index: 5;
    }

    .steps div {
      padding: 24px;
      border-radius: 22px;
      background: #fbfdfb;
      border: 1px solid #e9f0e7;
    }

    .steps span {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: var(--green);
      color: white;
      font-weight: 900;
      margin-bottom: 18px;
    }

    .steps h3 {
      margin: 0 0 10px;
      color: var(--dark);
    }

    .steps p {
      margin: 0;
      color: var(--muted);
      line-height: 1.6;
    }

    .form-section {
      max-width: 1300px;
      margin: 0 auto;
      padding: 90px 30px;
      display: grid;
      grid-template-columns: .8fr 1.2fr;
      gap: 45px;
      align-items: start;
    }

    .form-info h2,
    .pricing h2 {
      margin: 0;
      color: var(--dark);
      font-size: 42px;
      letter-spacing: -1px;
    }

    .form-info > p {
      color: var(--muted);
      font-size: 17px;
      line-height: 1.8;
      margin: 22px 0;
    }

    .trust-box {
      background: var(--dark);
      color: white;
      border-radius: 24px;
      padding: 28px;
      margin-top: 25px;
    }

    .trust-box h3 {
      margin-top: 0;
    }

    .trust-box p {
      margin: 12px 0;
      opacity: .9;
    }

    .animal-form {
      background: white;
      border-radius: 28px;
      padding: 32px;
      box-shadow: var(--shadow);
      border: 1px solid #e8efe5;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 18px;
    }

    label {
      display: block;
      color: #264434;
      font-weight: 850;
      font-size: 14px;
    }

    input,
    select,
    textarea {
      width: 100%;
      margin-top: 9px;
      border: 1px solid #dce8dc;
      border-radius: 14px;
      min-height: 50px;
      padding: 0 15px;
      font: inherit;
      outline: none;
      background: #fbfdfb;
    }

    textarea {
      height: 130px;
      padding: 15px;
      resize: none;
      margin-top: 12px;
    }

    .animal-form > label {
      margin-top: 18px;
    }

    .upload {
      margin-top: 20px;
      border: 2px dashed #c8dacb;
      background: #f8fcf8;
      border-radius: 20px;
      padding: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 18px;
    }

    .upload h4,
    .upload p {
      margin: 0;
    }

    .upload p {
      color: var(--muted);
      margin-top: 6px;
    }

    .upload button {
      background: var(--green);
      color: white;
      border-radius: 13px;
      padding: 13px 18px;
    }

    .summary {
      margin-top: 22px;
      background: var(--cream);
      padding: 22px;
      border-radius: 20px;
    }

    .summary h3 {
      margin-top: 0;
      color: var(--dark);
    }

    .summary p {
      margin: 9px 0;
      color: #2a4332;
    }

    .submit {
      width: 100%;
      margin-top: 22px;
      background: var(--orange);
      color: white;
      border-radius: 16px;
      padding: 17px;
      font-size: 16px;
    }

    .pricing {
      max-width: 1300px;
      margin: 0 auto;
      padding: 20px 30px 90px;
      text-align: center;
    }

    .price-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      margin-top: 35px;
    }

    .price-cards div {
      background: white;
      border-radius: 24px;
      padding: 32px;
      box-shadow: 0 14px 32px rgba(35,65,45,.09);
      border: 1px solid #e8efe5;
    }

    .price-cards h3 {
      color: var(--dark);
      margin-top: 0;
    }

    .price-cards p {
      color: var(--muted);
      line-height: 1.7;
    }

    footer {
      background: linear-gradient(180deg, #062f1d, #041f14);
      color: white;
      text-align: center;
      padding: 45px 20px;
    }

    footer h2 {
      margin: 0;
      font-size: 32px;
    }

    footer p {
      color: rgba(255,255,255,.75);
    }

    @media (max-width: 1000px) {
      nav {
        display: none;
      }

      .hero,
      .form-section {
        grid-template-columns: 1fr;
      }

      .steps,
      .price-cards {
        grid-template-columns: repeat(2, 1fr);
      }

      .hero h1 {
        font-size: 48px;
      }
    }

    @media (max-width: 650px) {
      .navbar {
        padding: 15px;
      }

      .hero {
        padding: 50px 20px;
      }

      .hero h1 {
        font-size: 38px;
      }

      .steps,
      .grid,
      .price-cards {
        grid-template-columns: 1fr;
      }

      .form-section {
        padding: 60px 18px;
      }

      .upload {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  `]
})
export class App {
  form = {
    type: '',
    weight: '',
    age: '',
    gender: '',
    location: '',
    goal: '',
    note: ''
  };

  sendRequest() {
    alert('Demande envoyée avec succès ✅');
  }
}