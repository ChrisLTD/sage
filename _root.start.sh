#!/bin/bash

THEMEDIR="themeDirHere"

cd wp-content/themes/$THEMEDIR
nvm use
yarn audit --level critical
yarn run start
