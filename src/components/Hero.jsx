import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section
            id="home"
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                backgroundColor: '#f4f9f7',
                fontFamily: "'Outfit', sans-serif"
            }}
        >
            {/* Soft background glows / Glassmorphism Orbs */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50%', height: '50%', background: 'radial-gradient(circle, rgba(46,139,87,0.18) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 1, animation: 'float 8s ease-in-out infinite' }}></div>
            <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '60%', height: '60%', background: 'radial-gradient(circle, rgba(0,98,155,0.12) 0%, transparent 70%)', filter: 'blur(70px)', zIndex: 1, animation: 'float 12s ease-in-out infinite reverse' }}></div>

            {/* Fine Grid pattern */}
            <div style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                zIndex: 1,
                opacity: 0.7
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '1400px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '140px 20px 100px' }}>

                {/* Conference Logo/Name Box */}
                <div style={{ display: 'inline-block', marginBottom: '25px', animation: 'fadeDown 1s ease-out' }}>
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.4))',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255,255,255,0.8)',
                        padding: '10px 28px',
                        borderRadius: '30px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
                        color: '#00629b',
                        fontWeight: '700',
                        letterSpacing: '2px',
                        fontSize: '0.9rem',
                        textTransform: 'uppercase'
                    }}>
                        IEEE PES Kerala Chapter
                    </div>
                </div>

                {/* Spectacular Typography */}
                <h1 style={{
                    fontSize: 'clamp(3.8rem, 9vw, 8.5rem)',
                    fontWeight: '800',
                    lineHeight: '1.05',
                    color: '#1a1a2e',
                    marginBottom: '20px',
                    letterSpacing: '-3px',
                    animation: 'fadeUp 1s ease-out 0.2s both'
                }}>
                    iSPEC <span style={{
                        background: 'linear-gradient(135deg, #00a859, #00629b)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        paddingRight: '5px' // Prevent clipping of italic/accent chars
                    }}>2026</span>
                </h1>

                {/* Updated Subtitle with Theme */}
                <h2 style={{
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
                    fontWeight: '400',
                    color: '#444',
                    maxWidth: '1000px',
                    margin: '0 auto 40px',
                    lineHeight: '1.6',
                    letterSpacing: '-0.3px',
                    animation: 'fadeUp 1s ease-out 0.4s both'
                }}>
                    <strong style={{ color: '#2e8b57' }}>Theme:</strong> Integrated Pathways in Sustainable Power and Energy for Carbon Neutrality
                </h2>

                {/* Animated Conference Info Cards */}
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '50px', animation: 'fadeUp 1s ease-out 0.6s both' }}>
                    <div style={{
                        background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)',
                        padding: '16px 35px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.9)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', gap: '12px',
                        fontSize: '1.15rem', fontWeight: '600', color: '#1a1a2e', transition: 'transform 0.3s'
                    }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                        <i className="fas fa-calendar-alt" style={{ color: '#2e8b57', fontSize: '1.3rem' }}></i> Dec 4 – 6, 2026
                    </div>
                    <div style={{
                        background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(20px)',
                        padding: '16px 35px', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.9)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.03)', display: 'flex', alignItems: 'center', gap: '12px',
                        fontSize: '1.15rem', fontWeight: '600', color: '#1a1a2e', transition: 'transform 0.3s'
                    }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                        <i className="fas fa-map-marker-alt" style={{ color: '#00629b', fontSize: '1.3rem' }}></i> Hyatt Regency, Trivandrum
                    </div>
                </div>

                {/* Elegant CTAs */}
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', animation: 'fadeUp 1s ease-out 0.8s both' }}>
                    <Link to="/call-for-papers" style={{
                        background: 'linear-gradient(45deg, #2e8b57, #3cb371)',
                        color: '#fff', padding: '20px 45px', borderRadius: '50px', fontSize: '1.15rem',
                        fontWeight: '700', textDecoration: 'none', boxShadow: '0 10px 30px rgba(46,139,87,0.3)',
                        transition: 'transform 0.3s, box-shadow 0.3s'
                    }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 15px 35px rgba(46,139,87,0.4)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(46,139,87,0.3)'; }}>
                        Call for Papers <i className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                    </Link>
                    <Link to="/about" style={{
                        background: 'rgba(255,255,255,0.5)', color: '#1a1a2e', padding: '20px 45px',
                        borderRadius: '50px', fontSize: '1.15rem', fontWeight: '700', backdropFilter: 'blur(10px)',
                        textDecoration: 'none', border: '2px solid rgba(26,26,46,0.1)', transition: 'all 0.3s'
                    }} onMouseEnter={e => { e.currentTarget.style.background = '#1a1a2e'; e.currentTarget.style.color = '#fff'; }} onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.5)'; e.currentTarget.style.color = '#1a1a2e'; }}>
                        Discover More
                    </Link>
                </div>
            </div>

            {/* Bottom edge gradient blend */}
            <div style={{
                position: 'absolute', bottom: '0', left: '0', width: '100%', height: '15vh',
                background: 'linear-gradient(to top, #fafafa 0%, transparent 100%)',
                zIndex: 5, pointerEvents: 'none'
            }}>
            </div>

            {/* Inline keyframes for animations */}
            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-30px) rotate(5deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeDown {
                    from { opacity: 0; transform: translateY(-40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
};

export default Hero;
