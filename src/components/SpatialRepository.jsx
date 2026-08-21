import React, { useState } from 'react';
import { Folder, FileText, Image as ImageIcon, GitCommit, Download, GitBranch, Shield, Eye, Layers } from 'lucide-react';
import { PROJECTS } from '../data/projects';

export default function SpatialRepository() {
  const [selectedRepoIndex, setSelectedRepoIndex] = useState(0);
  const currentRepo = PROJECTS[selectedRepoIndex] || PROJECTS[0];
  
  const [activeFolderIndex, setActiveFolderIndex] = useState(0);
  const [activeFileIndex, setActiveFileIndex] = useState(0);

  const currentFolder = currentRepo.repoFiles?.[activeFolderIndex] || currentRepo.repoFiles?.[0];
  const currentFile = currentFolder?.files?.[activeFileIndex] || currentFolder?.files?.[0];

  return (
    <section id="lighting-lab" style={{
      padding: '5rem 1.5rem',
      maxWidth: '1400px',
      margin: '0 auto',
      borderTop: '1px solid var(--border-strong)'
    }}>
      {/* Section Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.2em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
          // ARCHITECTURAL GITHUB — SPATIAL DRAWING REPOSITORY
        </div>
        <h2 style={{ textTransform: 'uppercase', color: 'var(--text-heading)', marginTop: '0.2rem' }}>
          The Spatial Drawing Hub
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '680px', marginTop: '0.5rem' }}>
          Inspect open architectural drawing packages, CAD floor plan schematics, 3D BIM models, and engineering revision logs for NEO KASA works.
        </p>
      </div>

      {/* Repository Selector Bar */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {PROJECTS.map((proj, idx) => (
          <button
            key={proj.id}
            onClick={() => {
              setSelectedRepoIndex(idx);
              setActiveFolderIndex(0);
              setActiveFileIndex(0);
            }}
            style={{
              background: selectedRepoIndex === idx ? 'var(--color-deep-brown)' : 'var(--bg-secondary)',
              color: selectedRepoIndex === idx ? 'var(--color-warm-white)' : 'var(--text-heading)',
              border: '1px solid var(--border-strong)',
              padding: '0.65rem 1.1rem',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: '600',
              cursor: 'pointer',
              borderRadius: '2px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'all 0.2s ease'
            }}
          >
            <GitBranch size={14} />
            <span>{proj.repoName || proj.title}</span>
          </button>
        ))}
      </div>

      {/* GitHub Style Main Container */}
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-strong)',
        borderRadius: '2px',
        overflow: 'hidden'
      }}>
        {/* Repo Header Bar */}
        <div style={{
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-strong)',
          padding: '1.25rem 1.75rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>PUBLIC REPOSITORY</span>
              <span style={{ fontSize: '0.75rem', background: 'var(--bg-primary)', border: '1px solid var(--border-subtle)', padding: '0.15rem 0.5rem', borderRadius: '10px', color: 'var(--text-secondary)' }}>
                branch: main
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.25rem', marginTop: '0.2rem', color: 'var(--text-heading)' }}>
              {currentRepo.repoName}
            </h3>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              {currentRepo.location} • {currentRepo.area} • {currentRepo.specs?.leed}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <GitCommit size={16} color="var(--accent-gold)" />
              <span>{currentRepo.commits?.length || 3} Commits</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Shield size={16} color="var(--accent-gold)" />
              <span>{currentRepo.status}</span>
            </div>
          </div>
        </div>

        {/* GitHub Explorer Grid (Left: Folder/File Tree, Right: File Canvas Preview) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '320px 1fr'
        }} className="mobile-grid-1">
          
          {/* Left Directory Sidebar */}
          <div style={{
            background: 'var(--bg-primary)',
            borderRight: '1px solid var(--border-strong)',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}>
            <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
              DRAWING PACKAGE DIRECTORY
            </div>

            {/* Folders List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {currentRepo.repoFiles?.map((folderObj, fIdx) => (
                <div key={fIdx} style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <div
                    onClick={() => {
                      setActiveFolderIndex(fIdx);
                      setActiveFileIndex(0);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: '700',
                      color: activeFolderIndex === fIdx ? 'var(--text-heading)' : 'var(--text-secondary)',
                      cursor: 'pointer',
                      padding: '0.35rem 0.5rem',
                      background: activeFolderIndex === fIdx ? 'var(--bg-secondary)' : 'transparent',
                      borderRadius: '2px'
                    }}
                  >
                    <Folder size={16} color="var(--accent-gold)" />
                    <span>{folderObj.folder}</span>
                  </div>

                  {/* Files inside Folder */}
                  {activeFolderIndex === fIdx && (
                    <div style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      {folderObj.files.map((file, fileIdx) => (
                        <div
                          key={fileIdx}
                          onClick={() => setActiveFileIndex(fileIdx)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            fontSize: '0.75rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '0.35rem 0.6rem',
                            cursor: 'pointer',
                            background: activeFileIndex === fileIdx ? 'var(--color-deep-brown)' : 'transparent',
                            color: activeFileIndex === fileIdx ? 'var(--color-warm-white)' : 'var(--text-primary)',
                            borderRadius: '2px',
                            transition: 'all 0.15s ease'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {file.type === 'image' ? <ImageIcon size={13} /> : <FileText size={13} />}
                            <span>{file.name}</span>
                          </div>
                          <span style={{ fontSize: '0.65rem', opacity: 0.7 }}>{file.size}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Commit History Feed Box */}
            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <GitCommit size={14} color="var(--accent-gold)" />
                <span>RECENT REVISION COMMITS</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {currentRepo.commits?.map((commit, cIdx) => (
                  <div key={cIdx} style={{ fontSize: '0.75rem', borderLeft: '2px solid var(--border-strong)', paddingLeft: '0.6rem' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-gold)', fontWeight: '700' }}>
                      commit {commit.hash}
                    </div>
                    <div style={{ color: 'var(--text-primary)', lineHeight: 1.3, marginTop: '0.1rem' }}>
                      {commit.msg}
                    </div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      {commit.author} • {commit.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right File Preview Canvas */}
          <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {currentFile ? (
              <div>
                {/* File Title Bar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      {currentFolder?.folder} / {currentFile.name}
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', marginTop: '0.2rem', color: 'var(--text-heading)' }}>
                      {currentFile.name}
                    </h4>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      Size: {currentFile.size}
                    </span>
                  </div>
                </div>

                {/* File Description */}
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  {currentFile.desc}
                </p>

                {/* File Graphic Preview Container */}
                <div style={{
                  position: 'relative',
                  height: '380px',
                  border: '1px solid var(--border-strong)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  background: 'var(--bg-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img 
                    src={currentFile.preview} 
                    alt={currentFile.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />

                  {/* CAD Overlay Tag */}
                  <div style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid var(--border-strong)',
                    padding: '0.4rem 0.85rem',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-heading)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}>
                    <Layers size={14} color="var(--accent-gold)" />
                    <span>NEO KASA CAD PACKAGE • VERIFIED</span>
                  </div>
                </div>
              </div>
            ) : (
              <p style={{ color: 'var(--text-muted)' }}>Select a drawing file to inspect preview.</p>
            )}

            {/* Spec Footer Notes */}
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span>STRUCTURAL REGISTRY ID: NK-CAD-{currentRepo.id.toUpperCase()}</span>
              <span>LICENSE: NEO KASA SPATIAL OPEN SPEC</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
