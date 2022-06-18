
interface User {
	name: string
	balance: number
}

export const usuario = {
	name: 'vinicius',
	balance: 100
}

export function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}


enum LOCATION {
	EUA = "EUA",
	BRAZIL = "BRAZIL",
 }
 
 enum NACIONALITY {
	BRAZILIAN = "BRAZILIAN",
	AMERICAN = "AMERICAN",
 }
 
 interface User1 {
	name: string;
	age: number;
	nacionality: NACIONALITY;
 }
 
 interface Casino {
	name: string;
	location: LOCATION;
 }

 interface Result {
	brazilians: ResultItem;
	americans: ResultItem;
 }
 
 interface ResultItem {
	allowed: string[];
	unallowed: string[];
 }

export function verifyAge(casino: Casino, users: User1[]): Result {
	const allowed: User1[] = [];
	const unallowed: User1[] = [];
 
	for (const user of users) {
	  if (casino.location === LOCATION.EUA) {
		 if (user.age >= 21) {
			allowed.push(user);
		 } else {
			unallowed.push(user);
		 }
	  } else if (casino.location === LOCATION.BRAZIL) {
		 if (user.age >= 18) {
			allowed.push(user);
		 } else {
			unallowed.push(user);
		 }
		 break;
	  }
	}
 
	return {
	  brazilians: {
		 allowed: allowed
			.filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
			.map((u) => u.name),
		 unallowed: unallowed
			.filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
			.map((u) => u.name),
	  },
	  americans: {
		 allowed: allowed
			.filter((user) => user.nacionality === NACIONALITY.AMERICAN)
			.map((u) => u.name),
		 unallowed: unallowed
			.filter((user) => user.nacionality === NACIONALITY.AMERICAN)
			.map((u) => u.name),
	  },
	};
 }