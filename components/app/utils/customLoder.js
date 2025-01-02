export const customLoader = ({ src, width, quality }) => {
    return `_lig/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
  };
  