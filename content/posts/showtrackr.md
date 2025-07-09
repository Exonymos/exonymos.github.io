+++
title= "Showtrackr"
date= 2025-07-09
lastmod= 2025-07-09
description= "A private, free, and straightforward way to manage your media watchlist directly on your own computer."
summary= "ShowTrackr is a web application for managing your media watchlist, built with Python and Flask, featuring a modern UI and local data storage."
keywords= ["media management", "watchlist", "web application", "python", "flask"]
tags= ["media", "watchlist", "web app", "python", "flask"]
categories= ["web development", "python", "flask"]
linktitle= "ShowTrackr - Manage Your Media Watchlist"
toc= true
draft= false
+++

[Features Guide]: https://github.com/Exonymos/ShowTrackr-Web/blob/main/docs/features.md
[Previews folder]: https://github.com/Exonymos/ShowTrackr-Web/blob/main/previews/preview.md
[latest release]: https://github.com/Exonymos/ShowTrackr-Web/releases/latest
[Setup Guide]: https://github.com/Exonymos/ShowTrackr-Web/blob/main/docs/setup.md
[Contribution Guidelines]: https://github.com/Exonymos/ShowTrackr-Web/blob/main/CONTRIBUTING.md
[issues page]: https://github.com/Exonymos/ShowTrackr-Web/issues
[LICENSE]: https://github.com/Exonymos/ShowTrackr-Web/blob/main/LICENSE

## Overview

ShowTrackr provides a private, free, and straightforward way to manage your media watchlist directly on your own computer. No cloud accounts, no data collection, just your list, your way.

It uses a modern web stack (Python/Flask backend, HTMX for dynamic frontend updates without full page reloads) and is styled with Tailwind CSS and DaisyUI for a clean, responsive, and themeable interface. All your data is stored locally in a simple SQLite database file, ensuring privacy and portability.

## Key Features

- **Manual Entry & Management:** Add, edit, and delete movies and TV shows with comprehensive details (Title, Type, Year, Status, Rating, Dates, External IDs, Notes, Poster URL).
- **Dynamic Watchlist View:** Browse your collection with an intuitive list view that includes:
  - Date grouping (Month/Day, prioritizing "Date Watched").
  - Poster image display with hover-preview tooltips.
  - Visually appealing star-based ratings.
  - Quick links to IMDb, TMDb, and Letterboxd using provided IDs.
- **Powerful Filtering:** Narrow down your list by Status, Type, Release Year(s), and Rating Range.
- **Flexible Sorting:** Order your items by Date Watched/Added, Title (case-insensitive), Release Year, or Rating, with Asc/Desc toggle and nulls-last logic.
- **Interactive UI:**
  - Smooth pagination with configurable items per page and direct page input.
  - HTMX-powered updates for a seamless experience without full page reloads.
  - OOB (Out-of-Band) swaps for dynamic updates to control elements.
- **Personalization & Utility:**
  - Extensive theme selection powered by DaisyUI, changeable on the fly.
  - Local data storage (`database.db`) for privacy and control.
  - Data Import/Export functionality (JSON format).
  - Search watchlist items by title (Ctrl+K shortcut).
  - Feedback submission form.
- **User-Friendly:** Designed for ease of use, even for non-developers, after initial setup. Includes unsaved changes warnings and informative toast notifications.

➡️ **For a full list and details, see the [Features Guide]**

## Previews

![ShowTrackr Home Page](https://raw.githubusercontent.com/Exonymos/ShowTrackr-Web/refs/heads/main/previews/home.png)
_Main watchlist view with the Cupcake theme._

More previews showcasing different themes and features are available in the [Previews folder].

## Quick Start

1. **Download the [latest release].**

   - Download the `ShowTrackr-Web-vX.X.X.zip` file. X.X.X is the version number.
   - Unzip the downloaded file to a location of your choice.
   - Open the unzipped folder.

2. **Run the Setup Script:**

   - **Windows:** Double-click `setup.bat` or run `setup.bat` in Command Prompt.
   - **Linux/macOS:** Run `bash setup.sh` in your terminal (you may need to `chmod +x setup.sh` first).

3. **Follow the prompts.** The setup will:

   - Check for Python 3.10+, pip, and venv (and help you install them if missing)
   - Install the `rich` library for beautiful output
   - Install all Python dependencies
   - Set up the database and configuration

4. **Activate the virtual environment:**

   - **Windows:** `.\.venv\Scripts\activate`
   - **Linux/macOS:** `source .venv/bin/activate`

5. **Run the application:**
   - **Windows:** `run.bat`
   - **Linux/macOS:** `bash run.sh`

If you encounter errors, see the [Setup Guide] for troubleshooting and manual steps.

## Detailed Documentation

For comprehensive information, please refer to the documentation in the [docs/](https://github.com/Exonymos/ShowTrackr-Web/blob/main/docs/index.md) folder.

## Contributing

Contributions are highly encouraged and welcome! Whether it's reporting a bug, suggesting a feature, or submitting code changes, your help is appreciated.

Please read our [Contribution Guidelines] for details on our code of conduct and the process for submitting pull requests. You can also check the [issues page] for existing ideas or problems.

## License

This project is licensed under the **GNU General Public License v3.0**.

See the [LICENSE] file for full details.

## Acknowledgements

ShowTrackr is built with ❤️ and the help of these fantastic open-source projects:

- [Python](https://www.python.org/) & [Flask](https://flask.palletsprojects.com/)
- [HTMX](https://htmx.org/)
- [SQLite](https://www.sqlite.org/)
- [SQLAlchemy](https://sqlalchemy.org/) & [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/)
- [Alembic](https://alembic.sqlalchemy.org/) & [Flask-Migrate](https://flask-migrate.readthedocs.io/)
- [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- [Simple Icons](https://simpleicons.org/)
