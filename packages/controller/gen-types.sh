#! /bin/bash
yarn apollo-codegen introspect-schema http://localhost:4000 --output schema.json
yarn apollo-codegen generate src/**/*.tsx --schema schema.json --target typescript --output src/operation-result-types.ts