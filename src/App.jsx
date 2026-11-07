import React from 'react';
import { ChevronRight, MapPin, Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', backgroundColor: '#fdfbf7', color: '#2d2d2d', minHeight: '100vh', paddingBottom: '3rem' }}>
      
      {/* HEADER NAV APP BAR */}
      <nav style={{ backgroundColor: '#fff', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f0eae1' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#8b1e3f', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.75rem', fontWeight: 'bold' }}>WP</div>
          <div>
            <span style={{ fontSize: '0.65rem', color: '#8b857b', display: 'block', fontWeight: 'bold', letterSpacing: '0.05em' }}>WELCOME PENTECOSTAL</span>
            <span style={{ fontSize: '0.9rem', fontWeight: '800', color: '#1a1a1a' }}>Church</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button style={{ backgroundColor: '#e63956', color: '#fff', border: 'none', padding: '0.4rem 0.9rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 'bold' }}>Give</button>
          <div style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#f5ebe6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#b25e38', fontWeight: 'bold', fontSize: '0.8rem' }}>W</div>
        </div>
      </nav>

      {/* HERO BANNER CARD CONTAINER */}
      <div style={{ margin: '1rem', borderRadius: '1.25rem', overflow: 'hidden', position: 'relative', boxShadow: '0 4px 15px rgba(0,0,0,0.06)' }}>
        <img src="https://unsplash.com" alt="Congregation Worship" style={{ width: '100%', height: '230px', objectFit: 'cover', filter: 'brightness(0.75)' }} />
        <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', right: '1.25rem', color: '#fff' }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '0.08em', textTransform: 'uppercase', backgroundColor: 'rgba(255,255,255,0.2)', padding: '0.25rem 0.6rem', borderRadius: '2rem', backdropFilter: 'blur(4px)' }}>Welcome Home</span>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', margin: '0.5rem 0 0.25rem 0', fontFamily: 'Georgia, serif' }}>Believe and Belong</h2>
          <p style={{ fontSize: '0.8rem', opacity: 0.9, margin: 0 }}>Sundays 8:30 AM · Wednesdays 4–6 PM prayer</p>
        </div>
      </div>

      <main style={{ padding: '0 1rem', maxWidth: '480px', margin: '0 auto' }}>
        
        {/* THIS WEEK AT CHURCH SECTION */}
        <div style={{ marginTop: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.65rem', color: '#e63956', fontWeight: 'bold', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Stay Close</span>
            <span style={{ fontSize: '0.75rem', color: '#8b857b', fontWeight: 'bold' }}>See all ›</span>
          </div>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#2d2d2d', margin: '0 0 0.75rem 0' }}>This week at church</h3>
          
          <div style={{ backgroundColor: '#fff', borderRadius: '1rem', padding: '1rem', display: 'flex', alignItems: 'center', border: '1px solid #f0eae1', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
              <div style={{ backgroundColor: '#fcf6f0', border: '1px solid #f2e3d5', borderRadius: '0.75rem', padding: '0.4rem 0.6rem', textAlign: 'center', minWidth: '2.5rem' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#b25e38', display: 'block', lineHeight: 1 }}>08</span>
                <span style={{ fontSize: '0.55rem', color: '#a39c93', fontWeight: 'bold', textTransform: 'uppercase' }}>Nov</span>
              </div>
              <div>
                <span style={{ fontSize: '0.6rem', color: '#b25e38', fontWeight: 'bold', display: 'block', marginBottom: '0.15rem' }}>THIS SUNDAY · 8:30 AM</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#1a1a1a', display: 'block' }}>Thanksgiving Series: Divine Growth</span>
                <span style={{ fontSize: '0.7rem', color: '#8b857b', display: 'flex', alignItems: 'center', marginTop: '0.15rem', gap: '0.2rem' }}><MapPin size={10}/> Welcome Pentecostal Church</span>
              </div>
            </div>
            <div style={{ backgroundColor: '#fdfbf7', width: '1.75rem', height: '1.75rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #f0eae1' }}>
              <ChevronRight size={14} style={{ color: '#b25e38' }} />
            </div>
          </div>
        </div>

        {/* DAILY DEVOTIONAL SECTION */}
        <div style={{ marginTop: '2rem', backgroundColor: '#fff', borderRadius: '1.25rem', padding: '1.25rem', border: '1px solid #f0eae1', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.65rem', color: '#e63956', fontWeight: 'bold', letterSpacing: '0.05em' }}>DAILY DEVOTIONAL</span>
            <Sparkles size={14} style={{ color: '#e63956' }} />
          </div>
          <h4 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#8b857b', margin: '0 0 1rem 0' }}>November 7, 2026</h4>
          
          <div style={{ borderLeft: '3px solid #e63956', paddingLeft: '0.75rem', margin: '1rem 0', fontStyle: 'italic', color: '#1a1a1a', fontSize: '0.9rem', lineHeight: '1.5', fontFamily: 'Georgia, serif' }}>
            "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name." — Psalm 100:4
          </div>
          
          <p style={{ fontSize: '0.85rem', color: '#4a4a4a', lineHeight: '1.6', margin: '0 0 1rem 0' }}>
            As we prepare for Sunday worship, let us come with hearts already full of praise. Thanksgiving opens the door to God's presence — it is the way we enter.
          </p>
          <span style={{ fontSize: '0.75rem', color: '#e63956', fontWeight: 'bold' }}>Read full devotional ›</span>
        </div>

        {/* ANNOUNCEMENTS SECTION */}
        <div style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.65rem', color: '#e63956', fontWeight: 'bold', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Coming Up</span>
            <span style={{ fontSize: '0.75rem', color: '#8b857b', fontWeight: 'bold' }}>See all ›</span>
          </div>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#2d2d2d', margin: '0 0 1rem 0' }}>Announcements</h3>

          {/* ITEM 1 */}
          <div style={{ backgroundColor: '#fff', borderRadius: '1rem', padding: '1rem', border: '1px solid #f0eae1', display: 'flex', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ textAlign: 'center', minWidth: '2.5rem' }}>
              <span style={{ fontSize: '0.6rem', color: '#8b857b', fontWeight: 'bold', display: 'block', textTransform: 'uppercase' }}>Nov</span>
              <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#1a1a1a', display: 'block', lineHeight: 1 }}>08</span>
            </div>
            <div>
              <span style={{ fontSize: '0.55rem', backgroundColor: '#fce8eb', color: '#e63956', padding: '0.15rem 0.5rem', borderRadius: '2rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Thanksgiving</span>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#1a1a1a', margin: '0.35rem 0 0.2rem 0' }}>Thanksgiving Sunday</h4>
              <p style={{ fontSize: '0.75rem', color: '#666', margin: 0, lineHeight: '1.4' }}>We continue our Thanksgiving series. Join us as we gather to thank God for His faithfulness throughout the year.</p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div style={{ backgroundColor: '#fff', borderRadius: '1rem', padding: '1rem', border: '1px solid #f0eae1', display: 'flex', gap: '0.75rem' }}>
            <div style={{ textAlign: 'center', minWidth: '2.5rem' }}>
              <span style={{ fontSize: '0.6rem', color: '#8b857b', fontWeight: 'bold', display: 'block', textTransform: 'uppercase' }}>Nov</span>
              <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#1a1a1a', display: 'block', lineHeight: 1 }}>13-15</span>
            </div>
            <div>
              <span style={{ fontSize: '0.55rem', backgroundColor: '#fcf6f0', color: '#b25e38', padding: '0.15rem 0.5rem', borderRadius: '2rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Youth</span>
              <h4 style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#1a1a1a', margin: '0.35rem 0 0.2rem 0' }}>Youth Rally</h4>
              <p style={{ fontSize: '0.75rem', color: '#666', margin: 0, lineHeight: '1.4' }}>A powerful time of worship, the word, and fellowship for our youth. Bring a friend and come expectant.</p>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
