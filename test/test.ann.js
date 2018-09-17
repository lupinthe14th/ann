/* eslint-env mocha */
import chai from 'chai'
import { AnnounceBase, SmxMaintenance } from '../lib/ann'

const assert = chai.assert

describe('Announce Type', () => {
  describe('Base', () => {
    const tests = [
      { date: '20130102', expected: '2012-12-02' },
      { date: '20130202', expected: '2013-01-02' },
      { date: '20130331', expected: '2013-02-28' }
    ]

    tests.forEach(test => {
      it(`Customer announce day is ${test.expected}`, () => {
        const ann = new AnnounceBase(test.date)
        const res = ann.customerAnnounceDay
        assert.equal(res, test.expected)
      })
    })
  })
  describe('SMX Maintenance', () => {
    const tests = [
      { date: '20130102', expected: '2012-11-02' },
      { date: '20130202', expected: '2012-12-02' },
      { date: '20130331', expected: '2013-01-31' }
    ]

    tests.forEach(test => {
      it(`Customer announce day is ${test.expected}`, () => {
        const ann = new SmxMaintenance(test.date)
        const res = ann.customerAnnounceDay
        assert.equal(res, test.expected)
      })
    })
  })
})

describe('throw', () => {
  let ann
  let invalidDate

  before(() => {
    invalidDate = '20130132'
  })

  beforeEach(() => {
    ann = new AnnounceBase()
  })

  it(`Maintenance day is Invalid: ${invalidDate}`, () => {
    assert.throws(
      () => {
        ann.maintenanceDay = invalidDate
      },
      Error,
      'Invalid date'
    )
  })
})
