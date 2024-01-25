export const dateFormatter = new Intl.DateTimeFormat('pb-BR', {
  day: '2-digit',
  month: 'numeric',
  year: 'numeric'
});

export const formatDate = (data: string): string => {
  return new Intl.DateTimeFormat('pt-BR').format(new Date(data));
};

// export const dateFormatter = new Intl.DateTimeFormat('pt-BR');

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});
