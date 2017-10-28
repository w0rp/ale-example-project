#!/bin/bash -eu

yarn
python3.6 -m venv ve
ve/bin/pip install -r requirements.txt
