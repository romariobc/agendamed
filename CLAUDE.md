# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**AgendaMed** is a medication collection scheduling system for healthcare units. It's a single-page web application built with vanilla HTML, CSS (Tailwind CSS), and JavaScript that allows patients to:
- Schedule medication collection appointments at healthcare units
- Cancel existing appointments
- Generate time-limited check-in tokens (with QR codes) for appointment verification

The application is entirely client-side with localStorage-based persistence.

## Architecture

### Single-Page Application Structure
- **agendamed.html**: Complete standalone application containing HTML structure, embedded styles, and JavaScript logic
- **package.json**: Minimal npm configuration (currently just metadata, no dependencies or scripts configured)

### State Management
The application uses a centralized state object (`state`) in the main JavaScript block:
```javascript
let state = {
    currentDate: new Date(),
    selectedDate: null,
    appointment: JSON.parse(localStorage.getItem('appointment')) || null,
    activeButton: null,
    tokenInterval: null,
    tokenExpired: false,
    currentToken: null
};
```

Appointment data persists to localStorage and includes:
- `date`: Formatted date string
- `time`: Selected time slot (08:00-17:00 in 30-min intervals)
- `healthUnit`: Selected healthcare unit
- `timestamp`: Creation timestamp

### Key Features Implementation

**Calendar System** (lines 466-539):
- Interactive month navigation
- Disables past dates
- Highlights today
- Prevents double-booking (one active appointment per user)

**Token Generation** (lines 566-626):
- 6-character alphanumeric tokens
- QR code generation using qrcodejs library
- 15-minute countdown timer with auto-expiration
- Visual expiration indicators

**Expandable Sections** (lines 437-464):
- Toggle mechanism for AGENDAR/CANCELAR/GERAR TOKEN buttons
- Chevron rotation animations
- Only one section open at a time

### External Dependencies (CDN)
- Tailwind CSS (styling framework)
- Feather Icons (icon library)
- QRCode.js (QR code generation)

## Development Commands

Currently, no build, test, or development scripts are configured in package.json. The application runs directly by opening agendamed.html in a browser.

To set up a development environment:
```bash
# Install a local server (if needed)
npm install -g live-server

# Run local development server
live-server
```

## UI/UX Flow

1. **User loads page** → User info displays (simulated: "João da Silva", CPF: 123.456.789-09)
2. **Schedule appointment** → Select date → Choose time slot and healthcare unit → Confirm
3. **View appointment** → Notification bar shows active appointment details
4. **Generate token** → Creates 6-char token with QR code, valid for 15 minutes
5. **Cancel appointment** → Confirmation dialog → Clears localStorage and resets UI

## Important Implementation Details

- **Button state logic** (lines 554-564): CANCELAR and GERAR TOKEN buttons are disabled when no appointment exists
- **Modal system** (lines 212-279): Date/time/unit selection modal with validation
- **Toast notifications** (lines 632-654): Temporary feedback messages with different types (success/error/warning/info)
- **Icon refresh** (line 657): Feather icons re-render every 1 second to handle dynamic content

## Healthcare Units Available
- UBS Central
- Posto de Saúde Norte
- Hospital Municipal Sul
- Farmácia Popular Oeste
- Centro de Saúde Leste

## Time Slots
Available from 08:00 to 17:00 in 30-minute intervals (08:00, 08:30, 09:00... 17:00)
