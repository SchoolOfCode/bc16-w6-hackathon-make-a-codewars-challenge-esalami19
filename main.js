/*person obj 
- array of drugs 
-specific drug to match person obj 

*/
//if patient has allergies drug a should be assigned to them if they do not have allergies drug b
// patient1 = {
// 	name: "Denise Camel",
// 	age: 29,
// 	medicalDiagnosis: "healthy",
// 	allergies: "yes",
// };

export default function clinicalTrial(patient) {
	if (patient.allergies === "yes") {
		patient.drug = "a";
		console.log(patient.drug);
	} else if (patient.allergies === "no") {
		patient.drug = "b";
		console.log(patient.drug);
	}
}

// export default function sum(a, b) {
// 	return a + b;
// }
// export default function clinicalTrial(patient) {
// 	if (patient.allergies === "yes") {
// 		patient.drug = "a";
// 		console.log(`${patient.name} must have drug ${patient.drug}`);
// 	} else if (patient.allergies === "no") {
// 		patient.drug = "b";
// 		console.log(`${patient.name} must have drug ${patient.drug}`);
// 	}
// }

// function matchDrug(person) {
// 	return drug[7];
// }

// patient2 = {
// 	name: "Jimmy Brown",
// 	age: 29,
// 	medicalDiagnosis: "aneamic",
// 	allergies: "yes",
// };

// patient3 = {
// 	name: "Harvey Daniel",
// 	age: 29,
// 	medicalDiagnosis: "high blood pressure",
// 	allergies: "no",
// };
