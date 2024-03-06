import fs from 'fs';
import { createOutlookEventObjects } from "./project/project.js";

const data = JSON.stringify(createOutlookEventObjects());

fs.writeFile('output/out.js', data, (err) => {
  if(err) console.log(err);
  else console.log('write end');
});
