#bin/bash

#remove any existing logfile
rm ~/.forever/node;
#stop any running forever processes
forever stopall;
#start the process with a log file, run node against dotenv/config server.js
forever start -l node -r dotenv/config server.js
