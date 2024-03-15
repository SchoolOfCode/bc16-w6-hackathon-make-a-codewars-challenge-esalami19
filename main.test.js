import { expect, test } from "vitest";

import clinicalTrial from "./main.js";

// test("no function to pass test", () => {
// 	//arrange
// 	const patient1 = "no allegies";
// 	const patient2 = "allergies";
// 	const expected = "a" || "b";
// 	//act
// 	const actual = clinicalTrial(
// 		testSubjects.patient1.drug,
// 		testSubjects.patient2.drug,
// 	);
// 	//assert
// 	expect(actual).toBe(expected);
// });
test("modified test for version 1 function", () => {
	//arrange
	patient.allergy = "yes";
	const expected = "a";
	//act
	const actual = clinicalTrial(patient);
	//assert
	expect(actual).toBe(expected);
});
// test("test", () => {
// 	//arrange
// 	const a = 1;
// 	const b = 2;
// 	const expected = 3;
// 	//act
// 	const actual = sum(a, b);
// 	//assert
// 	expect(actual).toBe(expected);
// });
