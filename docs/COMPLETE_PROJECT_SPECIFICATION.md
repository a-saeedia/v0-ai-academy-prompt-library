# Tethera AI Academy - Complete Technical Specification

## Executive Summary

Tethera AI Academy is a bilingual (English/Farsi) web application serving as a comprehensive AI prompt library and learning platform. The application enables users to discover, customize, share, and manage high-quality AI prompts across various professional categories.

**Key Metrics:**
- 100+ curated professional prompts
- 10+ OpenAI Academy prompts
- Full bilingual support (English/Farsi with RTL)
- Public access with optional authentication
- Community-driven prompt sharing
- AI-powered prompt customization

---

## 1. Technology Stack

### Frontend
- **Framework**: Next.js 15.5.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui components
- **State Management**: React hooks + SWR for data fetching
- **Icons**: Lucide React

### Backend
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
  - Email/Password authentication
  - Google OAuth integration
- **API**: Next.js API Routes + Server Actions
- **AI Integration**: Google Gemini AI (via @google/generative-ai)

### Infrastructure
- **Hosting**: Vercel
- **Database Hosting**: Supabase Cloud
- **Environment**: Node.js with Bun runtime

---

## 2. Project Structure

\`\`\`
tethera-ai-academy/
├── app/
│   ├── layout.tsx                 # Root layout with fonts
│   ├── page.tsx                   # Landing/redirect to library
│   ├── globals.css                # Global styles with design tokens
│   ├── actions.ts                 # Server Actions for prompts
│   ├── library/
│   │   └── page.tsx              # Main library page (Server Component)
│   ├── auth/
│   │   ├── login/page.tsx        # Login page
│   │   ├── sign-up/page.tsx      # Sign-up page
│   │   ├── sign-up-success/page.tsx
│   │   └── callback/route.ts     # OAuth callback handler
├── components/
│   ├── library-client.tsx         # Main client component (all views)
│   └── ui/                        # shadcn/ui components
├── lib/
│   ├── constants.ts               # Prompts data + translations
│   ├── types.ts                   # TypeScript interfaces
│   ├── utils.ts                   # Utility functions
│   └── supabase/
│       ├── client.ts              # Browser Supabase client
│       ├── server.ts              # Server Supabase client
│       └── middleware.ts          # Auth middleware
├── public/
│   ├── tethera-logo.png          # Official Tethera logo
│   └── project-report.html        # Downloadable project report
├── scripts/
│   ├── 001_create_tables.sql     # Initial database schema
│   ├── 002_add_community_prompts.sql  # Community features
│   └── 003_add_like_functions.sql     # Like system
├── middleware.ts                  # Route protection middleware
└── package.json                   # Dependencies
\`\`\`

---

## 3. Database Schema

### Tables

#### 1. `profiles`
\`\`\`sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update their own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
\`\`\`

#### 2. `custom_prompts`
\`\`\`sql
CREATE TABLE custom_prompts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title_en TEXT NOT NULL,
  title_fa TEXT,
  prompt_en TEXT NOT NULL,
  prompt_fa TEXT,
  category TEXT,
  industry TEXT,
  role TEXT,
  tags_en TEXT[],
  tags_fa TEXT[],
  original_prompt_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies
ALTER TABLE custom_prompts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view their own prompts" ON custom_prompts FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert their own prompts" ON custom_prompts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own prompts" ON custom_prompts FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own prompts" ON custom_prompts FOR DELETE USING (auth.uid() = user_id);
\`\`\`

#### 3. `community_prompts`
\`\`\`sql
CREATE TABLE community_prompts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  custom_prompt_id UUID REFERENCES custom_prompts(id) ON DELETE CASCADE,
  title_en TEXT NOT NULL,
  title_fa TEXT,
  prompt_en TEXT NOT NULL,
  prompt_fa TEXT,
  category TEXT,
  industry TEXT,
  role TEXT,
  tags_en TEXT[],
  tags_fa TEXT[],
  like_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(custom_prompt_id)
);

-- RLS Policies
ALTER TABLE community_prompts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view community prompts" ON community_prompts FOR SELECT USING (true);
CREATE POLICY "Users can insert their own community prompts" ON community_prompts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own community prompts" ON community_prompts FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own community prompts" ON community_prompts FOR DELETE USING (auth.uid() = user_id);
\`\`\`

#### 4. `community_likes`
\`\`\`sql
CREATE TABLE community_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  community_prompt_id UUID REFERENCES community_prompts(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, community_prompt_id)
);

-- RLS Policies
ALTER TABLE community_likes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view all likes" ON community_likes FOR SELECT USING (true);
CREATE POLICY "Users can insert their own likes" ON community_likes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can delete their own likes" ON community_likes FOR DELETE USING (auth.uid() = user_id);
\`\`\`

---

## 4. Authentication System

### Authentication Flow

1. **Public Access**: Users can browse the entire library without authentication
2. **Optional Sign-up**: Users sign up when they want to customize or save prompts
3. **Auth Methods**:
   - Email/Password (with email verification)
   - Google OAuth

### Implementation

\`\`\`typescript
// lib/supabase/client.ts - Browser client
import { createBrowserClient } from '@supabase/ssr'
export const createClient = () => createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// lib/supabase/server.ts - Server client
import { createServerClient } from '@supabase/ssr'
export async function createClient() {
  const cookieStore = await cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) { return cookieStore.get(name)?.value },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  )
}
\`\`\`

### Middleware Protection

\`\`\`typescript
// middleware.ts
import { updateSession } from './lib/supabase/middleware'
export async function middleware(request: NextRequest) {
  return await updateSession(request)
}
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
\`\`\`

---

## 5. Core Features

### 5.1 Prompt Library

**Description**: Browse 100+ curated professional prompts + OpenAI Academy prompts

**Features**:
- Search functionality (real-time filtering)
- Category filtering (horizontal scrollable bar)
- Industry filtering
- Role filtering
- Bilingual display (English/Farsi)
- Copy to clipboard
- JSON conversion
- Prompt customization (AI-powered)

**Implementation**:
\`\`\`typescript
// app/library/page.tsx - Server Component
export default async function LibraryPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  
  let customPrompts = []
  let communityPrompts = []
  
  if (user) {
    const { data } = await supabase
      .from('custom_prompts')
      .select('*')
      .eq('user_id', user.id)
    customPrompts = data || []
    
    const { data: communityData } = await supabase
      .from('community_prompts')
      .select(`
        *,
        profiles:user_id (full_name, email)
      `)
    communityPrompts = communityData || []
  }
  
  return (
    <LibraryClient
      user={user}
      initialCustomPrompts={customPrompts}
      initialCommunityPrompts={communityPrompts}
    />
  )
}
\`\`\`

### 5.2 AI-Powered Customization

**Description**: Personalize prompts using Google Gemini AI based on user context

**Flow**:
1. User clicks "Customize for Me" button
2. Modal opens with customization form
3. User enters: Role, Industry, Goal, Constraints
4. Gemini AI generates personalized prompt
5. Prompt saved to user's custom library

**Implementation**:
\`\`\`typescript
// Server Action in app/actions.ts
'use server'
import { GoogleGenerativeAI } from '@google/generative-ai'

export async function customizePrompt(
  promptText: string,
  role: string,
  industry: string,
  goal: string,
  constraints: string
) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
  const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
  
  const customizationPrompt = `
    Customize this prompt for a ${role} in the ${industry} industry.
    Goal: ${goal}
    Constraints: ${constraints}
    
    Original Prompt:
    ${promptText}
    
    Return a customized version that maintains the structure but tailors it to the specific role, industry, and goal.
  `
  
  const result = await model.generateContent(customizationPrompt)
  return result.response.text()
}
\`\`\`

### 5.3 JSON Conversion

**Description**: Convert prompts to structured JSON format for API integration

**Features**:
- One-click conversion
- Copy JSON to clipboard
- Download as .json file
- Preserves prompt structure

**Implementation**:
\`\`\`typescript
function convertToJSON(prompt: Prompt) {
  const jsonStructure = {
    id: prompt.id,
    title: {
      en: prompt.title_en,
      fa: prompt.title_fa
    },
    content: {
      en: prompt.prompt_en,
      fa: prompt.prompt_fa
    },
    metadata: {
      category: prompt.category,
      industry: prompt.industry,
      role: prompt.role,
      tags: {
        en: prompt.tags_en,
        fa: prompt.tags_fa
      }
    },
    created_at: new Date().toISOString()
  }
  return JSON.stringify(jsonStructure, null, 2)
}
\`\`\`

### 5.4 Community Prompts

**Description**: Share custom prompts with the community and discover prompts from others

**Features**:
- Share custom prompts publicly
- Like community prompts
- View author information
- Copy community prompts
- Real-time like counts

**Implementation**:
\`\`\`typescript
// Server Action: Share prompt with community
export async function sharePromptWithCommunity(customPromptId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Not authenticated')
  
  const { data: customPrompt } = await supabase
    .from('custom_prompts')
    .select('*')
    .eq('id', customPromptId)
    .single()
  
  const { data, error } = await supabase
    .from('community_prompts')
    .insert({
      user_id: user.id,
      custom_prompt_id: customPromptId,
      title_en: customPrompt.title_en,
      title_fa: customPrompt.title_fa,
      prompt_en: customPrompt.prompt_en,
      prompt_fa: customPrompt.prompt_fa,
      category: customPrompt.category,
      industry: customPrompt.industry,
      role: customPrompt.role,
      tags_en: customPrompt.tags_en,
      tags_fa: customPrompt.tags_fa,
    })
    .select()
    .single()
  
  return data
}

// Server Action: Toggle like
export async function toggleLike(communityPromptId: string) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Not authenticated')
  
  const { data: existingLike } = await supabase
    .from('community_likes')
    .select('id')
    .eq('user_id', user.id)
    .eq('community_prompt_id', communityPromptId)
    .single()
  
  if (existingLike) {
    await supabase.from('community_likes').delete().eq('id', existingLike.id)
    await supabase.rpc('decrement_like_count', { prompt_id: communityPromptId })
  } else {
    await supabase.from('community_likes').insert({
      user_id: user.id,
      community_prompt_id: communityPromptId
    })
    await supabase.rpc('increment_like_count', { prompt_id: communityPromptId })
  }
}
\`\`\`

---

## 6. Design System

### Brand Colors (Tethera)

\`\`\`css
/* app/globals.css */
@theme inline {
  /* Primary Brand Color */
  --color-tethera-green: #afd700;
  --color-tethera-green-dark: #8fb600;
  
  /* Neutrals */
  --color-tethera-black: #000000;
  --color-tethera-white: #ffffff;
  
  /* Semantic Tokens */
  --color-primary: var(--color-tethera-green);
  --color-primary-hover: var(--color-tethera-green-dark);
  --color-background: var(--color-tethera-white);
  --color-foreground: var(--color-tethera-black);
  --color-muted: #f5f5f5;
  --color-muted-foreground: #6b7280;
  --color-border: #e5e7eb;
  
  /* Corner Radius */
  --radius: 0.5rem;
}
\`\`\`

### Typography

\`\`\`typescript
// app/layout.tsx
import { Outfit } from 'next/font/google'
import localFont from 'next/font/local'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '600', '800'],
  variable: '--font-outfit'
})

const vazirmatn = localFont({
  src: [
    { path: './fonts/Vazirmatn-Light.woff2', weight: '300' },
    { path: './fonts/Vazirmatn-Regular.woff2', weight: '400' },
    { path: './fonts/Vazirmatn-SemiBold.woff2', weight: '600' },
    { path: './fonts/Vazirmatn-Bold.woff2', weight: '800' },
  ],
  variable: '--font-vazirmatn'
})
\`\`\`

### Component Styling Patterns

\`\`\`typescript
// Primary button with Tethera green
<button className="bg-[#afd700] hover:bg-[#8fb600] text-black font-semibold px-4 py-2 rounded-lg transition-colors">
  Button Text
</button>

// Card with border and hover effect
<div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
  Card Content
</div>

// Horizontal scrollable category bar
<div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#afd700] scrollbar-track-gray-100">
  {categories.map(cat => (
    <button className="px-4 py-2 rounded-full bg-gray-100 hover:bg-[#afd700] whitespace-nowrap flex-shrink-0">
      {cat}
    </button>
  ))}
</div>
\`\`\`

---

## 7. Internationalization (i18n)

### Translation System

\`\`\`typescript
// lib/constants.ts
export const translations = {
  en: {
    appName: "Tethera AI Academy",
    promptLibrary: "Prompt Library",
    myPrompts: "My Custom Prompts",
    communityPrompts: "Community Prompts",
    customizePrompt: "Customize for Me",
    convertToJson: "Convert to JSON",
    shareWithCommunity: "Share with Community",
    // ... 50+ translation keys
  },
  fa: {
    appName: "آکادمی هوش مصنوعی تترا",
    promptLibrary: "کتابخانه پرامپت",
    myPrompts: "پرامپت‌های سفارشی من",
    communityPrompts: "پرامپت‌های اجتماعی",
    customizePrompt: "سفارشی‌سازی برای من",
    convertToJson: "تبدیل به JSON",
    shareWithCommunity: "اشتراک‌گذاری با جامعه",
    // ... 50+ translation keys
  }
}
\`\`\`

### Usage

\`\`\`typescript
const t = translations[language]
<h1>{t.appName}</h1>
<button>{t.customizePrompt}</button>
\`\`\`

### RTL Support

\`\`\`typescript
<div className={language === 'fa' ? 'rtl' : 'ltr'}>
  <p className={language === 'fa' ? 'text-right font-vazirmatn' : 'text-left font-outfit'}>
    {language === 'fa' ? prompt.title_fa : prompt.title_en}
  </p>
</div>
\`\`\`

---

## 8. Environment Variables

\`\`\`bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Development OAuth Redirect
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000/auth/callback

# Google Gemini AI
GEMINI_API_KEY=your_gemini_api_key
\`\`\`

---

## 9. Deployment Instructions

### Prerequisites
1. Vercel account
2. Supabase project created
3. Google OAuth credentials configured in Supabase
4. Gemini API key obtained

### Steps

1. **Database Setup**:
   \`\`\`bash
   # Run SQL scripts in Supabase SQL Editor in order:
   # 1. scripts/001_create_tables.sql
   # 2. scripts/002_add_community_prompts.sql
   # 3. scripts/003_add_like_functions.sql
   \`\`\`

2. **Configure Supabase Auth**:
   - Enable Email provider in Authentication > Providers
   - Enable Google provider and add OAuth credentials
   - Set Site URL to your production domain
   - Add redirect URL: `https://yourdomain.com/auth/callback`

3. **Deploy to Vercel**:
   \`\`\`bash
   # Connect GitHub repository to Vercel
   # Or use Vercel CLI:
   vercel --prod
   \`\`\`

4. **Add Environment Variables** in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `GEMINI_API_KEY`
   - `NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL` (for preview deployments)

5. **Verify Deployment**:
   - Test public library access
   - Test authentication (email + Google)
   - Test prompt customization
   - Test community features

---

## 10. Key Components Breakdown

### LibraryClient Component

**File**: `components/library-client.tsx`

**Responsibilities**:
- Manages 3 views: Library, My Prompts, Community
- Handles search and filtering
- Manages prompt actions (copy, customize, share, like)
- Controls modals for customization

**State Management**:
\`\`\`typescript
const [view, setView] = useState<'library' | 'myPrompts' | 'community'>('library')
const [searchQuery, setSearchQuery] = useState('')
const [selectedCategory, setSelectedCategory] = useState('All')
const [language, setLanguage] = useState<'en' | 'fa'>('en')
const [customPrompts, setCustomPrompts] = useState(initialCustomPrompts)
const [communityPrompts, setCommunityPrompts] = useState(initialCommunityPrompts)
\`\`\`

**Key Functions**:
- `handleCustomize()`: Opens customization modal
- `handleShareToCommunity()`: Shares prompt publicly
- `handleToggleLike()`: Likes/unlikes community prompt
- `handleCopyPrompt()`: Copies prompt to clipboard
- `handleConvertToJSON()`: Converts and downloads JSON

---

## 11. Performance Optimizations

### 1. Server Components
- Library page is a Server Component
- Reduces client-side JavaScript
- Faster initial page load

### 2. Data Fetching Strategy
- Initial data fetched on server
- Client-side mutations use optimistic updates
- SWR for client-side data synchronization

### 3. Image Optimization
- Next.js Image component for logo
- Automatic image optimization and lazy loading

### 4. Code Splitting
- Automatic code splitting by Next.js
- Route-based splitting
- Component-level splitting for modals

---

## 12. Security Considerations

### Row Level Security (RLS)
- All database tables have RLS enabled
- Users can only access their own data
- Community prompts are publicly readable

### Authentication
- Secure session management via Supabase
- HTTP-only cookies for auth tokens
- CSRF protection built into Supabase

### API Security
- Server Actions for all mutations
- Type-safe with TypeScript
- Input validation on server-side

### Environment Variables
- Never expose service role key on client
- Use `NEXT_PUBLIC_` prefix only for safe variables

---

## 13. Testing Strategy

### Manual Testing Checklist

**Authentication**:
- [ ] Email/password sign-up works
- [ ] Email verification email sent
- [ ] Google OAuth sign-in works
- [ ] Sign-out works
- [ ] Session persists across page reloads

**Prompt Library**:
- [ ] All 100+ prompts display correctly
- [ ] Search filters prompts in real-time
- [ ] Category filter works
- [ ] Industry/role filters work
- [ ] Copy prompt works
- [ ] JSON conversion works

**Customization**:
- [ ] Customize modal opens
- [ ] AI generates personalized prompts
- [ ] Customized prompts save to database
- [ ] Customized prompts appear in "My Prompts"

**Community Features**:
- [ ] Share prompt to community works
- [ ] Community prompts display with author
- [ ] Like/unlike works
- [ ] Like count updates in real-time

**Internationalization**:
- [ ] Language switcher works
- [ ] Farsi text displays correctly (RTL)
- [ ] All UI elements have translations

---

## 14. Future Enhancements

### Phase 2 Features
1. **Advanced Search**:
   - Full-text search across all fields
   - Filter by tags
   - Sort by popularity, date, likes

2. **Prompt Collections**:
   - Create custom collections
   - Share collections publicly
   - Follow other users' collections

3. **Collaboration Features**:
   - Comments on community prompts
   - Upvoting/downvoting
   - Prompt versioning and forks

4. **Analytics Dashboard**:
   - Track prompt usage
   - Popular categories/industries
   - User engagement metrics

5. **AI Improvements**:
   - Multiple AI model support (GPT-4, Claude, etc.)
   - Prompt quality scoring
   - Automatic tagging and categorization

6. **Mobile App**:
   - React Native mobile application
   - Offline prompt access
   - Push notifications for likes/comments

---

## 15. Troubleshooting Guide

### Common Issues

**Issue**: Google OAuth not working
**Solution**: 
1. Verify Google OAuth credentials in Supabase
2. Check redirect URL is correct
3. Ensure Site URL is set in Supabase settings

**Issue**: Prompts not saving
**Solution**:
1. Check user is authenticated
2. Verify RLS policies are correctly set up
3. Check browser console for errors

**Issue**: Gemini AI customization fails
**Solution**:
1. Verify `GEMINI_API_KEY` is set
2. Check API quota hasn't been exceeded
3. Test with simpler prompts first

**Issue**: Database queries slow
**Solution**:
1. Add indexes on frequently queried columns
2. Use database query optimization tools
3. Consider implementing caching layer

---

## 16. Contact and Support

**Project Owner**: Tethera Team
**GitHub Repository**: [Link to repo]
**Documentation**: This specification document
**Support**: support@tethera.io

---

## Appendix A: Complete Dependencies

\`\`\`json
{
  "dependencies": {
    "@google/generative-ai": "^0.21.0",
    "@supabase/ssr": "^0.7.0",
    "@supabase/supabase-js": "^2.78.0",
    "lucide-react": "^0.469.0",
    "next": "15.5.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "swr": "^2.2.5"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^4.0.0"
  }
}
\`\`\`

---

## Appendix B: API Endpoints

### Server Actions (app/actions.ts)

\`\`\`typescript
// Customize prompt with AI
customizePrompt(promptText, role, industry, goal, constraints)

// Save custom prompt
saveCustomPrompt(userId, promptData)

// Delete custom prompt
deleteCustomPrompt(promptId)

// Share prompt with community
sharePromptWithCommunity(customPromptId)

// Toggle like on community prompt
toggleLike(communityPromptId)

// Get user's liked prompts
getUserLikedPrompts(userId)
\`\`\`

### Route Handlers

\`\`\`typescript
// OAuth callback
GET /auth/callback
\`\`\`

---

## Conclusion

This specification provides a complete blueprint for rebuilding the Tethera AI Academy from scratch. It includes:
- Complete technology stack
- Database schema with all tables and RLS policies
- Authentication implementation
- All core features with code examples
- Design system and brand guidelines
- Deployment instructions
- Security considerations
- Testing checklist

Any developer with Next.js, TypeScript, and Supabase experience should be able to recreate this application using this documentation.

**Total Lines of Code**: ~3,000+
**Total Components**: 15+
**Database Tables**: 4
**Server Actions**: 6
**Authentication Methods**: 2 (Email/Password + Google OAuth)
**Languages Supported**: 2 (English + Farsi)
**Total Prompts**: 110+ (100 curated + 10 OpenAI)
