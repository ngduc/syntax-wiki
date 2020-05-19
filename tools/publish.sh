cd ./dist
echo '{ "version": 2, "alias": ["www.syntax.codes", "syntax.codes", "www.syntax.wiki", "syntax.wiki"] }' > now.json
now
now alias
cd ..
