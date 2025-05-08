import { writeFile } from "fs/promises";

export const writeContacts = async (contacts) => {
  await writeFile("contacts.json", JSON.stringify(contacts, null, 2), "utf-8");
};
