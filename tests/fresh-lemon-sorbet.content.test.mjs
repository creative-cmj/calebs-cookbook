import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const recipePath=new URL('../recipes/fresh-lemon-sorbet/index.html',import.meta.url);
const [recipe, app]=await Promise.all([readFile(recipePath,'utf8'),readFile(new URL('../app.js',import.meta.url),'utf8')]);
for (const text of ['Fresh Lemon Sorbet','1½ cups fresh lemon juice','1 cup sugar','1 cup water','lemon zest','1 hour','45 minutes','localStorage']) assert(recipe.includes(text),`missing recipe requirement: ${text}`);
assert(recipe.includes('data-timer'), 'recipe needs persistent cooking timers');
assert(recipe.includes('data-check'), 'recipe needs a saved shopping checklist');
assert(app.includes("id:'fresh-lemon-sorbet'"), 'main cookbook listing must include lemon sorbet');
console.log('fresh lemon sorbet recipe assertions: PASS');
