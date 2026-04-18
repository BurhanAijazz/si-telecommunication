# SI Telecom Exam Prep Dashboard

A single-page web dashboard for preparing for the **JKSSB Sub-Inspector (Telecommunication)** exam.

## Features

- 16-week structured study plan with 19 detailed topic files
- 6 full-length mock tests (100 MCQs each, 600 questions total)
- Interactive MCQ cards with toggle-to-reveal answers
- Real-time sidebar search (press `/` or `Ctrl+K`)
- Dark / Light mode toggle with persistent preference
- Progress tracking across sessions
- Mobile-responsive design
- Works offline once loaded (caches markdown in memory)

## Tech Stack

- **HTML5 / CSS3 / Vanilla JavaScript** (no build tools)
- **Marked.js** (CDN) for Markdown rendering
- **Highlight.js** (CDN) for code syntax highlighting
- **Inter** font from Google Fonts

## Local Testing

You need a local HTTP server because `fetch()` requires the `http://` protocol (won't work with `file://`).

### Option 1: Python (recommended)

```bash
# Python 3
cd "E:\Study\si telecommunnication"
python -m http.server 8000

# Then open: http://localhost:8000
```

### Option 2: Node.js

```bash
# Install once
npm install -g http-server

# Run
cd "E:\Study\si telecommunnication"
http-server -p 8000

# Then open: http://localhost:8000
```

### Option 3: VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` and select "Open with Live Server"

## Deploy to GitHub Pages

### Step 1: Create a GitHub repository

```bash
cd "E:\Study\si telecommunnication"
git init
git add .
git commit -m "Initial commit: SI Telecom Exam Prep Dashboard"
```

### Step 2: Push to GitHub

```bash
# Replace with your GitHub username and repo name
git remote add origin https://github.com/YOUR_USERNAME/si-telecom-exam-prep.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under "Source", select **Deploy from a branch**
4. Choose the **main** branch and **/ (root)** folder
5. Click **Save**
6. Your site will be live at: `https://YOUR_USERNAME.github.io/si-telecom-exam-prep/`

### After enabling Pages

If your repo is named something other than `si-telecom-exam-prep`, update `pathSegmentsToKeep` in `404.html` accordingly.

## File Structure

```
.
├── index.html                  # Main SPA shell
├── style.css                   # All styling (light/dark themes)
├── app.js                      # Application logic
├── 404.html                    # GitHub Pages SPA redirect
├── README.md                   # This file
└── Exam_Prep/
    ├── Master_Schedule.md      # 16-week study plan
    ├── Week01_Topic01_*.md     # Topic files (19 total)
    ├── Week01_Topic02_*.md
    ├── ...
    ├── Week14_Topic15_*.md
    └── Mock_Tests/
        ├── Mock_Test_1.md      # Basic to Moderate
        ├── Mock_Test_2.md      # Moderate to Advanced
        ├── Mock_Test_3.md      # Exam Level
        ├── Mock_Test_4.md      # Advanced Application & Scenario-Based
        ├── Mock_Test_5.md      # Cross-Domain & Numerical Focus
        └── Mock_Test_6.md      # Final Simulation (Previous Year Pattern)
```

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `/` or `Ctrl+K` | Focus sidebar search |
| `Esc` | Clear search |
