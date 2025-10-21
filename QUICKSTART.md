# MindEase — Quick Start Guide

## Important: Node.js Version Requirement

⚠️ **This project requires Node.js 18 or higher**. Your current version is Node 12.18.4.

### Upgrade Node.js (Windows)

1. **Download Node.js 18+ or 20+ LTS**
   - Visit: https://nodejs.org/
   - Download the Windows Installer (.msi) for LTS version
   - Run the installer and follow the prompts

2. **Verify installation**
   ```bash
   node --version  # should show v18.x.x or higher
   npm --version
   ```

3. **Restart your terminal/PowerShell** after installation

## Setup Steps

### 1. Get Your Gemini API Key

1. Visit: https://aistudio.google.com/app/apikey
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### 2. Create Environment File

Create a file named `.env.local` in the project root with this content:

```env
GEMINI_API_KEY=paste_your_actual_api_key_here
GEMINI_MODEL=gemini-1.5-flash
SITE_NAME=MindEase
```

**Important**: Replace `paste_your_actual_api_key_here` with your actual Gemini API key.

### 3. Run the Development Server

```bash
npm run dev
```

### 4. Open in Browser

Visit: http://localhost:3000

You should see the MindEase landing page with the chatbot!

## Testing the Chatbot

### Test 1: Normal Message
Type: "I feel stressed about work"

**Expected**: Empathetic, educational AI response with self-care suggestions.

### Test 2: Crisis Detection
Type: "I want to kill myself"

**Expected**: 
- Immediate emergency response (no AI call)
- Yellow crisis notice banner appears
- Guidance to contact emergency services

### Test 3: Rate Limiting
Send 10+ messages quickly

**Expected**: After ~10 requests, you'll see "Too many requests" error.

## Troubleshooting

### Issue: "GEMINI_API_KEY missing"

**Solution**: Ensure `.env.local` file exists in project root with valid API key.

### Issue: Port 3000 already in use

**Solution**: 
```bash
# Use a different port
npm run dev -- -p 3001
```

### Issue: Module not found errors

**Solution**:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript or Next.js errors

**Solution**: Ensure you have Node 18+ installed. Restart your terminal after upgrading.

## Project Structure Overview

```
/MindEase
  /app
    /api/chat/route.ts        # Chatbot API endpoint
    page.tsx                  # Main landing page
    layout.tsx                # App layout & metadata
    globals.css               # Global styles
  /components
    Chatbot.tsx               # Chat UI component
    CrisisNotice.tsx          # Crisis warning banner
  /lib
    gemini.ts                 # Gemini AI client
    safety.ts                 # Crisis keyword detection
    rateLimit.ts              # Request rate limiting
```

## Key Features Implemented

✅ Gemini 1.5 Flash AI integration  
✅ Crisis keyword detection (pre-AI)  
✅ Rate limiting (10 requests per minute)  
✅ Empathetic, non-clinical responses  
✅ Emergency resource guidance  
✅ Accessible, calm UI design  
✅ Mobile-responsive layout  

## Next Steps

1. **Customize the chatbot**: Edit `lib/gemini.ts` to modify the system prompt
2. **Add more crisis keywords**: Update `lib/safety.ts` 
3. **Adjust rate limits**: Modify `lib/rateLimit.ts`
4. **Change styling**: Update `tailwind.config.ts` and `app/globals.css`
5. **Deploy to Vercel**: Follow the README deployment section

## Important Reminders

⚠️ **This is for educational purposes only**  
- Not a replacement for professional mental health care
- Always directs users in crisis to emergency services
- No user data is stored server-side

## Need Help?

- Check the main README.md for detailed documentation
- Review API contract in README.md
- Test the crisis detection thoroughly before any public deployment

---

**Ready to start?** Make sure you have Node 18+, create your `.env.local` file, and run `npm run dev`!

