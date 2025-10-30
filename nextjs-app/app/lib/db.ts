import { User } from './types';

let nextId = 4;
const users: User[] = [
  {
    id: 1,
    login: 'padawan',
    firstname: 'Anakin',
    lastname: 'Skywalker',
    description: 'Brave Mentor',
    level: 0
  },
  {
    id: 2,
    login: 'jedi',
    firstname: 'Obiwan',
    lastname: 'Kenobi',
    description: 'Talented Grasshopper',
    level: 10
  },
  {
    id: 3,
    login: 'master',
    firstname: 'Yoda',
    lastname: '',
    description: 'Old Apprentice',
    level: 20
  }
];

export function getAllUsers(page: number = 1, pagesize: number = 10, searchterm?: string): User[] {
  let filteredUsers = users;
  
  if (searchterm && searchterm.trim() !== '') {
    const term = searchterm.toLowerCase();
    filteredUsers = users.filter(user => 
      user.firstname.toLowerCase().includes(term) || 
      user.lastname.toLowerCase().includes(term)
    );
  }
  
  const offset = (page - 1) * pagesize;
  return filteredUsers.slice(offset, offset + pagesize);
}

export function getUserById(id: number): User | undefined {
  return users.find(user => user.id === id);
}

export function createUser(userData: Omit<User, 'id'>): User {
  const newUser: User = {
    id: nextId++,
    ...userData
  };
  users.push(newUser);
  return newUser;
}

export function updateUser(id: number, userData: Partial<Omit<User, 'id'>>): User | undefined {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) {
    return undefined;
  }
  
  users[index] = {
    ...users[index],
    ...userData
  };
  return users[index];
}

export function deleteUser(id: number): boolean {
  const index = users.findIndex(user => user.id === id);
  if (index === -1) {
    return false;
  }
  
  users.splice(index, 1);
  return true;
}

export function getUserCount(searchterm?: string): number {
  if (!searchterm || searchterm.trim() === '') {
    return users.length;
  }
  
  const term = searchterm.toLowerCase();
  return users.filter(user => 
    user.firstname.toLowerCase().includes(term) || 
    user.lastname.toLowerCase().includes(term)
  ).length;
}
