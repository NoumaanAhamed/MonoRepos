## Summary

- web - depends on ui, tsconfig and eslint-config-custom
- docs - depends on ui, tsconfig and eslint-config-custom
- ui - depends on tsconfig and eslint-config-custom
- tsconfig - no dependencies
- eslint-config-custom - no dependencies

### Dependencies

_apps/web/package.json_

```
{
  "dependencies": {
    "ui": "*"
  }
}
```

## File Structure

> > > Creating a new turborepo with the following:

- apps/web: Next.js with TypeScript
- apps/docs: Next.js with TypeScript
- apps/your-own-frontend : can initialize with vite/Next.js
- apps/api : backend files but add dependency
  (include dependency in package.json)
- packages/ui: Shared React component library
- packages/eslint-config-custom: Shared configuration (ESLint)
- packages/tsconfig: Shared TypeScript `tsconfig.json`
