const toCamelCase = (str: string) => 
    str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
  
export const convertKeysToCamelCase = (obj: any): any => {
    if (Array.isArray(obj)) {
      return obj.map(convertKeysToCamelCase);
    } else if (obj !== null && typeof obj === "object") {
      return Object.keys(obj).reduce((acc, key) => {
        const camelKey = toCamelCase(key);
        acc[camelKey] = convertKeysToCamelCase(obj[key]);
        return acc;
      }, {} as any);
    }
    return obj;
  };
  