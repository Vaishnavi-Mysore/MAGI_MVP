# Description for User Story 1: Homepage
Named the Project as per guided -> magi-mvp-frontend
Cleared all the svg and CSS styling in the create vite@latest Project
Created the Folders as per the structure

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
