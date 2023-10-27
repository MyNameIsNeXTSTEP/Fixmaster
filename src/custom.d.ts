// @todo We do not use any .d.ts files, only typings in .ts | .tsx files
// Even though we don't need this type below at all, remove it.
declare module "*.svg" {
    const content: any;
    export default content;
}