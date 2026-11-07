import React, { useState } from 'react';
import { Calendar, BookOpen, Image, Heart, Download, Info, MapPin, Clock, Phone } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedFlyer, setSelectedFlyer] = useState(null);

  const devotions = [
    {
      date: "Saturday, November 7, 2026",
      theme: "Prepared for the Harvest",
      scripture: "Galatians 6:9",
      thought: "Divine growth often happens quietly in the dark, out of sight. Every prayer you offered, every moment of patience, and every act of faithfulness was a seed sown. Trust that your harvest is coming at the perfect time.",
      prayer: "Father, thank You for the quiet growth happening within me. As I prepare my heart for worship, remind me of Your faithfulness in every season of my life. Amen."
    }
  ];

  const churchEvents = [
    {
      id: 1,
      title: "Youth Worship Night",
      date: "November 20, 2026",
      time: "6:30 PM",
      location: "Main Sanctuary",
      description: "A special night dedicated to praise, deep worship, and fellowship for the youth and young adults.",
      image: "https://unsplash.com"
    }
  ];

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', backgroundColor: '#f0f4fb', minHeight: '100vh', color: '#111827' }}>
      <header style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '2rem 1.5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', margin: 0 }}>Welcome Pentecostal Church</h1>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.9 }}>Thanksgiving Series: Divine Growth</p>
      </header>

      <nav style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#fff', padding: '0.75rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <button onClick={() => setActiveTab('home')} style={{ background: 'none', border: 'none', color: activeTab === 'home' ? '#1e3a8a' : '#6b7280', fontWeight: 'bold' }}>Devotional</button>
        <button onClick={() => setActiveTab('events')} style={{ background: 'none', border: 'none', color: activeTab === 'events' ? '#1e3a8a' : '#6b7280', fontWeight: 'bold' }}>Church Events</button>
      </nav>

      <main style={{ maxWidth: '600px', margin: '1.5rem auto', padding: '0 1rem' }}>
        {activeTab === 'home' && (
          <div>
            {devotions.map((dev, idx) => (
              <div key={idx} style={{ backgroundColor: '#fff', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                <span style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 'bold' }}>{dev.date}</span>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a', margin: '0.5rem 0' }}>{dev.theme}</h2>
                <p style={{ fontStyle: 'italic', color: '#4b5563' }}>Scripture: {dev.scripture}</p>
                <p style={{ lineHeight: '1.6' }}>{dev.thought}</p>
                <div style={{ backgroundColor: '#eff6ff', borderLeft: '4px solid #2563eb', padding: '1rem', borderRadius: '0.5rem', marginTop: '1rem' }}>
                  <p style={{ fontStyle: 'italic', color: '#1e3a8a', margin: 0 }}>{dev.prayer}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'events' && (
          <div>
            {churchEvents.map((event) => (
              <div key={event.id} style={{ backgroundColor: '#fff', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', marginBottom: '1.5rem' }}>
                <img src={event.image} alt={event.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e3a8a', margin: '0 0 0.5rem 0' }}>{event.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#374151' }}>{event.description}</p>
                  <button onClick={() => alert('Downloading flyer...')} style={{ width: '100%', backgroundColor: '#1e3a8a', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: 'bold', marginTop: '1rem' }}>
                    <Download size={16} style={{ marginRight: '0.5rem', display: 'inline' }} /> Save Flyer Image
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
