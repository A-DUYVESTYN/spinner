let delay = 100
let spinner = ['|','/', '-','\\','|','/', '-','\\','|']

for (const item of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${item}   `);
  }, delay);
  delay += 200
}
// go to new line after spinner code executes
setTimeout(() => {
  process.stdout.write(`\n`);
}, delay);