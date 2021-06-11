git checkout -b deploy &&
echo "=======> git checkout -b deploy"
git checkout -b deploy &&
	echo "=======> yarn build-storybook"
yarn build-storybook &&
	echo "=======> add storybook-static"
git add storybook-static &&
	echo "=======> git commit"
git commit -m "Initial storybook-static subtree commit" &&
	echo "=======> git remote set-url origin git@github.com:goldEli/lwi-mobile-ui.git"
git remote set-url origin git@github.com:goldEli/lwi-mobile-ui.git &&
	echo "=======> subtree push"
# git subtree push --prefix storybook-static origin gh-pages &&
git push origin `git subtree split --prefix storybook-static develop`:gh-pages --force &&
	echo "=======> checkout develop"
git checkout develop &&
	echo "=======> branch -d deploy"
git branch -D deploy &&
	echo "=======> remote set-url origin git@gitee.com:liweijia/lwj-mobile-ui.git"
git remote set-url origin git@gitee.com:liweijia/lwj-mobile-ui.git