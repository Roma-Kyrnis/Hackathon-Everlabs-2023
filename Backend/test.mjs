import { sendToEmail } from "./src/services/google/gmail.mjs";

const test = async () => {
  await sendToEmail("kirnos007@gmail.com", "WORKING");
};

test();
