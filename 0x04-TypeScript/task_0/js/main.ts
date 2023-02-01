interface Student {
	firstName: string,
	lastName: string,
	age: number
	location: string
}

const student1: Student = {
	firstName: 'Derrick',
	lastName: 'Ahortu',
	age: 22,
	location: 'Accra'
}

const student2: Student = {
	firstName: 'Lamder',
	lastName: 'Gate',
	age: 21,
	location: 'Ada'
}

const studentsList = [student1, student2];
console.log('FirstName | LastName | Age | Location')
for (const st of studentsList) {
	console.log(`${st.firstName} | ${st.lastName} | ${st.age} | ${st.location}\n`)
}