import { beforeEach, afterEach } from 'mocha'
import nock from 'nock'

import env from '../src/env'

const { IDENTITY_SERVICE_HOST, IDENTITY_SERVICE_PORT } = env

export const setupIdentityMock = function () {
  beforeEach(async function () {
    console.log(`http://${IDENTITY_SERVICE_HOST}:${IDENTITY_SERVICE_PORT}/v1`)
    nock(`http://${IDENTITY_SERVICE_HOST}:${IDENTITY_SERVICE_PORT}/v1`).persist().get('/self').reply(200, {
      alias: 'valid-self',
      address: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
    })
  })

  afterEach(async function () {
    nock.cleanAll()
  })
}
