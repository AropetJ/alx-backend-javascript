export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [porpName: string]: any;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export default function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): Student;
}

interface Student {
  workOnHomeWork(): string;
  displayName(): string;
}

class StudentClass implements Student {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomeWork(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
