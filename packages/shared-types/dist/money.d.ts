/** Montant en centimes entiers (pas de flottants). */
export type Money = number;
export declare function formatMoney(money: Money): string;
export declare function parseMoney(value: string): Money;
