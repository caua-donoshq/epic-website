declare module 'poly-decomp' {
  interface DecompModule {
    [key: string]: unknown;
  }
  const decomp: DecompModule;
  export = decomp;
}