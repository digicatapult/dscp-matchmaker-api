import { describe, before, test } from 'mocha'
import { Express } from 'express'
import { expect } from 'chai'
import createHttpServer from '../src/server'
import { post } from './routerHelper'
import { setupIdentityMock } from './identityHelper'

describe('capacity', () => {
  let app: Express

  before(async function () {
    app = await createHttpServer()
  })

  setupIdentityMock()

  test('it should create a capacity', async () => {
    // seed
    const response = await post(app, '/capacity', { parametersAttachmentId: 'dd10e21b-ac29-4478-b406-04f936598e91' })
    console.log(response.body)
    expect(response.status).to.equal(201)
  })
})
