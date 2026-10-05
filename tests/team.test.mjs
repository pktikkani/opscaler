import { test } from 'node:test'
import assert from 'node:assert/strict'

import { founders, advisors } from '../src/lib/team.ts'

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
