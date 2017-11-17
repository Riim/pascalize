import { camelize } from '@riim/camelize';

let cache = Object.create(null);

export function pascalize(str: string, useCache?: boolean): string {
	let value: string;

	return (
		(useCache && cache[str]) ||
		((value = camelize(str)),
		(value = value.charAt(0).toUpperCase() + value.slice(1)),
		useCache ? (cache[str] = value) : value)
	);
}
