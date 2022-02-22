export const phoneNumberFormatter: (
  input: string | undefined
) => string = input => {
  if (input) {
    return input.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
  } else return '';
};

export const phoneNumberParser: (input: string) => string = input =>
  input.replace(/\s+/g, '');
