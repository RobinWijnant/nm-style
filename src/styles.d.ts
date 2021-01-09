// Declare *.module.css as a dictionary of strings
// This suppresses TS errors on module.css imports
declare module "*.module.css" {
  const content: { [key: string]: string };
  export default content;
}

declare module "*.svg";
declare module "*.jpg";
declare module "*.png";
