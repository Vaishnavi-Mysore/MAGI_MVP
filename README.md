
## Logic in creating the folder structure:
If the landing page has,
    1. Navbar
    2. Hero, etc..
These are implemented in the components folder
In the Pages Home file these components are rendered
Onclick on the button conditionally signup page is rendered
The signup page is loaded with all the required sign up components

## For Redux Store Setup :
1. Multiple Slices can be created for different set of operation
2. To use reusable UI component multiple intial state can be used under one slice and from the parent component required props can be passed to the reusable child component props drilling is avoided
3. useDispatch can be used conditionally to avoid unnecessary renders 
4. Onclick function needs to be checked

## For Reusable Wrapper component :
1. CustomButton 
    - Label, CSS class names, variants, loading logics, open close modal logics, useRef logics, icons inside buttons, disabled logic
2. CustomIconButton
3. ToolTipWrapper
4. Select/Dropdown

## Migrate the vcg repo Chat component :
1. Get the CDN links similar to the material UI icons
2. Find a best to render the messages
3. As a further Refactor create a custom component for the icon button as well
4. Created a Custom Tooltip wrapper
5. First create a Chat Input component for sending text and files(.pdf, .xlxs, .doc) along with the send CDN button
6. Once Message/file are sent store the data in the redux state
7. Isolate the send button and perform the async operation in that component
8. When there is the change in the Redux state render the Message Body Component

Component	Common Props Example
Button	children, onClick, type, variant, disabled, className, icon
Input	type, value, onChange, placeholder, label, error, className, disabled
Select	options, value, onChange, placeholder, label, disabled, className
Modal	open, onClose, children, title, className
Card	children, title, footer, className
Navbar	links, brand, user, onLogout, className
Sidebar	items, open, onToggle, className
Toast	message, type, open, onClose, duration
Table	columns, data, onRowClick, sortable, paginated, className
Loader	size, color, className

1. Make the navbar responsive
2. Complete placing all the other section
    - Place the partners icons as corousel
    - Place the Why choose into a card component 
    - Place the illustrator component 
    - Place the footer section

1. Add the skeleton or loader till the response received from the API
2. Chat with the AI and document the response try using the logger not manually
3. Use Framer nmotion for the Animation

# Folder Structure
```
/src
│
├── pages/                            ← Route-based pages
│   ├── Home.tsx
│   ├── Login.tsx
│   └── Signup.tsx
│
├── components/                       ← Shared reusable UI Wrapper components
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Loader.tsx
│
├── features/                         ← Feature-based slices & components
│   └── auth/
│       ├── authSlice.ts              ← Redux slice
│       ├── AuthForm.tsx              ← Auth form component
│       └── authUtils.ts              ← Optional helper functions
│
├── services/                         ← RTK Query API files
│   └── authAPI.ts                    ← e.g., login, register endpoints
│
├── router/                           ← Routing logics and Browser router
│   └── router.tsx                    ← App route structure using 
|                                       createBrowserRouter
│
├── store/                            ← Redux store config
│   ├── reduxStore.ts                 ← Combine slices, apply middleware
│   └── rootReducer.ts                ← (Optional) Combine reducers
│
├── hooks/                            ← Custom reusable hooks
│   └── customHooks.ts                ← Custom Hooks if required
│
├── types/                            ← (Optional) Shared TypeScript types for 
|                                       the dependencies
│   └── index.ts
│
├── App.tsx                           ← App entry for child routes with Outlet
├── main.tsx                          ← Root renderer (RouterProvider)
|
├── test/                             ← Dedicated Test Folder
│   ├── App.test.tsx                  ← Unit test for App.tsx
│
│   ├── components/
│   │   └── ui/
│   │       ├── Button.test.tsx       ← Unit test for Button.tsx
│   │       └── Loader.test.tsx       ← Unit test for Loader.tsx
│
│   ├── features/
│   │   └── auth/
│   │       └── AuthForm.test.tsx     ← Unit test for AuthForm.tsx
│
│   └── pages/
│       └── Home.test.tsx             ← Unit test for Home page
```

# Tech Stacks
- React + TypeScript + Vite
- Tailwind CSS, ShadCN
- Redux toolkit
