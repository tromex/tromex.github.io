#!/bin/bash
set -e

wkhtmltopdf --footer-right "Page [page] of [toPage]" --footer-font-size 10 file:///home/tromex/dev/cv/index.html#printable pdf/cv.pdf
