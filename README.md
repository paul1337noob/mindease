# MindEase — AI-Assisted Mental Wellbeing Chatbot

A simple, professional psychology website with a Gemini-powered chatbot that provides supportive, educational responses for mental wellbeing.

## Features

- 🤖 **AI-Powered Chat**: Gemini 1.5 Flash integration for empathetic, educational guidance
- 🛡️ **Safety Guardrails**: Crisis keyword detection with emergency resource guidance
- 🎨 **Calm UI**: Soft blue/white palette with accessible design
- ⚡ **Rate Limiting**: Basic IP-based request throttling
- 🚀 **Production Ready**: Optimized for Vercel deployment

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **LLM SDK**: @google/generative-ai
- **Runtime**: Node 18+

## Getting Started

### Prerequisites

- Node.js 18 or higher
- A Google Gemini API key ([Get one here](https://aistudio.google.com/app/apikey))

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd mindease
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_api_key_here
   GEMINI_MODEL=gemini-1.5-flash
   SITE_NAME=MindEase
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
/mindease
  /app
    /api
      /chat
        route.ts          # POST /api/chat endpoint
    globals.css
    layout.tsx
    page.tsx             # Main landing page
  /components
    Chatbot.tsx          # Chat widget UI
    CrisisNotice.tsx     # Emergency banner
  /lib
    gemini.ts            # Gemini client + system prompts
    safety.ts            # Crisis detection
    rateLimit.ts         # Simple IP rate limiter
  /public
  .env.local             # Environment variables (create this)
  package.json
  tailwind.config.ts
  tsconfig.json
```

## API Contract

### POST /api/chat

**Request:**
```json
{
  "message": "I feel overwhelmed at work.",
  "sessionId": "optional-string",
  "locale": "en"
}
```

**Response (Normal):**
```json
{
  "reply": "It sounds like you're carrying a lot...",
  "safety": {
    "isCrisis": false,
    "matched": null
  },
  "meta": {
    "model": "gemini-1.5-flash",
    "latencyMs": 742
  }
}
```

**Response (Crisis Detected):**
```json
{
  "reply": "I'm really sorry you're going through this...",
  "safety": {
    "isCrisis": true,
    "matched": "suicide"
  },
  "meta": {
    "model": null,
    "latencyMs": 0
  }
}
```

## Safety Features

### Crisis Detection

The chatbot includes server-side crisis keyword detection that triggers before calling the AI model. Keywords include:
- suicide
- kill myself
- self-harm / self harm
- end my life
- i want to die
- don't want to live
- overdose
- cutting

When detected, the bot responds with:
- Empathetic acknowledgment
- Emergency service guidance
- Encouragement to reach out to professionals
- Clear disclaimer about educational purpose

### Non-Clinical Guardrails

The system prompt ensures:
- No diagnosis or treatment plans
- No medication advice
- Empathetic, non-judgmental tone
- Short, actionable self-care suggestions
- Reminders to seek professional help

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `GEMINI_API_KEY`
   - `GEMINI_MODEL` (optional, defaults to gemini-1.5-flash)
4. Deploy

### Other Platforms

This app can run on any Node.js hosting platform. Ensure:
- Node 18+ runtime
- Environment variables are configured
- Build command: `npm run build`
- Start command: `npm start`

## Testing

### Manual Testing Checklist

- [ ] Normal message returns empathetic AI response
- [ ] Crisis phrase triggers emergency response (no AI call)
- [ ] Empty message returns 400 error
- [ ] Enter key submits message
- [ ] Send button disabled when input is empty
- [ ] Messages auto-scroll to bottom
- [ ] Rate limiting works after multiple requests
- [ ] Error messages display clearly

### Test Crisis Detection

Send a message containing crisis keywords:
```
"I want to kill myself"
"I'm thinking about self-harm"
```

Expected: Emergency response, no AI model call, crisis notice displayed.

### Test Normal Flow

Send a regular message:
```
"I feel stressed about work"
```

Expected: Empathetic, educational AI response.

## Important Notes

⚠️ **This is an educational tool, not a medical service.**

- Does not replace professional mental health care
- Not suitable for crisis intervention
- Always directs users in crisis to emergency services
- No user data is stored server-side

## Future Enhancements

- [ ] Multi-language support (ES/EN)
- [ ] FAQ and resources pages
- [ ] Dark mode theme toggle
- [ ] Client-side chat history (localStorage)
- [ ] Advanced analytics and logging
- [ ] User accounts (optional)

## License

ISC

## Support

For questions or issues, please open a GitHub issue or contact the maintainers.

---

**Remember**: If you or someone you know is in crisis, please contact local emergency services immediately.

