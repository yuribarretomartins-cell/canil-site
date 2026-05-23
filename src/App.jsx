import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  PawPrint,
  Heart,
  ShieldCheck,
  Truck,
  MessageCircle,
  MapPin,
  Sparkles,
  Star,
  Dog,
  Cat,
} from "lucide-react";
import historyGallery from "./historyGallery";

const breeds = [
  { name: "Shih-tzu", desc: "Companheiro, dócil e ideal para famílias.", tag: "Mais procurado", image: "/imagens/Shihtzu.jpg" },
  { name: "Lulu da Pomerânia", desc: "Pequeno, elegante e cheio de personalidade.", tag: "Premium", image: "/imagens/lulu.jpg" },
  { name: "Yorkshire Terrier", desc: "Carinhoso, ativo e excelente para ambientes internos.", tag: "Sofisticado", image: "/imagens/york.jpg" },
  { name: "Rottweiler", desc: "Forte, leal e indicado para tutores experientes.", tag: "Grande porte", image: "/imagens/rott.jpg" },
  { name: "Pug", desc: "Afetuoso, divertido e muito apegado à família.", tag: "Família", image: "/imagens/pug.jpg" },
  { name: "Pastor Alemão", desc: "Inteligente, protetor e de fácil treinamento.", tag: "Guarda" , image: "/imagens/pas.jpg" },
  { name: "Pinscher", desc: "Pequeno, alerta e muito ligado ao tutor.", tag: "Compacto", image: "/imagens/pinscher.jpg" },
  { name: "Spitz Alemão", desc: "Elegante, expressivo e com pelagem marcante.", tag: "Pelagem premium" , image: "/imagens/spitz.jpg" },
  { name: "Bulldog Francês", desc: "Calmo, sociável e excelente para apartamentos.", tag: "Apartamento" , image: "/imagens/bul.jpg" },
  { name: "Golden Retriever", desc: "Amável, inteligente e muito indicado para famílias.", tag: "Família" , image: "/imagens/gol.jpg" },
  { name: "Labrador Retriever", desc: "Brincalhão, leal e de ótima convivência com crianças.", tag: "Companheiro" , image: "/imagens/lab.jpg" },
  { name: "Poodle", desc: "Inteligente, versátil e disponível em diferentes portes.", tag: "Versátil" , image: "/imagens/poo.jpg" },
  { name: "Maltês", desc: "Delicado, carinhoso e ideal para companhia.", tag: "Pequeno porte" , image: "/imagens/mal.jpg" },
  { name: "Chihuahua", desc: "Pequeno no tamanho, grande na personalidade.", tag: "Mini" , image: "/imagens/chi.jpg" },
  { name: "Dachshund", desc: "Curioso, fiel e conhecido pelo corpo alongado.", tag: "Salsichinha" , image: "/imagens/sals.jpg" },
  { name: "Border Collie", desc: "Muito inteligente, ativo e indicado para tutores dinâmicos.", tag: "Alta energia" , image: "/imagens/bor.jpg" },
  { name: "Beagle", desc: "Alegre, sociável e cheio de energia.", tag: "Ativo" , image: "/imagens/beal.jpg" },
  { name: "Husky Siberiano", desc: "Imponente, resistente e de aparência marcante.", tag: "Exótico" , image: "/imagens/hus.jpg" },
  { name: "Chow Chow", desc: "Reservado, elegante e com pelagem volumosa.", tag: "Imponente" , image: "/imagens/cho.jpg" },
  { name: "Akita", desc: "Leal, protetor e de presença marcante.", tag: "Nobre" , image: "/imagens/aki.jpg" },
  { name: "Gato Persa", desc: "Tranquilo, elegante e de pelagem longa.", tag: "Felino premium" , image: "/imagens/per.jpg" },
  { name: "Maine Coon", desc: "Grande, dócil e conhecido como gigante gentil.", tag: "Felino grande" , image: "/imagens/mai.jpg" },
  { name: "Gato Angorá", desc: "Elegante, sociável e de pelagem delicada.", tag: "Felino elegante" , image: "/imagens/ang.jpg" },
];
const availableGallery = [
  {
    title: "Salsichinha Macho",
    desc: "Disponível para consulta",
    type: "video",
    src: "/galeria/disponiveis/salsicha.mp4",
  },
  {
    title: "Pinscher Zero Macho",
    desc: "Vídeo atualizado do filhote",
    type: "video",
    src: "/galeria/disponiveis/pinscher.mp4",
  },
  {
    title: "Golden Retriever Macho",
    desc: "Consulte disponibilidade pelo WhatsApp",
    type: "image",
    src: "/galeria/disponiveis/GOLDEN (1).jpg",  
  },
];

const whatsappNumber = "5599984319021"; 

function Button({ children, variant = "dark", href }) {
  const className =
    variant === "light"
      ? "btn btn-light"
      : variant === "outline"
      ? "btn btn-outline"
      : "btn btn-dark"; 

  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}
function GallerySection({ id, eyebrow, title, subtitle, items, dark = false }) {
  return (
    <section id={id} className={dark ? "section dark" : "section white"}>
      <div className="container">
        <div className="section-header">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="section-title">{title}</h2>
          </div>
          <p>{subtitle}</p>
        </div>

        <div className="gallery-grid">
          {items.map((item) => (
            <div className="gallery-card" key={item.src}>
              <div className="gallery-media">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img src={item.src} alt={item.title} />
                )}
              </div>

              <div className="gallery-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
function HistoryTeaser({ items }) {
  const previewItems = items.slice(0, 6);

  return (
    <section id="historico" className="section white">
      <div className="container">
        <div className="history-teaser">
          <div className="history-teaser-text">
            <p className="eyebrow">Nosso histórico</p>
            <h2 className="section-title">Mais de 700 registros de filhotes</h2>
            <p>
              Conheça parte da nossa trajetória com fotos e vídeos de filhotes
              que já passaram por aqui. A galeria completa reúne registros reais
              de atendimentos, entregas e filhotes já vendidos.
            </p>

            <a
              href="/#historico-completo"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark"
            >
              Ver galeria completa
            </a>
          </div>

          <div className="history-preview-grid">
            {previewItems.map((item) => (
              <div className="history-preview-card" key={item.src}>
                {item.type === "video" ? (
                  <video src={item.src} muted playsInline preload="metadata" />
                ) : (
                  <img src={item.src} alt="Registro do histórico do canil" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FullHistoryPage({ items }) {
  const [visibleCount, setVisibleCount] = useState(36);
  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  return (
    <div className="full-gallery-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Inter, Arial, Helvetica, sans-serif;
          background: #fbf7ef;
          color: #1c1917;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .btn {
          border: 0;
          cursor: pointer;
          min-height: 46px;
          padding: 0 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 15px;
          transition: 0.2s ease;
          white-space: nowrap;
        }

        .btn-dark {
          background: #1c1917;
          color: #fff;
          box-shadow: 0 10px 24px rgba(28, 25, 23, 0.16);
        }

        .btn-dark:hover {
          background: #292524;
          transform: translateY(-1px);
        }

        .btn-outline {
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.28);
        }

        .full-gallery-page {
          min-height: 100vh;
          background: #fbf7ef;
        }

        .full-gallery-header {
          background: #1c1917;
          color: #fff;
          padding: 58px 0;
        }

        .full-gallery-header-inner {
          display: flex;
          justify-content: space-between;
          gap: 28px;
          align-items: center;
        }

        .eyebrow {
          margin: 0 0 14px;
          color: #fcd34d;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.22em;
        }

        .full-gallery-header h1 {
          margin: 0;
          font-size: clamp(36px, 5vw, 62px);
          line-height: 1;
          letter-spacing: -0.06em;
        }

        .full-gallery-header p:not(.eyebrow) {
          max-width: 720px;
          color: #d6d3d1;
          line-height: 1.7;
          font-size: 17px;
        }

        .full-gallery-section {
          padding: 48px 0 70px;
        }

        .full-gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .full-gallery-card {
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: 24px;
          background: #e7e5e4;
          box-shadow: 0 10px 28px rgba(28, 25, 23, 0.08);
        }

        .full-gallery-card img,
        .full-gallery-card video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .load-more-wrap {
          display: flex;
          justify-content: center;
          margin-top: 36px;
        }

        @media (max-width: 980px) {
          .full-gallery-header-inner {
            align-items: flex-start;
            flex-direction: column;
          }

          .full-gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 640px) {
          .container {
            width: min(100% - 28px, 1180px);
          }

          .full-gallery-header {
            padding: 42px 0;
          }

          .full-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .full-gallery-card {
            border-radius: 16px;
          }
        }
      `}</style>

      <header className="full-gallery-header">
        <div className="container full-gallery-header-inner">
          <div>
            <p className="eyebrow">Galeria completa</p>
            <h1>Histórico do Canil Multi Raças</h1>
            <p>
              Fotos e vídeos de filhotes que já passaram por aqui. Os registros
              mostram nossa trajetória, cuidado e atendimento às famílias.
            </p>
          </div>

          <a href="/" className="btn btn-outline">
            Voltar ao site
          </a>
        </div>
      </header>

      <main className="full-gallery-section">
        <div className="container">
          <div className="full-gallery-grid">
            {visibleItems.map((item) => (
              <div className="full-gallery-card" key={item.src}>
                {item.type === "video" ? (
  <video
  src={item.src}
  controls
  muted
  playsInline
  preload="metadata"
/>
                ) : (
                  <img
                    src={item.src}
                    alt="Registro do histórico do canil"
                    loading="lazy"
                  />
                )}
              </div>
            ))}
          </div>

          {hasMore ? (
            <div className="load-more-wrap">
              <button
                className="btn btn-dark"
                onClick={() => setVisibleCount((count) => count + 36)}
              >
                Carregar mais registros
              </button>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}

function App() {
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Tenho interesse em saber mais sobre os filhotes disponíveis.`;
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  console.log("Total de itens do histórico:", historyGallery.length);

useEffect(() => {
  const handleHashChange = () => {
    setCurrentHash(window.location.hash);
  };

  window.addEventListener("hashchange", handleHashChange);

  return () => {
    window.removeEventListener("hashchange", handleHashChange);
  };
}, []);

if (currentHash === "#historico-completo") {
  return <FullHistoryPage items={historyGallery} />;
}

  return (
    <div className="site">
      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          font-family: Inter, Arial, Helvetica, sans-serif;
          background: #fbf7ef;
          color: #1c1917;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .site {
          min-height: 100vh;
          background: #fbf7ef;
        }

        .container {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid #e7e5e4;
          background: rgba(251, 247, 239, 0.92);
          backdrop-filter: blur(16px);
        }

        .header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          gap: 24px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-icon {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: #1c1917;
          color: #fff;
          box-shadow: 0 12px 30px rgba(28, 25, 23, 0.18);
        }

        .brand-name {
          margin: 0;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        .brand-place {
          margin: 2px 0 0;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.22em;
          color: #78716c;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 30px;
          font-size: 14px;
          font-weight: 600;
          color: #57534e;
        }

        .nav a:hover {
          color: #1c1917;
        }

        .btn {
          border: 0;
          cursor: pointer;
          min-height: 46px;
          padding: 0 22px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 15px;
          transition: 0.2s ease;
          white-space: nowrap;
        }

        .btn-dark {
          background: #1c1917;
          color: #fff;
          box-shadow: 0 10px 24px rgba(28, 25, 23, 0.16);
        }

        .btn-dark:hover {
          background: #292524;
          transform: translateY(-1px);
        }

        .btn-light {
          background: #fff;
          color: #1c1917;
          border: 1px solid #e7e5e4;
        }

        .btn-outline {
          background: rgba(255, 255, 255, 0.62);
          color: #1c1917;
          border: 1px solid #d6d3d1;
        }

        .hero {
          position: relative;
          overflow: hidden;
          padding: 88px 0 96px;
        }

        .hero::before {
          content: "";
          position: absolute;
          top: -160px;
          right: -150px;
          width: 420px;
          height: 420px;
          border-radius: 999px;
          background: rgba(251, 191, 36, 0.2);
          filter: blur(50px);
        }

        .hero::after {
          content: "";
          position: absolute;
          bottom: -170px;
          left: -150px;
          width: 420px;
          height: 420px;
          border-radius: 999px;
          background: rgba(168, 162, 158, 0.24);
          filter: blur(50px);
        }

        .hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 60px;
          align-items: center;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1px solid #e7e5e4;
          background: rgba(255, 255, 255, 0.72);
          padding: 9px 14px;
          border-radius: 999px;
          color: #57534e;
          font-size: 14px;
          box-shadow: 0 8px 22px rgba(28, 25, 23, 0.06);
          margin-bottom: 24px;
        }

        .hero-title {
          margin: 0;
          max-width: 760px;
          font-size: clamp(46px, 6vw, 78px);
          line-height: 0.98;
          letter-spacing: -0.06em;
          color: #0c0a09;
        }

        .hero-text {
          margin: 24px 0 0;
          max-width: 680px;
          color: #57534e;
          font-size: 19px;
          line-height: 1.75;
        }

        .hero-actions {
          margin-top: 32px;
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .stats {
          margin-top: 36px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          max-width: 650px;
        }

        .stat strong {
          display: block;
          font-size: 24px;
          color: #1c1917;
          margin-bottom: 3px;
        }

        .stat {
          color: #57534e;
          font-size: 14px;
        }

        .hero-card-wrap {
          position: relative;
        }

        .hero-card {
          position: relative;
          border-radius: 42px;
          background: #1c1917;
          padding: 16px;
          box-shadow: 0 35px 80px rgba(28, 25, 23, 0.28);
        }

        .hero-image-placeholder {
          min-height: 540px;
          display: grid;
          place-items: center;
          text-align: center;
          border-radius: 34px;
          padding: 42px;
          background: linear-gradient(135deg, #fef3c7, #fff, #e7e5e4);
        }

        .hero-image-inner {
          width: 100%;
          height: 100%;
          min-height: 450px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 28px;
          display: grid;
          place-items: center;
          background: rgba(255, 255, 255, 0.48);
          box-shadow: inset 0 0 40px rgba(255, 255, 255, 0.5);
        }
          .hero-image-photo-box {
  padding: 0;
  overflow: hidden;
}

.hero-photo {
  width: 100%;
  height: 100%;
  min-height: 450px;
  object-fit: cover;
  border-radius: 28px;
  display: block;
}
        <img
  src="/imagens/capa.jpg"
  alt="Filhotes do Canil Multi Raças"
  className="hero-photo"
/>

        .hero-card-title {
          margin: 0;
          font-size: 30px;
          line-height: 1.15;
          letter-spacing: -0.04em;
        }

        .hero-card-text {
          max-width: 380px;
          margin: 16px auto 0;
          color: #57534e;
          line-height: 1.6;
        }

        .floating-card {
          position: absolute;
          left: -20px;
          bottom: -26px;
          max-width: 340px;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px;
          border-radius: 28px;
          background: #fff;
          box-shadow: 0 22px 50px rgba(28, 25, 23, 0.18);
        }

        .floating-icon {
          width: 52px;
          height: 52px;
          flex: 0 0 auto;
          border-radius: 18px;
          background: #fef3c7;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .floating-card p {
          margin: 0;
          color: #57534e;
          font-size: 14px;
          line-height: 1.55;
        }

        .floating-card strong {
          color: #1c1917;
        }

        .section {
          padding: 82px 0;
        }

        .white {
          background: #fff;
        }

        .dark {
          background: #1c1917;
          color: #fff;
        }

        .section-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 54px;
        }

        .eyebrow {
          margin: 0 0 14px;
          color: #b45309;
          font-size: 13px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.22em;
        }

        .dark .eyebrow {
          color: #fcd34d;
        }

        .section-title {
          margin: 0;
          font-size: clamp(34px, 4vw, 52px);
          line-height: 1.05;
          letter-spacing: -0.055em;
        }

        .section-text {
          color: #57534e;
          font-size: 18px;
          line-height: 1.8;
        }

        .section-text p {
          margin-top: 0;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 32px;
          margin-bottom: 42px;
        }

        .section-header p:last-child {
          max-width: 520px;
          color: #57534e;
          line-height: 1.7;
          margin: 0;
        }

        .breed-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .breed-card {
          overflow: hidden;
          border-radius: 30px;
          background: #fff;
          box-shadow: 0 8px 20px rgba(28, 25, 23, 0.06);
          transition: 0.22s ease;
        }

        .breed-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 42px rgba(28, 25, 23, 0.12);
        }

        .breed-image {
          aspect-ratio: 4 / 3;
          padding: 24px;
          background: linear-gradient(135deg, #f5f5f4, #fef3c7);
        }

        .breed-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 26px;
  display: block;
}

        .breed-content {
          padding: 24px;
        }

        .tag {
          display: inline-flex;
          border-radius: 999px;
          background: #fef3c7;
          color: #78350f;
          font-size: 12px;
          font-weight: 800;
          padding: 6px 11px;
        }

        .breed-content h3 {
          margin: 16px 0 8px;
          font-size: 24px;
          letter-spacing: -0.04em;
        }

        .breed-content p {
          margin: 0 0 20px;
          color: #57534e;
          line-height: 1.6;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .process-card {
          border-radius: 28px;
          padding: 26px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .process-card svg {
          color: #fcd34d;
          margin-bottom: 26px;
        }

        .process-card h3 {
          margin: 0;
          font-size: 20px;
        }

        .process-card p {
          margin: 12px 0 0;
          color: #d6d3d1;
          line-height: 1.7;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .benefit-card {
          border-radius: 28px;
          background: #fbf7ef;
          padding: 30px;
        }

        .benefit-card h3 {
          margin: 16px 0 10px;
          font-size: 21px;
        }

        .benefit-card p {
          margin: 0;
          color: #57534e;
          line-height: 1.7;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 30px;
        }

        .contact-box {
          border-radius: 34px;
          background: #1c1917;
          color: #fff;
          padding: 42px;
        }

        .contact-box p {
          color: #d6d3d1;
          line-height: 1.75;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #e7e5e4;
          margin-top: 16px;
        }

        .contact-item svg {
          color: #fcd34d;
        }

        .form-card {
          border-radius: 34px;
          background: #fff;
          padding: 42px;
          box-shadow: 0 20px 60px rgba(28, 25, 23, 0.12);
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        input,
        textarea {
          width: 100%;
          border: 1px solid #e7e5e4;
          background: #fafaf9;
          border-radius: 18px;
          padding: 15px 16px;
          outline: none;
          font: inherit;
        }

        input:focus,
        textarea:focus {
          border-color: #78716c;
        }

        textarea {
          min-height: 140px;
          resize: vertical;
          grid-column: span 2;
        }

        .form-note {
          text-align: center;
          color: #78716c;
          font-size: 13px;
          margin: 14px 0 0;
        }

        .footer {
          border-top: 1px solid #e7e5e4;
          background: #fff;
          padding: 28px 0;
          color: #78716c;
          font-size: 14px;
        }

        .footer-inner {
          display: flex;
          justify-content: space-between;
          gap: 18px;
          flex-wrap: wrap;
        }
          .history-teaser {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 42px;
  align-items: center;
  padding: 34px;
  border-radius: 36px;
  background: #fbf7ef;
}

.history-teaser-text p:not(.eyebrow) {
  color: #57534e;
  font-size: 18px;
  line-height: 1.75;
  margin: 20px 0 28px;
}

.history-preview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.history-preview-card {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 24px;
  background: #e7e5e4;
  box-shadow: 0 12px 28px rgba(28, 25, 23, 0.1);
}

.history-preview-card img,
.history-preview-card video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.full-gallery-page {
  min-height: 100vh;
  background: #fbf7ef;
}

.full-gallery-header {
  background: #1c1917;
  color: #fff;
  padding: 58px 0;
}

.full-gallery-header-inner {
  display: flex;
  justify-content: space-between;
  gap: 28px;
  align-items: center;
}

.full-gallery-header h1 {
  margin: 0;
  font-size: clamp(36px, 5vw, 62px);
  line-height: 1;
  letter-spacing: -0.06em;
}

.full-gallery-header p:not(.eyebrow) {
  max-width: 720px;
  color: #d6d3d1;
  line-height: 1.7;
  font-size: 17px;
}

.full-gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.full-gallery-card {
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 24px;
  background: #e7e5e4;
  box-shadow: 0 10px 28px rgba(28, 25, 23, 0.08);
}

.full-gallery-card img,
.full-gallery-card video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.load-more-wrap {
  display: flex;
  justify-content: center;
  margin-top: 36px;
}

        @media (max-width: 980px) {
          .nav {
            display: none;
          }
.history-teaser {
  grid-template-columns: 1fr;
}

.full-gallery-header-inner {
  align-items: flex-start;
  flex-direction: column;
}

.full-gallery-grid {
  grid-template-columns: repeat(3, 1fr);
}
          .hero-grid,
          .section-grid,
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .breed-grid {
            grid-template-columns: repeat(2, 1fr);
          }
.gallery-grid {
  grid-template-columns: repeat(2, 1fr);
}
          .process-grid,
          .benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .floating-card {
            position: static;
            margin-top: 18px;
            max-width: none;
          }
        }
          .gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.gallery-card {
  overflow: hidden;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0 10px 28px rgba(28, 25, 23, 0.08);
  transition: 0.22s ease;
}

.gallery-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 48px rgba(28, 25, 23, 0.14);
}

.gallery-media {
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #f5f5f4;
}

.gallery-media img,
.gallery-media video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.gallery-content {
  padding: 22px;
}

.gallery-content h3 {
  margin: 0 0 8px;
  font-size: 22px;
  letter-spacing: -0.04em;
}

.gallery-content p {
  margin: 0;
  color: #57534e;
  line-height: 1.6;
}

.dark .gallery-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark .gallery-content p {
  color: #d6d3d1;
}

        @media (max-width: 640px) {
          .container {
            width: min(100% - 28px, 1180px);
          }
.history-preview-grid {
  grid-template-columns: repeat(2, 1fr);
}

.full-gallery-grid {
  grid-template-columns: repeat(2, 1fr);
}

.history-teaser {
  padding: 22px;
}
          .header-inner {
            align-items: flex-start;
          }

          .header .btn {
            display: none;
          }

          .hero {
            padding: 54px 0 72px;
          }

          .hero-title {
            font-size: 43px;
          }

          .hero-text {
            font-size: 16px;
          }

          .stats {
            grid-template-columns: 1fr;
          }

          .hero-image-placeholder {
            min-height: 380px;
            padding: 22px;
          }

          .hero-image-inner {
            min-height: 330px;
          }

          .section {
            padding: 62px 0;
          }

          .section-header {
            align-items: start;
            flex-direction: column;
          }

       .breed-grid,
.gallery-grid,
.process-grid,
.benefits-grid,
.form-grid {
  grid-template-columns: 1fr;
}

          textarea {
            grid-column: span 1;
          }

          .contact-box,
          .form-card {
            padding: 28px;
          }
        }
      `}</style>

      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#">
            <div className="brand-icon">
              <PawPrint size={23} />
            </div>
            <div>
              <p className="brand-name">Canil Multi Raças</p>
              <p className="brand-place">Imperatriz • MA</p>
            </div>
          </a>

        <nav className="nav">
  <a href="#filhotes">Filhotes</a>
  <a href="#disponiveis">Disponíveis</a>
  <a href="#historico">Histórico</a>
  <a href="#sobre">Sobre</a>
  <a href="#processo">Como funciona</a>
  <a href="#contato">Contato</a>
</nav>

          <Button href={whatsappLink}>
            <MessageCircle size={18} />
            WhatsApp
          </Button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="badge">
                <Sparkles size={17} />
                Criação responsável, atendimento humanizado e orientação ao tutor
              </div>

              <h1 className="hero-title">
                Seu novo companheiro começa com uma escolha segura.
              </h1>

              <p className="hero-text">
                Filhotes de cães e gatos selecionados com cuidado, acompanhamento
                e suporte para famílias que desejam receber um pet saudável, bem
                orientado e compatível com sua rotina.
              </p>

              <div className="hero-actions">
                <Button href="#filhotes">Ver filhotes disponíveis</Button>
                <Button variant="outline" href={whatsappLink}>
                  Falar com especialista
                </Button>
              </div>

              <div className="stats">
                <div className="stat">
                  <strong>7+</strong>
                  anos de atuação
                </div>
                <div className="stat">
                  <strong>MA • PA • TO</strong>
                  atendimento regional
                </div>
                <div className="stat">
                  <strong>2–5</strong>
                  dias úteis para entrega
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hero-card-wrap"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="hero-card">
                <div className="hero-image-placeholder">
                  <div className="hero-image-inner">
                    <div>
                      <div className="animal-icon">
                        <Dog size={42} />
                        <Cat size={36} />
                      </div>
                     <div className="hero-image-inner hero-image-photo-box">
  <img
    src="/imagens/capa.jpg"
    alt="Filhote do Canil Multi Raças"
    className="hero-photo"
  />
</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-card">
                <div className="floating-icon">
                  <ShieldCheck size={26} />
                </div>
                <p>
                  <strong>Atendimento com orientação:</strong> escolha da raça,
                  porte, sexo e adaptação ao lar.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="sobre" className="section white">
          <div className="container section-grid">
            <div>
              <p className="eyebrow">Sobre o canil</p>
              <h2 className="section-title">
                Uma experiência mais segura, transparente e acolhedora.
              </h2>
            </div>

            <div className="section-text">
              <p>
                O Canil Multi Raças Imperatriz atua conectando famílias a filhotes
                de cães e gatos com responsabilidade, cuidado e acompanhamento.
                A proposta é ir além da venda: orientar o tutor sobre perfil da
                raça, adaptação, cuidados iniciais e preparação para a chegada do pet.
              </p>

              <p>
                Cada atendimento é conduzido de forma personalizada, considerando
                rotina da família, espaço disponível, preferência de porte e
                necessidades do futuro tutor.
              </p>

              <p>
                 Há quase 10 anos no mercado, já disponibilizamos inumeros filhotes
                 para centenas de familias, não perca essa oportunidade, conte conosco
                 para lhe ajudar a levar um novo membro para sua familia!
              </p>
              
            </div>
          </div>
        </section>

        <section id="filhotes" className="section">
          <div className="container">
            <div className="section-header">
              <div>
                <p className="eyebrow">Filhotes</p>
                <h2 className="section-title">Raças em destaque</h2>
              </div>
              <p>
                A disponibilidade pode variar. Consulte raça, sexo, porte, prazo
                de entrega e condições de reserva pelo WhatsApp.
              </p>
            </div>

            <div className="breed-grid">
              {breeds.map((breed) => (
                <div className="breed-card" key={breed.name}>
                  <div className="breed-image">
                    <div className="breed-image-inner">
                    <div className="breed-image-inner">
  {breed.image ? (
    <img src={breed.image} alt={breed.name} className="breed-photo" />
  ) : (
    <PawPrint size={64} />
  )}
</div>
                    </div>
                  </div>

                  <div className="breed-content">
                    <span className="tag">{breed.tag}</span>
                    <h3>{breed.name}</h3>
                    <p>{breed.desc}</p>
                    <Button variant="outline" href={whatsappLink}>
                      Consultar disponibilidade
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
<HistoryTeaser items={historyGallery} />

        <section id="processo" className="section dark">
          <div className="container">
            <div className="section-header">
              <div>
                <p className="eyebrow">Como funciona</p>
                <h2 className="section-title">
                  Um processo simples, claro e acompanhado.
                </h2>
              </div>
            </div>

            <div className="process-grid">
              <div className="process-card">
                <MessageCircle size={34} />
                <h3>1. Atendimento</h3>
                <p>Você informa raça, sexo, porte, cidade e preferência.</p>
              </div>

              <div className="process-card">
                <Heart size={34} />
                <h3>2. Orientação</h3>
                <p>Indicamos o perfil mais adequado para sua família.</p>
              </div>

              <div className="process-card">
                <ShieldCheck size={34} />
                <h3>3. Reserva</h3>
                <p>Confirmamos disponibilidade, prazo e condições.</p>
              </div>

              <div className="process-card">
                <Truck size={34} />
                <h3>4. Entrega</h3>
                <p>Organizamos a chegada com segurança e suporte.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section white">
          <div className="container benefits-grid">
            <div className="benefit-card">
              <Star size={30} />
              <h3>Escolha personalizada</h3>
              <p>
                Ajudamos a escolher o pet de acordo com perfil, ambiente e
                expectativa da família.
              </p>
            </div>

            <div className="benefit-card">
              <ShieldCheck size={30} />
              <h3>Transparência no atendimento</h3>
              <p>
                Informações claras sobre disponibilidade, prazo, transporte,
                reserva e cuidados iniciais.
              </p>
            </div>

            <div className="benefit-card">
              <Truck size={30} />
              <h3>Atendimento regional</h3>
              <p>
                Entrega mediante disponibilidade para Maranhão, Pará e Tocantins.
              </p>
            </div>
          </div>
        </section>

        <section id="contato" className="section">
          <div className="container contact-grid">
            <div className="contact-box">
              <p className="eyebrow">Contato</p>
              <h2 className="section-title">Vamos encontrar o filhote ideal?</h2>
              <p>
                Envie suas preferências pelo formulário ou chame diretamente no
                WhatsApp. Informe raça, sexo, porte, cidade e prazo desejado.
              </p>

              <div className="contact-item">
                <MapPin size={20} />
                Centro, Imperatriz - MA
              </div>

              <div className="contact-item">
                <MessageCircle size={20} />
                (99) 98431-9021
              </div>
            </div>

            <div className="form-card">
              <div className="form-grid">
                <input placeholder="Nome" />
                <input placeholder="Cidade" />
                <input placeholder="WhatsApp / telefone" />
                <input placeholder="Raça desejada" />
                <textarea placeholder="Sexo, porte, idade desejada e observações" />
              </div>

              <div style={{ marginTop: "16px" }}>
                <Button href={whatsappLink}>
                  Enviar solicitação pelo WhatsApp
                </Button>
              </div>

              <p className="form-note">
                Resposta pelo WhatsApp conforme disponibilidade.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 Canil Multi Raças Imperatriz. Todos os direitos reservados.</span>
          <span>Criação responsável • Atendimento humanizado • Imperatriz - MA</span>
        </div>
      </footer>
    </div>
  );
}

export default App;