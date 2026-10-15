# doodleblue-tasks


A static campus-events website for discovering student activities, checking event details and schedules, and trying a sample registration flow.

## Features

- Home page with featured events and event categories
- Events page with title search and category filters
- Event schedule with dates, times, venues, and links to event details
- Event details page with information about Tech Fest 2026
- Registration form with basic required-field validation and an on-page confirmation
- About page describing the project and its event categories
- Responsive layout styled with CSS

## Pages

| File | Description |
| --- | --- |
| `index.html` | Home page and featured events |
| `events.html` | Event listings, search, and category filters |
| `event-details.html` | Details for Tech Fest 2026 |
| `schedule.html` | Event dates, times, and venues |
| `register.html` | Sample event registration form |
| `about.html` | About the Campus Events project |

## Run locally

No build step or package installation is required. Open `index.html` in a browser, or serve the project directory with a local static-file server. For example, in VS Code you can use the Live Server extension and open `index.html` with **Open with Live Server**.

Keep the HTML files, `css/` directory, and `images/` directory together so the relative stylesheet and image links continue to work.

## Project structure

```text
campus-events/
├── index.html
├── about.html
├── events.html
├── event-details.html
├── schedule.html
├── register.html
├── css/
│   └── styles.css
└── images/
    ├── campus-hero.jpg
    └── ...
```

## Notes

This is a front-end demonstration. The registration form displays a confirmation in the browser, but does not send registrations to a server or store them. Event content and schedule information are static HTML.
