import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const devotions = {
    "2026-11-06": {
      theme: "Growing Roots in Gratitude",
      scripture: "Colossians 2:7",
      thought: "True divine growth doesn't just happen upwards; it happens downwards first. Before a tree can branch out and bear fruit, its roots must dig deep into the soil to find nourishment. In our spiritual walk, gratitude is that soil.",
      prayer: "Lord, help me to establish deep roots of thankfulness in my heart today. Strengthen my faith and let my life overflow with appreciation for Your constant goodness. Amen."
    },
    "2026-11-07": {
      theme: "Prepared for the Harvest",
      scripture: "Galatians 6:9",
      thought: "Divine growth often happens quietly in the dark, out of sight. Every prayer you offered, every moment of patience, and every act of faithfulness was a seed sown. Trust that your harvest is coming at the perfect time.",
      prayer: "Father, thank You for the quiet growth happening within me. As I prepare my heart for worship, remind me of Your faithfulness in every season of my life. Amen."
    }
  };

  const todayStr = new Date().toISOString().split('T')[0];
  const currentDevotion = devotions[todayStr] || devotions["2026-11-06"];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', backgroundColor: '#f9fafb', minHeight: '100vh', color: '#111827', paddingBottom: '5rem' }}>
      
      {/* HEADER SECTION */}
      <header style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '2.5rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', margin: 0, textTransform: 'uppercase' }}>
          Thanksgiving Series: Divine Growth
        </h1>
        <p style={{ fontSize: '0.875rem', marginTop: '0.5rem', opacity: 0.9 }}>
          Daily Updates & Encouragement
        </p>
      </header>

      {/* DEVOTION SECTION */}
      <main style={{ maxWidth: '650px', margin: '2rem auto', padding: '0 1rem' }}>
        <div style={{ backgroundColor: '#fff', borderRadius: '1rem', padding: '2rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#2563eb', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
            Daily Devotion
          </span>
          <h2 style={{ fontSize: '1.625rem', fontWeight: 'bold', margin: '0 0 0.5rem 0', color: '#1e3a8a' }}>
            {currentDevotion.theme}
          </h2>
          <p style={{ fontStyle: 'italic', color: '#4b5563', margin: '0 0 1.25rem 0', borderLeft: '3px solid #d1d5db', paddingLeft: '0.75rem' }}>
            "{currentDevotion.scripture}"
          </p>
          <p style={{ color: '#374151', lineHeight: '1.7', margin: '0 0 1.5rem 0' }}>
            {currentDevotion.thought}
          </p>
          
          <div style={{ backgroundColor: '#eff6ff', borderLeft: '4px solid #2563eb', padding: '1.25rem', borderRadius: '0.5rem' }}>
            <span style={{ fontSize: '0.875rem', fontWeight: 'bold', color: '#1e40af', display: 'block', marginBottom: '0.25rem' }}>
              Prayer:
            </span>
            <p style={{ fontSize: '0.937rem', color: '#1e3a8a', margin: 0 }}>
              {currentDevotion.prayer}
            </p>
          </div>
        </div>
      </main>

      {/* GALLERY SECTION */}
      <section style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1.75rem' }}>
          Church Events & Flyers
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {[
            {
              id: 1,
              title: "Thanksgiving Series: Divine Growth",
              date: "November 2026",
              image: "/thanksgiving-divine-growth.jpg",
              desc: "Join us every Sunday this month as we explore what it means to grow deep roots of faith."
            },
            {
              id: 2,
              title: "Youth Worship Night",
              date: "Friday, Nov 20, 2026",
              image: "/youth-worship-night.jpg",
              desc: "An evening of powerful praise, community, and word tailored for our youth generation."
            }
          ].map((poster) => (
            <div key={poster.id} style={{ backgroundColor: '#fff', borderRadius: '0.75rem', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', overflow: 'hidden', border: '1px solid #e5e7eb', display: 'flex', flexDirection: 'column' }}>
              <img src={poster.image} alt={poster.title} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
              <div style={{ padding: '1.25rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 'bold', textTransform: 'uppercase' }}>{poster.date}</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginTop: '0.25rem', marginBottom: '0.5rem' }}>{poster.title}</h3>
                  <p style={{ color: '#4b5563', fontSize: '0.875rem', marginBottom: '1.25rem' }}>{poster.desc}</p>
                </div>
                <a href={poster.image} download style={{ display: 'block', width: '100%', textAlign: 'center', backgroundColor: '#f3f4f6', color: '#1f2937', padding: '0.625rem 0', borderRadius: '0.5rem', fontWeight: '500', textDecoration: 'none', fontSize: '0.875rem' }}>
                  📥 Save Flyer
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '2rem 1rem', borderTop: '1px solid #e5e7eb', marginTop: '3rem' }}>
        <p style={{ fontSize: '0.937rem', fontWeight: 'bold', color: '#4b5563', margin: 0 }}>
          You are welcome to join us!
        </p>
      </footer>

    </div>
  );
}
