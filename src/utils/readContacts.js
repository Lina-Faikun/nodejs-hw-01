import { readFile } from "fs/promises";

export const readContacts = async () => {
  try {
    const data = await readFile("contacts.json", "utf-8");
    return JSON.parse(data);
  } catch {
    return []; 
  }
};
