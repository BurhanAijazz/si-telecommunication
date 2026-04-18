I have my study materials generated in the "Exam_Prep" directory. I now want to create a professional, developer-style web dashboard to host these on GitHub Pages.

PROJECT SPECS:
- Stack: Pure HTML5, CSS3 (Modern/Minimalist), and Vanilla JavaScript.
- Library: Use 'Marked.js' (CDN) for Markdown parsing and 'Highlight.js' for technical code blocks.
- Architecture: Single Page Application (SPA) that fetches local .md files.

FEATURES TO IMPLEMENT:
1. NAVIGATION: A searchable, multi-level sidebar. Parse the "Master_Schedule.md" or the file list to group topics by "Week".
2. SEARCH: A real-time filter at the top of the sidebar to quickly jump to any topic.
3. INTERACTIVE MCQS: When rendering the markdown, detect "Questions/Checklist" sections and automatically convert them into interactive toggles (details/summary) or quiz cards.
4. UI DESIGN:
   - Clean, professional font (Inter or Roboto).
   - A sticky header with a "Dark/Light Mode" toggle.
   - A main content area with a reading-optimized width (max 800px).
   - Breadcrumbs at the top (e.g., Home > Week 4 > Electronic Devices).
5. GITHUB PAGES CONFIG: 
   - Create a '404.html' that redirects to 'index.html' (to handle SPAs on GH Pages).
   - Ensure all relative paths for images or linked files work correctly.

TASK:
- Write 'index.html', 'style.css', and 'app.js' in the root directory.
- Ensure the JavaScript correctly handles the 'fetch' calls to the "Exam_Prep" subfolders.
- Add a 'README.md' with instructions on how to use `python -m http.server` for local testing and how to push to GitHub.

Confirm when the file structure is ready for the first deployment.