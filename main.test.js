import { expect, test } from "vitest";

import clinicalTrial from "./kata.js";

test("Test for patients with allergies", () => {
	//arrange
	const patient = {
		name: "Denise Camel",
		age: 29,
		medicalDiagnosis: "healthy",
		allergies: "yes",
	};
	const expected = "a";
	//act
	const actual = clinicalTrial(patient);
	//assert
	expect(actual).toBe(expected);
});

test("Test for patients without allergies", () => {
	//arrange
	const patient = {
		name: "Denise Camel",
		age: 29,
		medicalDiagnosis: "healthy",
		allergies: "no",
	};
	const expected = "b";
	//act
	const actual = clinicalTrial(patient);
	//assert
	expect(actual).toBe(expected);
});
