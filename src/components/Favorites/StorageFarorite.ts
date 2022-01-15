import { Psychonaut } from "../../models/psychonaut.model";

export function getAll() {
  let list: Psychonaut[] = [];
  let id = getLength() - 1;

  while (id >= 0) {
    let item: Psychonaut = JSON.parse(localStorage.getItem("id-" + id) || "{}");
    list.push(item);
    id--;
  }
  return list;
}

export function getLength() {
  let id = 0;

  while (localStorage.getItem("id-" + id) != null) {
    id++;
  }

  return id;
}

export function getNextId() {
  let id = getAll().length;

  if (id > 0) {
    return id + 1;
  }
  return id;
}

function populateStorage(psychonaut: Psychonaut) {
  let id = "id-" + getAll().length;
  console.log(id);
  localStorage.setItem(String(id), JSON.stringify(psychonaut));
}

export function savePsychonaut(psychonaut: Psychonaut) {
  try {
    populateStorage(psychonaut);
    console.log(psychonaut);
  } catch (e) {
    console.log(e);
    return false;
  }
  return true;
}
