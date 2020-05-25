cd ./dist
echo '{ "version": 2, "alias": ["www.syntax.codes", "syntax.codes", "www.syntax.wiki", "syntax.wiki"] }' > now.json
npx now
npx now alias
cd ..
