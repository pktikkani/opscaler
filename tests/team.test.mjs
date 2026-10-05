import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

import { founders, advisors } from '../src/lib/team.ts'

const readSrc = (rel) => readFileSync(new URL(`../src/${rel}`, import.meta.url), 'utf8')
const karthik = founders.find((p) => p.name === 'Karthik Sethupathy')

test('Karthik is the sole founder', () => {
  assert.deepEqual(founders.map((p) => [p.name, p.role]), [['Karthik Sethupathy', 'Founder']])
})

test('Pavan is listed as technical advisor, not founder', () => {
  assert.deepEqual(advisors.map((p) => [p.name, p.role]), [['Pavan Tikkani', 'Technical Advisor']])
})

test('no bio claims a founder role for an advisor', () => {
  for (const person of advisors) {
    assert.doesNotMatch(person.bio, /founder/i)
  }
})

// Karthik's real background (ksethupathy.nubewired.com) is technical operations
// leadership, not hands-on AI building — copy must not claim otherwise.
test("Karthik's bio does not cast him as a hands-on AI builder", () => {
  assert.doesNotMatch(karthik.bio, /\bbuilder\b|hands-on|model serving|agent loop/i)
})

test("Karthik's bio reflects his technical operations leadership", () => {
  assert.match(karthik.bio, /Technical Operations/)
  assert.match(karthik.bio, /SRE/)
})

test('about page heads the team column with an operator, not a builder', () => {
  const about = readSrc('app/about/page.tsx')
  assert.ok(!about.includes('Founded by a builder'), 'about page still says "Founded by a builder"')
  assert.ok(about.includes('Founded by an operator'), 'about page lacks "Founded by an operator"')
})

test('inference log does not describe Karthik as hands-on', () => {
  const log = readSrc('app/inference-log/page.tsx').replace(/\s+/g, ' ')
  assert.ok(!log.includes('Karthik Sethupathy founded it and stays hands-on'), 'inference log still says Karthik "stays hands-on"')
})
