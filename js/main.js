/**
 * Main JavaScript for Daffa Uria Fernanda - Cybersecurity Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons if available
  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* --------------------------------------------------------------------------
     1. Theme Switcher (Dark / Light Mode)
     -------------------------------------------------------------------------- */
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIconDark = document.getElementById('theme-icon-dark');
  const themeIconLight = document.getElementById('theme-icon-light');

  // Set default to dark mode for cybersecurity aesthetic
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    if (themeIconDark) themeIconDark.classList.remove('hidden');
    if (themeIconLight) themeIconLight.classList.add('hidden');
  } else {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    if (themeIconDark) themeIconDark.classList.add('hidden');
    if (themeIconLight) themeIconLight.classList.remove('hidden');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.documentElement.classList.contains('light');
      if (isLight) {
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        if (themeIconDark) themeIconDark.classList.add('hidden');
        if (themeIconLight) themeIconLight.classList.remove('hidden');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        localStorage.setItem('theme', 'light');
        if (themeIconDark) themeIconDark.classList.remove('hidden');
        if (themeIconLight) themeIconLight.classList.add('hidden');
      }
      if (window.lucide) window.lucide.createIcons();
    });
  }

  /* --------------------------------------------------------------------------
     2. Dynamic Typing Effect (Hero Section)
     -------------------------------------------------------------------------- */
  const typingTextEl = document.getElementById('typing-text');
  if (typingTextEl) {
    const roles = [
      'Cybersecurity Enthusiast',
      'Mahasiswa Baru S1 Teknik Informatika @ UNESA',
      'Ethical Hacking & Pentesting Learner',
      'Network Security & Defense Explorer',
      'CTF Player & Problem Solver'
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 70;
    const deletingSpeed = 40;
    const holdTime = 1800;

    function typeEffect() {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        typingTextEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingTextEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, holdTime);
        return;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeEffect, 300);
        return;
      }

      setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    }

    typeEffect();
  }

  /* --------------------------------------------------------------------------
     3. Mobile Navigation Menu Toggle
     -------------------------------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  /* --------------------------------------------------------------------------
     4. Interactive Terminal Widget
     -------------------------------------------------------------------------- */
  const terminalInput = document.getElementById('terminal-input');
  const terminalHistory = document.getElementById('terminal-history');
  const terminalForm = document.getElementById('terminal-form');
  const quickCmdBtns = document.querySelectorAll('.terminal-cmd-btn');

  const terminalCommands = {
    help: 'Perintah yang tersedia:<br>&nbsp;&nbsp;<span class="text-emerald-400">whoami</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Profil singkat Daffa<br>&nbsp;&nbsp;<span class="text-emerald-400">education</span>&nbsp;&nbsp;- Status pendidikan saat ini<br>&nbsp;&nbsp;<span class="text-emerald-400">skills</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Ringkasan keahlian & tools siber<br>&nbsp;&nbsp;<span class="text-emerald-400">interests</span>&nbsp;&nbsp;- Bidang fokus & topik yang ditekuni<br>&nbsp;&nbsp;<span class="text-emerald-400">contact</span>&nbsp;&nbsp;&nbsp;&nbsp;- Cara menghubungi Daffa<br>&nbsp;&nbsp;<span class="text-emerald-400">clear</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Bersihkan layar terminal',
    whoami: 'Daffa Uria Fernanda (Daffa)<br>Mahasiswa S1 Teknik Informatika di Universitas Negeri Surabaya (UNESA) dengan ketertarikan tinggi pada dunia Cybersecurity, Network Defense, dan Ethical Hacking.',
    education: '📚 <span class="text-emerald-400 font-semibold">Universitas Negeri Surabaya (UNESA)</span><br>Program Studi: S1 Teknik Informatika<br>Status: Mahasiswa Baru (Undergraduate Freshman)<br>Fokus Studi: Algoritma, Jaringan Komputer, Struktur Data, dan Keamanan Sistem.',
    skills: '🛡️ <span class="text-emerald-400 font-semibold">Core Security & Tech:</span><br>• Network Security & Analysis (Wireshark, Nmap)<br>• Linux Administration (Kali Linux, Ubuntu)<br>• Web App Security & OWASP Top 10 Fundamental<br>• Python Scripting for Security Automation<br>• CTF & Vulnerability Research',
    interests: '🎯 <span class="text-emerald-400 font-semibold">Bidang yang Ditekuni:</span><br>• Penetration Testing & Vulnerability Assessment<br>• Security Operations & Incident Response Fundamentals<br>• Capture The Flag (CTF) Challenges<br>• Reverse Engineering & Cryptography exploration',
    contact: '📬 Anda bisa menghubungi saya melalui formulir di bagian bawah website, atau melalui LinkedIn dan WhatsApp yang tertera.',
    clear: '__CLEAR__'
  };

  function executeTerminalCommand(cmd) {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      if (terminalHistory) terminalHistory.innerHTML = '';
      return;
    }

    const commandEntry = document.createElement('div');
    commandEntry.className = 'mb-2';
    commandEntry.innerHTML = `
      <div class="flex items-center gap-2 text-slate-400 text-xs">
        <span class="text-emerald-400 font-mono font-semibold">daffa@unesa:~$</span>
        <span class="text-slate-200 font-mono">${escapeHtml(trimmed)}</span>
      </div>
    `;

    const responseEntry = document.createElement('div');
    responseEntry.className = 'text-xs text-slate-300 font-mono pl-4 mt-1 border-l-2 border-emerald-500/40 leading-relaxed';

    if (terminalCommands[trimmed]) {
      responseEntry.innerHTML = terminalCommands[trimmed];
    } else {
      responseEntry.innerHTML = `<span class="text-rose-400">bash: ${escapeHtml(trimmed)}: command not found.</span> Ketik <span class="text-emerald-400 font-semibold">help</span> untuk daftar perintah.`;
    }

    commandEntry.appendChild(responseEntry);
    if (terminalHistory) {
      terminalHistory.appendChild(commandEntry);
      // Auto-scroll terminal to bottom
      terminalHistory.scrollTop = terminalHistory.scrollHeight;
    }
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  if (terminalForm && terminalInput) {
    terminalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      executeTerminalCommand(terminalInput.value);
      terminalInput.value = '';
    });
  }

  quickCmdBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd) {
        if (terminalInput) terminalInput.value = cmd;
        executeTerminalCommand(cmd);
      }
    });
  });

  /* --------------------------------------------------------------------------
     5. Projects Filtering
     -------------------------------------------------------------------------- */
  const filterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active state
      filterBtns.forEach(b => {
        b.classList.remove('bg-emerald-500', 'text-slate-950', 'shadow-lg', 'shadow-emerald-500/25');
        b.classList.add('bg-slate-800/80', 'text-slate-400');
      });
      btn.classList.remove('bg-slate-800/80', 'text-slate-400');
      btn.classList.add('bg-emerald-500', 'text-slate-950', 'shadow-lg', 'shadow-emerald-500/25');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category.includes(filter)) {
          card.classList.remove('hidden');
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.classList.add('hidden');
          }, 200);
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     6. Contact Form Handler (Simulated & WhatsApp / Mailto helper)
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const formSuccessAlert = document.getElementById('form-success-alert');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const subjectInput = document.getElementById('contact-subject');
      const messageInput = document.getElementById('contact-message');

      const name = nameInput ? nameInput.value : '';
      const email = emailInput ? emailInput.value : '';
      const subject = subjectInput ? subjectInput.value : 'Pesan dari Portofolio';
      const message = messageInput ? messageInput.value : '';

      // Tampilkan notifikasi sukses kirim
      if (formSuccessAlert) {
        formSuccessAlert.classList.remove('hidden');
        setTimeout(() => {
          formSuccessAlert.classList.add('hidden');
        }, 6000);
      }

      // Reset form
      contactForm.reset();
    });
  }

  /* --------------------------------------------------------------------------
     7. Scroll to Top button visibility
     -------------------------------------------------------------------------- */
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      if (scrollTopBtn) scrollTopBtn.classList.remove('opacity-0', 'pointer-events-none');
    } else {
      if (scrollTopBtn) scrollTopBtn.classList.add('opacity-0', 'pointer-events-none');
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
