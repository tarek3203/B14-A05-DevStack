# Dev Stack

Dev Stack is a technology picker for developers. You browse frontend, backend,
database, styling, DevOps and tooling options, compare them side by side, and
add the ones you like into your own stack panel.

**Live site:** _(add link after deploy)_

## Technology used

- React 19 + TypeScript
- Vite
- Tailwind CSS v4 + DaisyUI
- React Toastify
- React Icons
- JSON for the technology data

## Features

1. **Build your own stack** — add any technology to the Your Stack panel, remove
   one with the ✕ button, or clear everything with Remove All.
2. **No duplicates** — once a technology is added, its button is disabled and
   reads "✓ Added to Stack", so the same one cannot go in twice.
3. **Fully responsive** — one column on mobile, two on tablet, three plus the
   stack sidebar on desktop, with a hamburger menu on small screens.

## Run it locally

```bash
npm install
npm run dev
```

---

## React questions

**1. What is JSX, and why is it used in React?**

JSX lets me write HTML-looking markup inside JavaScript. It is not real HTML —
the build tool turns it into `React.createElement()` calls. I use it because
describing the UI as markup is much easier to read than writing nested function
calls by hand.

**2. What is the difference between props and state?**

Props come from the parent and the child cannot change them. State belongs to
the component itself and can change. In my project `stack` is state inside
`App`, but when I pass it down to `YourStack` it arrives there as a prop.

**3. What does the `useState` hook do, and where did you use it in this project?**

`useState` gives a component a value that survives re-renders, plus a setter
function. When I call the setter React re-renders with the new value. I used it
three times in `App.tsx` — `technologies` for the loaded data, `loading` for the
spinner, and `stack` for the selected technologies. I also used it in `Navbar`
for opening and closing the mobile menu.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

`useEffect` runs code after the component renders, for things that are not
rendering — like fetching data. I needed it because I cannot call `fetch`
directly in the component body; that would run on every single render and loop
forever. I passed an empty dependency array `[]` so the fetch happens only once,
right after the first render.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

The key tells React which item is which between renders. Without it React has to
guess, and when the list changes it can update the wrong element or lose state.
I used `key={technology.id}` because the id comes from my JSON and is unique.
Using the array index would break as soon as items are removed from the list.

**6. What is conditional rendering? Show one place you used it.**

Conditional rendering means showing different JSX depending on a condition. In
`YourStack.tsx` I check `stack.length === 0` — if the stack is empty I show
"No technologies selected yet.", otherwise I render the list of stack items.

**7. How do you pass data from a parent to a child, and how does a child send something back?**

Parent to child is just props. Child to parent is a function: the parent defines
the handler and passes it down as a prop, then the child calls it. In my project
`App` owns `handleAddToStack` and passes it to `TechnologyCard` as `onAdd`. When
the button is clicked the card calls `onAdd(technology)`, which runs the
function back up in `App` and updates the state there.
