interface UserData {
  _id: string;
  email: string;
}
export const setLocalStorage = (key: string, data: UserData) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorage = (key: string): object | null => {
  const storedUser = localStorage.getItem(key);
  const user: UserData | null = storedUser ? JSON.parse(storedUser) : null;
  return user;
};
