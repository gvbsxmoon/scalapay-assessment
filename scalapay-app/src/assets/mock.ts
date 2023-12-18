export const items: Item[] = [
	{
		id: '1',
		quantity: 0,
		price: {
			currency: 'EUR',
			amount: '650',
		},
		name: 'Playstation 5',
		category: 'Games Console',
		sku: '534789537',
		brand: 'Sony',
	},
	{
		id: '2',
		quantity: 0,
		price: {
			currency: 'EUR',
			amount: '250',
		},
		name: 'Airpods Pro',
		category: 'Headphones',
		sku: '874733537',
		brand: 'Apple',
	},
];

export const merchant: Merchant = {
	redirectCancelUrl: 'https://portal.integration.scalapay.com/failure-url',
	redirectConfirmUrl: 'https://portal.integration.scalapay.com/success-url',
};

export const totalAmount: Price = {
	amount: '0',
	currency: 'EUR',
};
