'use strict'

import 'moment/locale/ja'
import moment from 'moment'

class AnnounceBase {
  constructor (maintenanceDay) {
    this.maintenanceDay = maintenanceDay
    this.months = 1
    this.format = 'YYYY-MM-DD'
  }

  get maintenanceDay () {
    return this._maintenanceDay
  }
  set maintenanceDay (value) {
    if (!moment(value).isValid()) {
      throw new Error('Invalid date')
    }
    this._maintenanceDay = value
  }

  get customerAnnounceDay () {
    return moment(this.maintenanceDay)
      .subtract(this.months, 'months')
      .format(this.format)
  }
}

class SmxMaintenance extends AnnounceBase {
  constructor (maintenanceDay) {
    super(maintenanceDay)
    this.months = 2
    this.format = 'YYYY-MM-DD'
  }
}

export { AnnounceBase, SmxMaintenance }
