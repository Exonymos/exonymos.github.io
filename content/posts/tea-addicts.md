---
title: "Tea Addicts"
date: 2024-08-24
author: Exonymos
description: "A fun website that counts the number of sips of tea taken by users globally."
keywords: ["tea", "counter", "sips", "global"]
tags: ["web app", "firebase", "javascript"]
summary: Tea Addicts is a fun and interactive web application that allows users to count the number of sips of tea taken globally. Each time a user clicks the "Sip Some Tea" button, the counter increments, and a random sipping sound is played.
toc: true
draft: false
---

## Overview

Tea Addicts is a fun and interactive web application that allows users to count the number of sips of tea taken globally. Each time a user clicks the "Sip Some Tea" button, the counter increments, and a random sipping sound is played. The global count is stored and synchronized using Firebase Firestore.

### Quick Links

<div align="center">
    <a href="https://exonymos.github.io/projects/Tea-Addicts/" target="_blank">
      <img src="https://img.shields.io/badge/live-website-0064b4?style=for-the-badge&labelColor=black&logo=vercel" alt="Live Website">
    </a>
    <a href="https://github.com/Exonymos/projects/tree/614c31a94cb69ec83d90d95fe5e851e0cf2572f8/Tea-Addicts" target="_blank">
      <img src="https://img.shields.io/badge/view-source-c34300?style=for-the-badge&labelColor=black&logo=github" alt="View Source">
    </a>
</div>

## Features

- Real-time global tea sip counter
- Random sipping sounds for each sip
- Responsive design
- Error handling for network issues

## Setup

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Exonymos/projects/tree/614c31a94cb69ec83d90d95fe5e851e0cf2572f8/Tea-Addicts.git
   cd tea-addicts
   ```

2. **Install dependencies:**
   This project uses Firebase, so make sure you have an internet connection to load the Firebase SDKs.

3. **Configure Firebase:**

   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Replace the Firebase configuration in `js/app.js` with your project's configuration.

4. **Run the project:**
   Open `index.html` in your web browser.

## Usage

- Open the web application.
- Click the "Sip Some Tea" button to increment the global sip counter.
- Enjoy the random sipping sounds!

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Exonymos/projects/blob/614c31a94cb69ec83d90d95fe5e851e0cf2572f8/LICENCE) file for details.

## Contact

If you have any questions or suggestions, feel free to contact me at [GitHub](https://github.com/Exonymos).
