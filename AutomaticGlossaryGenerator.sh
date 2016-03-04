#!/bin/bash
#rm Glossario.pdf;

perl glossario.pl && pdflatex -interaction=nonstopmode Glossario.tex && makeglossaries Glossario && pdflatex -interaction=nonstopmode Glossario.tex && pdflatex -interaction=nonstopmode Glossario.tex && rm Glossario.aux && rm Glossario.glo && rm Glossario.glg && rm Glossario.gls && rm Glossario.ist && rm Glossario.log && rm Glossario.out;
