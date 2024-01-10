export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const Student1: Student = {
  firstName: 'Joel',
  lastName: 'Aropet',
  age: 20,
  location: 'Amsterdam',
}

const Student2: Student = {
  firstName: 'Paddy',
  lastName: 'Nsubuga',
  age: 26,
  location: 'Kampala'
}

const studentsList: Student[] = [
  Student1,
  Student2,
];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach(student => {
  const row = tbody.insertRow();

  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

table.appendChild(tbody);
document.body.appendChild(table);
