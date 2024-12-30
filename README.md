---

# Happy New Year Countdown

This project is a dynamic New Year's countdown web page that displays the current time, date, and day of the week. When the new year arrives, it will display a festive "Happy New Year" message with animated fireworks.

## Features

- **Real-time Date & Time**: Displays the current day, date, and time (with hours, minutes, seconds).
- **New Year Countdown**: When the year changes to 2025, special animations and a "Happy New Year" message are triggered.
- **Background Animations**: Snowy cityscape animation (`city` video) is visible throughout, and fireworks (`crackers` video) will be shown when the new year hits.
- **Text Styling**: Dynamic color changes in the time display, with smooth transitions as seconds change.

## Prerequisites

- A modern browser (Chrome, Firefox, Edge, etc.) for best performance.
- HTML5-compliant browser (to play videos and apply styling).
- The project includes `city.mp4` and `fireworks.mp4` for animations, so ensure the video files are accessible.

## File Structure

```
/project-directory
  ├── newyear.html            # Main HTML file
  ├── newyear.js            # JavaScript file handling the time logic and animations
  ├── newyear.css           # CSS file for styling the page and animations
  ├── city.mp4              # Video file for snowy cityscape animation
  └── fireworks.mp4         # Video file for fireworks animation
```

## How to Use

1. **Download the project files**: Ensure all files (`newyear.html`, `newyear.js`, `newyear.css`, `city.mp4`, `fireworks.mp4`) are in the same directory.
   
2. **Open `newyear.html`** in a web browser. This will display the countdown and live time.

3. **Observe the behavior**:
   - The page shows the current date, time, and day.
   - When the year changes to 2025 (midnight), the page will hide the snowy cityscape video and display fireworks along with a "Happy New Year" message.

## How It Works

- **JavaScript (`newyear.js`)**:
   - The script dynamically updates the date, time, and day.
   - It uses the `Date` object to get the current time, and updates the DOM elements (`#date`, `#day`, `#hour`, `#min`, `#sec`, `#ampm`) every second.
   - When the new year (2025) arrives, it triggers a change in the display by:
     - Hiding the `#city` video and showing the `#crackers` (fireworks) video.
     - Displaying the "Happy New Year" text and making it visible.
   - The time and date are styled with glowing effects and color transitions.

- **CSS (`newyear.css`)**:
   - Provides the basic styling, ensuring the content is centered on the page and that the videos are fullscreen.
   - The text (time, date, day) uses a cursive font, with styles that change color dynamically based on the seconds.
   - The New Year message (`#newyear`) is initially hidden and only displayed at midnight.

- **HTML (`index.html`)**:
   - Displays the current date, time, and a "Happy New Year" message.
   - Uses `h1` and `h2` elements for the time and date, and `video` elements for the animations.
   - Links the external JavaScript and CSS files to manage functionality and styling.

## Known Issues

- Ensure the video files (`city.mp4` and `fireworks.mp4`) are correctly linked and available. If the videos are not loading, check the file paths.
- The page may have a slight delay when transitioning to the "Happy New Year" message, depending on the system's time zone and load.


---
