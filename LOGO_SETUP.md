# Logo Setup Instructions

## Current Status
The regulatory logos are currently displayed as styled text placeholders. To use actual logo images, follow these steps:

## Required Images
You need to add the following images to the `src/assets/` directory:

1. **PANNA Logo**: `newLogo.png` (for the navbar)
2. **Gambling Commission**: `gambling_commision_logo.png`
3. **Gamstop**: `gamstop_logo.png`
4. **BeGambleAware**: `begambleaware_logo.png`

## How to Add Real Logos

### Option 1: Use Text Logo (Current - Recommended)
The current setup uses a text-based "PANNA" logo which looks clean and professional. No changes needed.

### Option 2: Add Image Logo
If you want to use an image logo:

1. Add your logo image to `src/assets/newLogo.png`
2. Update `src/components/Navbar.js`:
   ```jsx
   import logo from "../assets/newLogo.png";
   
   // Replace this line:
   <span className="navbar-logo-text">PANNA</span>
   
   // With this:
   <img src={logo} alt="PANNA" className="navbar-logo" />
   ```

### Option 3: Add Regulatory Logo Images
To use actual regulatory logo images:

1. Download the official logos from:
   - Gambling Commission: https://www.gamblingcommission.gov.uk/
   - Gamstop: https://www.gamstop.co.uk/
   - BeGambleAware: https://www.begambleaware.org/

2. Add them to `src/assets/` with the exact filenames:
   - `gambling_commision_logo.png`
   - `gamstop_logo.png`
   - `begambleaware_logo.png`

3. Update `src/components/Footer.js`:
   ```jsx
   import gamblingCommissionLogo from "../assets/gambling_commision_logo.png";
   import gamstopLogo from "../assets/gamstop_logo.png";
   import begambleawareLogo from "../assets/begambleaware_logo.png";
   
   // Replace the placeholder divs with:
   <img src={gamblingCommissionLogo} alt="Gambling Commission" className="regulatory-logo" />
   <img src={gamstopLogo} alt="Gamstop" className="regulatory-logo" />
   <img src={begambleawareLogo} alt="Be Gamble Aware" className="regulatory-logo" />
   ```

## Current Placeholder Design
The current placeholders are styled to look like official logos with:
- Dark background (#222)
- White text
- Uppercase formatting
- Proper spacing and borders
- Responsive sizing

This gives a professional appearance while you gather the actual logo assets.

## Recommendation
The current text-based approach looks clean and professional. You can launch with this design and add the actual logo images later when you have them. 