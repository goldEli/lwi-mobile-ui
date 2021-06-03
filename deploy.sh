git checkout -b deploy &&
yarn build-storybook &&
git add storybook-static && 
git commit -m "Initial storybook-static subtree commit" &&
git remote set-url origin git@github.com:goldEli/lwi-mobile-ui.git &&
git subtree push --prefix storybook-static origin gh-pages &&
git checkout develop &&
git branch -d deploy &&
git remote set-url origin git@gitee.com:liweijia/lwj-mobile-ui.git