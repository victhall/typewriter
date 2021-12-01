const spinner = "hello there from lighthouse labs \n";

let delay = 0;
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(char)
  }, delay += 50)
}