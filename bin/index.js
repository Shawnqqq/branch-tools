const yargs = require("yargs");
const setBranch = require('./config')

yargs
  .command(
    "branch",
    "one-frontend branch",
    (yargs) => {
      yargs.positional("env", {
        alias: "e",
        describe: "环境",
      });
      yargs.positional("company", {
        alias: "c",
        describe: "企业",
      });
    },
    ({ env,company }) => {
      setBranch(env,company)
    }
  )
  .help();

yargs.argv;
