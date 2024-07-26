//Write a function that will take a short line of text, and write it to the console log within a box.

/*
will log on the console:
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
+--+
|  |
|  |
|  |
+--+
You may assume that the output will always fit in your browser window.
*/

function logInBox(string) {
  const PADDING = 2;
  let length = string.length + PADDING;
  let horizontalBorder = `+${'-'.repeat(length)}+`;
  let emptyLine = `|${' '.repeat(length)}|`;

  console.log(horizontalBorder);
  console.log(emptyLine);
  console.log(`| ${string} |`);
  console.log(emptyLine);
  console.log(horizontalBorder);
}

logInBox('To boldly go where no one has gone before.');

logInBox('');
