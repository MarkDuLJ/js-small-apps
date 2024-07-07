#!/bin/bash

filename='example.txt'
while read line; do
    echo "Your line:  $line"
done < "$filename"