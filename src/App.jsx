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
    },
    {
      date: "Friday, November 6, 2026",
      theme: "Growing Roots in Gratitude",
      scripture: "Colossians 2:7",
      thought: "True divine growth doesn't just happen upwards, it happens downwards first. Before a tree can branch out beautifully, its roots must anchor deep into the soil. Let gratitude anchor your roots deep today.",
      prayer: "Lord, help me to establish deep roots of thankfulness in my heart today. Strengthen my faith and let my life overflow with joy. Amen."
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
    },
    {
      id: 2,
      title: "Thanksgiving Revival Series",
      date: "November 22-24, 2026",
      time: "5:00 PM Daily",
      location: "Grace Hall",
      description: "Join us for a three-day powerful revival series focusing on spiritual renewal and corporate thanksgiving.",
      image: "https://unsplash.com"
    }
  ];

  const handleDownload = (eventTitle) => {
    alert(`"${eventTitle}" flyer content layout ready to save onto your phone storage system.`);
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', backgroundColor: '#f0f4fb', minHeight: '100vh', color: '#111827', paddingBottom: '4rem' }}>
      
      {/* HEADER HERO */}
      <header style={{ backgroundColor: '#1e3a8a', color: '#fff', padding: '2.5rem 1.5rem', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          Welcome Pentecostal Church
        </h1>
        <p style={{ fontSize: '0.95rem', marginTop: '0.5rem', opacity: 0.9, fontStyle: 'italic' }}>
          Thanksgiving Series: Divine Growth & Fellowship
        </p>
      </header>

      {/* MOBILE TABS COMPONENT */}
      <nav style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#fff', padding: '0.75rem', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 10 }}>
        <button onClick={() => setActiveTab('home')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'none', border: 'none', color: activeTab === 'home' ? '#1e3a8a' : '#6b7280', fontSize: '0.75rem', fontWeight: 'bold', cursor: 'pointer' }}>
          <BookOpen size={20} style={{ marginBottom: '0.25rem' }} /> Devotional
        </button>
        <button onClick={() => setActiveTab('events')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'none', border: 'none', color: activeTab === 'events' ? '#1e3a8a' : '#6b7280', fontSize: '0.75rem', fontWeight: 'bold', cursor: 'pointer' }}>
          <Image size={20} style={{ marginBottom: '0.25rem' }} /> Church Events
        </button>
        <button onClick={() => setActiveTab('about')} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'none', border: 'none', color: activeTab === 'about' ? '#1e3a8a' : '#6b7280', fontSize: '0.75rem', fontWeight: 'bold', cursor: 'pointer' }}>
          <Info size={20} style={{ marginBottom: '0.25rem' }} /> Church Info
        </button>
      </nav>

      {/* RENDER PAGES BASED ON ACTIVE TAB */}
      <main style={{ maxWidth: '650px', margin: '1.5rem auto', padding: '0 1rem' }}>
        
        {activeTab === 'home' && (
          <section>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <Calendar size={18} style={{ color: '#1e3a8a', marginRight: '0.5rem' }} />
              <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#4b5563' }}>DAILY SPIRITUAL FEED</span>
            </div>

            {devotions.map((dev, idx) => (
              <div key={idx} style={{ backgroundColor: '#fff', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', color: '#2563eb', fontWeight: 'bold', textTransform: 'uppercase' }}>{dev.date}</span>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a', margin: '0.5rem 0' }}>{dev.theme}</h2>
                <p style={{ fontStyle: 'italic', color: '#4b5563', margin: '0 0 1rem 0', paddingLeft: '0.75rem', borderLeft: '3px solid #d1d5db' }}>
                  Scripture Reading: {dev.scripture}
                </p>
                <p style={{ color: '#374151', lineHeight: '1.6', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{dev.thought}</p>
                
                <div style={{ backgroundColor: '#eff6ff', borderLeft: '4px solid #2563eb', padding: '1rem', borderRadius: '0.5rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#1e40af', display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
                    <Heart size={14} style={{ marginRight: '0.35rem' }} /> Today's Prayer Commitment
                  </span>
                  <p style={{ fontStyle: 'italic', fontSize: '0.9rem', color: '#1e3a8a', margin: 0 }}>{dev.prayer}</p>
                </div>
              </div>
            ))}
          </section>
        )}

        {activeTab === 'events' && (
          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a', textAlign: 'center', marginBottom: '1.5rem' }}>
              Church Events & Flyers Gallery
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
              {churchEvents.map((event) => (
                <div key={event.id} style={{ backgroundColor: '#fff', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                  <img src={event.image} alt={event.title} style={{ width: '100%', height: '200px', objectFit: 'cover', cursor: 'pointer' }} onClick={() => setSelectedFlyer(event)} />
                  
                  <div style={{ padding: '1.25rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e3a8a', margin: '0 0 0.5rem 0' }}>{event.title}</h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem', color: '#4b5563', marginBottom: '0.75rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center' }}><Clock size={14} style={{ marginRight: '0.4rem' }} /> {event.date} at {event.time}</span>
                      <span style={{ display: 'flex', alignItems: 'center' }}><MapPin size={14} style={{ marginRight: '0.4rem' }} /> {event.location}</span>
                    </div>

                    <p style={{ fontSize: '0.9rem', color: '#374151', lineHeight: '1.5', marginBottom: '1.25rem' }}>{event.description}</p>
                    
                    <button onClick={() => handleDownload(event.title)} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1e3a8a', color: '#fff', border: 'none', padding: '0.75rem', borderRadius: '0.5rem', fontWeight: 'bold', fontSize: '0.9rem', cursor: 'pointer', transition: 'background-color 0.2s' }}>
                      <Download size={16} style={{ marginRight: '0.5rem' }} /> Save Flyer Image
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'about' && (
          <section style={{ backgroundColor: '#fff', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a', marginBottom: '1rem', textAlign: 'center' }}>
              About Welcome Pentecostal
            </h2>
            <p style={{ color: '#374151', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              We are a Bible-believing faith family dedicated to spreading Christ's love, cultivating spiritual growth, and fostering tight-knit communal fellowship across all generations.
            </p>
            <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#4b5563' }}>
              <span style={{ display: 'flex', alignItems: 'center' }}><MapPin size={16} style={{ marginRight: '0.5rem', color: '#1e3a8a' }} /> 100 Grace Avenue, Faith City</span>
              <span style={{ display: 'flex', alignItems: 'center' }}><Phone size={16} style={{ marginRight: '0.5rem', color: '#1e3a8a' }} /> +1 (555) 019-2834</span>
