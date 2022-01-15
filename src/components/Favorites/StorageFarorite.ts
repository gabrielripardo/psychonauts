import { Psychonaut } from "../../models/psychonaut.model";

export function removePsychonaut() {}

export function getAll() {
  let list: Psychonaut[] = [];
  let id = 0;

  while (localStorage.key(id) != null) {
    let key = localStorage.key(id);
    let item: Psychonaut = JSON.parse(
      localStorage.getItem(String(key)) || "{}"
    );
    list.push(item);
    id++;
  }
  return list;
}

function populateStorage(psychonaut: Psychonaut) {
  //let id = "id-" + getAll().length;
  console.log(psychonaut._id);
  localStorage.setItem(String(psychonaut._id), JSON.stringify(psychonaut));
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
