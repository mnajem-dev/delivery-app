/** Montant en centimes entiers (pas de flottants). */
export type Money = number;

export function formatMoney(money: Money): string {
  const isNegative = money < 0;
  const absCents = Math.abs(Math.trunc(money));
  const whole = Math.floor(absCents / 100);
  const cents = absCents % 100;
  const formatted = `${whole}.${cents.toString().padStart(2, '0')}`;
  return isNegative ? `-${formatted}` : formatted;
}

export function parseMoney(value: string): Money {
  const trimmed = value.trim();
  const isNegative = trimmed.startsWith('-');
  const normalized = isNegative ? trimmed.slice(1).trim() : trimmed;

  const [wholePart = '0', fracPart = '0'] = normalized.split('.');
  const whole = Number.parseInt(wholePart.replace(/\D/g, ''), 10) || 0;
  const fracDigits = fracPart.replace(/\D/g, '').padEnd(2, '0').slice(0, 2);
  const cents = whole * 100 + (Number.parseInt(fracDigits, 10) || 0);

  return isNegative ? -cents : cents;
}
