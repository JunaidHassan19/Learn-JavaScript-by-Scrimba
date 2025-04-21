# Custom Links - Chrome Extension

A simple Chrome extension for saving and managing custom links. This project is part of the "Learn JavaScript by Scrimba" course.

## Features

- Save URLs manually by entering them in the input field
- Save the current tab's URL with a single click
- View a list of all saved links
- Delete individual links
- Delete all links at once
- Links persist between browser sessions using local storage

## Recording

![Custom Links Extension](images/recording.mp4)

## How It Works

The extension allows you to:

1. Enter any URL in the input field and click "SAVE INPUT" to save it
2. Click "SAVE TAB" to automatically save the URL of your current tab
3. Click "DELETE ALL" (double-click required) to remove all saved links
4. Click the "Delete" button next to any link to remove just that specific link

## Technologies Used

- HTML
- CSS
- JavaScript
- Chrome Extensions API
- Local Storage API

## Installation

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension folder
5. The extension should now appear in your browser toolbar

## Code Structure

- `index.html` - The main popup UI
- `index.css` - Styling for the extension
- `index.js` - Core functionality
- `manifest.json` - Extension configuration file
- `icon.png` - Extension icon

## What I Learned

This project demonstrates several key JavaScript concepts:

- DOM manipulation
- Event listeners
- Chrome Extension APIs
- Working with local storage
- Array methods
- Template literals
- Conditional statements

## Future Enhancements

Potential improvements for the future:

- Folder organization for saved links
- Search functionality
- Link categories/tags
- Custom icons for different websites
- Export/import functionality

## License

This project is created as part of the "Learn JavaScript by Scrimba" course.
