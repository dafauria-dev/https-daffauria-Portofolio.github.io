# Portofolio & Personal Branding - Daffa Uria Fernanda

Selamat datang di website portofolio personal branding **Daffa Uria Fernanda**! Website ini dirancang khusus dengan gaya modern cyber aesthetic, responsif di segala perangkat (mobile, tablet, desktop), dilengkapi fitur terminal interaktif, dark/light theme toggle, dan siap untuk dipublikasikan.

---

## 🚀 Cara Membuka Website

Website ini dibuat tanpa memerlukan instalasi software yang rumit:
1. Buka folder ini di File Explorer Windows Anda (`c:\Users\dafau\Downloads\gemini anti gravity`).
2. Klik dua kali pada file **`index.html`** (atau klik kanan -> *Open with* -> Google Chrome / Microsoft Edge).
3. Website akan langsung terbuka dan berfungsi dengan lancar!

---

## 🛠️ Panduan Mengisi & Mengubah Data Sendiri

File utama yang perlu Anda ubah adalah **`index.html`**. Anda bisa membukanya menggunakan VS Code, Notepad++, atau text editor favorit Anda.

### 1. Mengubah Link Media Sosial & Kontak (Nomor 4)
Cari bagian komentar berikut di `index.html`:

- **LinkedIn**:
  ```html
  <!-- Ganti href="#" dengan link profil LinkedIn Anda -->
  <a href="https://linkedin.com/in/username-anda" target="_blank" ...>
  ```

- **GitHub**:
  ```html
  <!-- Ganti href="#" dengan link GitHub Anda -->
  <a href="https://github.com/username-anda" target="_blank" ...>
  ```

- **Instagram**:
  ```html
  <!-- Ganti href="#" dengan link Instagram Anda -->
  <a href="https://instagram.com/username-anda" target="_blank" ...>
  ```

- **WhatsApp**:
  ```html
  <!-- Ganti href="#" dengan link wa.me/62... -->
  <a href="https://wa.me/6281234567890" target="_blank" ...>
  ```

- **Email Pribadi**:
  ```html
  <a href="mailto:emailasli@gmail.com" ...>
  ```

### 2. Mengubah Riwayat Pendidikan Menengah (SMA / SMK)
Buka `index.html` dan cari bagian section `#education`. Ganti teks:
- `[Nama SMA / SMK / Sederajat]` dengan nama sekolah asal Anda.
- `[MIPA / TKJ / RPL / Terkait]` dengan jurusan Anda saat di sekolah menengah.

### 3. Mengganti Foto Profil Avatar
Pada section Hero (`#hero`), terdapat kartu identitas dengan ikon tameng (`shield-check`). Jika Anda ingin menggantinya dengan foto asli Anda:
1. Simpan foto Anda di folder `assets/images/foto-daffa.jpg`.
2. Ganti elemen ikon di `index.html`:
   ```html
   <!-- Dari ikon: -->
   <i data-lucide="shield-check" class="..."></i>

   <!-- Menjadi foto Anda: -->
   <img src="assets/images/foto-daffa.jpg" alt="Daffa Uria Fernanda" class="w-full h-full object-cover">
   ```

---

## 🌐 Cara Upload Gratis ke Internet (Online)

Agar website ini bisa diakses publik dan dicantumkan di bio LinkedIn/Instagram/CV Anda:

### Opsi 1: GitHub Pages (Gratis & Populer untuk Developer)
1. Buat akun di [GitHub](https://github.com).
2. Buat repository baru dengan nama `daffauria.github.io` (atau nama lain).
3. Upload seluruh file dari folder ini (`index.html`, folder `css`, folder `js`).
4. Buka **Settings** -> **Pages** -> pilih branch `main` -> Klik **Save**.
5. Website Anda akan online di `https://daffauria.github.io`!

### Opsi 2: Vercel / Netlify (Sangat Cepat & Otomatis)
1. Masuk ke [Vercel](https://vercel.com) atau [Netlify](https://netlify.com).
2. Tarik (drag & drop) folder project ini langsung ke dashboard mereka.
3. Website akan langsung aktif dalam 5 detik dan mendapatkan link online gratis!
