const ENGLISH: IMEComposer = {
  id: 'en',
  compose: (text: string) => {
    return text;
  },
  decompose: (text: string) => {
    return text;
  },
};

export default ENGLISH;
