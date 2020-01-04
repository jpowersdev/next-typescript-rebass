# next-typescript-rebass

NextJS Starter Project, converted to use Typescript, Rebass, @Emotion, and Styled-System

---

Check the `src/theme.ts` file for all the colors and variants being used.

All of the styles in `<style jsx>` tags were converted to variants.

The global style was added to `_app.tsx` using `Global`/`css` from @emotion.

Also added a webpack resolution / tsconfig path for the `src` folder, so all imports will be relative to that folder.
