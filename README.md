# bun-signal-aborted-repro

```bash
# Clone the repro repo
git clone https://github.com/nikelborm/bun-signal-aborted-repro.git

cd bun-signal-aborted-repro

# Install dependencies
bun install

# Works fine as expected
bun run index.ts
# Outputs:
# 1 signal.aborted:  false
# 2 signal.aborted:  true

./node_modules/.bin/tsc
# Fails with:
# index.ts:3:42 - error TS2339: Property 'aborted' does not exist on type 'AbortSignal'.
#
# 3 console.log('1 signal.aborted: ', signal.aborted);
#                                            ~~~~~~~
#
# index.ts:6:44 - error TS2339: Property 'aborted' does not exist on type 'AbortSignal'.
#
# 6   console.log('2 signal.aborted: ', signal.aborted);
#                                              ~~~~~~~
#
#
# Found 2 errors in the same file, starting at: index.ts:3
```
