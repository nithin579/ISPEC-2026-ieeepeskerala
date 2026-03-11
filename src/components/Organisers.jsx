import React from 'react';

const Organisers = () => {
    return (
        <section className="section organisers-section" style={{ background: 'rgb(255, 255, 255)', paddingTop: '60px', paddingBottom: '50px' }}>
            <div className="container">
                <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '2rem', color: 'rgb(51, 51, 51)', marginBottom: '10px' }}>Organisers</h2>
                    <div style={{ width: '60px', height: '3px', background: 'var(--primary)', margin: '0px auto' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
                    <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer" title="IEEE" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px 25px', background: 'rgb(248, 249, 250)', borderRadius: '10px', transition: '0.3s', minWidth: '180px', minHeight: '80px', textDecoration: 'none' }}>
                        <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, color: '#00629b', fontSize: '0.9rem', textAlign: 'center' }}>IEEE</span>
                    </a>
                    <a href="https://ieeekerala.org" target="_blank" rel="noopener noreferrer" title="IEEE Kerala Section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px 25px', background: 'rgb(248, 249, 250)', borderRadius: '10px', transition: '0.3s', minWidth: '180px', minHeight: '80px', textDecoration: 'none', boxShadow: 'none', transform: 'translateY(0px)' }}>
                        <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, color: '#00629b', fontSize: '0.9rem', textAlign: 'center' }}>IEEE Kerala Section</span>
                    </a>
                    <a href="https://ewh.ieee.org/r10/kerala/pes/" target="_blank" rel="noopener noreferrer" title="IEEE PES Kerala Chapter" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px 25px', background: 'rgb(248, 249, 250)', borderRadius: '10px', transition: '0.3s', minWidth: '180px', minHeight: '80px', textDecoration: 'none', boxShadow: 'none', transform: 'translateY(0px)' }}>
                        <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, color: '#00629b', fontSize: '0.9rem', textAlign: 'center' }}>IEEE PES Kerala Chapter</span>
                    </a>
                    <a href="https://www.ieee-pes.org" target="_blank" rel="noopener noreferrer" title="IEEE PES" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px 25px', background: 'rgb(248, 249, 250)', borderRadius: '10px', transition: '0.3s', minWidth: '180px', minHeight: '80px', textDecoration: 'none', boxShadow: 'none', transform: 'translateY(0px)' }}>
                        <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, color: '#00629b', fontSize: '0.9rem', textAlign: 'center' }}>IEEE PES</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Organisers;
