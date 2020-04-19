export function transformDayOfWeekInString(dayKey) {
  const days = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ];
  return days[dayKey];
}

export function convertForReal(value) {
  return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
