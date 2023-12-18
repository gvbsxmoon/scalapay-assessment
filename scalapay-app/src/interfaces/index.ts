interface Item {
	id: string;
	quantity: number;
	price: Price;
	name: string;
	category: string;
	sku: string;
	brand: string;
}

interface Price {
	currency: string;
	amount: string;
}

interface Merchant {
	redirectCancelUrl: string;
	redirectConfirmUrl: string;
}

interface Address {
	phoneNumber?: string;
	countryCode: string;
	name: string;
	postcode: string;
	suburb: string;
	line1: string;
}

interface Consumer {
	givenNames: string;
	surname: string;
	email: string;
}

interface Order {
	totalAmount: Price;
	consumer: Consumer;
	shipping: Address;
	items: Item[];
	merchant: Merchant;
	billing?: Address;
}
