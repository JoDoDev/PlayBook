import {UuidVersion4} from "../types/Uuid";
const uuidV4: UuidVersion4 = require('uuid/v4');


export default function generateUuid() :string{
  return uuidV4();
}

