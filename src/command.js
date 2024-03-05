import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .command(
    "new <note>",
    "Create a new note",
    (yargs) => {
      return yargs.positional("new", {
        type: "string",
        description: "The content of note to create",
      });
    },
    (argv) => {
      console.log("You just wrote: \n" + argv.note);
    }
  )
  .demandCommand(1)
  .parse();
