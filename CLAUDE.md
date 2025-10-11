# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**AgendaMed** is a medication collection scheduling system for healthcare units. It's a modern web application built with vanilla JavaScript (ES6 modules), Tailwind CSS, and Vite that allows patients to:
- Schedule medication collection appointments at healthcare units
- Cancel existing appointments
- Generate time-limited check-in tokens (with QR codes) for appointment verification

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint

# Format code with Prettier
npm run format
```

## Architecture

### Project Structure
```
agendamed/
├── src/                          # Source code
│   ├── index.html                # Main HTML file (clean, no inline code)
│   ├── styles/                   # CSS modules
│   │   ├── main.css              # Main entry (imports all)
│   │   ├── base.css              # Tailwind + variables
│   │   ├── animations.css        # Global animations
│   │   └── components/           # Component-specific styles
│   │       ├── calendar.css
│   │       ├── modal.css
│   │       ├── toast.css
│   │       └── buttons.css
│   └── js/                       # JavaScript ES6 modules
│       ├── main.js               # Application entry point
│       ├── config/               # Configuration & constants
│       │   └── constants.js
│       ├── core/                 # Core functionality
│       │   ├── state.js          # Global state management
│       │   └── dom.js            # DOM references (30+ elements)
│       ├── services/             # Business logic services
│       │   ├── storage.js        # localStorage abstraction
│       │   └── user.js           # User data service
│       ├── modules/              # Feature modules
│       │   ├── calendar.js       # Calendar rendering & navigation
│       │   ├── appointments.js   # Appointment CRUD
│       │   ├── token.js          # Token generation + QR code
│       │   ├── notifications.js  # Header notifications
│       │   └── modal.js          # Modal control
│       ├── components/           # UI components
│       │   ├── toast.js          # Toast notifications
│       │   └── ui-controller.js  # Button states & toggles
│       └── utils/                # Utility functions
│           ├── formatters.js     # Date/string formatting
│           └── events.js         # Event listener setup
├── public/                       # Static assets
├── config/                       # Build configurations
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── .eslintrc.json               # ESLint configuration
├── .prettierrc                  # Prettier configuration
└── package.json                 # Dependencies & scripts
```

### State Management
The application uses a centralized state object in `src/js/core/state.js`:
```javascript
{
  currentDate: Date,        // Current month in calendar
  selectedDate: Date,       // User-selected date
  appointment: Object,      // Active appointment (persisted to localStorage)
  activeButton: String,     // Currently expanded UI section
  tokenInterval: Number,    // Token countdown interval ID
  tokenExpired: Boolean,    // Token expiration status
  currentToken: String      // Current generated token
}
```

### Key Features Implementation

**Calendar System** (`modules/calendar.js`):
- Interactive month navigation
- Disables past dates
- Highlights today
- Prevents double-booking
- Opens modal on date selection

**Appointment Management** (`modules/appointments.js`):
- Create appointment (date + time + health unit)
- Cancel appointment with confirmation
- Persist to localStorage
- Single active appointment per user

**Token Generation** (`modules/token.js`):
- 6-character alphanumeric tokens
- QR code generation using QRCode.js
- 15-minute countdown timer with auto-expiration
- Visual expiration indicators
- Copy to clipboard functionality

**UI Controller** (`components/ui-controller.js`):
- Toggle expandable sections
- Manage button states (enable/disable based on appointment)
- Chevron rotation animations

## Technology Stack

### Core
- **JavaScript**: ES6 Modules (Vanilla JS, no framework)
- **CSS**: Tailwind CSS + custom component styles
- **Build Tool**: Vite 5.x
- **Package Manager**: npm

### Libraries
- **Feather Icons**: Icon library
- **QRCode.js**: QR code generation

### Development Tools
- **ESLint**: Code linting
- **Prettier**: Code formatting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## Important Implementation Details

### localStorage Schema
```javascript
{
  "appointment": {
    "date": "sexta-feira, 15 de dezembro de 2025",
    "time": "10:00",
    "healthUnit": "UBS Central",
    "timestamp": 1234567890000
  }
}
```

### Health Units Available
- UBS Central
- Posto de Saúde Norte
- Hospital Municipal Sul
- Farmácia Popular Oeste
- Centro de Saúde Leste

### Time Slots
Available from 08:00 to 17:00 in 30-minute intervals

### Token Configuration
- **Length**: 6 characters
- **Characters**: A-Z, 0-9
- **Validity**: 15 minutes
- **Format**: Alphanumeric uppercase

## Code Style Guidelines

### JavaScript
- Use ES6 modules (import/export)
- Use arrow functions for callbacks
- Use `const` for immutable values, `let` for mutable
- Add JSDoc comments for public functions
- Follow Airbnb style guide (enforced by ESLint)

### CSS
- Use Tailwind utilities first
- Custom CSS only when necessary
- Component-specific styles in separate files
- Use CSS variables for theme colors

### File Organization
- One module per file
- Max ~100 lines per file
- Clear separation of concerns
- Descriptive function names

## Development Workflow

1. **Adding a new feature module**:
   - Create file in `src/js/modules/`
   - Import necessary dependencies from `core/`, `services/`, `utils/`
   - Export public functions
   - Add to `main.js` if initialization needed

2. **Adding new styles**:
   - Create file in `src/styles/components/`
   - Import in `src/styles/main.css`
   - Use existing CSS variables when possible

3. **Modifying state**:
   - All state mutations should go through `core/state.js`
   - Update localStorage via `services/storage.js`
   - Trigger UI updates after state changes

## Testing

Currently no automated tests are configured. Manual testing checklist:
- [ ] Calendar renders correctly
- [ ] Date selection opens modal
- [ ] Create appointment saves to localStorage
- [ ] Cancel appointment clears data
- [ ] Token generates with QR code
- [ ] Token countdown works and expires
- [ ] All buttons respond correctly
- [ ] Toast notifications display
- [ ] Header notification shows active appointment

## Known Limitations

- No backend (localStorage only)
- No authentication
- Single user per browser
- No appointment validation against actual availability
- No real integration with healthcare systems

## Future Enhancements

1. **Backend API** (Express.js + PostgreSQL)
2. **User Authentication** (JWT)
3. **PWA Support** (offline functionality)
4. **Push Notifications**
5. **Admin Dashboard**
6. **QR Code Scanner** for healthcare staff
7. **LGPD Compliance** documentation

## Troubleshooting

### "Module not found" errors
- Ensure all imports use correct relative paths
- Check `vite.config.js` aliases are configured

### Styles not applying
- Verify Tailwind is configured in `tailwind.config.js`
- Check `postcss.config.js` has tailwindcss plugin
- Ensure `main.css` imports all component styles

### State not persisting
- Check localStorage is enabled in browser
- Verify `services/storage.js` is being used
- Check browser console for errors

## Contact & Support

For questions about the codebase, refer to:
- `.claude/memory/` - Project context and decisions
- `docs/` - Additional documentation
- Git commit history - Detailed change log
