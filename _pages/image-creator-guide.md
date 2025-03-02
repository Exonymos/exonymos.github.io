---
title: "Image Creator Guide"
description: "This guide will help you create images for your projects and blog posts using Screenshot Machine and Screenshot Rocks."
tags:
    - user manual
    - utility
    - image creator
    - guide
date: "2024-02-02"
thumbnail: ""
published: true
bookmark: true
---

This guide will help you create images for your projects and blog posts. The images are used as thumbnails and previews for your projects and blog posts.

The website images are first created using [Screenshot Machine](https://www.screenshotmachine.com/website-screenshot-generator.php), then the alt images with the window frame are created using [Screenshot Rocks](https://screenshot.rocks).

## Screenshot Machine

1. Go to [Screenshot Machine](https://www.screenshotmachine.com/website-screenshot-generator.php).
2. Enter the URL of the website you want to take a screenshot of.
3. Select the settings as defined below:
    - **Device Type**: Desktop
    - **Width**: 1024
    - **Height**: 768
    - **Zoom**: 100%
    - **Image Format**: PNG
    - **Delay [in seconds]**: 4
    - [Keep the rest of the settings as default]
4. Enter the captcha code.
5. Click on the "Capture Screenshot" button.
6. Rename the image to `project-name.png` and save it in the `assets/img/thumbnail/` folder.

## Screenshot Rocks

1. Go to [Screenshot Machine](https://www.screenshotmachine.com/website-screenshot-generator.php).
2. Enter the URL of the website you want to take a screenshot of or upload an image.
3. Select the settings as defined below:
    - **Frame Type**: White Transculent
    - **Frame Settings**: 
      - **Show Window Controls**: Checked
      - **Show Nav Buttons**: Unchecked
      - **Show Settings Button**: Unchecked
      - **Show URL Bar**: Checked
      - **Show URL Text**: Checked
      - **Browser URL**: [URL of the website]
    - **Background Settings**: None
    - **Canvas Settings**: 
      - **Width**: 1100
      - **Height**: 800
      - **Size**: 90
      - **Horizontal Position**: 0
      - **Vertical Position**: 0
      - **Border Radius**: 30
      - **Shadow**: 10
      - **Horizontal Tilt**: 0
      - **Vertical Tilt**: 0
4. Set the image format to PNG.
5. Click on the "Download PNG" button to download the image.
6. Rename the image to `project-name_alt.png` and save it in the `assets/img/thumbnail/alt/` folder.
