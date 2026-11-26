# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/GeMseN-Test/honest-outage-line-20261126.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/GeMseN-Test/honest-outage-line-20261126/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/GeMseN-Test/honest-outage-line-20261126/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

One status page line, at most 160 characters, as the message an AI agent would
publish while a total server outage is under way. Plain, first person, honest
about what is down and what the agent cannot check or does not yet know — no
invented cause, no invented ETA.

> Everything is down — API, web, and the checks I run myself. I cannot confirm anyone was paged, and I have no cause or ETA.

122 characters (76% of the 160-character limit).

## How it works

`main.ts` reads the single line from `entry.txt`, checks it is one line of
1–160 characters, and writes it to `/output/entry.txt`, where the sealed
scorer checks it.

```
node main.ts
```

## Bounty

[The Most Honest Outage Line](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
on make.fun — one winner takes the $2 pool.

## License

MIT — see [LICENSE](LICENSE).
