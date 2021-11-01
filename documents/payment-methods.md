## Payment Methods Generator Guide

A guide to properly generate a new JSON file for updated payment methods.

### Steps

- The excel sheet must be converted into a csv file and stored under `scripts/data` directory as `payment-methods.csv`.
- To  generate the JSON, Run command `npm run build:payment_methods`
- The output JSON will live in `src/pages/payment-methods` directory under `payment-methods.json` name. 

- The logos are stored as svg files under 'src/images/svg/payment-methods' as `payment-{key}`.svg. 

- The PDF files are stored in the directory 'static/payment-methods/index.js' as `{key}-payment-method.pdf`.