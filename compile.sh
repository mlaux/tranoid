#!/bin/sh
date "+%Y%m%d" > today.txt
../nesfab/nesfab tranoid.cfg
rm today.txt
