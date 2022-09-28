const cohort = {
    name: 'August2022',
    id: 1234,
    students: ['Moses', 'Thomas', 'Rita', 'Yichao', 'D'],
};

const print = (myCohort) => {
    console.log(`${myCohort.id} - ${myCohort.name} - ${myCohort.students.length} students in this cohort`);
}

print(cohort);